"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import ControlPanel from "../ui/control-panel"
import { Activity, Zap, TrendingUp, RotateCcw, SkipBack, Pause, Play, SkipForward, Ruler, Anchor } from "lucide-react"

// Force update check
export default function SimplePendulum() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const energyCanvasRef = useRef<HTMLCanvasElement>(null)

    const [isPlaying, setIsPlaying] = useState(false)
    const [time, setTime] = useState(0)

    const [showGraph, setShowGraph] = useState({ x: true, v: false, a: false })

    const [params, setParams] = useState({
        length: 100,      // cm
        gravity: 9.8,     // m/s²
        initialAngle: 10, // degrees
        mass: 1.0         // kg
    })

    // History for Energy Graph
    const energyHistoryRef = useRef<{ t: number, wd: number, wt: number, w: number }[]>([])

    const animationRef = useRef<number | undefined>(undefined)
    const timeRef = useRef(0)

    // Physics Calculations
    const lengthM = params.length / 100
    const omega = Math.sqrt(params.gravity / lengthM)
    const period = (2 * Math.PI) / omega
    const frequency = 1 / period
    const thetaMax = (params.initialAngle * Math.PI) / 180
    const dt = 0.016

    const calculateState = useCallback(
        (t: number) => {
            const theta = thetaMax * Math.cos(omega * t)
            const x = params.length * Math.sin(theta) // Horizontal displacement approx

            // Calculate v using Energy Conservation to ensure W is constant for large angles
            const l_m = params.length / 100
            const h_current = l_m * (1 - Math.cos(theta))
            const h_max = l_m * (1 - Math.cos(thetaMax))
            const v_mag = Math.sqrt(2 * params.gravity * Math.max(0, h_max - h_current))

            // Direction same as SHM approximation: -sin(omega*t)
            const sign = -Math.sin(omega * t) >= 0 ? 1 : -1
            const v = sign * v_mag * 100 // Convert to cm/s

            // Acceleration (approx)
            const a = -params.length * omega * omega * thetaMax * Math.cos(omega * t)

            return { theta, x, v, a }
        },
        [thetaMax, omega, params.length, params.gravity],
    )

    const drawSim = useCallback(
        (ctx: CanvasRenderingContext2D, t: number) => {
            const width = ctx.canvas.width
            const height = ctx.canvas.height

            ctx.fillStyle = "#0f172a"
            ctx.fillRect(0, 0, width, height)

            // Grid
            ctx.strokeStyle = "#1e293b"
            ctx.lineWidth = 0.5
            ctx.beginPath()
            for (let i = 0; i < width; i += 40) { ctx.moveTo(i, 0); ctx.lineTo(i, height) }
            for (let i = 0; i < height; i += 40) { ctx.moveTo(0, i); ctx.lineTo(width, i) }
            ctx.stroke()

            const state = calculateState(t)

            const pivotX = width / 2
            const pivotY = 40

            const bobX = pivotX + params.length * Math.sin(state.theta)
            const bobY = pivotY + params.length * Math.cos(state.theta)

            // Support
            ctx.fillStyle = "#64748b"
            ctx.fillRect(pivotX - 40, pivotY - 10, 80, 10)

            // Vertical dashed line
            ctx.strokeStyle = "#334155"; ctx.setLineDash([5, 5])
            ctx.beginPath(); ctx.moveTo(pivotX, pivotY); ctx.lineTo(pivotX, pivotY + params.length + 40); ctx.stroke(); ctx.setLineDash([])

            // String
            ctx.strokeStyle = "#cbd5e1"; ctx.lineWidth = 2
            ctx.beginPath(); ctx.moveTo(pivotX, pivotY); ctx.lineTo(bobX, bobY); ctx.stroke()

            // Bob
            const gradient = ctx.createRadialGradient(bobX - 5, bobY - 5, 2, bobX, bobY, 20)
            gradient.addColorStop(0, "#fb923c")
            gradient.addColorStop(1, "#ea580c")
            ctx.fillStyle = gradient
            ctx.beginPath(); ctx.arc(bobX, bobY, 20, 0, 2 * Math.PI); ctx.fill()
            ctx.strokeStyle = "#fff7ed"; ctx.lineWidth = 2; ctx.stroke()

            // Angle indicator
            ctx.fillStyle = "#facc15"; ctx.font = "bold 14px monospace"
            ctx.fillText(`${state.theta > 0 ? '+' : ''}${((state.theta * 180) / Math.PI).toFixed(1)}°`, pivotX + 20, pivotY + 40)

            // Info overlay (Top Left)
            ctx.fillStyle = "rgba(15, 23, 42, 0.8)"; ctx.fillRect(10, 10, 140, 80)
            ctx.strokeStyle = "rgba(56, 189, 248, 0.3)"; ctx.strokeRect(10, 10, 140, 80)

            ctx.font = "12px monospace"; ctx.textAlign = "left"
            ctx.fillStyle = "#e2e8f0"; ctx.fillText(`t = ${t.toFixed(2)} s`, 20, 30)
            ctx.fillStyle = "#22d3ee"; ctx.fillText(`α = ${((state.theta * 180) / Math.PI).toFixed(1)}°`, 20, 50)
            ctx.fillStyle = "#4ade80"; ctx.fillText(`v = ${state.v.toFixed(1)} cm/s`, 20, 70)

            // Signature
            ctx.fillStyle = "rgba(255, 255, 255, 0.15)"; ctx.textAlign = "right"
            ctx.fillText("Simple Pendulum", width - 15, height - 15)
            ctx.textAlign = "left" // Reset
        },
        [params.length, params.gravity, calculateState],
    )

    const drawEnergyGraph = useCallback((ctx: CanvasRenderingContext2D) => {
        const w = ctx.canvas.width
        const h = ctx.canvas.height
        const history = energyHistoryRef.current

        // Clear instead of fill to allow overlay
        ctx.clearRect(0, 0, w, h)

        // Optional: Semi-transparent background for readability
        ctx.fillStyle = "rgba(15, 23, 42, 0.4)"
        ctx.fillRect(0, 50, w, h - 50)

        if (history.length < 2) return

        const l_m = params.length / 100

        // Auto-Scale based on CURRENT initialAngle (user preference)
        // This makes the graph always fill the view regardless of how small the angle is.
        const thetaMaxRad = (params.initialAngle * Math.PI) / 180
        const maxRefPotential = params.mass * params.gravity * l_m * (1 - Math.cos(thetaMaxRad))

        // Scale to fit available height (leaving 50px top for overlay, 10px bottom padding)
        const graphHeight = h - 60
        const yScale = maxRefPotential > 0 ? (graphHeight * 0.9) / maxRefPotential : 1

        const drawLine = (key: 'wd' | 'wt' | 'w', color: string) => {
            ctx.strokeStyle = color
            ctx.lineWidth = 2
            ctx.beginPath()

            // Time Window Logic (Matched with Spring Oscillator)
            const timeWindow = 5.0
            const endTime = history[history.length - 1].t
            // Start from t=0 initially so graph grows Left -> Right
            const startTime = endTime < timeWindow ? 0 : endTime - timeWindow

            let started = false

            history.forEach((pt) => {
                if (pt.t < startTime) return

                const timeOffset = pt.t - startTime
                const x = (timeOffset / timeWindow) * w
                const y = h - 10 - (pt[key] * yScale)

                if (!started) {
                    ctx.moveTo(x, y)
                    started = true
                }
                else ctx.lineTo(x, y)
            })
            ctx.stroke()
        }

        drawLine('wt', '#3b82f6')
        drawLine('wd', '#22c55e')
        drawLine('w', '#eab308')

        // Draw Leading Dots (Need to match Time-based X)
        if (history.length > 0) {
            const lastPt = history[history.length - 1]
            const timeWindow = 5.0
            const endTime = lastPt.t
            const startTime = endTime < timeWindow ? 0 : endTime - timeWindow

            const timeOffset = lastPt.t - startTime
            const x = (timeOffset / timeWindow) * w

            const drawDot = (key: 'wd' | 'wt' | 'w', color: string) => {
                const y = h - 10 - (lastPt[key] * yScale)
                ctx.fillStyle = color
                ctx.beginPath()
                ctx.arc(x, y, 4, 0, Math.PI * 2)
                ctx.fill()
                ctx.strokeStyle = "#ffffff"
                ctx.lineWidth = 1.5
                ctx.stroke()
            }

            drawDot('wt', '#3b82f6')
            drawDot('wd', '#22c55e')
            drawDot('w', '#eab308')
        }

        // Legend inside canvas
        ctx.font = "10px monospace"
        ctx.fillStyle = "#eab308"; ctx.fillText("Cơ năng", 10, h - 35)
        ctx.fillStyle = "#22c55e"; ctx.fillText("Động năng", 70, h - 35)
        ctx.fillStyle = "#3b82f6"; ctx.fillText("Thế năng", 140, h - 35)

    }, [params.length, params.mass, params.gravity, params.initialAngle])

    const renderLogic = useCallback(() => {
        if (!canvasRef.current) return
        const ctx = canvasRef.current.getContext("2d")
        if (!ctx) return

        if (isPlaying) {
            timeRef.current += dt
            setTime(timeRef.current)

            const state = calculateState(timeRef.current)

            // Energy Calculation (Enforced Conservation)
            const l_m = params.length / 100
            const thetaMaxRad = (params.initialAngle * Math.PI) / 180

            // Total Energy is constant based on initial release angle (assuming v0=0)
            const h_max = l_m * (1 - Math.cos(thetaMaxRad))
            const W_total = params.mass * params.gravity * h_max

            // Potential Energy
            const h_current = l_m * (1 - Math.cos(state.theta))
            const wt = params.mass * params.gravity * h_current

            // Kinetic Energy (Derived to ensure sum is exactly W_total)
            const wd = Math.max(0, W_total - wt)

            energyHistoryRef.current.push({ t: timeRef.current, wd, wt, w: W_total })
            if (energyHistoryRef.current.length > 300) energyHistoryRef.current.shift()
        }

        drawSim(ctx, timeRef.current)
        if (energyCanvasRef.current) drawEnergyGraph(energyCanvasRef.current.getContext("2d")!, timeRef.current)

    }, [isPlaying, drawSim, drawEnergyGraph, calculateState, params, dt])

    const renderRef = useRef(renderLogic)
    useEffect(() => {
        renderRef.current = renderLogic
    }, [renderLogic])

    useEffect(() => {
        const loop = () => {
            if (renderRef.current) renderRef.current()
            animationRef.current = requestAnimationFrame(loop)
        }
        animationRef.current = requestAnimationFrame(loop)
        return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current) }
    }, [])

    // Initial Draw
    useEffect(() => {
        if (!isPlaying && canvasRef.current && energyCanvasRef.current) {
            drawSim(canvasRef.current.getContext("2d")!, timeRef.current)
            drawEnergyGraph(energyCanvasRef.current.getContext("2d")!, timeRef.current)
        }
    }, [params, drawSim, drawEnergyGraph, isPlaying])

    // Resize Logic
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current && canvasRef.current.parentElement) {
                const { width, height } = canvasRef.current.parentElement.getBoundingClientRect()
                canvasRef.current.width = width
                canvasRef.current.height = height

                // Redraw Sim
                drawSim(canvasRef.current.getContext("2d")!, timeRef.current)
            }
            if (energyCanvasRef.current && energyCanvasRef.current.parentElement) {
                const { width, height } = energyCanvasRef.current.parentElement.getBoundingClientRect()
                energyCanvasRef.current.width = width
                energyCanvasRef.current.height = height

                // Redraw Energy
                drawEnergyGraph(energyCanvasRef.current.getContext("2d")!, timeRef.current)
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [drawSim, drawEnergyGraph])

    const handleStep = (dir: number) => {
        setIsPlaying(false)
        timeRef.current = Math.max(0, timeRef.current + dir * 0.01)

        if (dir < 0) {
            // Rewind: Truncate history
            energyHistoryRef.current = energyHistoryRef.current.filter(pt => pt.t <= timeRef.current)
        } else {
            // Forward: Calculate and Push History manually since loop is paused
            const state = calculateState(timeRef.current)
            const l_m = params.length / 100
            const thetaMaxRad = (params.initialAngle * Math.PI) / 180

            const h_max = l_m * (1 - Math.cos(thetaMaxRad))
            const W_total = params.mass * params.gravity * h_max

            const h_current = l_m * (1 - Math.cos(state.theta))
            const wt = params.mass * params.gravity * h_current
            const wd = Math.max(0, W_total - wt)

            energyHistoryRef.current.push({ t: timeRef.current, wd, wt, w: W_total })
            if (energyHistoryRef.current.length > 300) energyHistoryRef.current.shift()
        }

        setTime(timeRef.current)
        // Draw will be updated by loop or effect
    }

    const handleReset = () => {
        setIsPlaying(false)
        timeRef.current = 0
        setTime(0)
        energyHistoryRef.current = []
    }

    // Current values for Stats Panel
    const currState = calculateState(time)
    const currH = lengthM * (1 - Math.cos(currState.theta))
    const currWt = params.mass * params.gravity * currH
    const currWd = 0.5 * params.mass * (currState.v / 100) ** 2
    const currW = currWt + currWd

    return (
        <div className="flex flex-col lg:flex-row h-full gap-4 p-4 lg:p-6 w-full">
            {/* Left Main (Canvas + Controls) */}
            <div className="flex-1 flex flex-col min-h-0 gap-4">
                {/* Canvas Area with Overlay Graph - Grows to fill space */}
                <div className="flex-1 relative bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700/50 shadow-sm flex flex-col">
                    <div className="absolute inset-0">
                        <canvas ref={canvasRef} className="w-full h-full block" />
                    </div>

                    {/* Energy Graph Overlay - Fixed height at bottom of canvas area */}
                    <div className="absolute bottom-0 left-0 w-full h-[150px] pointer-events-none z-10 opacity-80">
                        <canvas
                            ref={energyCanvasRef}
                            width={800}
                            height={150}
                            className="w-full h-full"
                        />
                    </div>
                </div>

                {/* UNIFIED CONTROLS - Fixed at bottom */}
                <div className="bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 flex-none flex items-center justify-center gap-3 shrink-0 shadow-sm z-10">
                    <button onClick={handleReset} className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0" title="Reset">
                        <RotateCcw size={18} />
                    </button>
                    <button onClick={() => handleStep(-1)} className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0" title="Lùi">
                        <SkipBack size={18} />
                    </button>
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95 border border-transparent shrink-0 ${isPlaying
                            ? "bg-amber-600 hover:bg-amber-500 shadow-amber-900/20"
                            : "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30"
                            } text-white`}
                        title={isPlaying ? "Dừng" : "Chạy"}
                    >
                        {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                    </button>
                    <button onClick={() => handleStep(1)} className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0" title="Tiến">
                        <SkipForward size={18} />
                    </button>
                </div>
            </div>

            {/* Right Sidebar - Scrollable */}
            <div className="lg:w-80 flex-none flex flex-col gap-4 overflow-y-auto pr-1 pb-2 custom-scrollbar lg:h-full">
                {/* CONFIGURATION */}
                <ControlPanel title="Cấu hình hệ thống">
                    <div className="space-y-4">
                        <div>
                            <label className="text-xs text-gray-400 mb-1 block">Chiều dài l</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="range"
                                    min="50"
                                    max="200"
                                    value={params.length}
                                    onChange={(e) => {
                                        setParams(p => ({ ...p, length: Number(e.target.value) }))
                                        handleReset()
                                    }}
                                    className="flex-1 h-2 bg-slate-700 rounded-lg cursor-pointer accent-cyan-500"
                                />
                                <span className="w-16 text-right font-mono text-sm text-cyan-400">{params.length} cm</span>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-gray-400 mb-1 block">Gia tốc g</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    step="0.1"
                                    value={params.gravity}
                                    onChange={(e) => {
                                        setParams(p => ({ ...p, gravity: Number(e.target.value) }))
                                        handleReset()
                                    }}
                                    className="flex-1 h-2 bg-slate-700 rounded-lg cursor-pointer accent-cyan-500"
                                />
                                <span className="w-16 text-right font-mono text-sm text-cyan-400">{params.gravity} m/s²</span>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-gray-400 mb-1 block">Góc ban đầu θ₀ (Lưu ý: ≤ 10° để dao động điều hòa)</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="range"
                                    min="1"
                                    max="60"
                                    value={params.initialAngle}
                                    onChange={(e) => {
                                        setParams(p => ({ ...p, initialAngle: Number(e.target.value) }))
                                        handleReset()
                                    }}
                                    className="flex-1 h-2 bg-slate-700 rounded-lg cursor-pointer accent-cyan-500"
                                />
                                <span className="w-16 text-right font-mono text-sm text-cyan-400">{params.initialAngle}°</span>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-gray-400 mb-1 block">Khối lượng m</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="range"
                                    min="0.1"
                                    max="5"
                                    step="0.1"
                                    value={params.mass}
                                    onChange={(e) => {
                                        setParams(p => ({ ...p, mass: Number(e.target.value) }))
                                        handleReset()
                                    }}
                                    className="flex-1 h-2 bg-slate-700 rounded-lg cursor-pointer accent-cyan-500"
                                />
                                <span className="w-16 text-right font-mono text-sm text-cyan-400">{params.mass} kg</span>
                            </div>
                        </div>
                    </div>
                </ControlPanel>

                {/* STATS */}
                <div className="bg-[#1e293b] rounded-xl p-0 border border-cyan-900/50 overflow-hidden shadow-sm shrink-0">
                    <div className="bg-slate-800/50 p-3 border-b border-slate-700 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-green-400" />
                        <h3 className="text-sm font-bold text-slate-200">Đại lượng đo đạc</h3>
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-4">
                        <div>
                            <div className="text-[10px] text-gray-500 uppercase">Chu kỳ (T)</div>
                            <div className="text-lg font-mono font-bold text-white">
                                {period.toFixed(2)} <span className="text-xs font-normal text-gray-400">s</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-500 uppercase">Tần số (f)</div>
                            <div className="text-lg font-mono font-bold text-white">
                                {frequency.toFixed(2)} <span className="text-xs font-normal text-gray-400">Hz</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-500 uppercase">Vận tốc (v)</div>
                            <div className="text-lg font-mono font-bold text-white">
                                {currState.v.toFixed(1)} <span className="text-xs font-normal text-gray-400">cm/s</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-500 uppercase">Gia tốc (a)</div>
                            <div className="text-lg font-mono font-bold text-white">
                                {currState.a.toFixed(1)} <span className="text-xs font-normal text-gray-400">cm/s²</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ENERGY MONITOR */}
                <div className="bg-[#1e293b] rounded-xl p-4 border border-cyan-900/50 shadow-sm shrink-0">
                    <h3 className="text-amber-400 font-semibold mb-3 text-sm flex items-center gap-2">
                        <Zap size={14} /> Năng lượng
                    </h3>
                    <div className="space-y-3">
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-green-400">Động năng Wđ</span>
                                <span className="text-green-400 font-mono">{currWd.toFixed(3)} J</span>
                            </div>
                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 transition-all duration-100" style={{ width: `${(currWd / (currW || 1)) * 100}%` }} />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-blue-400">Thế năng Wt</span>
                                <span className="text-blue-400 font-mono">{currWt.toFixed(3)} J</span>
                            </div>
                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 transition-all duration-100" style={{ width: `${(currWt / (currW || 1)) * 100}%` }} />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-yellow-400">Cơ năng W</span>
                                <span className="text-yellow-400 font-mono">{currW.toFixed(3)} J</span>
                            </div>
                            <div className="h-2 bg-yellow-500/30 rounded-full" />
                        </div>
                    </div>
                </div>

                {/* FORMULAS */}
                <div className="bg-[#16213e] rounded-lg p-4 border border-cyan-900/50 shadow-sm shrink-0">
                    <h3 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2 text-sm"><Anchor size={14} /> Công thức</h3>
                    <div className="text-xs md:text-sm text-gray-300 space-y-1 font-mono">
                        <p>l: Chiều dài từ điểm treo đến tâm vật</p>
                        <p className="text-slate-500">Điều kiện: α₀ ≤ 10°</p>
                        <div className="w-full h-[1px] bg-slate-700 my-2"></div>
                        <p>ω = √(g/l) = {omega.toFixed(2)} rad/s</p>
                        <p>T = 2π/ω = {period.toFixed(2)} s</p>
                        <p>W = mgl(1-cos(α₀))</p>
                    </div>
                </div>
            </div>
        </div>
    )
}