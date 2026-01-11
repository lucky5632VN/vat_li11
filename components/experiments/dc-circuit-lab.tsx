"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Settings, RefreshCw, Zap, Activity, Grid } from 'lucide-react';

// --- TYPES ---
type CircuitType = 'series' | 'parallel';

export default function DCCircuitLab() {
    // --- STATE ---
    const [circuitType, setCircuitType] = useState<CircuitType>('series');
    const [voltage, setVoltage] = useState(12); // Volts
    const [r1, setR1] = useState(10); // Ohms
    const [r2, setR2] = useState(10); // Ohms
    const [isSwitchClosed, setIsSwitchClosed] = useState(true);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    // --- CHARGE INTEGRATION ---
    // Accumulate 'charge' (integral of current over time) for each branch distinctively
    // This ensures continuity (no jumps) and correct relative speeds
    const chargesRef = useRef({ main: 0, r1: 0, r2: 0 });

    // --- PHYSICS CALCULATIONS ---
    const calculatePhysics = () => {
        let rTotal = 0;
        let iTotal = 0;
        let i1 = 0;
        let i2 = 0;
        let v1 = 0;
        let v2 = 0;

        if (!isSwitchClosed) {
            return { rTotal: Infinity, iTotal: 0, i1: 0, i2: 0, v1: 0, v2: 0, pTotal: 0 };
        }

        if (circuitType === 'series') {
            rTotal = r1 + r2;
            iTotal = voltage / rTotal; // I = U / R
            i1 = iTotal;
            i2 = iTotal;
            v1 = i1 * r1;
            v2 = i2 * r2;
        } else { // parallel
            // 1/R = 1/R1 + 1/R2 -> R = (R1*R2)/(R1+R2)
            rTotal = (r1 * r2) / (r1 + r2);
            iTotal = voltage / rTotal;
            v1 = voltage; // Parallel: U is same
            v2 = voltage;
            i1 = v1 / r1;
            i2 = v2 / r2;
        }

        const pTotal = voltage * iTotal; // Power P = U*I

        return { rTotal, iTotal, i1, i2, v1, v2, pTotal };
    };

    const data = calculatePhysics();

    // --- DRAWING ---
    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const width = canvas.width;
        const height = canvas.height;
        const cx = width / 2;
        const cy = height / 2;

        ctx.clearRect(0, 0, width, height);

        // --- UPDATE CHARGES ---
        // Increment charge proportional to Current * ScalingFactor
        // Speed increased to 0.8 for better visibility
        chargesRef.current.main += data.iTotal * 0.8;
        chargesRef.current.r1 += data.i1 * 0.8;
        chargesRef.current.r2 += data.i2 * 0.8;

        // Grid Background
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        for (let x = 0; x < width; x += 40) { ctx.moveTo(x, 0); ctx.lineTo(x, height); }
        for (let y = 0; y < height; y += 40) { ctx.moveTo(0, y); ctx.lineTo(width, y); }
        ctx.stroke();

        // --- DRAW UTILS ---
        const drawResistor = (x: number, y: number, rVal: number, label: string, iVal: number, vVal: number, vertical: boolean, align: 'left' | 'right' | 'top' | 'bottom' | 'auto' = 'auto') => {
            const w = 12;
            ctx.save();
            ctx.translate(x, y);
            if (!vertical) ctx.rotate(-Math.PI / 2);

            // Wire Leads
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, -35); ctx.lineTo(0, -25);
            ctx.moveTo(0, 25); ctx.lineTo(0, 35);
            ctx.stroke();

            // Resistor Body (Zigzag)
            ctx.strokeStyle = '#e2e8f0';
            ctx.lineWidth = 3;
            ctx.lineJoin = 'round';
            ctx.beginPath();
            ctx.moveTo(0, -25); ctx.lineTo(w, -15);
            ctx.lineTo(-w, -5); ctx.lineTo(w, 5);
            ctx.lineTo(-w, 15); ctx.lineTo(0, 25);
            ctx.stroke();

            // --- LABEL BOX RENDERING ---
            // Rotate back to screen coordinates for text
            ctx.rotate(vertical ? 0 : Math.PI / 2);

            // Dynamic Size based on Width
            const isCompact = width < 1000;

            const kp = isCompact ? 8 : 15;
            const gap = isCompact ? 12 : 20;
            const titleSize = isCompact ? 12 : 16;
            const valueSize = isCompact ? 11 : 15;
            const detailSize = isCompact ? 10 : 14;
            const boxH = isCompact ? 65 : 90;
            const offset = isCompact ? 45 : 40;
            const borderRadius = isCompact ? 6 : 8;
            const startYOffset = isCompact ? 18 : 25;
            const lineSpacing = isCompact ? 16 : 22;
            const detailSpacing = isCompact ? 34 : 47;
            const lineWidth = isCompact ? 1 : 1.5;

            // 1. Prepare Text & Measure
            ctx.font = `bold ${titleSize}px monospace`;
            const labelMet = ctx.measureText(label);

            ctx.font = `bold ${valueSize}px monospace`;
            const rMet = ctx.measureText(`${rVal} Ω`);

            ctx.font = `${detailSize}px monospace`;
            const iStr = `I: ${iVal.toFixed(4)} A`;
            const uStr = `U: ${vVal.toFixed(2)} V`;
            const iMet = ctx.measureText(iStr);
            const uMet = ctx.measureText(uStr);

            // Calculate dynamic width
            const meterWidth = iMet.width + gap + uMet.width;
            const contentW = Math.max(labelMet.width, rMet.width, meterWidth);
            const boxW = contentW + kp * 2;

            // 2. Determine Position (Offset Logic)
            let drawX = 0;
            let drawY = 0;

            if (vertical) {
                // Vertical Resistor (runs Y-axis)
                if (align === 'left') {
                    drawX = -offset - boxW;
                    drawY = -boxH / 2;
                } else if (align === 'right') {
                    drawX = offset;
                    drawY = -boxH / 2;
                } else {
                    drawX = offset;
                    drawY = -boxH / 2;
                }
            } else {
                // Horizontal Resistor (runs X-axis, visual)
                // Note: local coords rotated. 
                // If align 'top', means visually above.
                if (align === 'top') {
                    drawX = -boxW / 2;
                    drawY = -offset - boxH;
                } else if (align === 'bottom') {
                    drawX = -boxW / 2;
                    drawY = offset;
                } else {
                    drawX = -boxW / 2;
                    drawY = offset;
                }
            }

            // 3. Draw Box Background (High Z-Index, Opaque)
            ctx.fillStyle = 'rgba(20, 20, 20, 0.90)'; // Darker opacity
            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = lineWidth;

            ctx.beginPath();
            ctx.roundRect(drawX, drawY, boxW, boxH, borderRadius);
            ctx.fill();
            ctx.stroke();

            // 4. Draw Text
            const startX = drawX + kp;
            const startY = drawY + startYOffset;

            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';

            // Row 1: Label
            ctx.font = `bold ${titleSize}px monospace`;
            ctx.fillStyle = '#fff';
            ctx.fillText(label, startX, startY);

            // Row 2: R
            ctx.font = `bold ${valueSize}px monospace`;
            ctx.fillStyle = '#cbd5e1';
            ctx.fillText(`${rVal} Ω`, startX, startY + lineSpacing);

            // Row 3: I and U
            ctx.font = `${detailSize}px monospace`;
            ctx.fillStyle = '#fbbf24'; // I color
            ctx.fillText(iStr, startX, startY + detailSpacing);

            ctx.fillStyle = '#38bdf8'; // U color
            // Position U after I + gap
            ctx.fillText(uStr, startX + iMet.width + gap, startY + detailSpacing);

            ctx.restore();
        };

        const drawBattery = (x: number, y: number, volts: number) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.fillStyle = '#94a3b8';
            ctx.fillRect(-15, -10, 30, 3);
            ctx.fillRect(-7, 10, 14, 3);
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, -30); ctx.lineTo(0, -10);
            ctx.moveTo(0, 10); ctx.lineTo(0, 30);
            ctx.stroke();

            ctx.font = 'bold 16px monospace';
            ctx.fillStyle = '#38bdf8';
            ctx.textAlign = 'right';
            ctx.fillText(`E = ${volts} V`, -25, 5);
            ctx.restore();
        };

        const drawWire = (x1: number, y1: number, x2: number, y2: number, chargeValue: number, current: number) => {
            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();

            // Draw Flow dots
            if (current > 0.001) {
                const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                const angle = Math.atan2(y2 - y1, x2 - x1);

                const dotSpacing = 20;
                // Use the continuous charge accumulator for offset
                // Modulo allows wrapping without jumps
                const offset = chargeValue % dotSpacing;

                const count = Math.ceil(len / dotSpacing) + 1; // +1 to cover edge entering

                ctx.fillStyle = '#fbbf24';
                for (let i = -1; i < count; i++) {
                    const dist = i * dotSpacing + offset;
                    if (dist >= 0 && dist <= len) {
                        const dx = x1 + Math.cos(angle) * dist;
                        const dy = y1 + Math.sin(angle) * dist;
                        ctx.beginPath();
                        ctx.arc(dx, dy, 2, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }
        };

        // --- CIRCUIT LAYOUT ---
        // Center: cx, cy
        // --- CIRCUIT LAYOUT (RESPONSIVE) ---
        const padding = 60;
        const availableW = width - padding * 2;
        const availableH = height - padding * 2;

        // Dynamic box size
        const boxW = Math.min(600, Math.max(350, availableW));
        const boxH = Math.min(300, Math.max(200, availableH));

        const leftX = cx - boxW / 2;
        const rightX = cx + boxW / 2;

        // Fix: Push circuit down to avoid overlay collision
        // Previous: cy - boxH/3 (shifts up). New: cy - boxH/2 + 50 (shifts down)
        const offsetY = 50;
        const topY = cy - boxH / 2 + offsetY;
        const bottomY = cy + boxH / 2 + offsetY;

        // 1. Draw Background Wires & Source first (Lowest Z-Index)
        // Source Battery
        drawBattery(leftX, (topY + bottomY) / 2, voltage);

        // Feeder Wires (Left side)
        const sourceY = (topY + bottomY) / 2;
        drawWire(leftX, sourceY - 30, leftX, topY, chargesRef.current.main, data.iTotal);
        drawWire(leftX, bottomY, leftX, sourceY + 30, chargesRef.current.main, data.iTotal);

        if (circuitType === 'series') {
            // SERIES LAYOUT: Linear on Top Rail
            // Source -> [Top Left] -> R1 -> [Mid] -> R2 -> [Top Right] -> Return

            // Positioning: Distributed along line
            const wireLength = rightX - leftX;
            const r1Pos = leftX + wireLength * 0.3;
            const r2Pos = leftX + wireLength * 0.7;

            // Wires on Top Rail
            drawWire(leftX, topY, r1Pos - 35, topY, chargesRef.current.main, data.iTotal); // Left -> R1
            drawWire(r1Pos + 35, topY, r2Pos - 35, topY, chargesRef.current.main, data.iTotal); // R1 -> R2
            drawWire(r2Pos + 35, topY, rightX, topY, chargesRef.current.main, data.iTotal); // R2 -> Right Corner

            // Right Return Wire
            drawWire(rightX, topY, rightX, bottomY, chargesRef.current.main, data.iTotal);
            // Bottom Return Wire
            drawWire(rightX, bottomY, leftX, bottomY, chargesRef.current.main, data.iTotal);

            // Draw Components (Top Z-Index)
            // R1: Top Horizontal. Label 'bottom' (Inside)
            drawResistor(r1Pos, topY, r1, "R1", data.i1, data.v1, false, 'bottom');
            // R2: Top Horizontal. Label 'bottom' (Inside)
            drawResistor(r2Pos, topY, r2, "R2", data.i2, data.v2, false, 'bottom');

        } else {
            // PARALLEL LAYOUT: Widen Spacing
            const spacing = boxW * 0.25;
            const r1X = cx - spacing;
            const r2X = cx + spacing;

            // Top Bus (Distribution)
            drawWire(leftX, topY, r1X, topY, chargesRef.current.main, data.iTotal); // Source -> R1 Joint
            drawWire(r1X, topY, r2X, topY, chargesRef.current.r2, data.i2); // R1 Joint -> R2 Joint (Visual only, technically flows to R2)

            // Bottom Bus (Return)
            drawWire(r2X, bottomY, r1X, bottomY, chargesRef.current.r2, data.i2);
            drawWire(r1X, bottomY, leftX, bottomY, chargesRef.current.main, data.iTotal);

            // Branch 1 (R1) - Drop Wires
            const midY = (topY + bottomY) / 2;
            drawWire(r1X, topY, r1X, midY - 35, chargesRef.current.r1, data.i1);
            drawWire(r1X, midY + 35, r1X, bottomY, chargesRef.current.r1, data.i1);

            // Branch 2 (R2) - Drop Wires
            drawWire(r2X, topY, r2X, midY - 35, chargesRef.current.r2, data.i2);
            drawWire(r2X, midY + 35, r2X, bottomY, chargesRef.current.r2, data.i2);

            // Draw Components (Top Z-Index)
            // Align labels to 'Inside' (Center of loop)
            // R1 (Left): Label Right (Inner)
            drawResistor(r1X, midY, r1, "R1", data.i1, data.v1, true, 'right');
            // R2 (Right): Label Right (Outer)
            drawResistor(r2X, midY, r2, "R2", data.i2, data.v2, true, 'right');
        }

    }, [circuitType, voltage, r1, r2, isSwitchClosed, data]);

    // --- ANIMATION ---
    useEffect(() => {
        let frame: number;
        const loop = () => {
            draw();
            frame = requestAnimationFrame(loop);
        };
        loop();
        return () => cancelAnimationFrame(frame);
    }, [draw]);

    // --- RESIZE ---
    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;
        const observer = new ResizeObserver(entries => {
            const { width, height } = entries[0].contentRect;
            canvas.width = width;
            canvas.height = height;
        });
        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex flex-col lg:flex-row h-full gap-4 p-4 lg:p-6 w-full animate-in fade-in zoom-in-95 duration-500">
            {/* LEFT: SIMULATION */}
            <div className="flex-1 flex flex-col gap-4 min-h-0">
                <div
                    ref={containerRef}
                    className="flex-1 bg-slate-900/80 rounded-2xl border border-slate-700 shadow-2xl relative backdrop-blur-sm overflow-hidden"
                >
                    <canvas ref={canvasRef} className="block w-full h-full" />

                    {/* Top Stats Overlay */}
                    <div className="absolute top-4 left-4 p-4 min-w-[200px]">
                        <h4 className="flex items-center gap-2 text-yellow-500 font-bold text-sm uppercase mb-3">
                            <Activity size={16} /> Kết quả đo
                        </h4>
                        <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                                <span className="text-slate-400">R tương đương:</span>
                                <span className="font-mono font-bold text-white">{data.rTotal.toFixed(2)} Ω</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Dòng chính (I):</span>
                                <span className="font-mono font-bold text-yellow-400">{data.iTotal.toFixed(4)} A</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Công suất (P):</span>
                                <span className="font-mono font-bold text-green-400">{data.pTotal.toFixed(2)} W</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT: CONTROLS */}
            <div className="lg:w-80 flex-none flex flex-col gap-4 overflow-y-auto custom-scrollbar h-full pb-10">
                <div className="bg-slate-900/50 rounded-xl border border-slate-700/50 p-5 space-y-6 flex-shrink-0">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-700 pb-2">
                        <Settings size={16} /> Bảng điều khiển
                    </h3>

                    {/* Circuit Type */}
                    <div className="p-1 bg-slate-800 rounded-lg flex gap-1">
                        <button
                            onClick={() => setCircuitType('series')}
                            className={`flex-1 py-1.5 px-3 rounded text-xs font-bold transition-all ${circuitType === 'series' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                        >
                            Mắc nối tiếp
                        </button>
                        <button
                            onClick={() => setCircuitType('parallel')}
                            className={`flex-1 py-1.5 px-3 rounded text-xs font-bold transition-all ${circuitType === 'parallel' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                        >
                            Mắc song song
                        </button>
                    </div>

                    {/* Voltage Source */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                            <span className="flex items-center gap-1 text-slate-300"><Zap size={14} /> Nguồn điện (U)</span>
                            <span className="text-cyan-400">{voltage} V</span>
                        </div>
                        <input
                            type="range" min="1" max="24" step="1"
                            value={voltage}
                            onChange={(e) => setVoltage(Number(e.target.value))}
                            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                        />
                    </div>

                    {/* R1 */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                            <span className="text-slate-300">Điện trở R1</span>
                            <span className="text-orange-400">{r1} Ω</span>
                        </div>
                        <input
                            type="range" min="1" max="100" step="1"
                            value={r1}
                            onChange={(e) => setR1(Number(e.target.value))}
                            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                        />
                    </div>

                    {/* R2 */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                            <span className="text-slate-300">Điện trở R2</span>
                            <span className="text-blue-400">{r2} Ω</span>
                        </div>
                        <input
                            type="range" min="1" max="100" step="1"
                            value={r2}
                            onChange={(e) => setR2(Number(e.target.value))}
                            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                    </div>

                    {/* Switch */}
                    <button
                        onClick={() => setIsSwitchClosed(!isSwitchClosed)}
                        className={`w-full py-3 rounded-lg font-bold uppercase transition-all ${isSwitchClosed ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-red-900/50 hover:bg-red-800 text-red-200 border border-red-800'}`}
                    >
                        {isSwitchClosed ? 'ĐANG ĐÓNG MẠCH (ON)' : 'ĐANG NGẮT MẠCH (OFF)'}
                    </button>
                </div>
            </div>
        </div>
    );
}
