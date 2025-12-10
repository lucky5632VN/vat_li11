"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"
import { useSpringPhysics } from "@/hooks/use-spring-physics"
import { useCanvasScale } from "@/hooks/use-canvas-scale"
import { drawSpring, drawArrow } from "@/lib/canvas-utils"
import HandTracker, { HandData } from "../hand-gesture/hand-tracker"
import { Play, Pause, RotateCcw, Hand, Camera } from "lucide-react"

export default function HandSpringOscillator() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    // Physics System
    const sys = useSpringPhysics({ mass: 0.5, k: 50, amplitude: 50, phase: 0 })
    const animationRef = useRef<number>()

    // Hand State
    const [handData, setHandData] = useState<HandData | null>(null)
    const [isHandDragging, setIsHandDragging] = useState(false)
    const [dragOffset, setDragOffset] = useState(0)

    // Canvas Scale
    const { width, height, pixelRatio } = useCanvasScale(containerRef)

    // Hand Update Handler
    const handleHandUpdate = useCallback((data: HandData | null) => {
        setHandData(data)
    }, [])

    // Animation Loop
    const loop = useCallback(() => {
        if (sys.isPlaying && !isHandDragging) {
            sys.step(0.016)
        }
    }, [sys, isHandDragging])

    // Ref-based loop for stability
    const renderRef = useRef(loop)
    useEffect(() => { renderRef.current = loop }, [loop])

    useEffect(() => {
        const animate = () => {
            renderRef.current()
            animationRef.current = requestAnimationFrame(animate)
        }
        animationRef.current = requestAnimationFrame(animate)
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
        }
    }, [])

    // Interaction Logic (Effect based on Hand Data)
    const { setIsPlaying, setParams, reset, calculateState, timeRef } = sys

    useEffect(() => {
        if (!handData || !width || !height) return

        // Map Cursor (0-1) to Canvas (px)
        const cursorX = handData.cursor.x * width
        const cursorY = handData.cursor.y * height

        // Calculate Mass Position
        const centerY = height / 2
        const centerX = width / 2

        // Check hit test
        // Use instantaneous position from physics
        const currentPhysicsX = calculateState(timeRef.current).x

        // Mass visual center
        const massVisualY = centerY + (isHandDragging ? dragOffset : currentPhysicsX)
        const massVisualX = centerX

        const dist = Math.sqrt(Math.pow(cursorX - massVisualX, 2) + Math.pow(cursorY - massVisualY, 2))
        const isHover = dist < 60 // 60px radius forgiveness

        // Avoid state updates if nothing changed
        if (handData.gesture === "PINCH") {
            if (isHover && !isHandDragging) {
                // Start Drag
                setIsHandDragging(true)
                setIsPlaying(false)
            }

            if (isHandDragging) {
                // Continue Drag
                let newDisplacement = cursorY - centerY
                const maxAmp = height / 2 - 50
                if (Math.abs(newDisplacement) > maxAmp) {
                    newDisplacement = Math.sign(newDisplacement) * maxAmp
                }
                if (Math.abs(newDisplacement - dragOffset) > 0.5) {
                    setDragOffset(newDisplacement)
                }
            }
        } else {
            // Gesture OPEN
            if (isHandDragging) {
                // Release
                setIsHandDragging(false)
                setParams(p => ({ ...p, amplitude: Math.abs(dragOffset), phase: dragOffset >= 0 ? 0 : Math.PI }))
                reset()
                setIsPlaying(true)
            }
        }

    }, [handData, width, height, isHandDragging, dragOffset, setIsPlaying, setParams, reset, calculateState, timeRef])

    // Drawing
    const draw = useCallback((ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, width, height)

        const centerX = width / 2
        const centerY = height / 2
        const ceilingY = 50

        // Get current state
        const state = sys.calculateState(sys.timeRef.current)
        const displacement = isHandDragging ? dragOffset : state.x
        const massY = centerY + displacement

        // Draw Ceiling
        ctx.fillStyle = "#64748b"; ctx.fillRect(centerX - 50, ceilingY - 10, 100, 10)

        // Draw Spring
        ctx.strokeStyle = "#cbd5e1"
        drawSpring(ctx, centerX, ceilingY, centerX, massY - 30, 15, 20)

        // Draw Mass
        ctx.fillStyle = isHandDragging ? "#f97316" : "#3b82f6"
        ctx.beginPath()
        ctx.arc(centerX, massY, 30, 0, Math.PI * 2)
        ctx.fill()
        ctx.strokeStyle = "#fff"
        ctx.lineWidth = 2
        ctx.stroke()

        // Equilibrium Line
        ctx.strokeStyle = "rgba(74, 222, 128, 0.5)"
        ctx.setLineDash([5, 5])
        ctx.beginPath(); ctx.moveTo(0, centerY); ctx.lineTo(width, centerY); ctx.stroke(); ctx.setLineDash([])

        // Real-time Data Overlay (On Canvas for Performance)
        const panelX = 20
        const panelY = height - 140
        const panelW = 200
        const panelH = 120

        ctx.fillStyle = "rgba(15, 23, 42, 0.8)"; ctx.fillRect(panelX, panelY, panelW, panelH)
        ctx.strokeStyle = "rgba(56, 189, 248, 0.3)"; ctx.strokeRect(panelX, panelY, panelW, panelH)

        ctx.font = "12px monospace"
        ctx.textBaseline = "top"

        const lineHeight = 18
        let textY = panelY + 10
        const textX = panelX + 10

        ctx.fillStyle = "#fbbf24"; ctx.fillText(`x: ${displacement.toFixed(2)} cm`, textX, textY); textY += lineHeight
        ctx.fillStyle = "#22c55e"; ctx.fillText(`v: ${state.v.toFixed(2)} cm/s`, textX, textY); textY += lineHeight
        ctx.fillStyle = "#ef4444"; ctx.fillText(`a: ${state.a.toFixed(2)} cm/s²`, textX, textY); textY += lineHeight
        // Energy
        textY += 5
        ctx.fillStyle = "#eab308"; ctx.fillText(`Wđ: ${state.wd.toFixed(4)} J`, textX, textY); textY += lineHeight
        ctx.fillStyle = "#3b82f6"; ctx.fillText(`Wt: ${state.wt.toFixed(4)} J`, textX, textY); textY += lineHeight
        ctx.fillStyle = "white"; ctx.fillText(`Cơ: ${state.wTotal.toFixed(4)} J`, textX, textY)


        // Info
        ctx.fillStyle = "white"
        ctx.font = "14px monospace"
        ctx.fillText(`Biên độ: ${sys.params.amplitude.toFixed(1)} cm`, 20, 30)
        if (isHandDragging) {
            ctx.fillStyle = "#f97316"
            ctx.fillText(`Kéo thả để thả vật!`, 20, 50)
        }

        // Draw Hand Cursor
        if (handData) {
            const cursorX = handData.cursor.x * width
            const cursorY = handData.cursor.y * height

            ctx.beginPath()
            ctx.arc(cursorX, cursorY, 10, 0, Math.PI * 2)
            ctx.fillStyle = handData.gesture === "PINCH" ? "rgba(249, 115, 22, 0.8)" : "rgba(34, 197, 94, 0.8)"
            ctx.fill()
            ctx.strokeStyle = "white"
            ctx.lineWidth = 2
            ctx.stroke()

            // Draw skeleton for fun (thumb to index)
            const thumb = handData.landmarks[4]
            const index = handData.landmarks[8]
            // Mapping needed purely for visual? handData.landmarks are 0-1 (but x is not mirrored in normalized raw, cursor is)
            // Let's stick to cursor.
        }

    }, [width, height, sys.timeRef.current, isHandDragging, dragOffset, handData, sys.params])

    // Canvas Render Loop (separate from physics loop to sync with React render if needed or independent)
    // Actually we should put draw inside a requestAnimationFrame loop that matches the physics loop frequency or VSync.
    // We already have `loop` which updates physics.
    // Let's rely on a separate draw loop or the same one.

    // Resize Canvas
    useEffect(() => {
        if (canvasRef.current && width > 0 && height > 0) {
            canvasRef.current.width = width * pixelRatio
            canvasRef.current.height = height * pixelRatio
        }
    }, [width, height, pixelRatio])

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

            {/* LEFT: Hand Tracker & Controls */}
            <div className="w-full md:w-[340px] flex flex-col gap-4">
                <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
                    <h3 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                        <Camera size={20} /> Camera Control
                    </h3>
                    <HandTracker onHandUpdate={handleHandUpdate} />
                    <p className="text-xs text-slate-400 mt-2">
                        Đưa tay lên camera. <br />
                        👉 <span className="text-white font-bold">Chụm ngón cái và trỏ</span> để nắm vật.<br />
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
                <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
                    <h3 className="text-cyan-400 font-bold mb-3">Thông số hệ thống</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="bg-slate-800 p-2 rounded">
                            <div className="text-slate-400 text-xs">Khối lượng</div>
                            <div className="text-white font-mono">{sys.params.mass} kg</div>
                        </div>
                        <div className="bg-slate-800 p-2 rounded">
                            <div className="text-slate-400 text-xs">Độ cứng</div>
                            <div className="text-white font-mono">{sys.params.k} N/m</div>
                        </div>
                        <div className="bg-slate-800 p-2 rounded">
                            <div className="text-slate-400 text-xs">Chu kỳ (T)</div>
                            <div className="text-white font-mono">{sys.derived.period.toFixed(2)} s</div>
                        </div>
                        <div className="bg-slate-800 p-2 rounded">
                            <div className="text-slate-400 text-xs">Tần số (f)</div>
                            <div className="text-white font-mono">{sys.derived.frequency.toFixed(2)} Hz</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT: Experiment View */}
            <div
                ref={containerRef}
                className="flex-1 bg-[#1e293b] rounded-xl relative overflow-hidden border border-slate-700 shadow-inner"
            >
                <canvas
                    ref={canvasRef}
                    className="w-full h-full block"
                    style={{ width: '100%', height: '100%' }}
                />
                {/* Helper Overlay */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur px-3 py-2 rounded border border-white/10 text-right pointer-events-none">
                    <div className="text-2xl font-bold text-white font-mono">{handData?.gesture || "NO HAND"}</div>
                    <div className="text-xs text-slate-300">Gesture Status</div>
                </div>
            </div>

        </div>
    )
}
