"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { Play, Pause, RotateCcw, Eye, EyeOff, Waves, SkipBack, SkipForward, Sun, Zap, Disc, Maximize2, Rainbow } from "lucide-react"



// --- CÁC HÀM BỔ TRỢ ---

// Polyfill cho hàm sinc
if (!(Math as any).sinc) {
  (Math as any).sinc = function (x: number) {
    return x === 0 ? 1 : Math.sin(x) / x
  }
}

// Hàm chuyển đổi bước sóng (nm) sang màu RGB
const wavelengthToRGB = (wavelength: number) => {
  let r, g, b, alpha
  if (wavelength >= 380 && wavelength < 440) {
    r = -(wavelength - 440) / (440 - 380); g = 0; b = 1
  } else if (wavelength >= 440 && wavelength < 490) {
    r = 0; g = (wavelength - 440) / (490 - 440); b = 1
  } else if (wavelength >= 490 && wavelength < 510) {
    r = 0; g = 1; b = -(wavelength - 510) / (510 - 490)
  } else if (wavelength >= 510 && wavelength < 580) {
    r = (wavelength - 510) / (580 - 510); g = 1; b = 0
  } else if (wavelength >= 580 && wavelength < 645) {
    r = 1; g = -(wavelength - 645) / (645 - 580); b = 0
  } else if (wavelength >= 645 && wavelength < 781) {
    r = 1; g = 0; b = 0
  } else {
    r = 0; g = 0; b = 0
  }

  if (wavelength >= 380 && wavelength < 420) {
    alpha = 0.3 + (0.7 * (wavelength - 380)) / (420 - 380)
  } else if (wavelength >= 420 && wavelength < 701) {
    alpha = 1.0
  } else if (wavelength >= 701 && wavelength < 781) {
    alpha = 0.3 + (0.7 * (781 - wavelength)) / (781 - 701)
  } else {
    alpha = 0
  }

  return {
    r: Math.round(r * 255 * alpha),
    g: Math.round(g * 255 * alpha),
    b: Math.round(b * 255 * alpha),
    colorString: `rgb(${Math.round(r * 255 * alpha)}, ${Math.round(g * 255 * alpha)}, ${Math.round(b * 255 * alpha)})`
  }
}

