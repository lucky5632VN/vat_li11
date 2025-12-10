"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { useCanvasScale } from "@/hooks/use-canvas-scale"
import { drawSpring, drawArrow } from "@/lib/canvas-utils"
import { SpringParams, PhysicsState } from "@/hooks/use-spring-physics"

interface OscillatorViewProps {
    sysId: string
    params: SpringParams
    state: PhysicsState
    derived: {
        omega: number
        period: number
        frequency: number
        vmax: number
        amax: number
        deltaL0: number
    }
    layout: "horizontal" | "vertical"
    onParameterChange: (newParams: Partial<SpringParams>) => void
    onInteractionStart: () => void
    onInteractionEnd: () => void
    label?: string
    colorTheme?: string
}

export default function OscillatorView({
    sysId,
    params,
    state,
    derived,
    layout,
    onParameterChange,
    onInteractionStart,
    onInteractionEnd,
    label,
    colorTheme = "blue"
}: OscillatorViewProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const [isDragging, setIsDragging] = useState(false)
    const [localTime, setLocalTime] = useState(0)

    // Responsive Hooks
    const { width, height, pixelRatio } = useCanvasScale(containerRef)

    // Interaction Check
    const checkInteraction = useCallback((clientX: number, clientY: number) => {
        if (!canvasRef.current || !width || !height) return null

        const rect = canvasRef.current.getBoundingClientRect()
        const x = clientX - rect.left
        const y = clientY - rect.top

        let massX, massY

        if (layout === "horizontal") {
            massX = (width / 2) + state.x
            massY = height / 2
        } else {
            massX = width / 2
            massY = (height / 2) + state.x
        }

        const dist = Math.sqrt(Math.pow(x - massX, 2) + Math.pow(y - massY, 2))
        if (dist < 40) return true
        return false
    }, [layout, width, height, state.x])

    const handlePointerDown = (e: React.PointerEvent) => {
        if (checkInteraction(e.clientX, e.clientY)) {
            setIsDragging(true)
            onInteractionStart() // Pause parent
            e.currentTarget.setPointerCapture(e.pointerId)
        }
    }

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging || !width || !height) return

        const rect = canvasRef.current!.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        let delta = 0
        if (layout === "horizontal") {
            const equilibriumX = width / 2
            delta = x - equilibriumX
        } else {
            const equilibriumY = height / 2
            delta = y - equilibriumY
        }

        const newAmp = Math.abs(delta)
        const newPhase = delta >= 0 ? 0 : Math.PI

        const maxAmp = layout === "horizontal" ? width / 2 - 20 : height / 2 - 20
        const clampedAmp = Math.min(Math.max(newAmp, 0), maxAmp)

        onParameterChange({ amplitude: clampedAmp, phase: newPhase })
    }

    const handlePointerUp = (e: React.PointerEvent) => {
        setIsDragging(false)
        onInteractionEnd()
        e.currentTarget.releasePointerCapture(e.pointerId)
    }

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D) => {
            const currWidth = width
            const currHeight = height

            ctx.clearRect(0, 0, currWidth, currHeight)

            // Grid
            ctx.strokeStyle = "#1e293b"
            ctx.lineWidth = 1
            ctx.beginPath()
            for (let i = 0; i < currWidth; i += 40) {
                ctx.moveTo(i, 0)
                ctx.lineTo(i, currHeight)
            }
            for (let i = 0; i < currHeight; i += 40) {
                ctx.moveTo(0, i)
                ctx.lineTo(currWidth, i)
            }
            ctx.stroke()

            const primaryColor = colorTheme === "blue" ? "#3b82f6" : "#f97316" // Orange for sys2
            const strokeColor = colorTheme === "blue" ? "#60a5fa" : "#fb923c"

            if (layout === "horizontal") {
                const centerY = currHeight / 2
                const wallX = 60
                const equilibriumX = currWidth / 2
                const massX = equilibriumX + state.x

                // Wall
                ctx.fillStyle = "#64748b"
                ctx.fillRect(wallX - 10, centerY - 50, 10, 100)
                ctx.strokeStyle = "#475569"
                ctx.beginPath()
                ctx.moveTo(wallX, centerY + 30)
                ctx.lineTo(currWidth, centerY + 30)
                ctx.stroke()

                // Limits -A, +A
                ctx.strokeStyle = "rgba(250, 204, 21, 0.3)"
                ctx.setLineDash([5, 5])
                ctx.beginPath()
                ctx.moveTo(equilibriumX - params.amplitude, centerY - 60)
                ctx.lineTo(equilibriumX - params.amplitude, centerY + 60)
                ctx.moveTo(equilibriumX + params.amplitude, centerY - 60)
                ctx.lineTo(equilibriumX + params.amplitude, centerY + 60)
                ctx.stroke()
                ctx.setLineDash([])

                ctx.fillStyle = "rgba(250, 204, 21, 0.7)"
                ctx.font = "10px monospace"
                ctx.textAlign = "left"
                ctx.fillText("-A", equilibriumX - params.amplitude - 15, centerY - 65)
                ctx.fillText("+A", equilibriumX + params.amplitude - 5, centerY - 65)

                // Equilibrium Line
                ctx.strokeStyle = "#4ade80"
                ctx.setLineDash([5, 5])
                ctx.beginPath()
                ctx.moveTo(equilibriumX, centerY - 70)
                ctx.lineTo(equilibriumX, centerY + 70)
                ctx.stroke()
                ctx.setLineDash([])
                ctx.fillStyle = "#4ade80"
                ctx.textAlign = "right"
                ctx.fillText("VTCB (O)", equilibriumX - 10, centerY - 75)

                // Draw Spring
                ctx.strokeStyle = "#cbd5e1"
                drawSpring(ctx, wallX, centerY, massX - 25, centerY, 15, 15)

                // Draw Mass
                ctx.fillStyle = isDragging ? strokeColor : primaryColor
                ctx.fillRect(massX - 25, centerY - 25, 50, 50)
                ctx.strokeStyle = strokeColor
                ctx.lineWidth = isDragging ? 3 : 1
                ctx.strokeRect(massX - 25, centerY - 25, 50, 50)

                // Vectors
                if (!isDragging) {
                    drawArrow(ctx, massX, centerY, state.v * 0.5, "#22c55e", "v")
                    drawArrow(ctx, massX, centerY + 35, state.force * 5, "#ef4444", "F_kv")
                }

            } else {
                // Vertical Layout
                const centerX = currWidth / 2
                const ceilingY = 40
                const equilibriumY = currHeight / 2

                const deltaL_px = derived.deltaL0 * 100 * 1.5
                const naturalY = equilibriumY - deltaL_px
                const massY = equilibriumY + state.x

                // Ceiling
                ctx.fillStyle = "#64748b"
                ctx.fillRect(centerX - 50, ceilingY - 10, 100, 10)

                // Natural Length Line
                ctx.strokeStyle = "#fbbf24"
                ctx.setLineDash([4, 4])
                ctx.beginPath()
                ctx.moveTo(centerX - 120, naturalY)
                ctx.lineTo(centerX + 120, naturalY)
                ctx.stroke()
                ctx.fillStyle = "#fbbf24"
                ctx.textAlign = "right"
                ctx.fillText("Lò xo không giãn (L0)", centerX - 130, naturalY + 4)

                // Equilibrium Line
                ctx.strokeStyle = "#4ade80"
                ctx.beginPath()
                ctx.moveTo(centerX - 120, equilibriumY)
                ctx.lineTo(centerX + 120, equilibriumY)
                ctx.stroke()
                ctx.fillStyle = "#4ade80"
                ctx.textAlign = "right"
                ctx.fillText("VTCB (O)", centerX - 130, equilibriumY + 4)
                ctx.setLineDash([])

                // Delta L
                if (deltaL_px > 10) {
                    const measureX = centerX + 100
                    ctx.strokeStyle = "#94a3b8"
                    ctx.beginPath()
                    ctx.moveTo(measureX, naturalY)
                    ctx.lineTo(measureX + 10, naturalY)
                    ctx.moveTo(measureX, equilibriumY)
                    ctx.lineTo(measureX + 10, equilibriumY)
                    ctx.moveTo(measureX + 5, naturalY)
                    ctx.lineTo(measureX + 5, equilibriumY)
                    ctx.stroke()

                    ctx.fillStyle = "#f8fafc"
                    ctx.textAlign = "left"
                    ctx.fillText(`Δl₀ = ${(derived.deltaL0 * 100).toFixed(1)} cm`, measureX + 15, naturalY + deltaL_px / 2)
                }

                // Limits
                ctx.strokeStyle = "rgba(250, 204, 21, 0.2)"
                ctx.setLineDash([2, 2])
                ctx.beginPath()
                ctx.moveTo(centerX - 60, equilibriumY - params.amplitude)
                ctx.lineTo(centerX + 60, equilibriumY - params.amplitude)
                ctx.moveTo(centerX - 60, equilibriumY + params.amplitude)
                ctx.lineTo(centerX + 60, equilibriumY + params.amplitude)
                ctx.stroke()
                ctx.setLineDash([])

                // Draw Spring
                ctx.strokeStyle = "#cbd5e1"
                drawSpring(ctx, centerX, ceilingY, centerX, massY - 25, 12, 15)

                // Draw Mass
                ctx.fillStyle = isDragging ? strokeColor : primaryColor
                ctx.beginPath()
                ctx.arc(centerX, massY, 25, 0, Math.PI * 2)
                ctx.fill()
                ctx.strokeStyle = strokeColor
                ctx.lineWidth = isDragging ? 3 : 1
                ctx.stroke()

                if (!isDragging) {
                    drawArrow(ctx, centerX + 30, massY, state.v * 0.5, "#22c55e", "v", "vertical")
                    drawArrow(ctx, centerX - 30, massY, state.force * 5, "#ef4444", "F", "vertical")
                }
            }

            // Info Box
            ctx.fillStyle = "rgba(15, 23, 42, 0.7)"
            ctx.fillRect(10, 10, 150, 70)
            ctx.strokeStyle = "rgba(56, 189, 248, 0.3)"
            ctx.strokeRect(10, 10, 150, 70)

            ctx.textAlign = "left"
            ctx.textBaseline = "alphabetic"

            ctx.fillStyle = "#4ade80"
            ctx.font = "13px monospace"
            ctx.fillText(`t = ${state.t.toFixed(2)} s`, 20, 30)
            ctx.fillStyle = "#38bdf8"
            ctx.fillText(`x = ${state.x.toFixed(1)} cm`, 20, 50)
            ctx.fillStyle = "#facc15"
            ctx.fillText(`v = ${state.v.toFixed(1)} cm/s`, 20, 70)

            if (isDragging) {
                ctx.fillStyle = "#ffffff"
                ctx.font = "12px sans-serif"
                ctx.fillText("✋ Đang kéo...", 20, 95)
            } else if (label) {
                ctx.fillStyle = primaryColor
                ctx.font = "bold 12px sans-serif"
                ctx.fillText(label, 20, 95)
            }

        },
        [layout, state, params, derived, width, height, isDragging, label, colorTheme]
    )

    useEffect(() => {
        // Only Redraw when state or props change
        if (canvasRef.current && width > 0 && height > 0) {
            const canvas = canvasRef.current
            if (canvas.width !== width * pixelRatio || canvas.height !== height * pixelRatio) {
                canvas.width = width * pixelRatio
                canvas.height = height * pixelRatio
            }

            const ctx = canvas.getContext("2d")
            if (ctx) {
                ctx.save()
                ctx.scale(pixelRatio, pixelRatio)
                draw(ctx)
                ctx.restore()
            }
        }
    }, [draw, width, height, pixelRatio])

    return (
        <div
            ref={containerRef}
            className="bg-[#16213e] rounded-xl overflow-hidden border border-cyan-900/50 shadow-lg relative w-full h-[300px] lg:h-[400px] touch-none"
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full block touch-none cursor-move"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
            />
        </div>
    )
}
