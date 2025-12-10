"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { Play, Pause, RotateCcw, SkipBack, SkipForward, Activity, Settings, TrendingDown, Wind, Zap, Droplets, Hexagon } from "lucide-react"

// --- COMPONENT CON ---
const ControlPanel = ({ title, icon: Icon, children }: { title: string; icon?: any; children: React.ReactNode }) => (
    <div className="bg-[#1e293b] rounded-xl border border-slate-700/50 shadow-sm overflow-hidden flex flex-col h-full">
        <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700/50 flex items-center gap-2">
            {Icon && <Icon size={16} className="text-cyan-400" />}
            <h3 className="text-slate-300 font-bold text-xs uppercase tracking-wider">{title}</h3>
        </div>
        <div className="p-4 space-y-4 flex-1">{children}</div>
    </div>
)

// --- GRID BACKGROUND COMPONENT ---
const GridBackground = () => (
    <defs>
        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
        </pattern>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#smallGrid)" />
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#475569" strokeWidth="1" opacity="0.5" />
        </pattern>
    </defs>
)

const ENVIRONMENTS: Record<string, { name: string; beta: number; color: string; icon: any }> = {
    vacuum: { name: 'Chân không', beta: 0, color: '#94a3b8', icon: Zap },
    air: { name: 'Không khí', beta: 0.05, color: '#38bdf8', icon: Wind },
    water: { name: 'Nước', beta: 0.3, color: '#3b82f6', icon: Droplets },
    oil: { name: 'Dầu nhớt', beta: 0.8, color: '#eab308', icon: Hexagon }
};

