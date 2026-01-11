"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Zap, Info, Settings, Move, RotateCcw } from 'lucide-react';

// --- TYPES ---
type ChargePoint = {
    id: 1 | 2;
    x: number;
    y: number;
    q: number; // in microCoulombs (µC)
    color: string;
};

// --- CONSTANTS ---
const K_COULOMB = 9e9; // 9 * 10^9 N.m^2/C^2
const PIXELS_PER_METER = 2000; // Scale: 2000px = 1m 

export default function CoulombLaw() {
    // --- STATE ---
    const [charges, setCharges] = useState<ChargePoint[]>([
        { id: 1, x: 200, y: 300, q: 2, color: '#ef4444' },
        { id: 2, x: 500, y: 300, q: -2, color: '#3b82f6' }
    ]);
    const [dielectric, setDielectric] = useState(1);

    // Canvas & Interaction
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [draggingId, setDraggingId] = useState<number | null>(null);
    const hasCentered = useRef(false);

    // --- PHYSICS CALCULATIONS ---
    const getDistance = (c1: ChargePoint, c2: ChargePoint) => {
        const dx = c2.x - c1.x;
        const dy = c2.y - c1.y;
        const pxDist = Math.sqrt(dx * dx + dy * dy);
        const meters = pxDist / PIXELS_PER_METER;
        return { dx, dy, pxDist, meters };
    };

    const calculateForce = (rMeters: number, q1: number, q2: number) => {
        const q1_C = q1 * 1e-6;
        const q2_C = q2 * 1e-6;
        if (rMeters === 0) return 0;
        const F = (K_COULOMB * Math.abs(q1_C * q2_C)) / (dielectric * rMeters * rMeters);
        return F;
    };

    // --- RENDER ---
    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const width = canvas.width;
        const height = canvas.height;

        // Clear
        ctx.clearRect(0, 0, width, height);

        const c1 = charges[0];
        const c2 = charges[1];

        const { dx, dy, meters } = getDistance(c1, c2);

        // Force Value
        const F = calculateForce(meters, c1.q, c2.q);

        // 1. Draw Distance Line (Ruler)
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = '#94a3b8'; // slate-400
        ctx.setLineDash([5, 5]);
        ctx.lineWidth = 1;
        ctx.moveTo(c1.x, c1.y + 40); // Offset below charges
        ctx.lineTo(c2.x, c2.y + 40);
        ctx.stroke();

        // Distance Label
        ctx.fillStyle = '#f8fafc'; // slate-50
        ctx.font = '14px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`r = ${(meters * 100).toFixed(1)} cm`, (c1.x + c2.x) / 2, c1.y + 60);
        ctx.restore();

        // 2. Draw Forces (Vectors)
        const isRepel = (c1.q * c2.q) > 0;
        const angle = Math.atan2(dy, dx);

        const maxVecLen = 150;
        let vecLen = Math.log10(F + 1) * 30;
        if (vecLen > maxVecLen) vecLen = maxVecLen;

        const drawArrow = (start: ChargePoint, directionAngle: number, label: string) => {
            const endX = start.x + Math.cos(directionAngle) * vecLen;
            const endY = start.y + Math.sin(directionAngle) * vecLen;

            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#fbbf24';
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(endX, endY);
            ctx.stroke();

            // Arrowhead
            const headLen = 10;
            ctx.beginPath();
            ctx.fillStyle = '#fbbf24';
            ctx.moveTo(endX, endY);
            ctx.lineTo(endX - headLen * Math.cos(directionAngle - Math.PI / 6), endY - headLen * Math.sin(directionAngle - Math.PI / 6));
            ctx.lineTo(endX - headLen * Math.cos(directionAngle + Math.PI / 6), endY - headLen * Math.sin(directionAngle + Math.PI / 6));
            ctx.fill();

            // Label
            ctx.fillStyle = '#fbbf24';
            ctx.font = 'bold 16px sans-serif';
            ctx.fillText(label, endX + 10, endY);
        };

        if (isRepel) {
            drawArrow(c1, angle + Math.PI, "F21");
            drawArrow(c2, angle, "F12");
        } else {
            drawArrow(c1, angle, "F21");
            drawArrow(c2, angle + Math.PI, "F12");
        }

        // 3. Draw Charges
        charges.forEach(c => {
            ctx.beginPath();
            ctx.arc(c.x, c.y, 20, 0, Math.PI * 2);
            ctx.fillStyle = c.color;
            ctx.shadowColor = c.color;
            ctx.shadowBlur = 15;
            ctx.fill();
            ctx.shadowBlur = 0;

            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            if (c.id === draggingId) {
                ctx.strokeStyle = '#facc15';
                ctx.lineWidth = 3;
            }
            ctx.stroke();

            ctx.fillStyle = '#fff';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const sign = c.q > 0 ? '+' : '';
            ctx.fillText(`${sign}${c.q}µC`, c.x, c.y);
        });

    }, [charges, dielectric, draggingId]);

    // --- ANIMATION LOOP (Fixed: Run on state change) ---
    useEffect(() => {
        requestAnimationFrame(draw);
    }, [draw]);

    // --- RESIZE OBSERVER (Fixed: Separate lifecycle) ---
    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;

        const observer = new ResizeObserver(entries => {
            const entry = entries[0];
            if (entry) {
                const { width, height } = entry.contentRect;
                if (width === 0 || height === 0) return;

                if (canvas.width !== width || canvas.height !== height) {
                    canvas.width = width;
                    canvas.height = height;

                    // Logic to position charges (optional auto-center logic)
                    if (!hasCentered.current && width > 100) {
                        const gap = Math.min(150, width / 4);
                        setCharges(prev => [
                            { ...prev[0], x: width / 2 - gap, y: height / 2 },
                            { ...prev[1], x: width / 2 + gap, y: height / 2 }
                        ]);
                        hasCentered.current = true;
                    }

                    // We don't call draw() here directly because state update above might trigger it
                    // Or if no state update, we might need to force draw?
                    // But draw depends on 'charges', so if we don't update charges, draw won't re-run via useEffect[draw].
                    // So we must force a draw here if we didn't setCharges.
                    // However, we can't easily access 'draw' here if we want this effect to have [] deps.
                    // But wait, if canvas resizes, we DO want to redraw.
                    // Simple solution: This effect sets canvas size. 
                    // To force redraw without dependency hell, we can use a ref or just keep draw in deps?
                    // NO, keeping draw in deps causes the drag-flicker bug!

                    // Solution: We need a mutable reference to 'draw' or simply accept that
                    // resizing is rare events. Dragging is frequent.
                    // If we just set canvas size, current canvas content is cleared.
                    // User sees blank until next interaction? No good.

                    // Let's use a ref for the draw function to call it inside observer without recreating observer
                }
            }
        });

        observer.observe(container);
        return () => observer.disconnect();
    }, []); // Run ONCE. 

    // Handle resize redraws via a separate mechanism if needed? 
    // Actually, if we just resize, the next 'draw' will pick it up.
    // If we want instant redraw on resize, we can add a 'resize' listener that calls draw.
    // But ResizeObserver covers that.

    // To solve the "resize clears canvas" issue if deps are empty:
    // We can use a ref to hold the current 'draw' function.
    const drawRef = useRef(draw);
    useEffect(() => { drawRef.current = draw; }, [draw]);

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current; // capture
        if (!container) return;

        const observer = new ResizeObserver(entries => {
            const entry = entries[0];
            if (entry && canvas) {
                const { width, height } = entry.contentRect;
                if (canvas.width !== width || canvas.height !== height) {
                    canvas.width = width;
                    canvas.height = height;
                    // Call the latest draw function
                    if (drawRef.current) requestAnimationFrame(drawRef.current);
                }
            }
        });
        observer.observe(container);
        return () => observer.disconnect();
    }, []); // Safe to run once now

    // --- EVENTS ---
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!canvasRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        for (let c of charges) {
            const dist = Math.sqrt((mouseX - c.x) ** 2 + (mouseY - c.y) ** 2);
            if (dist < 30) {
                setDraggingId(c.id);
                break;
            }
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (draggingId && canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            let mouseX = e.clientX - rect.left;
            let mouseY = e.clientY - rect.top;

            // Constrain
            mouseX = Math.max(20, Math.min(canvasRef.current.width - 20, mouseX));
            mouseY = Math.max(20, Math.min(canvasRef.current.height - 20, mouseY));

            setCharges(prev => prev.map(c => c.id === draggingId ? { ...c, x: mouseX, y: mouseY } : c));
        }
    };

    const handleMouseUp = () => setDraggingId(null);

    // Calc for display
    const distData = getDistance(charges[0], charges[1]);
    const forceVal = calculateForce(distData.meters, charges[0].q, charges[1].q);

    return (
        <div className="flex flex-col lg:flex-row h-full gap-4 p-4 lg:p-6 w-full animate-in fade-in zoom-in-95 duration-500">
            {/* LEFT: SIMULATION AREA */}
            <div className="flex-1 flex flex-col gap-4 min-h-0">
                <div
                    ref={containerRef}
                    className="flex-1 bg-slate-900/80 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative backdrop-blur-sm cursor-crosshair select-none"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <canvas ref={canvasRef} className="block w-full h-full" />

                    {/* Tutorial Hint */}
                    <div className="absolute top-4 left-4 bg-slate-800/80 backdrop-blur border border-slate-600 p-3 rounded-lg text-xs text-slate-300 pointer-events-none">
                        <div className="flex items-center gap-2 mb-1 text-cyan-400 font-bold uppercase"><Move size={14} /> Thao tác</div>
                        <p>Kéo thả các điện tích.</p>
                    </div>

                    {/* Manual Reset Button */}
                    <button
                        onClick={() => {
                            if (canvasRef.current) {
                                hasCentered.current = false;
                                const w = canvasRef.current.width;
                                const h = canvasRef.current.height;
                                const gap = Math.min(150, w / 4);
                                setCharges([
                                    { id: 1, x: w / 2 - gap, y: h / 2, q: 2, color: '#ef4444' },
                                    { id: 2, x: w / 2 + gap, y: h / 2, q: -2, color: '#3b82f6' }
                                ]);
                                setDielectric(1);
                            }
                        }}
                        className="absolute bottom-4 right-4 bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-full shadow-lg transition-all"
                        title="Đặt lại vị trí"
                    >
                        <RotateCcw size={20} />
                    </button>
                </div>
            </div>

            {/* RIGHT: CONTROL PANEL */}
            <div className="lg:w-80 flex-none flex flex-col gap-4 overflow-y-auto custom-scrollbar h-full pb-10">
                {/* 1. Results Panel */}
                <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 shadow-lg relative overflow-hidden group flex-shrink-0 min-h-[180px]">
                    <div className="relative z-10">
                        <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Lực tương tác (F)</div>
                        <div className="text-4xl font-mono font-bold text-yellow-400 tracking-tighter">
                            {forceVal >= 0.001 ? Number(forceVal.toPrecision(4)) : forceVal.toExponential(2)} <span className="text-lg text-slate-500">N</span>
                        </div>
                        <div className="mt-3 text-xs text-slate-500 flex gap-4">
                            <div>
                                <span className="block font-bold text-slate-400">r</span>
                                {(distData.meters * 100).toFixed(1)} cm
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Controls */}
                <div className="bg-slate-900/50 rounded-xl border border-slate-700/50 p-4 space-y-6 flex-shrink-0">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-700 pb-2">
                        <Settings size={16} /> Thông số
                    </h3>

                    {/* q1 Control */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                            <span className="text-red-400">Điện tích q1</span>
                            <span className="bg-slate-700 px-2 py-0.5 rounded text-white font-mono">{charges[0].q} µC</span>
                        </div>
                        <input
                            type="range" min="-10" max="10" step="1"
                            value={charges[0].q}
                            onChange={(e) => {
                                const val = Number(e.target.value);
                                setCharges(prev => [{ ...prev[0], q: val, color: val > 0 ? '#ef4444' : (val < 0 ? '#3b82f6' : '#94a3b8') }, prev[1]]);
                            }}
                            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                        />
                    </div>

                    {/* q2 Control */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                            <span className="text-blue-400">Điện tích q2</span>
                            <span className="bg-slate-700 px-2 py-0.5 rounded text-white font-mono">{charges[1].q} µC</span>
                        </div>
                        <input
                            type="range" min="-10" max="10" step="1"
                            value={charges[1].q}
                            onChange={(e) => {
                                const val = Number(e.target.value);
                                setCharges(prev => [prev[0], { ...prev[1], q: val, color: val > 0 ? '#ef4444' : (val < 0 ? '#3b82f6' : '#94a3b8') }]);
                            }}
                            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                    </div>

                    {/* Dielectric Control */}
                    <div className="space-y-2 pt-2 border-t border-slate-700/50">
                        <div className="flex justify-between text-xs font-bold text-slate-300">
                            <span>Hằng số điện môi (ε)</span>
                        </div>
                        <select
                            value={dielectric}
                            onChange={(e) => setDielectric(Number(e.target.value))}
                            className="w-full bg-slate-800 text-xs text-white p-2 rounded border border-slate-600 focus:border-cyan-500 outline-none"
                        >
                            <option value="1">Chân không / Không khí (ε = 1)</option>
                            <option value="2">Dầu hỏa (ε = 2)</option>
                            <option value="4.5">Kính (ε = 4.5)</option>
                            <option value="81">Nước nguyên chất (ε = 81)</option>
                        </select>
                    </div>
                </div>

                {/* 3. Formula Info */}
                <div className="bg-indigo-900/20 rounded-xl p-4 border border-indigo-500/30 text-indigo-200 text-xs space-y-2 flex-shrink-0">
                    <div className="flex items-center gap-2 font-bold uppercase text-indigo-400"><Info size={14} /> Công thức</div>
                    <p className="font-mono text-center text-sm bg-slate-900/50 py-2 rounded border border-white/10">
                        F = k·(|q₁q₂| / εr²)
                    </p>
                </div>
            </div>
        </div>
    );
}
