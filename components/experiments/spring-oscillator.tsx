"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import ControlPanel from "../ui/control-panel"
import { TrendingUp, Ruler, Activity, RotateCcw, SkipBack, Play, Pause, SkipForward, SplitSquareHorizontal, Square } from "lucide-react"
import { useSpringPhysics } from "@/hooks/use-spring-physics"
import OscillatorView from "./oscillator-view"
import { PlaybackControls } from "@/components/ui/playback-controls"

export default function SpringOscillator() {
  const energyCanvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)

  const [layout, setLayout] = useState<"horizontal" | "vertical">("horizontal")
  const [mode, setMode] = useState<"single" | "compare">("single")
  const [activeTab, setActiveTab] = useState<"system1" | "system2">("system1")

  // System 1 Physics
  const sys1 = useSpringPhysics({ mass: 0.5, k: 20, amplitude: 80, phase: 0 })

  // System 2 Physics
  const sys2 = useSpringPhysics({ mass: 1.0, k: 40, amplitude: 60, phase: 0 })

  // Unified Controls
  const togglePlay = () => {
    const newState = !sys1.isPlaying
    sys1.setIsPlaying(newState)
    sys2.setIsPlaying(newState) // Sync playing state
  }

  const handleReset = () => {
    sys1.reset()
    sys2.reset()
  }

  const stepForward = () => {
    sys1.step(0.01)
    sys2.step(0.01)
  }

  const stepBackward = () => {
    sys1.step(-0.01)
    sys2.step(-0.01)
  }

  const activeSys = activeTab === "system1" ? sys1 : sys2
  const isPlaying = sys1.isPlaying // Assuming synced

  // Energy Graph Drawing
  const drawEnergyGraph = useCallback(
    (ctx: CanvasRenderingContext2D, currentTime: number) => {
      const w = ctx.canvas.width
      const h = ctx.canvas.height
      const params = activeSys.params

      // Transparent Background
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = "rgba(15, 23, 42, 0.4)"
      ctx.fillRect(0, 50, w, h - 50)

      // Grid
      ctx.strokeStyle = "#1e293b"; ctx.lineWidth = 0.5; ctx.beginPath()
      for (let x = 0; x < w; x += 50) { ctx.moveTo(x, 0); ctx.lineTo(x, h) }
      for (let y = 50; y < h - 10; y += 30) { ctx.moveTo(0, y); ctx.lineTo(w, y) }
      ctx.stroke()

      // Time Window
      const timeWindow = 5.0
      const endTime = currentTime
      const startTime = endTime < timeWindow ? 0 : endTime - timeWindow

      // Analytic Points Generation
      // Calculate physics state for ~300 points in the view window
      // This ensures smooth curves regardless of step size or history usage
      const points: { t: number, wt: number, wd: number, wTotal: number }[] = []
      const steps = 300
      const duration = Math.max(0, endTime - startTime)

      if (duration > 0 || currentTime === 0) {
        for (let i = 0; i <= steps; i++) {
          const t = startTime + (duration * (i / steps))
          const state = activeSys.calculateState(t)
          points.push({ t, wt: state.wt, wd: state.wd, wTotal: state.wTotal })
        }
      }

      // Scaling
      // Max Ref Energy based on Max Amplitude (1m)
      const maxAmpMeters = 1.0
      const maxRefEnergy = 0.5 * params.k * Math.pow(maxAmpMeters, 2)
      const graphHeight = h - 60
      const yScale = maxRefEnergy > 0 ? (graphHeight * 0.9) / maxRefEnergy : 1

      // Draw Lines
      const drawLine = (key: 'wt' | 'wd' | 'wTotal', color: string) => {
        if (points.length < 2) return
        ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.beginPath()

        let started = false
        points.forEach(pt => {
          const timeOffset = pt.t - startTime
          const x = (timeOffset / timeWindow) * w
          const y = h - 10 - (pt[key] * yScale)

          if (!started) { ctx.moveTo(x, y); started = true }
          else ctx.lineTo(x, y)
        })
        ctx.stroke()
      }

      drawLine("wt", "#3b82f6")
      drawLine("wd", "#22c55e")
      drawLine("wTotal", "#eab308")

      // Leading Dots
      if (points.length > 0) {
        const lastPt = points[points.length - 1]
        const timeOffset = lastPt.t - startTime
        const x = (timeOffset / timeWindow) * w

        const drawDot = (key: 'wt' | 'wd' | 'wTotal', color: string) => {
          const y = h - 10 - (lastPt[key] * yScale)
          ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fill()
          ctx.strokeStyle = "#fff"; ctx.lineWidth = 1.5; ctx.stroke()
        }
        drawDot("wt", "#3b82f6")
        drawDot("wd", "#22c55e")
        drawDot("wTotal", "#eab308")
      }

      // Legend
      ctx.font = "10px monospace"
      ctx.fillStyle = "#eab308"; ctx.fillText("Cơ năng", 10, h - 35)
      ctx.fillStyle = "#22c55e"; ctx.fillText("Động năng", 70, h - 35)
      ctx.fillStyle = "#3b82f6"; ctx.fillText("Thế năng", 140, h - 35)
    },
    [activeSys]
  )

  // Stable Animation Loop Pattern
  const renderLogic = useCallback(() => {
    if (sys1.isPlaying) {
      sys1.step(0.016)
      sys2.step(0.016)
    }

    if (energyCanvasRef.current) {
      const ctx = energyCanvasRef.current.getContext("2d")
      if (ctx) drawEnergyGraph(ctx, sys1.time) // Assuming sys1 is master time or activeSys.time
    }
  }, [sys1.isPlaying, sys1.step, sys2.step, drawEnergyGraph, sys1.time])
  // Note: relying on sys1.step stable identity. using sys1.isPlaying value. 
  // If we used [sys1], it would change every frame.
  // sys1.step is stable. sys1.isPlaying changes only on user interaction.
  // drawEnergyGraph depends on activeSys params/history which are stable refs/state-setters, 
  // but activeSys object changes.
  // Actually drawEnergyGraph (lines 49-114) depends on [activeSys, activeTab].
  // activeSys changes every frame. So drawEnergyGraph changes every frame.
  // So renderLogic changes every frame.
  // So renderRef updates every frame.
  // Main loop calls separate function via ref. No cancel/restart. Correct.

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
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <div className="flex flex-col lg:flex-row h-full gap-4 p-4 lg:p-6 w-full">
      {/* Left Main (Canvas + Controls) */}
      <div className="flex-1 flex flex-col min-h-0 gap-4">
        {/* Viewport Container - Grows to fill space */}
        <div className={`relative flex-1 bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700/50 shadow-sm ${mode === "compare" ? "grid grid-rows-2" : ""}`}>

          {/* OVERLAY ENERGY GRAPH (Absolute over the viewport area) - Adjusted height */}
          <div className="absolute bottom-0 left-0 w-full h-[150px] pointer-events-none z-20 flex flex-col justify-end opacity-80">
            <canvas
              ref={energyCanvasRef}
              width={800}
              height={150}
              className="w-full h-full"
            />
          </div>

          {/* System 1 */}
          <div className="relative h-full overflow-hidden">
            {mode === "compare" && <div className="absolute top-2 left-2 z-10 text-xs font-bold text-blue-400 bg-black/50 px-2 py-1 rounded">System 1</div>}
            <OscillatorView
              sysId="sys1"
              params={sys1.params}
              state={sys1.calculateState(sys1.timeRef.current)}
              derived={sys1.derived}
              layout={layout}
              onParameterChange={(p) => sys1.setParams(prev => ({ ...prev, ...p }))}
              onInteractionStart={() => sys1.setIsPlaying(false)}
              onInteractionEnd={() => { }}
              colorTheme="blue"
              label={mode === "single" ? "" : "Hệ 1"}
            />
          </div>

          {/* System 2 (Only in Compare Mode) */}
          {mode === "compare" && (
            <div className="relative h-full overflow-hidden border-t border-slate-700/50">
              <div className="absolute top-2 left-2 z-10 text-xs font-bold text-orange-400 bg-black/50 px-2 py-1 rounded">System 2</div>
              <OscillatorView
                sysId="sys2"
                params={sys2.params}
                state={sys2.calculateState(sys2.timeRef.current)}
                derived={sys2.derived}
                layout={layout}
                onParameterChange={(p) => sys2.setParams(prev => ({ ...prev, ...p }))}
                onInteractionStart={() => {
                  sys1.setIsPlaying(false)
                  sys2.setIsPlaying(false)
                }}
                onInteractionEnd={() => { }}
                colorTheme="orange"
                label="Hệ 2"
              />
            </div>
          )}
        </div>

        {/* UNIFIED CONTROLS - Fixed at bottom */}
        <div className="bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 flex-none flex items-center justify-center gap-3 shrink-0 shadow-sm z-10">
          <PlaybackControls
            isPlaying={isPlaying}
            onPlayPause={togglePlay}
            onReset={handleReset}
            onStepForward={stepForward}
            onStepBackward={stepBackward}
          />
        </div>
      </div>

      {/* Right Sidebar - Scrollable */}
      <div className="lg:w-80 flex-none flex flex-col gap-4 overflow-y-auto pr-1 pb-2 custom-scrollbar lg:h-full">
        <ControlPanel title="Cấu hình hệ thống">
          {/* Mode Selection */}

          {/* Layout Selection */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => { setLayout("horizontal"); handleReset() }}
              className={`flex-1 py-2 rounded border text-xs font-bold uppercase ${layout === "horizontal" ? "bg-slate-700 border-slate-500 text-white" : "border-transparent bg-slate-800 text-slate-400"}`}
            >
              Nằm ngang
            </button>
            <button
              onClick={() => { setLayout("vertical"); handleReset() }}
              className={`flex-1 py-2 rounded border text-xs font-bold uppercase ${layout === "vertical" ? "bg-slate-700 border-slate-500 text-white" : "border-transparent bg-slate-800 text-slate-400"}`}
            >
              Thẳng đứng
            </button>
          </div>

          {/* System Tabs (Only in Compare Mode) */}
          {mode === "compare" && (
            <div className="flex gap-1 mb-4 border-b border-slate-700">
              <button onClick={() => setActiveTab("system1")} className={`flex-1 py-2 text-xs font-bold uppercase border-b-2 transition-colors ${activeTab === "system1" ? "border-blue-500 text-blue-400" : "border-transparent text-slate-500 hover:text-slate-300"}`}>
                System 1
              </button>
              <button onClick={() => setActiveTab("system2")} className={`flex-1 py-2 text-xs font-bold uppercase border-b-2 transition-colors ${activeTab === "system2" ? "border-orange-500 text-orange-400" : "border-transparent text-slate-500 hover:text-slate-300"}`}>
                System 2
              </button>
            </div>
          )}

          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300" key={activeTab}>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Khối lượng m</label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={activeSys.params.mass}
                  onChange={(e) => activeSys.setParams(p => ({ ...p, mass: Number(e.target.value) }))}
                  className={`flex-1 h-2 bg-slate-700 rounded-lg cursor-pointer ${activeTab === 'system1' ? 'accent-cyan-500' : 'accent-orange-500'}`}
                />
                <span className={`w-16 text-right font-mono text-sm ${activeTab === 'system1' ? 'text-cyan-400' : 'text-orange-400'}`}>{activeSys.params.mass} kg</span>
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Độ cứng k</label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={activeSys.params.k}
                  onChange={(e) => activeSys.setParams(p => ({ ...p, k: Number(e.target.value) }))}
                  className={`flex-1 h-2 bg-slate-700 rounded-lg cursor-pointer ${activeTab === 'system1' ? 'accent-cyan-500' : 'accent-orange-500'}`}
                />
                <span className={`w-16 text-right font-mono text-sm ${activeTab === 'system1' ? 'text-cyan-400' : 'text-orange-400'}`}>{activeSys.params.k} N/m</span>
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Biên độ A</label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={activeSys.params.amplitude}
                  onChange={(e) => activeSys.setParams(p => ({ ...p, amplitude: Number(e.target.value) }))}
                  className={`flex-1 h-2 bg-slate-700 rounded-lg cursor-pointer ${activeTab === 'system1' ? 'accent-cyan-500' : 'accent-orange-500'}`}
                />
                <span className={`w-16 text-right font-mono text-sm ${activeTab === 'system1' ? 'text-cyan-400' : 'text-orange-400'}`}>{Math.round(activeSys.params.amplitude)} cm</span>
              </div>
            </div>
          </div>
        </ControlPanel>

        <div className="bg-[#1e293b] rounded-xl p-0 border border-cyan-900/50 overflow-hidden shadow-sm shrink-0">
          <div className="bg-slate-800/50 p-3 border-b border-slate-700 flex items-center gap-2">
            <Activity className="w-4 h-4 text-green-400" />
            <h3 className="text-sm font-bold text-slate-200">Đại lượng ({mode === "compare" ? (activeTab === "system1" ? "Sys 1" : "Sys 2") : "Sys 1"})</h3>
          </div>
          <div className="p-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-[10px] text-gray-500 uppercase">Chu kỳ (T)</div>
              <div className="text-lg font-mono font-bold text-white">
                {activeSys.derived.period.toFixed(2)} <span className="text-xs font-normal text-gray-400">s</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase">Tần số (f)</div>
              <div className="text-lg font-mono font-bold text-white">
                {activeSys.derived.frequency.toFixed(2)} <span className="text-xs font-normal text-gray-400">Hz</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase">Vận tốc Max</div>
              <div className="text-lg font-mono font-bold text-green-400">
                {activeSys.derived.vmax.toFixed(1)} <span className="text-xs font-normal text-gray-400">cm/s</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase">Gia tốc Max</div>
              <div className="text-lg font-mono font-bold text-red-400">
                {activeSys.derived.amax.toFixed(0)} <span className="text-xs font-normal text-gray-400">cm/s²</span>
              </div>
            </div>
            {layout === "vertical" && (
              <div className="col-span-2 bg-slate-900 p-2 rounded border border-slate-700 flex items-center justify-between">
                <span className="text-xs text-yellow-500 flex items-center gap-1">
                  <Ruler size={12} /> Độ giãn lò xo (Δl₀)
                </span>
                <span className="font-mono font-bold text-yellow-400">{(activeSys.derived.deltaL0 * 100).toFixed(1)} cm</span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-[#16213e] rounded-lg p-4 border border-cyan-900/50 shadow-sm shrink-0">
          <h3 className="text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wider">Công thức</h3>
          <div className="text-xs md:text-sm text-gray-300 space-y-1 font-mono">
            <p>ω = √(k/m) = {activeSys.derived.omega.toFixed(2)} rad/s</p>
            <p>T = 2π√(m/k) = {activeSys.derived.period.toFixed(2)} s</p>
            <p>F = -kx (Định luật Hooke)</p>
          </div>
        </div>
      </div>
    </div>
  )
}