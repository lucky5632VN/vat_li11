import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RefreshCw, Volume2, Mic, Settings, Info, Zap } from 'lucide-react';

const SoundSpeedExperiment = () => {
    // --- State ---
    // Length of air column L (m)
    // We control the Water Level. Tube Length is fixed (say 1.2m).
    // waterLevel is distance from bottom. L = TubeHeight - waterLevel.
    // Actually simpler: Input is "Air Column Length L" directly (simulating moving reservoir).
    const [airLength, setAirLength] = useState(0.5); // meters
    const [frequency, setFrequency] = useState(440); // Hz
    const [temperature, setTemperature] = useState(20); // Celsius (affects V)
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(0.5); // Simulation Volume

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>();
    const timeRef = useRef(0);

    // --- Physics ---
    // v = 331.5 + 0.6 * T
    const speedOfSound = 331.5 + 0.6 * temperature;
    const wavelength = speedOfSound / frequency;

    // Resonance condition for Closed Tube (water closed one end):
    // Resonance starts at L = lambda/4, 3lambda/4, 5lambda/4 ...
    // L_resonance = (2k + 1) * lambda / 4

    // Calculate resonance "intensity" (0 to 1) based on how close L is to resonance
    // A simple Lorentzian or Gaussian peak around resonance points.
    const calculateResonanceIntensity = (L: number, lambda: number) => {
        // Find closest resonance mode
        // L = n * lambda/4 where n is odd integer
        const n_float = (4 * L) / lambda;
        // We want n close to 1, 3, 5, 7...
        // Distance to closest odd integer:
        const n_round = Math.round(n_float);
        const isOdd = n_round % 2 !== 0;

        // If rounded is even, we are far from odd resonance? Be careful.
        // e.g. 2.0 -> Resonances at 1.0, 3.0.  2.0 is anti-resonance.
        // Distance to closest ODD integer:
        // math trick: distance(x, odd) = abs( (x-1)/2 - round((x-1)/2) ) * 2 ?? No.
        // Simpler: find closest k for (2k+1). 
        // Target = (2k+1). Closest match.

        // Scan typical modes (1, 3, 5, 7, 9)
        let minDiff = 1000;
        for (let k = 0; k < 10; k++) {
            const targetN = 2 * k + 1;
            const diff = Math.abs(n_float - targetN);
            if (diff < minDiff) minDiff = diff;
        }

        // Width of resonance peak (Q factor simulation)
        const width = 0.15; // Tuning sharpness
        // Resonance shape: 1 / (1 + (diff/width)^2)
        return 1 / (1 + (minDiff / width) ** 2);
    };

    const resonanceIntensity = calculateResonanceIntensity(airLength, wavelength);

    // --- Audio Engine ---
    const [isMuted, setIsMuted] = useState(true);
    const audioContextRef = useRef<AudioContext | null>(null);
    const oscillatorRef = useRef<OscillatorNode | null>(null);
    const gainNodeRef = useRef<GainNode | null>(null);

    // Initialize Audio Context on first play interact (or effect, but suspended)
    useEffect(() => {
        if (!audioContextRef.current) {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            audioContextRef.current = new AudioContextClass();

            // Master Gain
            const gainNode = audioContextRef.current.createGain();
            gainNode.connect(audioContextRef.current.destination);
            gainNodeRef.current = gainNode;
        }
        return () => {
            if (audioContextRef.current) {
                audioContextRef.current.close();
                audioContextRef.current = null;
            }
        };
    }, []);

    // Handle Oscillator & Playback
    useEffect(() => {
        const ctx = audioContextRef.current;
        if (!ctx) return;

        if (isPlaying && !isMuted) {
            // Resume if suspended (browser policy)
            if (ctx.state === 'suspended') ctx.resume();

            // Create Osc if needed
            if (!oscillatorRef.current) {
                const osc = ctx.createOscillator();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(frequency, ctx.currentTime);
                osc.connect(gainNodeRef.current!);
                osc.start();
                oscillatorRef.current = osc;
            } else {
                // Update freq smoothly
                oscillatorRef.current.frequency.setTargetAtTime(frequency, ctx.currentTime, 0.1);
            }
        } else {
            // Stop
            if (oscillatorRef.current) {
                oscillatorRef.current.stop();
                oscillatorRef.current.disconnect();
                oscillatorRef.current = null;
            }
        }
    }, [isPlaying, isMuted, frequency]);

    // Handle Volume / Resonance
    useEffect(() => {
        const ctx = audioContextRef.current;
        const gainNode = gainNodeRef.current;

        if (ctx && gainNode) {
            if (!isPlaying || isMuted) {
                gainNode.gain.setTargetAtTime(0, ctx.currentTime, 0.1);
            } else {
                // Base volume (0.01) + Resonance Boost (up to 0.3)
                // When resonant -> Loud. When not -> Quiet hum.
                const targetGain = 0.01 + (resonanceIntensity * 0.4);
                gainNode.gain.setTargetAtTime(targetGain, ctx.currentTime, 0.1);
            }
        }
    }, [resonanceIntensity, isPlaying, isMuted]);

    // --- Animation ---
    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;

        // Time update
        if (isPlaying) {
            timeRef.current += 0.01; // dt
        }
        const t = timeRef.current;

        // --- Draw ---
        ctx.clearRect(0, 0, width, height);

        // Background
        ctx.fillStyle = "#0f172a";
        ctx.fillRect(0, 0, width, height);

        // 1. Draw Tube system
        const tubeWidth = 60;
        const tubeHeight = 400; // pixels
        const tubeBottomY = height - 50;
        const tubeTopY = tubeBottomY - tubeHeight;
        const tubeX = centerX;

        // Scale: 1.2m = tubeHeight (400px) => 1m = 333px
        const pxPerM = tubeHeight / 1.2;
        const airHeightPx = airLength * pxPerM;
        const waterLevelY = tubeTopY + airHeightPx;

        // Draw Water (Blue)
        ctx.fillStyle = "rgba(6, 182, 212, 0.6)"; // Cyan-500
        ctx.fillRect(tubeX - tubeWidth / 2, waterLevelY, tubeWidth, tubeBottomY - waterLevelY);

        // Draw Glass Tube Walls
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(tubeX - tubeWidth / 2, tubeTopY - 20); // Top flare
        ctx.lineTo(tubeX - tubeWidth / 2, tubeBottomY);
        ctx.lineTo(tubeX + tubeWidth / 2, tubeBottomY);
        ctx.lineTo(tubeX + tubeWidth / 2, tubeTopY - 20);
        ctx.stroke();

        // 2. Tuning Fork (Above Tube)
        const forkY = tubeTopY - 40;
        const forkAmp = isPlaying ? 3 : 0;
        const vib = Math.sin(t * frequency * 0.5) * forkAmp; // Fake visual freq

        // Stem
        ctx.strokeStyle = "#94a3b8"; // Slate-400
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(centerX, forkY);
        ctx.lineTo(centerX, forkY - 40);
        ctx.stroke();

        // Prongs (Vibrating)
        ctx.lineWidth = 4;
        ctx.beginPath();
        // Left Prong
        ctx.moveTo(centerX, forkY);
        ctx.quadraticCurveTo(centerX - 15 + vib, forkY + 30, centerX - 15 + vib, forkY + 60);
        // Right Prong
        ctx.moveTo(centerX, forkY);
        ctx.quadraticCurveTo(centerX + 15 - vib, forkY + 30, centerX + 15 - vib, forkY + 60);
        ctx.stroke();

        // 3. Sound Waves (Visualizing Resonance)
        // Standing Wave inside air column
        // Node at water (Closed end), Antinode at open top (approx).
        if (isPlaying) {
            ctx.strokeStyle = `rgba(244, 114, 182, ${0.3 + resonanceIntensity * 0.7})`; // Pink, brighter if resonant
            ctx.lineWidth = 2;
            ctx.beginPath();

            // Draw sine wave envelope vertical
            // y from tubeTopY to waterLevelY (0 to L)
            // Amplitude = Envelope
            const steps = 50;
            for (let i = 0; i <= steps; i++) {
                const yRel = (i / steps) * airHeightPx; // 0 (top) to H (bottom)
                const yDraw = tubeTopY + yRel;

                // Physics: Closed End at Bottom (Node), Open at Top (Antinode)
                // WAIT! Standing wave shape:
                // Bottom (Water): Displacement Node -> Amp = 0.
                // Top (Open): Displacement Antinode -> Amp = Max.
                // Function: sin(k * distance_from_bottom)
                // distance_from_bottom = airHeightPx - yRel

                const xPhys = airLength - (yRel / pxPerM); // x=0 at bottom
                // k * xPhys
                // k = 2pi / lambda
                const k = (2 * Math.PI) / wavelength;
                // Standing wave term: sin(kx) * cos(wt)
                // Scale amplitude by resonanceIntensity!
                const standingAmp = 15 * resonanceIntensity * Math.sin(k * xPhys);

                // Visualize instantaneous
                const displace = standingAmp * Math.cos(t * frequency * 0.2); // Slow visual freq

                if (i === 0) ctx.moveTo(centerX + displace, yDraw);
                else ctx.lineTo(centerX + displace, yDraw);
            }
            ctx.stroke();

            // Emit Sound Waves OUTSIDE (Arcs)
            // Intensity depends on Resonance
            if (resonanceIntensity > 0.1) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${resonanceIntensity - (t % 1)})`;
                ctx.lineWidth = 2;
                const rBase = (t * 50) % 100;
                for (let r = rBase; r < 200; r += 40) {
                    const alpha = Math.max(0, 1 - r / 200) * resonanceIntensity;
                    ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
                    ctx.beginPath();
                    ctx.arc(centerX, forkY, r, Math.PI, 0); // Top semi-circles
                    ctx.stroke();
                }
            }
        }

        // 4. Ruler / Measurement
        ctx.fillStyle = "#64748b";
        ctx.font = "12px monospace";
        ctx.textAlign = "right";
        for (let m = 0; m <= 1.2; m += 0.1) {
            const yMark = tubeTopY + (m * pxPerM);
            if (yMark > tubeBottomY) break;
            ctx.fillRect(tubeX - tubeWidth / 2 - 10, yMark, 8, 1);
            ctx.fillText(`${m.toFixed(1)}m`, tubeX - tubeWidth / 2 - 14, yMark + 4);
        }

        // Current Level Indicator
        ctx.strokeStyle = "#ef4444"; // Red
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(tubeX - tubeWidth - 20, waterLevelY);
        ctx.lineTo(tubeX + tubeWidth + 20, waterLevelY);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "#ef4444";
        ctx.fillText(`L = ${airLength.toFixed(3)}m`, tubeX - tubeWidth - 25, waterLevelY + 4);


        animationRef.current = requestAnimationFrame(animate);
    }, [airLength, frequency, isPlaying, resonanceIntensity, wavelength]);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [animate]);

    return (
        <div className="flex flex-col min-h-screen bg-[#020617] font-sans text-slate-200">
            <main className="flex-grow p-4 md:p-8 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Sim Canvas */}
                <div className="lg:col-span-7 bg-[#0f172a] rounded-2xl border border-slate-800 shadow-xl overflow-hidden relative">
                    <canvas ref={canvasRef} width={600} height={600} className="w-full h-full object-contain" />

                    {/* Loudness Meter Overlay */}
                    <div className="absolute top-4 left-4 bg-slate-900/80 p-3 rounded-lg border border-slate-700 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-2 text-pink-400 font-bold text-sm">
                            <Mic size={16} /> Cường độ âm (dB)
                        </div>
                        <div className="w-4 h-32 bg-slate-800 rounded-full overflow-hidden flex flex-col justify-end border border-slate-700 mx-auto">
                            <div
                                className="w-full bg-gradient-to-t from-green-500 via-yellow-500 to-red-500 transition-all duration-100"
                                style={{ height: `${resonanceIntensity * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="bg-[#1e293b] rounded-2xl p-6 border border-slate-700 shadow-lg">
                        <h2 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                            <Settings size={20} /> Thiết lập thí nghiệm
                        </h2>

                        {/* Frequency Slider */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-slate-400 text-sm">Tần số âm thoa (f)</span>
                                <button
                                    onClick={() => setIsMuted(!isMuted)}
                                    className={`p-2 rounded-full transition-colors flex items-center gap-2 text-xs font-bold ${!isMuted ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
                                >
                                    {!isMuted ? <Volume2 size={16} /> : <Volume2 size={16} className="opacity-50" />}
                                    {!isMuted ? "ON" : "OFF"}
                                </button>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-cyan-400 font-mono">{frequency} Hz</span>
                            </div>
                            <input
                                type="range" min="200" max="1000" step="10"
                                value={frequency}
                                onChange={(e) => setFrequency(Number(e.target.value))}
                                className="w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        {/* Length Slider */}
                        <div className="mb-6">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-400">Chiều dài cột khí (L)</span>
                                <span className="text-cyan-400 font-mono">{(airLength * 100).toFixed(1)} cm</span>
                            </div>
                            <input
                                type="range" min="0.1" max="1.0" step="0.001"
                                value={airLength}
                                onChange={(e) => setAirLength(Number(e.target.value))}
                                className="w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="text-xs text-slate-500 mt-1 flex justify-between">
                                <button className="text-cyan-600 hover:text-cyan-400" onClick={() => setAirLength(Math.max(0.1, airLength - 0.005))}>- Fine</button>
                                <button className="text-cyan-600 hover:text-cyan-400" onClick={() => setAirLength(Math.min(1.0, airLength + 0.005))}>+ Fine</button>
                            </div>
                        </div>

                        {/* Readout */}
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Tốc độ âm (lý thuyết):</span>
                                <span className="text-emerald-400 font-mono">{speedOfSound.toFixed(1)} m/s</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Bước sóng (λ):</span>
                                <span className="text-pink-400 font-mono">{wavelength.toFixed(3)} m</span>
                            </div>
                            <div className="flex justify-between text-sm font-bold pt-2 border-t border-slate-800">
                                <span className="text-slate-300">Cộng hưởng?</span>
                                <span className={resonanceIntensity > 0.8 ? "text-green-400 animate-pulse" : "text-slate-600"}>
                                    {resonanceIntensity > 0.8 ? "MAX (Nghe to nhất)" : "---"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Guide */}
                    <div className="bg-[#1e293b] rounded-2xl p-6 border border-slate-700 shadow-lg flex-grow">
                        <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
                            <Info size={18} /> Hướng dẫn
                        </h3>
                        <ul className="text-sm text-slate-300 space-y-2 list-disc pl-4">
                            <li>Điều chỉnh độ cao cột khí (mực nước) bằng thanh trượt L.</li>
                            <li>Lắng nghe hoặc quan sát thanh đo cường độ âm.</li>
                            <li>Khi cột khí có độ dài thích hợp ($L = (2k+1)\lambda/4$), hiện tượng <strong>cộng hưởng</strong> xảy ra, âm thanh sẽ nghe to nhất.</li>
                            <li>Sử dụng các giá trị L cộng hưởng liên tiếp để tính bước sóng và tốc độ âm.</li>
                        </ul>
                    </div>
                </div>

            </main>
        </div>
    );
};
export default SoundSpeedExperiment;