// --- COMPONENT CHÍNH ---
export default function WaveInterference() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // State chung
  const [mode, setMode] = useState<'mechanical' | 'light'>('mechanical')

  // State Sóng cơ
  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [showNodalLines, setShowNodalLines] = useState(false)
  const [view3D, setView3D] = useState(false)
  const [mechParams, setMechParams] = useState({
    frequency: 0.8,
    amplitude: 1.0,
    sourceDistance: 120,
    wavelength: 40,
  })

  // State Sóng ánh sáng
  const [lightMode, setLightMode] = useState<'mono' | 'dual' | 'white'>('mono')
  const [lightParams, setLightParams] = useState({
    wavelength1: 500, // Lambda 1 (nm)
    wavelength2: 650, // Lambda 2 (nm)
    slitDistance: 1.0, // a (mm)
    screenDistance: 2.0, // D (m)
  })

  const animationRef = useRef<number | undefined>(undefined)
  const timeRef = useRef(0)

  // --- LOGIC SÓNG CƠ ---
  const omega = 2 * Math.PI * mechParams.frequency
  const k_mech = (2 * Math.PI) / mechParams.wavelength
  const dt = 1 / 60

  const calculateWaveHeight = useCallback(
    (x: number, y: number, s1x: number, s1y: number, s2x: number, s2y: number, t: number) => {
      const d1 = Math.sqrt((x - s1x) ** 2 + (y - s1y) ** 2)
      const d2 = Math.sqrt((x - s2x) ** 2 + (y - s2y) ** 2)
      const amp1 = mechParams.amplitude / Math.sqrt(1 + d1 * 0.01)
      const amp2 = mechParams.amplitude / Math.sqrt(1 + d2 * 0.01)

      const wave1 = amp1 * Math.sin(k_mech * d1 - omega * t)
      const wave2 = amp2 * Math.sin(k_mech * d2 - omega * t)
      return wave1 + wave2
    },
    [k_mech, omega, mechParams.amplitude],
  )

  const getNodalLinePoints = useCallback(
    (width: number, height: number, s1x: number, s1y: number, s2x: number, s2y: number, order: number) => {
      const points: { x: number; y: number }[] = []
      const pathDiff = (order + 0.5) * mechParams.wavelength
      for (let x = 0; x < width; x += 2) {
        for (let y = 0; y < height; y += 2) {
          const d1 = Math.sqrt((x - s1x) ** 2 + (y - s1y) ** 2)
          const d2 = Math.sqrt((x - s2x) ** 2 + (y - s2y) ** 2)
          if (Math.abs(Math.abs(d1 - d2) - pathDiff) < 2.5) points.push({ x, y })
        }
      }
      return points
    },
    [mechParams.wavelength],
  )

  const drawMechanical = useCallback(
    (ctx: CanvasRenderingContext2D, t: number) => {
      const width = ctx.canvas.width
      const height = ctx.canvas.height
      const centerY = height / 2
      const source1 = { x: 80, y: centerY - mechParams.sourceDistance / 2 }
      const source2 = { x: 80, y: centerY + mechParams.sourceDistance / 2 }

      const imageData = ctx.createImageData(width, height)
      const data = imageData.data
      const resolution = view3D ? 3 : 2

      if (view3D) {
        // Gradient Background
        const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
        bgGrad.addColorStop(0, "#0f172a");
        bgGrad.addColorStop(1, "#1e293b");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        const perspectiveScale = 0.6;
        const horizonY = height * 0.2;
        const gridSpacing = 4; // High fidelity
        const zStart = 0;
        const zEnd = height * 1.5;

        // Render from Far (z=0) to Near (z=max)
        for (let z = zStart; z <= zEnd; z += gridSpacing) {
          const perspY = horizonY + z * perspectiveScale;
          // Skip if off screen
          if (perspY > height) break;

          const scale = 0.2 + (z / (height * 1.2)) * 0.8;

          // Generate points for this Z-slice
          const points = [];
          for (let x = 0; x <= width; x += gridSpacing) {
            const worldX = (x - width / 2) / scale + width / 2;
            const worldZ = z;

            // Calculate Wave Height
            const waveHeight = calculateWaveHeight(worldX, worldZ, source1.x, source1.y, source2.x, source2.y, t);

            const screenX = width / 2 + (x - width / 2); // Spread X based on perspective?
            // Actually `x` loop is screen space X?
            // In previous code: `worldX` was derived from `x`.
            // `const screenX = width / 2 + (x - width / 2) * scale` ???
            // Usually: x is projected.
            // Let's stick to iterating screen X and unprojecting for sample is easier for filling screen.
            // But simpler: Iterate Screen X.
            // `const worldX = (x - width/2)/scale + width/2`.
            // This assumes linear mapping.

            // Display Logic
            // Perspective Y shift based on height
            const screenY = perspY - waveHeight * 12 * scale;
            points.push({ x, y: screenY });
          }

          if (points.length < 2) continue;

          // Draw Filled Polygon (Occlusion)
          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);
          for (let i = 1; i < points.length; i++) {
            // Smooth curves
            // ctx.lineTo(points[i].x, points[i].y);
            // Quadratic for smoother look? 
            // Simple lineTo is fast and fine for dense grid.
            ctx.lineTo(points[i].x, points[i].y);
          }
          // Close shape downwards
          ctx.lineTo(width, height);
          ctx.lineTo(0, height);
          ctx.closePath();

          ctx.fillStyle = "#0f172a"; // Opaque dark fill
          ctx.fill();

          // Draw Stroke (The Water Surface Line)
          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);
          for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
          }

          // Distance based color fading
          const distanceAlpha = 0.3 + 0.7 * (z / zEnd);
          ctx.strokeStyle = `rgba(34, 211, 238, ${distanceAlpha})`; // Cyan-400
          ctx.lineWidth = 1 + scale; // Lines thicker when near
          ctx.stroke();
        }

      } else {
        // REALISTIC RIPPLE TANK SHADER (2D)
        for (let y = 0; y < height; y += resolution) {
          for (let x = 0; x < width; x += resolution) {
            const waveHeight = calculateWaveHeight(x, y, source1.x, source1.y, source2.x, source2.y, t)

            // Ripple Tank Physics:
            // Crests (Positive) act as convex lenses -> Focus light -> Bright Strips
            // Troughs (Negative) act as concave lenses -> Diverge light -> Dark Strips
            // Flat water -> Average Brightness

            const maxAmp = 2 * mechParams.amplitude
            const val = Math.max(-1, Math.min(1, waveHeight / maxAmp)) // Clamp -1..1

            let r, g, b
            // Base Water Color (Deep Blue-Grey)
            const baseR = 15, baseG = 113, baseB = 115

            if (val > 0) {
              // Highlight (Crests) - Cyan/White
              const intensity = Math.pow(val, 0.7); // Non-linear for sharper crests
              r = 15 + (220 - 15) * intensity
              g = 113 + (255 - 113) * intensity
              b = 115 + (255 - 115) * intensity
            } else {
              // Shadow (Troughs) - Darker
              const intensity = Math.pow(Math.abs(val), 0.7)
              r = 15 * (1 - intensity * 0.8) // Don't go pitch black
              g = 113 * (1 - intensity * 0.8)
              b = 115 * (1 - intensity * 0.8)
            }

            // Render Pixel (or Block)
            for (let dy = 0; dy < resolution && y + dy < height; dy++) {
              for (let dx = 0; dx < resolution && x + dx < width; dx++) {
                const idx = ((y + dy) * width + (x + dx)) * 4
                data[idx] = r; data[idx + 1] = g; data[idx + 2] = b; data[idx + 3] = 255
              }
            }
          }
        }
        ctx.putImageData(imageData, 0, 0)
      }

      if (showNodalLines && !view3D) {
        ctx.strokeStyle = "rgba(255, 100, 100, 0.8)"; ctx.lineWidth = 2; ctx.setLineDash([5, 5])
        const maxOrder = Math.floor(mechParams.sourceDistance / mechParams.wavelength) + 2
        for (let order = 0; order <= maxOrder; order++) {
          const points = getNodalLinePoints(width, height, source1.x, source1.y, source2.x, source2.y, order)
          if (points.length > 0) {
            const upperPoints = points.filter((p) => p.y < centerY).sort((a, b) => a.x - b.x)
            const lowerPoints = points.filter((p) => p.y >= centerY).sort((a, b) => a.x - b.x)
            if (upperPoints.length > 5) { ctx.beginPath(); ctx.moveTo(upperPoints[0].x, upperPoints[0].y); for (let i = 1; i < upperPoints.length; i++) ctx.lineTo(upperPoints[i].x, upperPoints[i].y); ctx.stroke(); }
            if (lowerPoints.length > 5) { ctx.beginPath(); ctx.moveTo(lowerPoints[0].x, lowerPoints[0].y); for (let i = 1; i < lowerPoints.length; i++) ctx.lineTo(lowerPoints[i].x, lowerPoints[i].y); ctx.stroke(); }
          }
        }
        ctx.strokeStyle = "rgba(100, 255, 100, 0.5)"; ctx.setLineDash([8, 4]); ctx.beginPath(); ctx.moveTo(source1.x, centerY); ctx.lineTo(width, centerY); ctx.stroke(); ctx.setLineDash([])
      }

      if (!view3D) {
        const drawSource = (x: number, y: number, label: string) => {
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 20)
          gradient.addColorStop(0, "rgba(255, 50, 50, 1)"); gradient.addColorStop(1, "rgba(255, 50, 50, 0)")
          ctx.fillStyle = gradient; ctx.beginPath(); ctx.arc(x, y, 20, 0, 2 * Math.PI); ctx.fill()
          ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(x, y, 4, 0, 2 * Math.PI); ctx.fill()
          ctx.fillStyle = "#fff"; ctx.font = "bold 14px monospace"; ctx.fillText(label, x - 25, y + 5)
        }
        drawSource(source1.x, source1.y, "S₁"); drawSource(source2.x, source2.y, "S₂")
      }
    },
    [mechParams, view3D, showNodalLines, calculateWaveHeight, getNodalLinePoints]
  )

  // --- HÀM VẼ GIAO THOA ÁNH SÁNG ---
  const drawLight = useCallback((ctx: CanvasRenderingContext2D) => {
    const width = ctx.canvas.width
    const height = ctx.canvas.height
    const centerX = width / 2

    // Nền tối
    ctx.fillStyle = "#020617"
    ctx.fillRect(0, 0, width, height)

    const a = lightParams.slitDistance * 1e-3
    const D = lightParams.screenDistance
    const physicalScreenWidth = 0.04
    const pixelsPerMeter = width / physicalScreenWidth

    let wavelengths: { wl: number, intensityScale: number }[] = []

    if (lightMode === 'mono') {
      wavelengths.push({ wl: lightParams.wavelength1, intensityScale: 1.0 })
    } else if (lightMode === 'dual') {
      wavelengths.push({ wl: lightParams.wavelength1, intensityScale: 0.8 })
      wavelengths.push({ wl: lightParams.wavelength2, intensityScale: 0.8 })
    } else if (lightMode === 'white') {
      for (let w = 380; w <= 750; w += 10) {
        let scale = 0.5
        if (w > 450 && w < 650) scale = 0.8
        wavelengths.push({ wl: w, intensityScale: scale * 0.15 })
      }
    }

    const imageData = ctx.createImageData(width, height)
    const data = imageData.data

    for (let x = 0; x < width; x++) {
      const xPhysical = (x - centerX) / pixelsPerMeter
      let rTotal = 0, gTotal = 0, bTotal = 0

      for (const src of wavelengths) {
        const lambda = src.wl * 1e-9
        const phaseDifference = (2 * Math.PI * a * xPhysical) / (lambda * D)
        let intensity = Math.cos(phaseDifference / 2) ** 2

        // SỬA LỖI: Đổi tên biến 'b' thành 'slitWidth' để không trùng với 'b' trong RGB
        const slitWidth = a / 10
        const diffractionPhase = (Math.PI * slitWidth * xPhysical) / (lambda * D)
        const diffractionFactor = (Math as any).sinc(diffractionPhase) ** 2
        intensity = intensity * diffractionFactor * src.intensityScale

        const rgb = wavelengthToRGB(src.wl)
        rTotal += rgb.r * intensity
        gTotal += rgb.g * intensity
        bTotal += rgb.b * intensity
      }

      rTotal = Math.min(255, rTotal)
      gTotal = Math.min(255, gTotal)
      bTotal = Math.min(255, bTotal)

      // Môi phỏng Chùm tia Laser (Gaussian Beam)
      const beamRadius = height * 0.35;

      for (let y = 0; y < height; y++) {
        const idx = (y * width + x) * 4

        // Vertical Falloff (Beam Shape)
        const distY = y - height / 2;
        const beamFactor = Math.exp(-(distY * distY) / (2 * beamRadius * beamRadius));

        // Apply Beam Profile
        let r = rTotal * beamFactor;
        let g = gTotal * beamFactor;
        let b = bTotal * beamFactor;

        // "Hot Spot" Bloom effect (Overexposure)
        // Khi cường độ quá lớn, cảm biến/mắt bị bão hòa -> Trắng
        const maxVal = Math.max(r, g, b);
        if (maxVal > 220) {
          const bloom = (maxVal - 220) * 0.8;
          r += bloom; g += bloom; b += bloom;
        }

        // Laser Speckle Noise (Đốm ngẫu nhiên đặc trưng của laser)
        // Noise tác động mạnh hơn ở vùng sáng
        if (maxVal > 10) {
          const speckle = (Math.random() - 0.5) * 30 * (maxVal / 255);
          r += speckle; g += speckle; b += speckle;
        }

        data[idx] = Math.max(0, Math.min(255, r))
        data[idx + 1] = Math.max(0, Math.min(255, g))
        data[idx + 2] = Math.max(0, Math.min(255, b))
        data[idx + 3] = 255
      }
    }
    ctx.putImageData(imageData, 0, 0)

    // --- VẼ KÍ HIỆU VÂN TRUNG TÂM (k=0) ---
    ctx.save()
    // Kẻ đường đứt nét sáng rõ
    ctx.strokeStyle = "rgba(255, 255, 255, 0.9)"
    ctx.setLineDash([4, 4])
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(centerX, 0)
    ctx.lineTo(centerX, height)
    ctx.stroke()

    ctx.textAlign = "center"
    const label = "Vân trung tâm (k=0)"
    ctx.font = "bold 13px monospace"
    const textWidth = ctx.measureText(label).width

    // Hộp nhãn nổi bật
    const boxX = centerX - textWidth / 2 - 8;
    const boxY = 10;
    const boxW = textWidth + 16;
    const boxH = 26;

    ctx.fillStyle = "rgba(15, 23, 42, 0.9)" // Slate-900 transparent
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
    ctx.fillRect(boxX, boxY, boxW, boxH)
    ctx.strokeRect(boxX, boxY, boxW, boxH)

    ctx.fillStyle = "#ffffff"
    ctx.fillText(label, centerX, boxY + 17)
    ctx.restore()

    // --- VẼ THƯỚC ĐO ---
    if (lightMode !== 'white') {
      const i1_meter = (lightParams.wavelength1 * 1e-9 * D) / a
      const i1_pixel = i1_meter * pixelsPerMeter

      ctx.textAlign = "center"
      const markerY = height / 2

      if (i1_pixel > 15 && i1_pixel < width / 2) {
        const firstBrightX = centerX + i1_pixel
        const color1 = wavelengthToRGB(lightParams.wavelength1).colorString

        ctx.strokeStyle = "rgba(255,255,255,0.9)"; ctx.fillStyle = "rgba(255,255,255,0.9)"; ctx.lineWidth = 1.5

        ctx.beginPath(); ctx.moveTo(centerX, markerY); ctx.lineTo(firstBrightX, markerY); ctx.stroke()
        ctx.beginPath(); ctx.moveTo(centerX + 5, markerY - 4); ctx.lineTo(centerX, markerY); ctx.lineTo(centerX + 5, markerY + 4); ctx.fill()
        ctx.beginPath(); ctx.moveTo(firstBrightX - 5, markerY - 4); ctx.lineTo(firstBrightX, markerY); ctx.lineTo(firstBrightX - 5, markerY + 4); ctx.fill()

        ctx.font = "bold 14px monospace"
        const text = `i₁ = ${(i1_meter * 1000).toFixed(2)}mm`
        const textWidth = ctx.measureText(text).width
        ctx.fillStyle = "rgba(0,0,0,0.8)"; ctx.fillRect(centerX + i1_pixel / 2 - textWidth / 2 - 4, markerY - 24, textWidth + 8, 20)
        ctx.fillStyle = color1; ctx.fillText(text, centerX + i1_pixel / 2, markerY - 10)
      }
    }
    ctx.textAlign = "left"
  }, [lightParams, lightMode])


  // --- ANIMATION LOOP ---
  const animate = useCallback(() => {
    const ctx = canvasRef.current?.getContext("2d")
    if (!ctx) return

    if (mode === 'mechanical') {
      timeRef.current += dt
      setTime(timeRef.current)
      drawMechanical(ctx, timeRef.current)
      if (isPlaying) {
        animationRef.current = requestAnimationFrame(animate)
      }
    } else {
      drawLight(ctx)
    }
  }, [isPlaying, drawMechanical, drawLight, mode, dt])

  useEffect(() => {
    if (isPlaying && mode === 'mechanical') {
      animationRef.current = requestAnimationFrame(animate)
    }
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current) }
  }, [isPlaying, animate, mode])

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d")
    if (!ctx) return
    if (mode === 'mechanical') {
      drawMechanical(ctx, timeRef.current)
    } else {
      drawLight(ctx)
    }
  }, [mechParams, view3D, showNodalLines, lightParams, lightMode, mode, drawMechanical, drawLight])

  const handleReset = () => {
    if (mode !== 'mechanical') return
    setIsPlaying(false); timeRef.current = 0; setTime(0)
    canvasRef.current?.getContext("2d") && drawMechanical(canvasRef.current.getContext("2d")!, 0)
  }
  const handleStep = (direction: number) => {
    if (mode !== 'mechanical') return
    setIsPlaying(false)
    timeRef.current = Math.max(0, timeRef.current + dt * direction * 5)
    setTime(timeRef.current)
    canvasRef.current?.getContext("2d") && drawMechanical(canvasRef.current.getContext("2d")!, timeRef.current)
  }

  const calculateI = (wl: number) => (wl * 1e-9 * lightParams.screenDistance) / (lightParams.slitDistance * 1e-3) * 1000

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 font-sans items-start">
      <div className="lg:col-span-3 space-y-4">
        {/* Nút chuyển chế độ */}
        <div className="flex gap-3 mb-2 p-1 bg-slate-800/50 rounded-xl w-fit backdrop-blur-sm border border-slate-700/50">
          <button
            onClick={() => { setMode('mechanical'); setIsPlaying(false); }}
            className={`px-5 py-2 rounded-lg font-bold flex items-center gap-2 transition-all text-sm ${mode === 'mechanical' ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-[1.02]' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}
          >
            <Waves size={18} className={mode === 'mechanical' ? 'animate-pulse' : ''} /> mặt nước
          </button>
          <button
            onClick={() => { setMode('light'); setIsPlaying(false); }}
            className={`px-5 py-2 rounded-lg font-bold flex items-center gap-2 transition-all text-sm ${mode === 'light' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25 scale-[1.02]' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}
          >
            <Sun size={18} className={mode === 'light' ? 'animate-spin-slow' : ''} /> Ánh Sáng
          </button>
        </div>

        {/* Khung mô phỏng - Full height */}
        <div className="bg-[#1e293b] rounded-xl border border-slate-700/50 shadow-xl overflow-hidden group">
          {/* Header của Canvas */}
          <div className="px-4 py-2 border-b border-slate-700/50 bg-slate-800/50 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
              {mode === 'mechanical' ? <Waves className="w-4 h-4 text-cyan-400" /> : <Rainbow className="w-4 h-4 text-amber-400" />}
              {mode === 'mechanical' ? 'Mô phỏng giao thoa mặt nước' : 'Mô phỏng giao thoa ánh sáng'}
            </h3>
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
            </div>
          </div>

          <div className="p-1 bg-[#0f172a] relative">
            <canvas ref={canvasRef} width={800} height={340} className="w-full rounded-b-lg block" />
            <div className="absolute bottom-2 right-4 text-[10px] text-slate-600 font-mono pointer-events-none group-hover:text-slate-500 transition-colors">
              Hô Hoàng Anh A1K50
            </div>
          </div>
        </div>

        {/* Controls Sóng cơ (Chỉ hiện khi ở chế độ sóng cơ) */}
        {mode === 'mechanical' && (
          <div className="bg-[#1e293b]/80 backdrop-blur rounded-xl p-3 border border-slate-700/50 flex items-center gap-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2">
              <button onClick={handleReset} className="w-9 h-9 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95">
                <RotateCcw size={16} />
              </button>
              <button onClick={() => handleStep(-1)} className="w-9 h-9 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95">
                <SkipBack size={16} />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-lg active:scale-95 ${isPlaying ? "bg-amber-500 hover:bg-amber-400 shadow-amber-900/20" : "bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/30"
                  } text-white`}
              >
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
              </button>
              <button onClick={() => handleStep(1)} className="w-9 h-9 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95">
                <SkipForward size={16} />
              </button>
            </div>
            <div className="flex-1"></div>
          </div>
        )}
      </div>

      {/* CỘT PHẢI: BẢNG THAM SỐ */}
      <div className="space-y-4">
        {mode === 'mechanical' ? (
          <>
            <div className="bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 animate-in fade-in slide-in-from-right-4 shadow-lg">
              <h3 className="text-cyan-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider border-b border-slate-700/50 pb-2">
                <Waves className="w-4 h-4" /> Thông số nguồn
              </h3>
              <div className="space-y-4">
                <div className="group">
                  <div className="flex justify-between text-xs mb-1">
                    <label className="text-slate-300">Tần số (f)</label>
                    <span className="text-cyan-400 font-mono">{mechParams.frequency.toFixed(1)} Hz</span>
                  </div>
                  <input type="range" min="0.5" max="2.0" step="0.1" value={mechParams.frequency} onChange={(e) => setMechParams({ ...mechParams, frequency: Number(e.target.value) })} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                </div>
                <div className="group">
                  <div className="flex justify-between text-xs mb-1">
                    <label className="text-slate-300">Bước sóng (λ)</label>
                    <span className="text-cyan-400 font-mono">{mechParams.wavelength} cm</span>
                  </div>
                  <input type="range" min="20" max="80" step="5" value={mechParams.wavelength} onChange={(e) => setMechParams({ ...mechParams, wavelength: Number(e.target.value) })} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                </div>
                <div className="group">
                  <div className="flex justify-between text-xs mb-1">
                    <label className="text-slate-300">Khoảng cách nguồn</label>
                    <span className="text-cyan-400 font-mono">{mechParams.sourceDistance} cm</span>
                  </div>
                  <input type="range" min="40" max="250" step="10" value={mechParams.sourceDistance} onChange={(e) => setMechParams({ ...mechParams, sourceDistance: Number(e.target.value) })} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                </div>
                <div className="group">
                  <div className="flex justify-between text-xs mb-1">
                    <label className="text-slate-300">Biên độ nguồn</label>
                    <span className="text-cyan-400 font-mono">{mechParams.amplitude.toFixed(1)}</span>
                  </div>
                  <input type="range" min="0.5" max="2.5" step="0.1" value={mechParams.amplitude} onChange={(e) => setMechParams({ ...mechParams, amplitude: Number(e.target.value) })} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                </div>
              </div>
            </div>

            <div className="bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 shadow-lg">
              <h3 className="text-cyan-400 font-bold mb-3 text-sm uppercase tracking-wider border-b border-slate-700/50 pb-2">Hiển thị</h3>
              <div className="space-y-2">
                <label className="flex items-center justify-between cursor-pointer group hover:bg-slate-800/50 p-2 rounded transition-colors">
                  <span className="text-slate-300 text-xs flex items-center gap-2">
                    {showNodalLines ? <Eye className="w-3 h-3 text-cyan-400" /> : <EyeOff className="w-3 h-3 text-slate-500" />}
                    Đường cực tiểu (Nodal)
                  </span>
                  <div onClick={() => setShowNodalLines(!showNodalLines)} className={`w-8 h-4 rounded-full transition-all cursor-pointer flex items-center px-0.5 border ${showNodalLines ? "bg-cyan-600 border-cyan-500" : "bg-slate-700 border-slate-600"}`}>
                    <div className={`w-3 h-3 bg-white rounded-full shadow-sm transform transition-transform ${showNodalLines ? "translate-x-4" : "translate-x-0"}`} />
                  </div>
                </label>
                <label className="flex items-center justify-between cursor-pointer group hover:bg-slate-800/50 p-2 rounded transition-colors">
                  <span className="text-slate-300 text-xs flex items-center gap-2">
                    <Maximize2 className="w-3 h-3 text-slate-400" />
                    Chế độ 3D Surface
                  </span>
                  {/* SỬA LỖI SVG: Xóa xmlns bị lỗi */}
                  <div onClick={() => setView3D(!view3D)} className={`w-8 h-4 rounded-full transition-all cursor-pointer flex items-center px-0.5 border ${view3D ? "bg-cyan-600 border-cyan-500" : "bg-slate-700 border-slate-600"}`}>
                    <div className={`w-3 h-3 bg-white rounded-full shadow-sm transform transition-transform ${view3D ? "translate-x-4" : "translate-x-0"}`} />
                  </div>
                </label>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 animate-in fade-in slide-in-from-right-4 shadow-lg">
              <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider border-b border-slate-700 pb-2">
                <Zap className="w-4 h-4" /> Điều Khiển
              </h3>

              <div className="bg-slate-800/50 p-3 rounded-lg mb-4 space-y-1">
                <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wide">Chế độ</p>
                <label className="flex items-center gap-2 cursor-pointer p-1.5 rounded hover:bg-slate-700/50 transition-colors">
                  <input type="radio" name="lightMode" checked={lightMode === 'mono'} onChange={() => setLightMode('mono')} className="accent-emerald-500 w-3 h-3" />
                  <span className={`text-xs ${lightMode === 'mono' ? 'text-white' : 'text-slate-400'}`}>Đơn sắc (<span className="font-serif italic">λ₁</span>)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer p-1.5 rounded hover:bg-slate-700/50 transition-colors">
                  <input type="radio" name="lightMode" checked={lightMode === 'dual'} onChange={() => setLightMode('dual')} className="accent-emerald-500 w-3 h-3" />
                  <span className={`text-xs ${lightMode === 'dual' ? 'text-white' : 'text-slate-400'}`}>Hai màu (<span className="font-serif italic">λ₁, λ₂</span>)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer p-1.5 rounded hover:bg-slate-700/50 transition-colors">
                  <input type="radio" name="lightMode" checked={lightMode === 'white'} onChange={() => setLightMode('white')} className="accent-emerald-500 w-3 h-3" />
                  <span className={`text-xs ${lightMode === 'white' ? 'text-white' : 'text-slate-400'}`}>Ánh sáng Trắng</span>
                </label>
              </div>

              <div className="space-y-4">
                {(lightMode === 'mono' || lightMode === 'dual') && (
                  <div className="group">
                    <div className="flex justify-between text-xs mb-1">
                      <label className="text-slate-300">Bước sóng 1 (λ₁)</label>
                      <span style={{ color: wavelengthToRGB(lightParams.wavelength1).colorString }} className="font-mono font-bold text-xs bg-slate-800 px-1.5 rounded">
                        {lightParams.wavelength1} nm
                      </span>
                    </div>
                    <input type="range" min="380" max="750" step="5" value={lightParams.wavelength1} onChange={(e) => setLightParams({ ...lightParams, wavelength1: Number(e.target.value) })} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                  </div>
                )}

                {lightMode === 'dual' && (
                  <div className="group">
                    <div className="flex justify-between text-xs mb-1">
                      <label className="text-slate-300">Bước sóng 2 (λ₂)</label>
                      <span style={{ color: wavelengthToRGB(lightParams.wavelength2).colorString }} className="font-mono font-bold text-xs bg-slate-800 px-1.5 rounded">
                        {lightParams.wavelength2} nm
                      </span>
                    </div>
                    <input type="range" min="380" max="750" step="5" value={lightParams.wavelength2} onChange={(e) => setLightParams({ ...lightParams, wavelength2: Number(e.target.value) })} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                  </div>
                )}

                <div className="pt-2 border-t border-slate-700/50 space-y-3">
                  <div className="group">
                    <div className="flex justify-between text-xs mb-1">
                      <label className="text-slate-300">Khoảng cách a</label>
                      <span className="text-emerald-400 font-mono text-xs">{lightParams.slitDistance.toFixed(2)} mm</span>
                    </div>
                    <input type="range" min="0.2" max="2.0" step="0.05" value={lightParams.slitDistance} onChange={(e) => setLightParams({ ...lightParams, slitDistance: Number(e.target.value) })} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                  </div>

                  <div className="group">
                    <div className="flex justify-between text-xs mb-1">
                      <label className="text-slate-300">Khoảng cách D</label>
                      <span className="text-emerald-400 font-mono text-xs">{lightParams.screenDistance.toFixed(1)} m</span>
                    </div>
                    <input type="range" min="1.0" max="4.0" step="0.1" value={lightParams.screenDistance} onChange={(e) => setLightParams({ ...lightParams, screenDistance: Number(e.target.value) })} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-600 rounded-xl p-3 border border-emerald-500 shadow-lg text-white">
              <h3 className="font-bold mb-2 text-xs flex items-center gap-2 uppercase tracking-wide opacity-90">
                <Disc className="w-3 h-3" /> Kết Quả
              </h3>

              {lightMode === 'white' ? (
                <div className="text-xs space-y-1 opacity-90">
                  <p>Dải màu cầu vồng.</p>
                  <p>Vân trung tâm màu trắng.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-between items-end border-b border-emerald-500/50 pb-1">
                    <span className="text-xs text-emerald-100 opacity-80">i₁:</span>
                    <span className="font-mono text-lg font-bold leading-none">{calculateI(lightParams.wavelength1).toFixed(2)} <span className="text-[10px] font-normal opacity-70">mm</span></span>
                  </div>
                  {lightMode === 'dual' && (
                    <div className="flex justify-between items-end border-b border-emerald-500/50 pb-1">
                      <span className="text-xs text-emerald-100 opacity-80">i₂:</span>
                      <span className="font-mono text-lg font-bold leading-none">{calculateI(lightParams.wavelength2).toFixed(2)} <span className="text-[10px] font-normal opacity-70">mm</span></span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}