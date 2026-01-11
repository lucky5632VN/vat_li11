"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Battery, Zap, ArrowDownUp, Maximize, Settings, Info, RotateCcw, Lightbulb } from 'lucide-react';

// --- CONSTANTS ---
const EPSILON_0 = 8.854e-12; // F/m

export default function CapacitorLab() {
    // --- STATE ---
    // Physical Parameters
    const [area, setArea] = useState(200); // mm^2
    const [distance, setDistance] = useState(5); // mm
    const [voltage, setVoltage] = useState(1.5); // Volts
    const [dielectric, setDielectric] = useState(1); // K
    const [isConnected, setIsConnected] = useState(true); // Connected to Battery?

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // --- PHYSICS CALCULATIONS ---
    // C = (k * e0 * A) / d
    // Convert units to SI: A (m^2), d (m)
    const calculatePhysics = () => {
        const A_m2 = area * 1e-6;
        const d_m = distance * 1e-3;

        const Capacitance = (dielectric * EPSILON_0 * A_m2) / d_m; // Farads

        let storedCharge = 0;
        let storedVoltage = voltage;

        if (isConnected) {
            // Connected: U is constant (battery), Q = C * U
            storedCharge = Capacitance * voltage;
        } else {
            // Disconnected: Q is constant (conserved from last connection), U = Q / C
            // For sim simplicity, we'll assume it was charged at current voltage then disconnected
            // Or better: Just simulate "Connected Mode" initially.
            // Let's stick to "Connected to Battery" logic for V1.0 to avoid complex state history
            storedCharge = Capacitance * voltage;
        }

        const Energy = 0.5 * Capacitance * storedVoltage * storedVoltage;
        const E_Field = storedVoltage / d_m; // V/m

        return {
            C: Capacitance,
            Q: storedCharge,
            W: Energy,
            E: E_Field
        };
    };

    const physicsData = calculatePhysics();

    // --- RENDER ---
    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        // --- SCALING ---
        // Center of the capacitor
        const cx = width / 2;
        const cy = height / 2;

        // Visual Scales
        // Plate Width -> proportional to sqrt(Area) or just linearly mapped for visual clarity
        // Let Area 100-400mm2 map to Width 200-400px
        const plateWidth = 200 + (area - 100) * 0.6;
        const plateHeight = 20; // Thickness of plate

        // Plate Separation -> proportional to Distance
        // Let Distance 2-10mm map to 50-200px
        const separationPx = 50 + (distance - 2) * 15;

        const topPlateY = cy - separationPx / 2 - plateHeight;
        const bottomPlateY = cy + separationPx / 2;

        // 1. Draw Circuit (Wires & Battery)
        ctx.strokeStyle = '#64748b'; // slate-500
        ctx.lineWidth = 4;
        ctx.lineJoin = "round";

        // Wire path
        ctx.beginPath();
        // Top wire
        ctx.moveTo(cx, topPlateY + plateHeight / 2);
        ctx.lineTo(cx, topPlateY - 50);
        ctx.lineTo(cx + plateWidth / 2 + 80, topPlateY - 50);
        ctx.lineTo(cx + plateWidth / 2 + 80, cy - 30); // To Battery Top

        // Bottom wire
        ctx.moveTo(cx, bottomPlateY + plateHeight / 2);
        ctx.lineTo(cx, bottomPlateY + 50);
        ctx.lineTo(cx + plateWidth / 2 + 80, bottomPlateY + 50);
        ctx.lineTo(cx + plateWidth / 2 + 80, cy + 30); // To Battery Bottom
        ctx.stroke();

        // Battery Graphic
        const battX = cx + plateWidth / 2 + 80;
        ctx.fillStyle = '#94a3b8';
        // Positive terminal (Top)
        ctx.fillRect(battX - 20, cy - 30, 40, 4); // Long Line
        // Negative terminal (Bottom)
        ctx.fillRect(battX - 10, cy + 26, 20, 4); // Short Line

        // Voltage Label
        ctx.fillStyle = voltage > 0 ? '#ef4444' : '#3b82f6';
        ctx.font = 'bold 16px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`${voltage}V`, battX + 40, cy + 5);


        // 2. Draw Plates
        // Top Plate
        const plateColor = '#cbd5e1'; // slate-300

        // Dielectric
        if (dielectric > 1) {
            ctx.fillStyle = 'rgba(253, 224, 71, 0.3)'; // Yellow tint
            ctx.fillRect(cx - plateWidth / 2, topPlateY + plateHeight, plateWidth, separationPx);
        }

        // Draw Top Plate
        ctx.fillStyle = plateColor; // Metallic
        ctx.fillRect(cx - plateWidth / 2, topPlateY, plateWidth, plateHeight);
        ctx.strokeStyle = '#94a3b8';
        ctx.strokeRect(cx - plateWidth / 2, topPlateY, plateWidth, plateHeight);

        // Draw Bottom Plate
        ctx.fillStyle = plateColor;
        ctx.fillRect(cx - plateWidth / 2, bottomPlateY, plateWidth, plateHeight);
        ctx.strokeRect(cx - plateWidth / 2, bottomPlateY, plateWidth, plateHeight);

        // 3. Draw Charges
        // Q is proportional to `physicsData.Q`.
        // Visual Count: Map Q range to 5-20 signs
        const maxQ = 2e-11; // Approx reference
        const chargeCount = Math.min(20, Math.max(3, Math.abs(physicsData.Q) / 1e-13));

        const drawCharges = (y: number, isPositive: boolean) => {
            const color = isPositive ? '#ef4444' : '#3b82f6';
            const sign = isPositive ? '+' : '-';
            ctx.fillStyle = color;
            ctx.font = 'bold 16px sans-serif';
            ctx.textBaseline = 'middle';

            const step = plateWidth / (chargeCount + 1);
            for (let i = 1; i <= chargeCount; i++) {
                ctx.fillText(sign, cx - plateWidth / 2 + i * step, y);
            }
        };

        if (voltage !== 0) {
            // Top Plate charges
            drawCharges(topPlateY + plateHeight / 2, voltage > 0);
            // Bottom Plate charges
            drawCharges(bottomPlateY + plateHeight / 2, voltage < 0);
        }

        // 4. Draw E-Field Lines
        // Draw arrows from + to -
        if (voltage !== 0) {
            const fieldOpacity = Math.min(1, Math.abs(physicsData.E) / 500); // Fade if weak
            ctx.globalAlpha = 0.5 + fieldOpacity * 0.5;
            ctx.strokeStyle = '#bef264'; // lime-300
            ctx.fillStyle = '#bef264';
            ctx.lineWidth = 1;

            const arrowCount = 5;
            const step = plateWidth / (arrowCount + 1);
            const startY = voltage > 0 ? topPlateY + plateHeight : bottomPlateY;
            const endY = voltage > 0 ? bottomPlateY : topPlateY + plateHeight;

            for (let i = 1; i <= arrowCount; i++) {
                const x = cx - plateWidth / 2 + i * step;
                ctx.beginPath();
                ctx.moveTo(x, startY);
                ctx.lineTo(x, endY);
                ctx.stroke();

                // Arrowhead (Middle)
                const midY = (startY + endY) / 2;
                // Direction: From + to -
                const dir = voltage > 0 ? 1 : -1;

                ctx.beginPath();
                ctx.moveTo(x, midY);
                ctx.lineTo(x - 4, midY - 8 * dir);
                ctx.lineTo(x + 4, midY - 8 * dir);
                ctx.fill();
            }
            ctx.globalAlpha = 1.0;
        }

    }, [area, distance, voltage, dielectric, physicsData]);

    // --- HELPERS for Display ---
    const formatMetric = (val: number, unit: string) => {
        if (Math.abs(val) === 0) return `0 ${unit}`;
        const absVal = Math.abs(val);

        if (absVal < 1e-12) return `${(val * 1e15).toFixed(2)} f${unit}`; // femto
        if (absVal < 1e-9) return `${(val * 1e12).toFixed(2)} p${unit}`; // pico
        if (absVal < 1e-6) return `${(val * 1e9).toFixed(2)} n${unit}`; // nano
        if (absVal < 1e-3) return `${(val * 1e6).toFixed(2)} µ${unit}`; // micro
        if (absVal < 1) return `${(val * 1e3).toFixed(2)} m${unit}`; // milli
        return `${val.toPrecision(4)} ${unit}`;
    };

    // --- DRAW REF & RESIZE ---
    // Use a ref to hold the latest draw function to avoid re-binding the observer
    const drawRef = useRef(draw);
    useEffect(() => { drawRef.current = draw; }, [draw]);

    // Resize Observer (Run Once)
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
                    if (drawRef.current) requestAnimationFrame(drawRef.current);
                }
            }
        });

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    // Animation Loop (Trigger on state change)
    useEffect(() => {
        requestAnimationFrame(draw);
    }, [draw]);

    return (
        <div className="flex flex-col lg:flex-row h-full gap-4 p-4 lg:p-6 w-full animate-in fade-in zoom-in-95 duration-500">
            {/* LEFT: SIMULATION */}
            <div className="flex-1 flex flex-col gap-4 min-h-0">
                <div
                    ref={containerRef}
                    className="flex-1 bg-slate-900/80 rounded-2xl border border-slate-700 shadow-2xl relative backdrop-blur-sm overflow-hidden"
                >
                    <canvas ref={canvasRef} className="block w-full h-full" />

                    {/* Overlay Info */}
                    <div className="absolute top-4 left-4 pointer-events-none space-y-2">
                        <div className="bg-slate-800/80 backdrop-blur p-3 rounded-lg border border-slate-600 shadow-lg max-w-xs">
                            <h4 className="flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase mb-2">
                                <Zap size={14} /> Trạng thái điện
                            </h4>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
                                <span className="text-slate-400">Điện dung (C):</span>
                                <span className="font-mono text-white text-right">{formatMetric(physicsData.C, 'F')}</span>

                                <span className="text-slate-400">Điện tích (Q):</span>
                                <span className="font-mono text-white text-right">{formatMetric(physicsData.Q, 'C')}</span>

                                <span className="text-slate-400">Năng lượng (W):</span>
                                <span className="font-mono text-white text-right">{formatMetric(physicsData.W, 'J')}</span>

                                <span className="text-slate-400">Điện trường (E):</span>
                                <span className="font-mono text-white text-right">{physicsData.E.toFixed(0)} V/m</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT: CONTROLS */}
            <div className="lg:w-80 flex-none flex flex-col gap-4 overflow-y-auto custom-scrollbar h-full pb-10">
                <div className="bg-slate-900/50 rounded-xl border border-slate-700/50 p-5 space-y-6 flex-shrink-0">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-700 pb-2">
                        <Settings size={16} /> Thông số Tụ điện
                    </h3>

                    {/* Voltage */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                            <span className="flex items-center gap-1 text-slate-300"><Battery size={14} /> Hiệu điện thế (U)</span>
                            <span className="text-cyan-400">{voltage.toFixed(1)} V</span>
                        </div>
                        <input
                            type="range" min="-12" max="12" step="0.1"
                            value={voltage}
                            onChange={(e) => setVoltage(Number(e.target.value))}
                            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                        />
                    </div>

                    {/* Area */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                            <span className="flex items-center gap-1 text-slate-300"><Maximize size={14} /> Diện tích bản tụ (S)</span>
                            <span className="text-cyan-400">{area} mm²</span>
                        </div>
                        <input
                            type="range" min="100" max="500" step="10"
                            value={area}
                            onChange={(e) => setArea(Number(e.target.value))}
                            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                        />
                    </div>

                    {/* Distance */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                            <span className="flex items-center gap-1 text-slate-300"><ArrowDownUp size={14} /> Khoảng cách (d)</span>
                            <span className="text-cyan-400">{distance.toFixed(1)} mm</span>
                        </div>
                        <input
                            type="range" min="2" max="20" step="0.1"
                            value={distance}
                            onChange={(e) => setDistance(Number(e.target.value))}
                            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                        />
                    </div>

                    {/* Dielectric */}
                    <div className="space-y-2 pt-2 border-t border-slate-700/50">
                        <div className="flex justify-between text-xs font-bold text-slate-300">
                            <span>Chất cách điện (ε)</span>
                        </div>
                        <select
                            value={dielectric}
                            onChange={(e) => setDielectric(Number(e.target.value))}
                            className="w-full bg-slate-800 text-xs text-white p-2 rounded border border-slate-600 focus:border-cyan-500 outline-none"
                        >
                            <option value="1">Chân không / Không khí (ε = 1)</option>
                            <option value="2.1">Teflon (ε = 2.1)</option>
                            <option value="3.9">Giấy tẩm dầu (ε = 3.9)</option>
                            <option value="5">Thủy tinh (ε = 5-10)</option>
                        </select>
                    </div>

                    <div className="bg-indigo-900/20 rounded-xl p-3 border border-indigo-500/30 text-indigo-200 text-xs space-y-1">
                        <div className="font-bold flex gap-2"><Info size={12} /> Công thức</div>
                        <p>C = ε·ε₀·S / d</p>
                        <p>Q = C·U</p>
                        <p>W = ½·C·U²</p>
                    </div>

                    <div className="text-center pt-2">
                        <button
                            onClick={() => {
                                setArea(200);
                                setDistance(5);
                                setVoltage(1.5);
                                setDielectric(1);
                            }}
                            className="text-xs text-slate-500 hover:text-white flex items-center justify-center gap-1 mx-auto transition-colors"
                        >
                            <RotateCcw size={12} /> Đặt lại mặc định
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
