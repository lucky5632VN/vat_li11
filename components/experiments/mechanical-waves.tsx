"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { PlaybackControls } from "@/components/ui/playback-controls"



export default function MechanicalWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [waveType, setWaveType] = useState<"transverse" | "longitudinal">("transverse")
  const [params, setParams] = useState({
    amplitude: 40,
    wavelength: 150,
    frequency: 0.5,
  })

  const animationRef = useRef<number | undefined>(undefined)
  const timeRef = useRef(0)

  const omega = 2 * Math.PI * params.frequency
  const k = (2 * Math.PI) / params.wavelength
  const velocity = params.frequency * params.wavelength
  const dt = 0.016
  const numParticles = 40

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, t: number) => {
      const width = ctx.canvas.width
      const height = ctx.canvas.height

      ctx.fillStyle = "#0f172a"
      ctx.fillRect(0, 0, width, height)

      // Grid
      ctx.strokeStyle = "#1e293b"
      ctx.lineWidth = 0.5
      for (let i = 0; i < width; i += 40) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, height)
        ctx.stroke()
      }
      for (let i = 0; i < height; i += 40) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(width, i)
        ctx.stroke()
      }

      const centerY = height / 2
      const startX = 50
      const spacing = (width - 100) / numParticles

      if (waveType === "transverse") {
        ctx.strokeStyle = "#4ade80"
        ctx.setLineDash([5, 5])
        ctx.beginPath()
        ctx.moveTo(startX, centerY)
        ctx.lineTo(width - 50, centerY)
        ctx.stroke()
        ctx.setLineDash([])

        ctx.strokeStyle = "#22d3ee"
        ctx.lineWidth = 2
        ctx.beginPath()
        for (let x = startX; x < width - 50; x++) {
          const y = centerY - params.amplitude * Math.sin(k * (x - startX) - omega * t)
          if (x === startX) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()

        for (let i = 0; i < numParticles; i++) {
          const x = startX + i * spacing
          const displacement = params.amplitude * Math.sin(k * (x - startX) - omega * t)
          const y = centerY - displacement
          const vy = -params.amplitude * omega * Math.cos(k * (x - startX) - omega * t)

          ctx.fillStyle = "#3b82f6"
          ctx.beginPath()
          ctx.arc(x, y, 6, 0, 2 * Math.PI)
          ctx.fill()

          if (Math.abs(vy) > 1) {
            ctx.strokeStyle = "#22c55e"
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x, y - vy * 0.3)
            ctx.stroke()
          }

          ctx.fillStyle = "rgba(74, 222, 128, 0.3)"
          ctx.beginPath()
          ctx.arc(x, centerY, 3, 0, 2 * Math.PI)
          ctx.fill()
        }

        ctx.fillStyle = "#f97316"
        ctx.font = "14px sans-serif"
        ctx.textAlign = "center"
        ctx.fillText("↕ Hướng dao động", width / 2, 40)
        ctx.fillText("→ Hướng truyền sóng", width / 2, 60)
        ctx.textAlign = "left" // Reset alignment
      } else {
        ctx.strokeStyle = "#4ade80"
        ctx.setLineDash([5, 5])
        ctx.beginPath()
        ctx.moveTo(startX, centerY)
        ctx.lineTo(width - 50, centerY)
        ctx.stroke()
        ctx.setLineDash([])

        for (let i = 0; i < numParticles; i++) {
          const baseX = startX + i * spacing
          const displacement = params.amplitude * 0.5 * Math.sin(k * (baseX - startX) - omega * t)
          const x = baseX + displacement
          const vx = params.amplitude * 0.5 * omega * Math.cos(k * (baseX - startX) - omega * t)

          const density = Math.cos(k * (baseX - startX) - omega * t)
          const alpha = 0.5 + 0.5 * Math.abs(density)
          ctx.fillStyle = density > 0 ? `rgba(239, 68, 68, ${alpha})` : `rgba(59, 130, 246, ${alpha})`

          ctx.beginPath()
          ctx.arc(x, centerY, 8, 0, 2 * Math.PI)
          ctx.fill()

          if (Math.abs(vx) > 1) {
            ctx.strokeStyle = "#22c55e"
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.moveTo(x, centerY)
            ctx.lineTo(x + vx * 0.3, centerY)
            ctx.stroke()
          }

          ctx.fillStyle = "rgba(74, 222, 128, 0.3)"
          ctx.beginPath()
          ctx.arc(baseX, centerY + 40, 3, 0, 2 * Math.PI)
          ctx.fill()
        }

        ctx.fillStyle = "#ef4444"
        ctx.font = "12px monospace"
        ctx.fillText("Nén", width / 2 - 100, centerY - 50)
        ctx.fillStyle = "#3b82f6"
        ctx.fillText("Dãn", width / 2 + 50, centerY - 50)

        ctx.fillStyle = "#f97316"
        ctx.font = "14px sans-serif"
        ctx.textAlign = "center"
        ctx.fillText("↔ Hướng dao động", width / 2, 40)
        ctx.fillText("→ Hướng truyền sóng", width / 2, 60)
        ctx.textAlign = "left" // Reset alignment
      }

      // Info panel
      ctx.fillStyle = "rgba(15, 23, 42, 0.8)"
      ctx.fillRect(10, height - 100, 180, 90)
      ctx.strokeStyle = "rgba(56, 189, 248, 0.3)"
      ctx.strokeRect(10, height - 100, 180, 90)

      ctx.fillStyle = "#4ade80"
      ctx.font = "13px monospace"
      ctx.fillText(`t = ${t.toFixed(2)} s`, 20, height - 80)
      ctx.fillText(`λ = ${params.wavelength} cm`, 20, height - 60)
      ctx.fillText(`f = ${params.frequency} Hz`, 20, height - 40)
      ctx.fillText(`v = ${velocity.toFixed(0)} cm/s`, 20, height - 20)

      ctx.fillStyle = "rgba(255, 255, 255, 0.15)"
      ctx.font = "12px monospace"
      ctx.textAlign = "right"
      ctx.fillText("Hô Hoàng Anh A1K50", width - 15, height - 15)
      ctx.textAlign = "left"
    },
    [waveType, params.amplitude, params.wavelength, params.frequency, omega, k, velocity],
  )

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    timeRef.current += dt
    setTime(timeRef.current)
    draw(ctx, timeRef.current)

    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate)
    }
  }, [isPlaying, draw])

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate)
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isPlaying, animate])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    draw(ctx, timeRef.current)
  }, [params, waveType, draw])

  const handleStep = (direction: number) => {
    setIsPlaying(false)
    timeRef.current = Math.max(0, timeRef.current + dt * direction * 10)
    setTime(timeRef.current)
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    draw(ctx, timeRef.current)
  }

  const handleReset = () => {
    setIsPlaying(false)
    timeRef.current = 0
    setTime(0)
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    draw(ctx, 0)
  }

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current
      if (canvas && canvas.parentElement) {
        const { width, height } = canvas.parentElement.getBoundingClientRect()
        // Set canvas resolution to match display size
        canvas.width = width
        canvas.height = height
        // Redraw immediately
        draw(canvas.getContext("2d")!, timeRef.current)
      }
    }

    // Initial size
    handleResize()

    // Listen for window resize
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [draw])

  const handleTimelineChange = (newTime: number) => {
    setIsPlaying(false)
    timeRef.current = newTime
    setTime(newTime)
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    draw(ctx, newTime)
  }

  return (
    <div className="flex flex-col lg:flex-row h-full gap-4 p-4 lg:p-6 w-full">
      {/* Left Main (Canvas + Controls) */}
      <div className="flex-1 flex flex-col min-h-0 gap-4">
        {/* Canvas Container - Grows to fill space */}
        <div className="flex-1 bg-[#1e293b] rounded-xl relative overflow-hidden border border-slate-700/50 shadow-sm flex flex-col">
          <div className="absolute inset-0">
            <canvas ref={canvasRef} className="w-full h-full bg-[#0f172a]" />
          </div>
        </div>

        <div className="bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 flex-none flex items-center justify-center gap-3 shrink-0 shadow-sm z-10">
          <PlaybackControls
            isPlaying={isPlaying}
            onPlayPause={() => setIsPlaying(!isPlaying)}
            onReset={handleReset}
            onStepBackward={() => handleStep(-1)}
            onStepForward={() => handleStep(1)}
          />
        </div>
      </div>

      {/* Right Sidebar - Scrollable if needed */}
      <div className="lg:w-80 flex-none flex flex-col gap-4 overflow-y-auto pr-1 pb-2 custom-scrollbar lg:h-full">
        <div className="bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 shadow-sm shrink-0">
          <h3 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wider">Loại sóng</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setWaveType("transverse")}
              className={`flex-1 py-2.5 px-3 rounded-lg text-xs md:text-sm font-semibold transition-all border ${waveType === "transverse"
                ? "bg-cyan-600 border-cyan-500 text-white shadow"
                : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"
                }`}
            >
              Sóng ngang
            </button>
            <button
              onClick={() => setWaveType("longitudinal")}
              className={`flex-1 py-2.5 px-3 rounded-lg text-xs md:text-sm font-semibold transition-all border ${waveType === "longitudinal"
                ? "bg-cyan-600 border-cyan-500 text-white shadow"
                : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"
                }`}
            >
              Sóng dọc
            </button>
          </div>
        </div>

        <div className="bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 shadow-sm shrink-0">
          <h3 className="text-cyan-400 font-semibold mb-4 text-sm uppercase tracking-wider">Thông số sóng</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1.5 align-baseline">
                <label className="text-slate-400 font-medium">Biên độ A</label>
                <span className="text-cyan-400 font-mono bg-slate-900/50 px-1.5 py-0.5 rounded border border-slate-700/50">{params.amplitude} cm</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                value={params.amplitude}
                onChange={(e) => setParams({ ...params, amplitude: Number(e.target.value) })}
                className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer appearance-none"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5 align-baseline">
                <label className="text-slate-400 font-medium">Bước sóng λ</label>
                <span className="text-cyan-400 font-mono bg-slate-900/50 px-1.5 py-0.5 rounded border border-slate-700/50">{params.wavelength} cm</span>
              </div>
              <input
                type="range"
                min="50"
                max="300"
                value={params.wavelength}
                onChange={(e) => setParams({ ...params, wavelength: Number(e.target.value) })}
                className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer appearance-none"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5 align-baseline">
                <label className="text-slate-400 font-medium">Tần số f</label>
                <span className="text-cyan-400 font-mono bg-slate-900/50 px-1.5 py-0.5 rounded border border-slate-700/50">{params.frequency} Hz</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="2"
                step="0.1"
                value={params.frequency}
                onChange={(e) => setParams({ ...params, frequency: Number(e.target.value) })}
                className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer appearance-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 shadow-sm shrink-0">
          <h3 className="text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wider">Công thức</h3>
          <div className="text-xs text-slate-300 space-y-1.5 font-mono bg-slate-900/30 p-2 rounded border border-slate-800">
            <p>y = A·sin(kx - ωt)</p>
            <p>v = λf = {velocity.toFixed(0)} cm/s</p>
            <p>k = 2π/λ = {k.toFixed(3)} rad/cm</p>
            <p>ω = 2πf = {omega.toFixed(2)} rad/s</p>
          </div>
        </div>
      </div>
    </div>
  )
}
