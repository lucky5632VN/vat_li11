"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Zap, Activity, Info, Settings, MousePointer2, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { PlaybackControls } from "@/components/ui/playback-controls";

// --- TYPES ---
type Charge = {
    id: number;
    x: number;
    y: number;
    q: number; // in microCoulombs
    dragging: boolean;
};

type Electron = {
    x: number;
    y: number;
    vx: number;
    vy: number;
};

// --- CONSTANTS ---
const K_COULOMB = 9e9; // N.m^2/C^2 scaled visually
const E_SCALE = 0.005; // Scaling factor for field vectors

// --- COMPONENT: ControlPanel ---
const ControlPanel = ({ title, icon: Icon, children }: { title: string; icon?: any; children: React.ReactNode }) => (
    <div className="bg-[#1e293b] rounded-xl border border-slate-700/50 shadow-sm flex flex-col">
        <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700/50 flex items-center gap-2">
            {Icon && <Icon size={16} className="text-cyan-400" />}
            <h3 className="text-slate-300 font-bold text-xs uppercase tracking-wider">{title}</h3>
        </div>
        <div className="p-4 space-y-4 flex-1">{children}</div>
    </div>
)

export default function ElectricFieldCurrent() {
    // --- STATE ---
    const [mode, setMode] = useState<'field' | 'current'>('field');

    // Field Mode State
    const [charges, setCharges] = useState<Charge[]>([
        { id: 1, x: 250, y: 250, q: 5, dragging: false },
        { id: 2, x: 550, y: 250, q: -5, dragging: false }
    ]);
    const [showGrid, setShowGrid] = useState(true);
    const [showFieldLines, setShowFieldLines] = useState(true); // Continuous lines mode
    const [selectedChargeId, setSelectedChargeId] = useState<number | null>(null);

    // Current Mode State
    const [voltage, setVoltage] = useState(12); // V
    const [resistance, setResistance] = useState(10); // Ohm (Base resistance)
    const [temperature, setTemperature] = useState(300); // Kelvin
    const [isPlaying, setIsPlaying] = useState(true);

    // Refs
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number | null>(null);
    const chargeIdCounter = useRef(3);
    const electronsRef = useRef<Electron[]>([]);

    // --- INTERACTION STATE ---
    const [draggingId, setDraggingId] = useState<number | null>(null);

    // --- PHYSICS HELPERS ---

    // Tính cường độ điện trường tại vị trí (x, y)
    const calculateField = (x: number, y: number, charges: Charge[]) => {
        let Ex = 0;
        let Ey = 0;

        charges.forEach(c => {
            const dx = x - c.x;
            const dy = y - c.y;
            const r2 = dx * dx + dy * dy;
            if (r2 < 100) return; // Singularity avoidance

            const r = Math.sqrt(r2);
            const E = (K_COULOMB * c.q) / r2; // Visual scale, not SI

            Ex += E * (dx / r);
            Ey += E * (dy / r);
        });

        return { Ex, Ey };
    };

    // --- RENDER LOGIC: FIELD ---
    const drawFieldMode = (ctx: CanvasRenderingContext2D, width: number, height: number, charges: Charge[], showGrid: boolean, showFieldLines: boolean, selectedChargeId: number | null) => {
        try {
            ctx.clearRect(0, 0, width, height);

            // Debug Info
            // ctx.fillStyle = 'white';
            // ctx.font = '12px monospace';
            // ctx.fillText(`Charges: ${charges?.length} | Size: ${width}x${height}`, 10, 20);

            if (!charges) return;

            // 1. Draw Vector Grid (Arrow Field)
            if (showGrid) {
                const gridSize = 30;
                ctx.strokeStyle = "rgba(100, 200, 255, 0.2)";
                ctx.lineWidth = 1;

                for (let x = 0; x < width; x += gridSize) {
                    for (let y = 0; y < height; y += gridSize) {
                        const { Ex, Ey } = calculateField(x, y, charges);
                        const E_mag = Math.sqrt(Ex * Ex + Ey * Ey);

                        if (E_mag > 0.1) {
                            const len = Math.min(20, E_mag * 5); // Limit length
                            const angle = Math.atan2(Ey, Ex);

                            ctx.beginPath();
                            ctx.moveTo(x, y);
                            ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
                            ctx.stroke();

                            // Arrow head
                            const headLen = 3;
                            ctx.beginPath();
                            ctx.moveTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
                            ctx.lineTo(x + Math.cos(angle) * len - headLen * Math.cos(angle - Math.PI / 6), y + Math.sin(angle) * len - headLen * Math.sin(angle - Math.PI / 6));
                            ctx.lineTo(x + Math.cos(angle) * len - headLen * Math.cos(angle + Math.PI / 6), y + Math.sin(angle) * len - headLen * Math.sin(angle + Math.PI / 6));
                            ctx.stroke();
                        }
                    }
                }
            }

            // 2. Continuous Field Lines (Experimental)
            if (showFieldLines) {
                // Basic Euler integration from positive charges
                ctx.strokeStyle = "rgba(255, 255, 100, 0.4)";
                ctx.lineWidth = 1.5;

                charges.forEach(c => {
                    if (c.q > 0) {
                        const linesPerCharge = 12;
                        for (let i = 0; i < linesPerCharge; i++) {
                            const angle = (i / linesPerCharge) * Math.PI * 2;
                            let cx = c.x + Math.cos(angle) * 10;
                            let cy = c.y + Math.sin(angle) * 10;

                            ctx.beginPath();
                            ctx.moveTo(cx, cy);

                            let steps = 0;
                            while (steps < 500) {
                                const { Ex, Ey } = calculateField(cx, cy, charges);
                                const E_mag = Math.sqrt(Ex * Ex + Ey * Ey);
                                if (E_mag === 0) break;

                                // Check if hit another charge
                                let hit = false;
                                for (let oc of charges) {
                                    if (oc.id !== c.id) {
                                        const d2 = (cx - oc.x) ** 2 + (cy - oc.y) ** 2;
                                        if (d2 < 200) { hit = true; break; }
                                    }
                                }
                                if (hit || cx < 0 || cx > width || cy < 0 || cy > height) break;

                                const dx = (Ex / E_mag) * 5; // Fixed step size
                                const dy = (Ey / E_mag) * 5;
                                cx += dx;
                                cy += dy;
                                ctx.lineTo(cx, cy);
                                steps++;
                            }
                            ctx.stroke();
                        }
                    }
                });
            }

            // 3. Draw Charges
            charges.forEach(c => {
                ctx.beginPath();
                ctx.arc(c.x, c.y, 15, 0, Math.PI * 2);
                ctx.fillStyle = c.q > 0 ? '#ef4444' : '#3b82f6'; // Red for +, Blue for -
                ctx.fill();
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
                if (c.id === selectedChargeId) {
                    ctx.strokeStyle = '#facc15'; // Yellow selection
                    ctx.lineWidth = 3;
                }
                ctx.stroke();

                // Label
                ctx.fillStyle = '#fff';
                ctx.font = 'bold 14px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(c.q > 0 ? '+' : '-', c.x, c.y);

                // Value
                ctx.font = '10px sans-serif';
                ctx.fillText(Math.abs(c.q) + 'µC', c.x, c.y + 25);
            });
        } catch (e) {
            console.error("Draw Error", e);
        }
    };

    // --- RENDER LOGIC: CURRENT ---
    const initElectrons = (count: number, width: number, height: number) => {
        const arr: Electron[] = [];
        for (let i = 0; i < count; i++) {
            arr.push({
                x: Math.random() * width,
                y: Math.random() * height * 0.4 + height * 0.3, // Confined to "wire" in middle
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2
            });
        }
        return arr;
    };

    const drawCurrentMode = (ctx: CanvasRenderingContext2D, width: number, height: number, voltage: number, resistance: number, temperature: number, isPlaying: boolean) => {
        // Init electrons if needed
        if (electronsRef.current.length === 0) {
            electronsRef.current = initElectrons(200, width, height);
        }

        ctx.clearRect(0, 0, width, height);

        // 1. Draw Wire Background
        const wireTop = height * 0.3;
        const wireBottom = height * 0.7;
        const wireHeight = wireBottom - wireTop;

        const grad = ctx.createLinearGradient(0, wireTop, 0, wireBottom);
        grad.addColorStop(0, '#334155');
        grad.addColorStop(0.2, '#475569');
        grad.addColorStop(0.8, '#475569');
        grad.addColorStop(1, '#334155');

        ctx.fillStyle = grad;
        ctx.fillRect(0, wireTop, width, wireHeight);

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(0, wireTop); ctx.lineTo(width, wireTop); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, wireBottom); ctx.lineTo(width, wireBottom); ctx.stroke();

        // 2. Draw Positive Ions (Fixed Lattice)
        const ionSpacing = 40;
        ctx.fillStyle = '#ef4444';
        for (let x = 20; x < width; x += ionSpacing) {
            for (let y = wireTop + 20; y < wireBottom; y += ionSpacing) {
                // Thermal vibration (ensure non-zero visual if T=0 for visibility)
                const vibAmp = Math.max(0.2, temperature / 100);
                const vibX = (Math.random() - 0.5) * vibAmp;
                const vibY = (Math.random() - 0.5) * vibAmp;

                ctx.beginPath();
                ctx.arc(x + vibX, y + vibY, 6, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = "rgba(239, 68, 68, 0.3)"; // Glow
                ctx.beginPath(); ctx.arc(x + vibX, y + vibY, 10, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#ef4444'; // Reset
            }
        }

        // 3. Update & Draw Electrons
        const tempFactor = Math.max(0.1, 1 + (temperature - 300) * 0.004);
        const currentI = voltage / (resistance * tempFactor);
        const driftSpeed = (currentI * 2);
        // Ensure some movement even at T=0 to prevent "frozen" look if user confused
        const thermalSpeedBase = Math.sqrt(Math.max(10, temperature)) * 0.2;

        ctx.fillStyle = '#3b82f6';
        electronsRef.current.forEach((e, index) => {
            // Safety check: specific electron reset if corrupted
            if (isNaN(e.x) || isNaN(e.y) || !isFinite(e.x) || !isFinite(e.y)) {
                const fresh = initElectrons(1, width, height)[0];
                e.x = fresh.x;
                e.y = fresh.y;
                e.vx = 0;
                e.vy = 0;
            }

            if (isPlaying) {
                // Update velocity
                // Thermal random walk
                e.vx += (Math.random() - 0.5) * thermalSpeedBase;
                e.vy += (Math.random() - 0.5) * thermalSpeedBase;

                // Drift force
                e.vx -= driftSpeed * 0.05;

                // Dampening
                e.vx *= 0.95;
                e.vy *= 0.95;

                // Update Pos
                e.x += e.vx;
                e.y += e.vy;

                // Bounce off walls
                if (e.y < wireTop + 2) { e.y = wireTop + 2; e.vy *= -1; }
                if (e.y > wireBottom - 2) { e.y = wireBottom - 2; e.vy *= -1; }

                // Wrap around x loop
                if (e.x < 0) e.x = width;
                if (e.x > width) e.x = 0;
            }

            // Draw
            ctx.beginPath();
            ctx.arc(e.x, e.y, 3, 0, Math.PI * 2);
            ctx.fill();
        });

        // 4. Electric Field Arrow
        if (voltage !== 0) {
            ctx.strokeStyle = "rgba(255, 255, 0, 0.5)";
            ctx.lineWidth = 10;
            const arrowY = height * 0.15;
            ctx.beginPath();
            if (voltage > 0) {
                // E points Left -> Right (High to Low potential)
                ctx.moveTo(width * 0.2, arrowY);
                ctx.lineTo(width * 0.8, arrowY);
                ctx.lineTo(width * 0.78, arrowY - 10);
                ctx.moveTo(width * 0.8, arrowY);
                ctx.lineTo(width * 0.78, arrowY + 10);
            } else {
                // E points Right -> Left
                ctx.moveTo(width * 0.8, arrowY);
                ctx.lineTo(width * 0.2, arrowY);
                ctx.lineTo(width * 0.22, arrowY - 10);
                ctx.moveTo(width * 0.2, arrowY);
                ctx.lineTo(width * 0.22, arrowY + 10);
            }
            ctx.stroke();
            ctx.fillStyle = "#fbbf24";
            ctx.font = "bold 16px monospace";
            ctx.textAlign = "center";
            ctx.fillText("Điện trường (E)", width / 2, arrowY - 10);
        }
    };

    // Refs for Animation Loop (avoid re-creating animate function)
    const simStateRef = useRef({
        mode,
        charges,
        showGrid,
        showFieldLines,
        selectedChargeId,
        isPlaying,
        voltage,
        resistance,
        temperature
    });

    // Sync Refs with State
    useEffect(() => {
        simStateRef.current = {
            mode,
            charges,
            showGrid,
            showFieldLines,
            selectedChargeId,
            isPlaying,
            voltage,
            resistance,
            temperature
        };
    }, [mode, charges, showGrid, showFieldLines, selectedChargeId, isPlaying, voltage, resistance, temperature]);


    // --- MAIN LOOP ---
    const animate = useCallback(() => {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx || !canvasRef.current) return;

        // Read current state from Ref
        const state = simStateRef.current;

        // Auto resize buffer
        const parent = canvasRef.current.parentElement;
        if (parent) {
            // Add tolerance to prevent jitter-resize
            const widthDiff = Math.abs(canvasRef.current.width - parent.clientWidth);
            const heightDiff = Math.abs(canvasRef.current.height - parent.clientHeight);

            if (widthDiff > 1 || heightDiff > 1) {
                canvasRef.current.width = parent.clientWidth;
                canvasRef.current.height = parent.clientHeight;
                if (state.mode === 'current') {
                    // Re-init electrons on significant resize
                    electronsRef.current = initElectrons(200, parent.clientWidth, parent.clientHeight);
                }
            }
        }

        const { width, height } = canvasRef.current;

        if (state.mode === 'field') {
            drawFieldMode(ctx, width, height, state.charges, state.showGrid, state.showFieldLines, state.selectedChargeId);
        } else {
            drawCurrentMode(ctx, width, height, state.voltage, state.resistance, state.temperature, state.isPlaying);
        }

        requestRef.current = requestAnimationFrame(animate);
    }, []); // Dependencies empty: Loop relies on Ref for state, preventing resets.

    // Start Animation Loop
    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
    }, [animate]);


    // --- INTERACTION ---


    const handleMouseDown = (e: React.MouseEvent) => {
        if (mode !== 'field' || !canvasRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Check clicked charge
        let clickedId = null;
        for (let c of charges) {
            const d = Math.sqrt((mouseX - c.x) ** 2 + (mouseY - c.y) ** 2);
            if (d < 20) {
                clickedId = c.id;
                break;
            }
        }

        if (clickedId !== null) {
            setDraggingId(clickedId);
            setSelectedChargeId(clickedId);
        } else {
            setSelectedChargeId(null);
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (draggingId === null || mode !== 'field' || !canvasRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        setCharges(prev => prev.map(c => c.id === draggingId ? { ...c, x: mouseX, y: mouseY } : c));
    };

    const handleMouseUp = () => {
        setDraggingId(null);
    };

    // --- HELPERS ---
    const addCharge = (q: number) => {
        setCharges(prev => [...prev, { id: chargeIdCounter.current++, x: 400, y: 300, q, dragging: false }]);
    };

    const removeSelectedCharge = () => {
        if (selectedChargeId !== null) {
            setCharges(prev => prev.filter(c => c.id !== selectedChargeId));
            setSelectedChargeId(null);
        }
    };

    const currentCalculated = voltage / (resistance * (1 + (temperature - 300) * 0.004));

    return (
        <div className="flex flex-col lg:flex-row h-full gap-4 p-4 lg:p-6 w-full">
            {/* LEFT: MAIN DISPLAY */}
            <div className="flex-1 flex flex-col min-h-0 gap-4">
                {/* Mode Switcher */}
                <div className="flex gap-3 mb-2 p-1 bg-slate-800/50 rounded-xl w-fit backdrop-blur-sm border border-slate-700/50">
                    <button
                        onClick={() => setMode('field')}
                        className={`px-5 py-2 rounded-lg font-bold flex items-center gap-2 transition-all text-sm ${mode === 'field' ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    >
                        <Zap size={18} /> Điện Trường
                    </button>
                    <button
                        onClick={() => setMode('current')}
                        className={`px-5 py-2 rounded-lg font-bold flex items-center gap-2 transition-all text-sm ${mode === 'current' ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    >
                        <Activity size={18} /> Dòng Điện
                    </button>
                </div>

                {/* Canvas */}
                <div className="flex-1 bg-[#0f172a] rounded-xl border border-slate-700/50 shadow-xl overflow-hidden relative group">
                    <canvas
                        ref={canvasRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        className="w-full h-full block cursor-crosshair"
                    />

                    {/* Overlay Tips */}
                    <div className="absolute top-4 left-4 pointer-events-none text-xs text-slate-500 font-mono">
                        {mode === 'field' ? "Kéo thả điện tích để di chuyển" : "Quan sát mô hình electron tự do"}
                    </div>
                </div>

                {/* Bottom Controls (Only for Current Mode) */}
                {mode === 'current' && (
                    <div className="bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 flex-none flex items-center justify-center gap-3 shrink-0 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                        <PlaybackControls
                            isPlaying={isPlaying}
                            onPlayPause={() => setIsPlaying(!isPlaying)}
                            onReset={() => { setVoltage(12); setTemperature(300); }}
                            onStepForward={() => { }} // Not implemented for this continuous sim
                            onStepBackward={() => { }}
                        />
                    </div>
                )}
            </div>

            {/* RIGHT: SETTINGS PANEL */}
            <div className="lg:w-80 flex-none flex flex-col gap-4 overflow-y-auto pr-1 pb-2 custom-scrollbar lg:h-full">
                {mode === 'field' ? (
                    <>
                        <ControlPanel title="Thêm điện tích" icon={Plus}>
                            <div className="grid grid-cols-2 gap-2">
                                <button onClick={() => addCharge(5)} className="flex items-center justify-center gap-2 bg-red-500/20 border border-red-500/50 hover:bg-red-500/30 text-red-400 py-3 rounded-lg font-bold transition-all">
                                    <Plus size={16} /> +5µC
                                </button>
                                <button onClick={() => addCharge(-5)} className="flex items-center justify-center gap-2 bg-blue-500/20 border border-blue-500/50 hover:bg-blue-500/30 text-blue-400 py-3 rounded-lg font-bold transition-all">
                                    <Minus size={16} /> -5µC
                                </button>
                            </div>
                        </ControlPanel>

                        <ControlPanel title="Cấu hình hiển thị" icon={Settings}>
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-300">
                                    <input type="checkbox" checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)} className="rounded bg-slate-700 border-slate-600 accent-cyan-500" />
                                    Hiển thị lưới vector
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-300">
                                    <input type="checkbox" checked={showFieldLines} onChange={(e) => setShowFieldLines(e.target.checked)} className="rounded bg-slate-700 border-slate-600 accent-cyan-500" />
                                    Hiển thị đường sức
                                </label>
                            </div>
                        </ControlPanel>

                        {selectedChargeId !== null && (
                            <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 animate-in theme-dark">
                                <h3 className="text-yellow-400 font-bold text-xs uppercase mb-3 flex items-center justify-between">
                                    Điện tích đang chọn
                                    <button onClick={removeSelectedCharge} className="text-red-400 hover:text-red-300"><Trash2 size={16} /></button>
                                </h3>
                                {/* Charge Slider */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-slate-400">
                                        <span>Độ lớn (µC)</span>
                                        <span className="font-mono text-white">{charges.find(c => c.id === selectedChargeId)?.q}</span>
                                    </div>
                                    <input
                                        type="range" min="-20" max="20" step="1"
                                        value={charges.find(c => c.id === selectedChargeId)?.q || 0}
                                        onChange={(e) => {
                                            const val = Number(e.target.value);
                                            if (val === 0) return; // Prevent 0 charge
                                            setCharges(prev => prev.map(c => c.id === selectedChargeId ? { ...c, q: val } : c));
                                        }}
                                        className="w-full h-1.5 bg-slate-700 rounded-lg accent-yellow-400 appearance-none"
                                    />
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg text-center">
                            <h2 className="text-slate-400 text-xs uppercase tracking-wider mb-2">Cường độ dòng điện (I)</h2>
                            <div className="text-4xl font-mono font-bold text-orange-400 tracking-tighter tabular-nums">
                                {currentCalculated.toFixed(2)} <span className="text-lg text-slate-500">A</span>
                            </div>
                        </div>

                        <ControlPanel title="Thông số mạch" icon={Settings}>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                                        <span>Hiệu điện thế (U)</span> <span className="text-cyan-400 font-mono font-bold">{voltage} V</span>
                                    </div>
                                    <input type="range" min="-24" max="24" step="1" value={voltage} onChange={(e) => setVoltage(Number(e.target.value))} className="w-full h-1.5 bg-slate-700 rounded-lg accent-cyan-500 appearance-none cursor-pointer" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                                        <span>Điện trở cơ bản (R₀)</span> <span className="text-green-400 font-mono font-bold">{resistance} Ω</span>
                                    </div>
                                    <input type="range" min="1" max="100" step="1" value={resistance} onChange={(e) => setResistance(Number(e.target.value))} className="w-full h-1.5 bg-slate-700 rounded-lg accent-green-500 appearance-none cursor-pointer" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                                        <span>Nhiệt độ (T)</span> <span className="text-red-400 font-mono font-bold">{temperature} K</span>
                                    </div>
                                    <input type="range" min="0" max="1000" step="10" value={temperature} onChange={(e) => setTemperature(Number(e.target.value))} className="w-full h-1.5 bg-slate-700 rounded-lg accent-red-500 appearance-none cursor-pointer" />
                                </div>
                            </div>
                        </ControlPanel>

                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-2">
                            <h4 className="font-bold text-slate-200 flex items-center gap-2"><Info size={14} /> Giải thích</h4>
                            <p>• Các hạt xanh dương là <span className="text-blue-400 font-bold">electron tự do</span> chuyển động hỗn loạn.</p>
                            <p>• Các chấm đỏ là <span className="text-red-400 font-bold">ion dương</span> dao động tại nút mạng.</p>
                            <p>• Khi có điện trường (U ≠ 0), electron có thêm vận tốc trôi ngược chiều điện trường, tạo thành dòng điện.</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
