"use client"

import { useRef, useEffect } from "react"

interface GraphData {
  t: number
  x: number
  v: number
  a: number
}

interface RealTimeGraphProps {
  data: GraphData[]
}

export default function RealTimeGraph({ data }: RealTimeGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const padding = 40

    // Clear canvas
    ctx.fillStyle = "#1a1a2e"
    ctx.fillRect(0, 0, width, height)

    // Draw grid
    ctx.strokeStyle = "#2a3f5f"
    ctx.lineWidth = 0.5
    for (let i = padding; i < width - 20; i += 40) {
      ctx.beginPath()
      ctx.moveTo(i, 20)
      ctx.lineTo(i, height - 20)
      ctx.stroke()
    }
    for (let i = 20; i < height - 20; i += 30) {
      ctx.beginPath()
      ctx.moveTo(padding, i)
      ctx.lineTo(width - 20, i)
      ctx.stroke()
    }

    // Draw axes
    ctx.strokeStyle = "#666"
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(padding, height / 2)
    ctx.lineTo(width - 20, height / 2)
    ctx.stroke()

    if (data.length < 2) return

    const graphWidth = width - padding - 20
    const graphHeight = height - 40

    // Find max values for scaling
    const maxX = Math.max(...data.map((d) => Math.abs(d.x)), 1)
    const maxV = Math.max(...data.map((d) => Math.abs(d.v)), 1)

    const scaleX = (graphHeight / 2 - 10) / maxX
    const scaleV = (graphHeight / 2 - 10) / maxV

    // Draw x(t) - position
    ctx.strokeStyle = "#22d3ee"
    ctx.lineWidth = 2
    ctx.beginPath()
    data.forEach((point, i) => {
      const x = padding + (i / data.length) * graphWidth
      const y = height / 2 - point.x * scaleX
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.stroke()

    // Draw v(t) - velocity
    ctx.strokeStyle = "#22c55e"
    ctx.lineWidth = 2
    ctx.beginPath()
    data.forEach((point, i) => {
      const x = padding + (i / data.length) * graphWidth
      const y = height / 2 - point.v * scaleV
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.stroke()

    // Legend
    ctx.font = "12px monospace"
    ctx.fillStyle = "#22d3ee"
    ctx.fillText("── x(t)", width - 80, 25)
    ctx.fillStyle = "#22c55e"
    ctx.fillText("── v(t)", width - 80, 45)

    // Axis label
    ctx.fillStyle = "#888"
    ctx.fillText("t →", width - 40, height / 2 + 15)
  }, [data])

  return (
    <div className="bg-[#16213e] rounded-lg p-4 border border-cyan-900/50">
      <h3 className="text-cyan-400 font-semibold mb-2">Đồ thị x(t), v(t)</h3>
      <canvas ref={canvasRef} width={600} height={150} className="w-full rounded" />
    </div>
  )
}
