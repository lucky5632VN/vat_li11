"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { PlaybackControls } from "@/components/ui/playback-controls"
import { Zap } from "lucide-react"

import { useCanvasScale } from "@/hooks/use-canvas-scale"

// Special angles in degrees within one circle (0 to 360)
const SPECIAL_ANGLES_DEG = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330]
const SPECIAL_ANGLES_RAD = SPECIAL_ANGLES_DEG.map((d) => (d * Math.PI) / 180)

export default function HarmonicOscillation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { width, height, pixelRatio } = useCanvasScale(containerRef)

  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(0)

  const [showGraph, setShowGraph] = useState({ x: true, v: true, a: true })

  const [params, setParams] = useState({
    amplitude: 50,    // cm - Start with reasonable mid-range
    frequency: 0.5,   // Hz
    phase: 0,         // rad
  })

  const animationRef = useRef<number | undefined>(undefined)
  const timeRef = useRef(0)

  const omega = 2 * Math.PI * params.frequency
  const T = 1 / params.frequency
  const dt = 0.016

  const calculateState = useCallback(
    (t: number) => {
      const x = params.amplitude * Math.cos(omega * t + params.phase)
      const v = -params.amplitude * omega * Math.sin(omega * t + params.phase)
      const a = -params.amplitude * omega * omega * Math.cos(omega * t + params.phase)
      return { x, v, a }
    },
    [params.amplitude, omega, params.phase],
  )

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, t: number) => {
      // Use dimensions from hook
      const w = width
      const h = height

      if (w === 0 || h === 0) return

      ctx.clearRect(0, 0, w, h)

      // Background
      ctx.fillStyle = "#0f172a"
      ctx.fillRect(0, 0, w, h)

      // --- SCALING LOGIC ---
      // Goal: 
      // 1. Circle grows with amplitude.
      // 2. Graph height matches circle radius visually.
      // 3. Max amplitude (150cm) must fit in view.

      // Define visual constraints
      const PADDING = 80 // Increased padding to prevent circle from touching edges/UI
      const MAX_PHYSICAL_AMPLITUDE = 150 // Matches slider max
      const safeHeight = h - PADDING * 2

      // Calculate "Pixels per Centimeter" scale factor
      // Ensure the max possible amplitude fits within half the canvas height
      const pixelsPerCm = (safeHeight / 2) / MAX_PHYSICAL_AMPLITUDE

      // Current visual radius based on physical amplitude
      const visualRadius = params.amplitude * pixelsPerCm

      // Layout Layout
      // Reduce breakpoint to 500 to keep side-by-side layout even when sidebar is open
      const isSmallScreen = w < 500
      // Ensure circle section is wide enough for the circle + margin
      const minCircleSection = visualRadius * 2 + 80
      const circleSectionWidth = isSmallScreen ? w : Math.max(300, minCircleSection)

      const graphStartX = isSmallScreen ? 20 : circleSectionWidth + 20
      const graphWidth = isSmallScreen ? w - 40 : w - graphStartX - 20

      const centerX = isSmallScreen ? w / 2 : circleSectionWidth / 2
      // If small screen, stack circle on top or just center? Let's keep side-by-side logic but condensed
      // actually if w < 600, side-by-side is bad. But user asked for "tall" view.
      // Let's stick to the requested layout, just adjusting centers.

      const centerY = h / 2

      // --- CIRCLE SECTION ---

      const angle = omega * t + params.phase

      // Circle Axes
      ctx.strokeStyle = "#1e293b"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(centerX, centerY - visualRadius - 20); ctx.lineTo(centerX, centerY + visualRadius + 20)
      ctx.moveTo(centerX - visualRadius - 20, centerY); ctx.lineTo(centerX + visualRadius + 20, centerY)
      ctx.stroke()

      // Main Reference Circle
      ctx.strokeStyle = "#475569"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(centerX, centerY, visualRadius, 0, 2 * Math.PI)
      ctx.stroke()

      // Rotating Vector
      const vectorX = centerX + visualRadius * Math.cos(angle)
      const vectorY = centerY - visualRadius * Math.sin(angle)

      ctx.strokeStyle = "#f97316"
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(vectorX, vectorY)
      ctx.stroke()

      // Vector Tip
      ctx.fillStyle = "#f97316"
      ctx.beginPath()
      ctx.arc(vectorX, vectorY, 5, 0, 2 * Math.PI)
      ctx.fill()

      // Shadow projection to X-axis (to show relationship)
      ctx.strokeStyle = "rgba(249, 115, 22, 0.6)" // Made darker
      ctx.setLineDash([4, 4])
      ctx.beginPath()
      ctx.moveTo(vectorX, vectorY)
      ctx.lineTo(vectorX, centerY) // Project vertically to horizontal diameter
      ctx.stroke()
      ctx.setLineDash([])

      // Projection Point (The Shadow)
      ctx.fillStyle = "#ef4444" // Red like x(t)
      ctx.beginPath()
      ctx.arc(vectorX, centerY, 6, 0, 2 * Math.PI)
      ctx.fill()
      ctx.fillStyle = "#ef4444"
      ctx.font = "bold 14px monospace"
      ctx.fillText("x", vectorX, centerY + 20)


      // Markers (-A, +A, VTCB)
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
      ctx.font = "12px monospace"
      ctx.textAlign = "center"
      // -A
      ctx.fillText("-A", centerX - visualRadius, centerY + 20)
      // +A
      ctx.fillText("+A", centerX + visualRadius, centerY + 20)
      // VTCB (O)
      ctx.fillText("O", centerX, centerY + 20)


      // --- GRAPH SECTION ---

      const graphTop = 20
      const graphBottom = h - 20
      const graphAxisY = h / 2

      // Axis Line
      ctx.strokeStyle = "#334155"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(graphStartX, graphAxisY)
      ctx.lineTo(graphStartX + graphWidth, graphAxisY)
      ctx.stroke()

      // Time Window
      const timeWindow = 2.5 * T
      const tEnd = t
      const tStart = t - timeWindow

      const drawCurve = (
        getValue: (wt: number) => number,
        color: string,
        scaleFactor: number // Multiplier for the base scale
      ) => {
        ctx.strokeStyle = color
        ctx.lineWidth = 2
        ctx.beginPath()

        const step = 2
        let started = false

        for (let i = 0; i <= graphWidth; i += step) {
          const waveT = tStart + (i / graphWidth) * timeWindow
          if (waveT < 0) continue

          const val = getValue(waveT)
          // Y position: Center - (ValueInCm * PixelsPerCm * ScaleFactor)
          // For x(t), ScaleFactor = 1. So it visually matches the circle radius.
          const y = graphAxisY - (val * pixelsPerCm * scaleFactor)

          if (!started) {
            ctx.moveTo(graphStartX + i, y)
            started = true
          } else {
            ctx.lineTo(graphStartX + i, y)
          }
        }
        ctx.stroke()

        // Current Value Dot
        const currentVal = getValue(t)
        const currentY = graphAxisY - (currentVal * pixelsPerCm * scaleFactor)

        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(graphStartX + graphWidth, currentY, 4, 0, 2 * Math.PI)
        ctx.fill()

        // Connect vector projection to graph if it's x(t)
        if (color === "#ef4444" && !isSmallScreen) {
          ctx.strokeStyle = "rgba(239, 68, 68, 0.2)"
          ctx.setLineDash([2, 5])
          ctx.beginPath()
          // Connection line logic is tricky if circle and graph are side-by-side but time flows right.
          // Usually we project from the circle y-value to graph y-value.
          // But here circle is rotating for x = A cos...
          // If we rotate exactly, x matches the horizontal position on circle.
          // Graph plots x on Y axis vs t on X axis.
          // So connection is meaningless unless we rotate circle 90 degrees.
          // Let's just draw the dot.
        }
      }

      // Draw Curves
      // x(t) - Red
      if (showGraph.x) {
        drawCurve(
          (wt) => params.amplitude * Math.cos(omega * wt + params.phase),
          "#ef4444",
          1 // 1:1 scale with circle
        )
      }

      // v(t) - Green
      // v_max = A * omega. This can be much larger than A.
      // We need to scale it to fit visually or use a normalized scale.
      // User request implies "graph equals circle circle". 
      // If we plot physical V, it might go off screen.
      // Let's normalize v such that its visual Max equals the visual Radius?
      // "đồ thị sẽ bằng với vòng tròn lượng giác" usually implies visual comparison of x.
      // For v and a, we usually auto-scale them to fit roughly same height for comparison,
      // OR we use the physical scale. 
      // Given the prompt "adjust amplitude -> circle grows -> graph size matches", strictly applies to x(t).
      // For v(t) and a(t), let's auto-scale to roughly the 80% height of canvas to be readable, 
      // or scale them relative to A*omega.
      // Let's stick to readable auto-scale for v and a relative to amplitude logic.
      if (showGraph.v) {
        // Scale v so that Vmax visually is roughly Amax visually?
        // v_max = A * w.
        // pixelY = v * (pixelsPerCm / w) -> cancels w units?
        // Let's just scale it so Vmax looks like Amax on screen for easy phase comparison.
        // factor = 1/omega
        drawCurve(
          (wt) => -params.amplitude * omega * Math.sin(omega * wt + params.phase),
          "#22c55e",
          1.0 / (omega || 1) // Normalized to amplitude visual height
        )
      }

      if (showGraph.a) {
        // a_max = A * w^2
        // factor = 1/omega^2
        drawCurve(
          (wt) => -params.amplitude * omega * omega * Math.cos(omega * wt + params.phase),
          "#3b82f6",
          1.0 / ((omega * omega) || 1)
        )
      }

      // Signature
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)"
      ctx.font = "12px monospace"
      ctx.textAlign = "right"
      ctx.fillText("Hô Hoàng Anh A1K50", w - 15, h - 15)

      // Stats Info - REMOVED -> Moved to HTML Overlay
    },
    [params.amplitude, params.phase, omega, calculateState, showGraph, T, width, height],
  )

  const animate = useCallback(() => {
    if (!canvasRef.current || width === 0 || height === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    if (canvas.width !== width * pixelRatio || canvas.height !== height * pixelRatio) {
      canvas.width = width * pixelRatio
      canvas.height = height * pixelRatio
    }

    ctx.save()
    ctx.scale(pixelRatio, pixelRatio)

    if (isPlaying) {
      timeRef.current += dt
      setTime(timeRef.current)
    }

    draw(ctx, timeRef.current)
    ctx.restore()

    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate)
    }
  }, [isPlaying, draw, width, height, pixelRatio])

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate)
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isPlaying, animate])

  // Resize / Redraw Effect
  useEffect(() => {
    if (!isPlaying && canvasRef.current && width > 0 && height > 0) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      if (canvas.width !== width * pixelRatio || canvas.height !== height * pixelRatio) {
        canvas.width = width * pixelRatio
        canvas.height = height * pixelRatio
      }

      ctx.save()
      ctx.scale(pixelRatio, pixelRatio)
      draw(ctx, timeRef.current)
      ctx.restore()
    }
    // Added 'time' dependency here to ensuring manual stepping triggers redraw
  }, [isPlaying, draw, width, height, pixelRatio, time])

  const handleManualUpdate = (newTime: number) => {
    // setIsPlaying(false) // Don't force pause, just jump? The UI suggests these are transport controls.
    // Usually seek pauses playback or just jumps. Let's pause to be safe.
    setIsPlaying(false)
    timeRef.current = Math.max(0, newTime)
    setTime(timeRef.current)
    // Draw will happen via useEffect above because isPlaying became false
  }

  const handleSkip = (direction: number) => {
    handleManualUpdate(timeRef.current + direction * 0.5)
  }

  const handleReset = () => {
    handleManualUpdate(0)
  }

  const handleMicroStep = (direction: number) => {
    // Logic as before
    const stepTime = T / 80
    const epsilon = 1e-4
    const currentPhaseTotal = omega * timeRef.current + params.phase
    const currentPhaseNorm = currentPhaseTotal % (2 * Math.PI)
    const currentPhasePos = currentPhaseNorm < 0 ? currentPhaseNorm + 2 * Math.PI : currentPhaseNorm
    let targetTime = timeRef.current + direction * stepTime
    const stepPhase = (2 * Math.PI) / 80

    if (direction > 0) {
      let nextSpecial = SPECIAL_ANGLES_RAD.find(a => a > currentPhasePos + epsilon)
      let distance = 0
      if (nextSpecial !== undefined) distance = nextSpecial - currentPhasePos
      else {
        nextSpecial = SPECIAL_ANGLES_RAD[0] + 2 * Math.PI
        distance = nextSpecial - currentPhasePos
      }
      if (distance <= stepPhase + epsilon) targetTime = timeRef.current + distance / omega
    } else {
      const reversed = [...SPECIAL_ANGLES_RAD].reverse()
      let prevSpecial = reversed.find(a => a < currentPhasePos - epsilon)
      let distance = 0
      if (prevSpecial !== undefined) distance = currentPhasePos - prevSpecial
      else {
        prevSpecial = SPECIAL_ANGLES_RAD[SPECIAL_ANGLES_RAD.length - 1] - 2 * Math.PI
        distance = currentPhasePos - prevSpecial
      }
      if (distance <= stepPhase + epsilon) targetTime = timeRef.current - distance / omega
    }
    handleManualUpdate(targetTime)
  }

  const state = calculateState(time)
  const kineticEnergy = (0.5 * state.v * state.v) / 10000
  const potentialEnergy = (0.5 * omega * omega * state.x * state.x) / 10000

  return (
    <div className="flex flex-col lg:flex-row h-full gap-4 p-4 lg:p-6 w-full">
      {/* Left Main (Canvas + Controls) */}
      <div className="flex-1 flex flex-col min-h-0 gap-4">
        {/* Main Canvas Container - Grows to fill space */}
        <div
          ref={containerRef}
          className="bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700/50 relative flex-1 min-h-0"
        >
          {/* Controls Overlay */}
          <div className="absolute top-4 right-4 flex gap-2 z-10 bg-[#0f172a]/80 p-1 rounded-lg backdrop-blur-sm border border-slate-700">
            <button
              onClick={() => setShowGraph((p) => ({ ...p, x: !p.x }))}
              className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${showGraph.x ? "bg-red-500 text-white" : "bg-slate-700 text-slate-400"}`}
            >
              x(t)
            </button>
            <button
              onClick={() => setShowGraph((p) => ({ ...p, v: !p.v }))}
              className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${showGraph.v ? "bg-green-500 text-white" : "bg-slate-700 text-slate-400"}`}
            >
              v(t)
            </button>
            <button
              onClick={() => setShowGraph((p) => ({ ...p, a: !p.a }))}
              className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${showGraph.a ? "bg-blue-500 text-white" : "bg-slate-700 text-slate-400"}`}
            >
              a(t)
            </button>
          </div>

          {/* Stats Info Overlay - Top Left (Compact, No Border) */}
          <div className="absolute top-2 left-2 z-10 p-2 min-w-[130px]">
            <div className="space-y-0.5 font-mono text-xs">
              <div className="flex justify-between gap-2 text-slate-300">
                <span>t =</span>
                <span>{time.toFixed(3)}s</span>
              </div>
              <div className="flex justify-between gap-2 text-red-400 font-bold">
                <span>x =</span>
                <span>{state.x.toFixed(2)} cm</span>
              </div>
              <div className="flex justify-between gap-2 text-green-400 font-bold">
                <span>v =</span>
                <span>{state.v.toFixed(1)} cm/s</span>
              </div>
              <div className="flex justify-between gap-2 text-blue-400 font-bold">
                <span>a =</span>
                <span>{state.a.toFixed(0)} <span className="scale-75 inline-block origin-left">cm/s²</span></span>
              </div>
            </div>
          </div>

          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>

        {/* Playback Controls - Fixed at bottom */}
        <div className="bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 flex-none flex flex-wrap items-center justify-center gap-3 shrink-0 shadow-sm z-10">
          <PlaybackControls
            isPlaying={isPlaying}
            onPlayPause={() => setIsPlaying(!isPlaying)}
            onReset={handleReset}
            onStepBackward={() => handleMicroStep(-1)}
            onStepForward={() => handleMicroStep(1)}
            onSkipBackward={() => handleSkip(-1)}
            onSkipForward={() => handleSkip(1)}
          />
        </div>
      </div>

      {/* Right Sidebar - Scrollable */}
      <div className="lg:w-80 flex-none flex flex-col gap-4 overflow-y-auto pr-1 pb-2 custom-scrollbar lg:h-full">
        {/* Parameters */}
        <div className="bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 shadow-sm shrink-0">
          <h3 className="text-cyan-400 font-semibold mb-4 text-sm">Thông số dao động</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <label className="text-slate-400">Biên độ A</label>
                <span className="text-cyan-400 font-mono">{params.amplitude} cm</span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                value={params.amplitude}
                onChange={(e) => setParams({ ...params, amplitude: Number(e.target.value) })}
                className="w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <label className="text-slate-400">Tần số f (Chu kỳ T = {(1 / params.frequency).toFixed(2)}s)</label>
                <span className="text-cyan-400 font-mono">{params.frequency} Hz</span>
              </div>
              <input type="range" min="0.1" max="2" step="0.1" value={params.frequency} onChange={(e) => setParams({ ...params, frequency: Number(e.target.value) })} className="w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer" />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <label className="text-slate-400">Pha ban đầu φ</label>
                <span className="text-cyan-400 font-mono">{params.phase.toFixed(2)} rad</span>
              </div>
              <input type="range" min="0" max={Math.PI * 2} step="0.1" value={params.phase} onChange={(e) => setParams({ ...params, phase: Number(e.target.value) })} className="w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Energy */}
        <div className="bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 shadow-sm shrink-0">
          <h3 className="text-amber-400 font-semibold mb-3 text-sm flex items-center gap-2">
            <Zap size={14} /> Năng lượng
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-green-400">Động năng Wđ</span>
                <span className="text-green-400 font-mono">{kineticEnergy.toFixed(3)} J</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 transition-all duration-100" style={{ width: `${(kineticEnergy / (kineticEnergy + potentialEnergy || 1)) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-blue-400">Thế năng Wt</span>
                <span className="text-blue-400 font-mono">{potentialEnergy.toFixed(3)} J</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 transition-all duration-100" style={{ width: `${(potentialEnergy / (kineticEnergy + potentialEnergy || 1)) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-yellow-400">Cơ năng W</span>
                <span className="text-yellow-400 font-mono">{(kineticEnergy + potentialEnergy).toFixed(3)} J</span>
              </div>
              <div className="h-2 bg-yellow-500/30 rounded-full" />
            </div>
          </div>
        </div>

        <div className="bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 shadow-sm shrink-0">
          <h3 className="text-cyan-400 font-semibold mb-2 text-sm">Công thức</h3>
          <div className="text-xs text-slate-300 space-y-1 font-mono">
            <p className="flex justify-between"><span>x = A·cos(ωt + φ)</span> <span className="text-red-400">Li độ</span></p>
            <p className="flex justify-between"><span>v = -Aω·sin(ωt + φ)</span> <span className="text-green-400">Vận tốc</span></p>
            <p className="flex justify-between"><span>a = -Aω²·cos(ωt + φ)</span> <span className="text-blue-400">Gia tốc</span></p>
            <div className="w-full h-[1px] bg-slate-700 my-2"></div>
            <p>ω = 2πf = {omega.toFixed(2)} rad/s</p>
            <p>T = 1/f = {(1 / params.frequency).toFixed(2)} s</p>
          </div>
        </div>
      </div>
    </div>
  )
}