export default function DampedOscillation() {
    const energyCanvasRef = useRef<HTMLCanvasElement>(null)

    const [isPlaying, setIsPlaying] = useState(false)
    const [time, setTime] = useState(0)
    const [env, setEnv] = useState('air')
    const [graphMode, setGraphMode] = useState<'x' | 'v' | 'a'>('x') // Chế độ hiển thị đồ thị
    const GRAPH_WINDOW = 20

    const [params, setParams] = useState({
        A: 80,   // px
        f: 0.5,  // Hz
        phi: 0,  // rad
        m: 1.0,  // kg
        k: 20    // N/m
    })

    const energyHistoryRef = useRef<{ t: number, w: number }[]>([])
    const animationRef = useRef<number>()
    const timeRef = useRef(0)
    const dt = 0.02

    // --- TÍNH TOÁN ---
    const beta = ENVIRONMENTS[env].beta
    const omega = 2 * Math.PI * params.f

    // Tính trạng thái x, v, a tại thời điểm t
    const calculateState = useCallback((t: number) => {
        // Phase
        const phase = omega * t + params.phi
        const exp = Math.exp(-beta * t)

        // Li độ x
        const x = params.A * exp * Math.cos(phase)
        const envelope = params.A * exp

        // Vận tốc v = dx/dt
        const v = -beta * x - params.A * exp * omega * Math.sin(phase)

        // Gia tốc a = dv/dt
        const a = -2 * beta * v - (beta * beta + omega * omega) * x

        // Năng lượng (xấp xỉ)
        const w0 = 0.5 * params.k * (params.A / 100) ** 2
        const w = w0 * Math.exp(-2 * beta * t)

        return { x, v, a, envelope, w }
    }, [beta, omega, params.A, params.k, params.phi])

    // --- GENERATE SVG PATHS ---
    const width = 800
    const height = 380
    const centerY = height / 2
    const shift = Math.max(0, time - GRAPH_WINDOW)
    const timeScale = width / GRAPH_WINDOW

    const generatePaths = useCallback(() => {
        const points = []
        const envTop = []
        const envBot = []

        const scaleV = omega > 0 ? 1 / omega : 1;
        const scaleA = omega > 0 ? 1 / (omega * omega) : 1;

        for (let i = 0; i <= width; i += 2) {
            const t_plot = shift + i / timeScale
            const state = calculateState(t_plot)

            let val = 0;
            if (graphMode === 'x') val = state.x;
            else if (graphMode === 'v') val = state.v * scaleV;
            else if (graphMode === 'a') val = state.a * scaleA;

            points.push(`${i},${centerY - val}`)

            if (graphMode === 'x') {
                envTop.push(`${i},${centerY - state.envelope}`)
                envBot.push(`${i},${centerY + state.envelope}`)
            }
        }

        return {
            wave: `M ${points.join(" L ")}`,
            envTop: graphMode === 'x' ? `M ${envTop.join(" L ")}` : "",
            envBot: graphMode === 'x' ? `M ${envBot.join(" L ")}` : "",
        }
    }, [calculateState, graphMode, timeScale, centerY, omega, shift])

    const paths = generatePaths()
    const cx = (time - shift) * timeScale
    const currState = calculateState(time)

    // Value to display for the dot (normalized)
    let currentDisplayVal = currState.x;
    if (graphMode === 'v') currentDisplayVal = currState.v * (omega > 0 ? 1 / omega : 1);
    if (graphMode === 'a') currentDisplayVal = currState.a * (omega > 0 ? 1 / (omega * omega) : 1);


    // --- DRAW ENERGY GRAPH ---
    const drawEnergy = useCallback((ctx: CanvasRenderingContext2D) => {
        const w = ctx.canvas.width; const h = ctx.canvas.height;

        ctx.fillStyle = "#0f172a"; ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = "#1e293b"; ctx.lineWidth = 0.5; ctx.beginPath();
        for (let x = 0; x < w; x += w / 10) { ctx.moveTo(x, 0); ctx.lineTo(x, h) }
        ctx.stroke();

        const history = energyHistoryRef.current;
        if (history.length < 2) return;

        const maxE = history[0].w || 1;
        const yScale = (h - 20) / maxE;

        ctx.strokeStyle = "#eab308"; ctx.lineWidth = 2; ctx.beginPath();
        let started = false
        history.forEach((pt) => {
            if (pt.t < shift) return;
            const x = (pt.t - shift) * (w / GRAPH_WINDOW);
            const y = h - 10 - (pt.w * yScale);
            if (!started) { ctx.moveTo(x, y); started = true; }
            else ctx.lineTo(x, y);
        });
        ctx.stroke();

        // Simplified Fill
        ctx.fillStyle = "rgba(234, 179, 8, 0.1)";
        // Need a closed path for fill, but simple stroke is enough for now or complex close

    }, [shift])

    // --- LOOP ---
    const animate = useCallback(() => {
        if (isPlaying) {
            timeRef.current += dt;
            setTime(timeRef.current);

            const state = calculateState(timeRef.current);
            if (timeRef.current % 0.1 < dt) {
                energyHistoryRef.current.push({ t: timeRef.current, w: state.w });
                if (energyHistoryRef.current.length > 5000) energyHistoryRef.current.shift();
            }
        }
        if (energyCanvasRef.current) drawEnergy(energyCanvasRef.current.getContext('2d')!);
        animationRef.current = requestAnimationFrame(animate);
    }, [isPlaying, drawEnergy, calculateState]);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animate);
        return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); }
    }, [animate]);

    useEffect(() => {
        if (!isPlaying && energyCanvasRef.current) {
            drawEnergy(energyCanvasRef.current.getContext('2d')!);
        }
    }, [params, env, drawEnergy, isPlaying])

    const handleReset = () => { setIsPlaying(false); timeRef.current = 0; setTime(0); energyHistoryRef.current = []; }
    const handleStep = (dir: number) => { setIsPlaying(false); timeRef.current = Math.max(0, timeRef.current + dir * 0.5); setTime(timeRef.current); }

    // Màu sắc cho từng chế độ
    const getGraphColor = () => {
        if (graphMode === 'x') return ENVIRONMENTS[env].color;
        if (graphMode === 'v') return '#22c55e'; // Green
        if (graphMode === 'a') return '#ef4444'; // Red
        return '#fff';
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* CỘT TRÁI */}
            <div className="lg:col-span-2 space-y-4">

                {/* Main Visual (SVG) */}
                <div className="bg-[#1e293b] rounded-xl border border-slate-700/50 shadow-lg relative overflow-hidden h-[380px]">
                    {/* Mode Selector (Tabs) */}
                    <div className="absolute top-4 right-4 z-20 flex bg-slate-900/80 backdrop-blur rounded-lg p-1 border border-slate-700">
                        <button onClick={() => setGraphMode('x')} className={`px-3 py-1 rounded text-xs font-bold transition-colors ${graphMode === 'x' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'}`}>x(t)</button>
                        <button onClick={() => setGraphMode('v')} className={`px-3 py-1 rounded text-xs font-bold transition-colors ${graphMode === 'v' ? 'bg-green-600 text-white' : 'text-slate-400 hover:text-white'}`}>v(t)</button>
                        <button onClick={() => setGraphMode('a')} className={`px-3 py-1 rounded text-xs font-bold transition-colors ${graphMode === 'a' ? 'bg-red-500 text-white' : 'text-slate-400 hover:text-white'}`}>a(t)</button>
                    </div>

                    {/* SVG Layer */}
                    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="bg-[#0f172a] absolute inset-0">
                        <GridBackground />
                        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />

                        {/* Trục tọa độ */}
                        <line x1="0" y1={centerY} x2={width} y2={centerY} stroke="#475569" strokeWidth="1" />
                        <line x1="2" y1="0" x2="2" y2={height} stroke="#475569" strokeWidth="1" />

                        {/* Đường bao (Chỉ hiện khi xem x) */}
                        {beta > 0 && graphMode === 'x' && (
                            <>
                                <path d={paths.envTop} fill="none" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1" opacity="0.5" />
                                <path d={paths.envBot} fill="none" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1" opacity="0.5" />
                            </>
                        )}

                        {/* Đường sóng (Wave) */}
                        <path
                            d={paths.wave}
                            fill="none"
                            stroke={getGraphColor()}
                            strokeWidth="3"
                            filter="drop-shadow(0 0 4px currentColor)"
                        />

                        {/* Điểm chạy (Scan Line & Point) */}
                        {cx < width && (
                            <g>
                                <line x1={cx} y1="0" x2={cx} y2={height} stroke="#facc15" strokeWidth="1" opacity="0.3" />
                                <g transform={`translate(${cx}, ${centerY - currentDisplayVal})`}>
                                    <circle r="6" fill="#facc15" stroke="white" strokeWidth="2" />
                                    <line x1="0" y1="0" x2="0" y2={currentDisplayVal} stroke="#facc15" strokeDasharray="2 2" opacity="0.5" />
                                </g>
                            </g>
                        )}
                    </svg>

                    {/* Labels Overlay */}
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur px-3 py-2 rounded-lg border border-slate-700 text-xs font-mono flex gap-2" style={{ color: getGraphColor() }}>
                        <Activity size={14} />
                        {graphMode === 'x' && "Đồ thị Li độ x(t)"}
                        {graphMode === 'v' && "Đồ thị Vận tốc v(t)"}
                        {graphMode === 'a' && "Đồ thị Gia tốc a(t)"}
                    </div>

                    {/* Info Panel Integrated into Canvas (Bottom Right - MOVED HERE) */}
                    <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur p-3 rounded-lg border border-slate-700/50 text-xs font-mono shadow-lg min-w-[180px] z-10">
                        <div className="flex justify-between mb-1">
                            <span className="text-slate-400">t:</span>
                            <span className="text-white">{time.toFixed(2)}s</span>
                        </div>
                        <div className="flex justify-between mb-1">
                            <span className="text-slate-400">x:</span>
                            <span className="text-cyan-400">{currState.x.toFixed(1)} px</span>
                        </div>
                        <div className="flex justify-between mb-1">
                            <span className="text-slate-400">v:</span>
                            <span className="text-green-400">{currState.v.toFixed(1)}</span>
                        </div>
                        <div className="flex justify-between mb-1">
                            <span className="text-slate-400">a:</span>
                            <span className="text-red-400">{currState.a.toFixed(1)}</span>
                        </div>
                        {beta > 0 && (
                            <div className="flex justify-between border-t border-slate-700 mt-1 pt-1">
                                <span className="text-slate-500">Env:</span>
                                <span className="text-slate-300">{currState.envelope.toFixed(1)}</span>
                            </div>
                        )}
                    </div>

                    {/* Signature (Bottom Left - MOVED HERE) */}
                    <div className="absolute bottom-4 left-4 text-[10px] font-mono text-slate-600">
                        Hô Hoàng Anh A1K50
                    </div>
                </div>

                {/* Controls */}
                <div className="bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 shadow-md flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <button onClick={handleReset} className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 flex items-center justify-center transition-all active:scale-95"><RotateCcw size={18} /></button>
                        <button onClick={() => handleStep(-1)} className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 flex items-center justify-center transition-all active:scale-95"><SkipBack size={18} /></button>
                        <button onClick={() => setIsPlaying(!isPlaying)} className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-lg active:scale-95 ${isPlaying ? 'bg-amber-500 hover:bg-amber-400 text-white' : 'bg-cyan-500 hover:bg-cyan-400 text-white'}`}>
                            {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                        </button>
                        <button onClick={() => handleStep(1)} className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 flex items-center justify-center transition-all active:scale-95"><SkipForward size={18} /></button>
                    </div>
                    <div className="flex-1"></div>
                </div>

                {/* Energy Graph */}
                <div className="bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 shadow-md">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xs font-bold text-yellow-500 uppercase flex items-center gap-2"><TrendingDown size={14} /> Sự hao hụt cơ năng</h3>
                        <div className="text-[10px] font-mono text-yellow-400 font-bold">
                            Năng lượng (W) = {(currState.w * 1000).toFixed(2)} mJ
                        </div>
                    </div>
                    <div className="relative w-full h-32 bg-[#0f172a] rounded-lg border border-slate-700 overflow-hidden">
                        <canvas ref={energyCanvasRef} width={800} height={128} className="w-full h-full" />
                    </div>
                </div>
            </div>

            {/* CỘT PHẢI */}
            <div className="lg:col-span-1 space-y-4 flex flex-col">
                {/* Environment Selector */}
                <div className="bg-[#1e293b] rounded-xl border border-slate-700/50 p-4 shadow-sm">
                    <h3 className="text-slate-300 font-bold text-xs uppercase mb-3 flex items-center gap-2"><Settings size={14} /> Môi trường cản</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {Object.entries(ENVIRONMENTS).map(([key, val]) => {
                            const IconComp = val.icon;
                            return (
                                <button key={key} onClick={() => { setEnv(key); handleReset(); }} className={`p-2 rounded-lg border text-xs font-bold flex items-center gap-2 transition-all ${env === key ? 'bg-cyan-900/40 border-cyan-500 text-cyan-400' : 'bg-slate-800 border-transparent text-slate-400 hover:bg-slate-700'}`}>
                                    <IconComp size={14} /> {val.name}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Config */}
                <ControlPanel title="Cấu hình hệ thống" icon={Settings}>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Tần số (f)</span> <span className="text-cyan-400 font-mono">{params.f} Hz</span></div>
                            <input type="range" min="0.1" max="2" step="0.1" value={params.f} onChange={(e) => { setParams({ ...params, f: Number(e.target.value) }); handleReset(); }} className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer" />
                        </div>
                        <div>
                            <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Biên độ đầu (A)</span> <span className="text-cyan-400 font-mono">{params.A} px</span></div>
                            <input type="range" min="20" max="150" value={params.A} onChange={(e) => { setParams({ ...params, A: Number(e.target.value) }); handleReset(); }} className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer" />
                        </div>
                        <div>
                            <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Pha ban đầu (φ)</span> <span className="text-cyan-400 font-mono">{params.phi.toFixed(2)}</span></div>
                            <input type="range" min="0" max="6.28" step="0.1" value={params.phi} onChange={(e) => { setParams({ ...params, phi: Number(e.target.value) }); handleReset(); }} className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer" />
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700/50 text-xs text-slate-400 font-mono space-y-1">
                        <p>x = A·e^(-βt)·cos(ωt + φ)</p>
                        <p>β = {beta} (Hệ số tắt dần)</p>
                    </div>
                </ControlPanel>
            </div>
        </div >
    )
}