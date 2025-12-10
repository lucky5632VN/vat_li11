"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"
import { useSimplePendulumPhysics } from "@/hooks/use-simple-pendulum-physics"
import { useCanvasScale } from "@/hooks/use-canvas-scale"
import HandTracker, { HandData } from "../hand-gesture/hand-tracker"
import { Play, Pause, RotateCcw, Camera } from "lucide-react"

export default function HandSimplePendulum() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    // Physics
    const sys = useSimplePendulumPhysics({
        length: 120,
        gravity: 9.8,
        initialAngle: 30,
        mass: 1.0
    })

    const { setIsPlaying, setParams, reset, calculateState, timeRef } = sys
    const animationRef = useRef<number>()

    const [dragLength, setDragLength] = useState(120) // cm

    // Hand State
    const [handData, setHandData] = useState<HandData | null>(null)
    const [isHandDragging, setIsHandDragging] = useState(false)
    const [dragAngle, setDragAngle] = useState(0) // radians

    // Canvas Scale
    const { width, height, pixelRatio } = useCanvasScale(containerRef)

    // Hand Update Handler
    const handleHandUpdate = useCallback((data: HandData | null) => {
        setHandData(data)
    }, [])

    // Physics Loop
    const loop = useCallback(() => {
        if (sys.isPlaying && !isHandDragging) {
            sys.step(0.016)
        }
    }, [sys, isHandDragging])

    const renderRef = useRef(loop)
    useEffect(() => { renderRef.current = loop }, [loop])

    useEffect(() => {
        const animate = () => {
            renderRef.current()
            animationRef.current = requestAnimationFrame(animate)
        }
        animationRef.current = requestAnimationFrame(animate)
        return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current) }
    }, [])

    // Interaction Logic
    useEffect(() => {
        if (!handData || !width || !height) return

        const cursorX = handData.cursor.x * width
        const cursorY = handData.cursor.y * height

        const pivotX = width / 2
        const pivotY = 50

        // Current Bob Position (Visual)
        // If system is playing, use system state. If dragging, use drag state.
        // We need system state for initial hit test.
        const state = sys.calculateState(sys.time)
        const currentParams = sys.params // Use params directly from system
        const currentAngle = isHandDragging ? dragAngle : state.theta
        const currentLength = isHandDragging ? dragLength : currentParams.length

        const bobX = pivotX + currentLength * Math.sin(currentAngle)
        const bobY = pivotY + currentLength * Math.cos(currentAngle)

        const dist = Math.sqrt(Math.pow(cursorX - bobX, 2) + Math.pow(cursorY - bobY, 2))
        const isHover = dist < 60

        if (handData.gesture === "PINCH") {
            if (isHover && !isHandDragging) {
                // Start Drag
                setIsHandDragging(true)
                sys.setIsPlaying(false)
                // Initialize drag state from current physics state
                setDragAngle(state.theta)
                setDragLength(currentParams.length)
            }

            if (isHandDragging) {
                // Dragging Logic
                const dx = cursorX - pivotX
                const dy = cursorY - pivotY

                // 1. Calculate Angle
                let newAngle = Math.atan2(dx, dy)
                const MAX_ANGLE = 60 * Math.PI / 180
                newAngle = Math.min(Math.max(newAngle, -MAX_ANGLE), MAX_ANGLE)

                // 2. Calculate Length
                let newLength = Math.sqrt(dx * dx + dy * dy)
                // Limit Length (e.g., 50cm to 250cm)
                newLength = Math.min(Math.max(newLength, 50), 250)

                if (Math.abs(newAngle - dragAngle) > 0.01) setDragAngle(newAngle)
                if (Math.abs(newLength - dragLength) > 1) setDragLength(newLength)
            }
        } else {
            // OPEN (Release)
            if (isHandDragging) {
                setIsHandDragging(false)
                // Release at this angle and length
                // Use signed angle directly
                const signedAngleDeg = dragAngle * 180 / Math.PI

                sys.setParams(p => ({
                    ...p,
                    initialAngle: signedAngleDeg, // Signed!
                    length: dragLength
                }))
                sys.reset()
                sys.setIsPlaying(true)
            }
        }

    }, [handData, width, height, isHandDragging, dragAngle, dragLength, sys])

    // Drawing
    const draw = useCallback((ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, width, height)

        const pivotX = width / 2
        const pivotY = 50

        const state = sys.calculateState(sys.time)
        const angle = isHandDragging ? dragAngle : state.theta
        const length = isHandDragging ? dragLength : sys.params.length

        const bobX = pivotX + length * Math.sin(angle)
        const bobY = pivotY + length * Math.cos(angle)

        // Support
        ctx.fillStyle = "#64748b"; ctx.fillRect(pivotX - 40, pivotY - 10, 80, 10)

        // Dashed Vertical
        ctx.strokeStyle = "#475569"; ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.moveTo(pivotX, pivotY); ctx.lineTo(pivotX, pivotY + 250); ctx.stroke(); ctx.setLineDash([])

        // String
        ctx.strokeStyle = "#cbd5e1"; ctx.lineWidth = 2
        ctx.beginPath(); ctx.moveTo(pivotX, pivotY); ctx.lineTo(bobX, bobY); ctx.stroke()

        // Bob
        ctx.fillStyle = isHandDragging ? "#f97316" : "#fb923c"
        ctx.beginPath(); ctx.arc(bobX, bobY, 20, 0, Math.PI * 2); ctx.fill()
        ctx.strokeStyle = "white"; ctx.lineWidth = 2; ctx.stroke()

        // Angle Arc visualization
        if (Math.abs(angle) > 0.1) {
            ctx.beginPath()
            ctx.strokeStyle = "rgba(250, 204, 21, 0.5)"
            ctx.lineWidth = 1
            // Draw arc from vertical to string
            // Start angle: PI/2 (Standard canvas 0 is Right). No.
            // Canvas arc 0 is right (3 o'clock). 90 is down (6 o'clock).
            // Vertical is 90 deg = PI/2.
            // Bob angle is PI/2 - angle? Or PI/2 + angle (if dx positive).
            // atan2(dx, dy) returns angle from Y axis.
            // Correct draw arc:
            const startA = Math.PI / 2
            const endA = Math.PI / 2 - angle // wait, Canvas Y is down.
            // If angle is positive (right), bob is at right.
            // x = sin(a), y = cos(a).
            // vector angle is atan2(y, x). 
            // We can just draw line, but for arc:
            ctx.arc(pivotX, pivotY, 40, Math.PI / 2, Math.PI / 2 - angle, angle > 0)
            // Angle direction is tricky. simpler to just ignore arc if confusing or debug later.
            // Let's print Angle text instead.
        }

        // Stats Panel
        const panelX = 20
        const panelY = height - 160
        const panelW = 200
        const panelH = 140

        ctx.fillStyle = "rgba(15, 23, 42, 0.8)"; ctx.fillRect(panelX, panelY, panelW, panelH)
        ctx.strokeStyle = "rgba(56, 189, 248, 0.3)"; ctx.strokeRect(panelX, panelY, panelW, panelH)

        ctx.font = "12px monospace"; ctx.textBaseline = "top"; ctx.textAlign = "left"
        let tY = panelY + 10; const tX = panelX + 10; const gap = 18

        ctx.fillStyle = "#e2e8f0"; ctx.fillText(`Góc α: ${(angle * 180 / Math.PI).toFixed(1)}°`, tX, tY); tY += gap
        ctx.fillStyle = "#22d3ee"; ctx.fillText(`Chu kỳ: ${sys.derived.period.toFixed(2)} s`, tX, tY); tY += gap
        ctx.fillStyle = "#4ade80"; ctx.fillText(`Vận tốc: ${state.v.toFixed(1)} cm/s`, tX, tY); tY += gap
        ctx.fillStyle = "#ef4444"; ctx.fillText(`Gia tốc: ${state.a.toFixed(1)} cm/s²`, tX, tY); tY += gap + 5
        ctx.fillStyle = "#eab308"; ctx.fillText(`Wđ: ${state.wd.toFixed(3)} J`, tX, tY); tY += gap
        ctx.fillStyle = "#3b82f6"; ctx.fillText(`Wt: ${state.wt.toFixed(3)} J`, tX, tY); tY += gap
        ctx.fillStyle = "white"; ctx.fillText(`Cơ năng: ${state.wTotal.toFixed(3)} J`, tX, tY)

        if (isHandDragging) {
            ctx.fillStyle = "#f97316"
            ctx.fillText("KÉO THẢ ĐỂ BẮT ĐẦU", pivotX - 60, pivotY + 280)
        }

        // Hand Cursor
        if (handData) {
            const cx = handData.cursor.x * width
            const cy = handData.cursor.y * height
            ctx.beginPath(); ctx.arc(cx, cy, 10, 0, Math.PI * 2);
            ctx.fillStyle = handData.gesture === "PINCH" ? "#f97316" : "#22c55e"; ctx.fill()
            ctx.strokeStyle = "white"; ctx.stroke()
        }

    }, [width, height, sys.params, sys.derived, timeRef.current, isHandDragging, dragAngle, handData])

    // Resize
    useEffect(() => {
        if (canvasRef.current && width > 0 && height > 0) {
            canvasRef.current.width = width * pixelRatio
            canvasRef.current.height = height * pixelRatio
        }
    }, [width, height, pixelRatio])

    // Render loop
    useEffect(() => {
        if (!canvasRef.current || width === 0) return
        const ctx = canvasRef.current.getContext("2d")
        if (!ctx) return
        const render = () => {
            ctx.save()
            ctx.scale(pixelRatio, pixelRatio)
            draw(ctx)
            ctx.restore()
            requestAnimationFrame(render)
        }
        const id = requestAnimationFrame(render)
        return () => cancelAnimationFrame(id)
    }, [draw, width, height, pixelRatio])

    return (
        <div className="flex flex-col md:flex-row gap-4 h-full">
            {/* Control Sidebar */}
            <div className="w-full md:w-[340px] flex flex-col gap-4">
                <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
                    <h3 className="text-cyan-400 font-bold mb-3 flex items-center gap-2"><Camera size={20} /> Camera Control</h3>
                    <HandTracker onHandUpdate={handleHandUpdate} />
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        Đưa tay lên camera. <br />
                        👉 <span className="text-white font-bold">Chụm ngón cái và trỏ</span> để nắm quả nặng.<br />
                        👉 <span className="text-white font-bold">Di chuyển</span> để thay đổi góc thả.<br />
                        👉 <span className="text-white font-bold">Mở tay</span> để thả vật.
                    </p>
                </div>
                <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 flex gap-2 justify-center">
                    <button onClick={() => sys.setIsPlaying(!sys.isPlaying)} className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 text-white">
                        {sys.isPlaying ? <Pause /> : <Play />}
                    </button>
                    <button onClick={() => sys.reset()} className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 text-white">
                        <RotateCcw />
                    </button>
                </div>
                <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 text-xs text-slate-400">
                    <p>Chiều dài dây: {sys.params.length} cm</p>
                    <input type="range" min="50" max="200" value={sys.params.length} onChange={(e) => sys.setParams(p => ({ ...p, length: Number(e.target.value) }))} className="w-full mt-2 accent-cyan-500 h-1 bg-slate-700 appearance-none rounded" />
                </div>
            </div>

            {/* Canvas */}
            <div ref={containerRef} className="flex-1 bg-[#1e293b] rounded-xl relative overflow-hidden border border-slate-700 shadow-inner">
                <canvas ref={canvasRef} className="w-full h-full block" />
            </div>
        </div>
    )
}
