import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RefreshCw, Info, Settings, Zap, Type, ChevronRight, Circle } from 'lucide-react';

type BoundaryMode = 'fixed-fixed' | 'fixed-free';

const StandingWaveSim = () => {
  // --- State Configuration ---
  const [mode, setMode] = useState<BoundaryMode>('fixed-fixed');

  // Physical parameters
  const [length, setLength] = useState(1.5); // Length (m)
  const [amplitude, setAmplitude] = useState(0.5); // Amplitude (relative units)
  const [tension, setTension] = useState(50); // Tension (N)
  const [linearDensity, setLinearDensity] = useState(0.01); // kg/m
  const [frequency, setFrequency] = useState(40); // Frequency (Hz) - NEW INPUT

  // Simulation state
  const [isPlaying, setIsPlaying] = useState(true);
  const [time, setTime] = useState(0);

  // Canvas Refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  // --- Physics Calculations ---
  // v = sqrt(T / mu)
  const waveSpeed = Math.sqrt(tension / linearDensity);

  // lambda = v / f
  const wavelength = waveSpeed / frequency;

  // k_wave (angular wavenumber) = 2pi / lambda
  const kWave = (2 * Math.PI) / wavelength;
  const omega = 2 * Math.PI * frequency;

  // Calculated Number of Antinodes (Real-time visual count) for the given Length
  // k_visible = 2L / lambda
  // If integer -> Resonance
  const currentK = (2 * length) / wavelength;

  // Energy rough estimation
  const energy = 0.5 * linearDensity * length * Math.pow(omega * amplitude * 0.05, 2);

  // --- Animation Loop ---
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;

    // Dark Theme Colors
    const colorBg = '#0f172a'; // slate-900
    const colorGrid = '#1e293b'; // slate-800
    const colorAxis = '#334155'; // slate-700
    const colorWave = '#22d3ee'; // cyan-400 (Neon)
    const colorNode = '#f472b6'; // pink-400
    const colorText = '#94a3b8'; // slate-400

    const padding = 60;
    const drawWidth = width - 2 * padding;
    const pxPerMeter = drawWidth / length;

    // Clear canvas
    ctx.fillStyle = colorBg;
    ctx.fillRect(0, 0, width, height);

    // 1. Draw Grid
    ctx.strokeStyle = colorGrid;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = 0; i <= height; i += 40) { ctx.moveTo(0, i); ctx.lineTo(width, i); }
    for (let i = 0; i <= width; i += 40) { ctx.moveTo(i, 0); ctx.lineTo(i, height); }
    ctx.stroke();

    // 2. Draw Axes
    ctx.strokeStyle = colorAxis;
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, centerY);
    ctx.lineTo(width - padding, centerY);
    ctx.stroke();

    // Vertical Ref Lines
    ctx.setLineDash([]);
    ctx.strokeStyle = colorAxis;
    ctx.beginPath();
    ctx.moveTo(padding, 40); ctx.lineTo(padding, height - 40); // Sound Source
    ctx.moveTo(width - padding, 40); ctx.lineTo(width - padding, height - 40); // End Post
    ctx.stroke();

    // 3. Draw The Wave
    ctx.beginPath();
    ctx.moveTo(padding, centerY);

    let endPointY = centerY;

    // Simulate "Standing Wave" Pattern with Correct Boundary Conditions (Driven System)
    // We model the string driven at x=0 with amplitude A, and fixed/free at x=L.

    // Calculate Resonance Gain Factor (Denominator)
    // To avoid infinity, we add a small "damping" term imaginary or just clamp the denominator.
    // Simple approach: min(Limit, 1/sin(kL))

    let denominator = 0;
    if (mode === 'fixed-fixed') {
      // Condition: sin(kL)
      denominator = Math.sin(kWave * length);
    } else {
      // Condition: cos(kL) for Fixed-Free (Node at 0, Slope 0 at L... wait)
      // Driver at 0 is Displacment Source.
      // Fixed-Free means x=L is Free (Antinode of displacement, Node of Slope).
      // Form: y(x) ~ cos(k(L-x)) -> y'(L)=0 (Slope 0, Max Amp). 
      // y(0) = cos(kL).
      denominator = Math.cos(kWave * length);
    }

    // "Soft" resonance limit (Simulating Damping)
    const damping = 0.15; // Minimum value of denominator
    // If denominator is close to 0, wave blows up.
    // Effective Gain = 1 / sqrt(den^2 + damp^2)
    const gain = 1 / Math.sqrt(denominator * denominator + damping * damping);

    // Phase shift? At resonance, phase flips. 
    // cos(wt) term is fine. We just multiply by (1/den). 
    // If den < 0, it flips phase naturally.

    const maxVisualScale = 150;

    for (let px = 0; px <= drawWidth; px++) {
      const xPhysical = px / pxPerMeter;
      let shape = 0;

      if (mode === 'fixed-fixed') {
        // Wave function satisfying y(L)=0
        // y(x) = sin(k(L-x))
        // Amplitude scaled to match y(0) = A_source
        shape = Math.sin(kWave * (length - xPhysical));
      } else {
        // Wave function satisfying y'(L)=0 (Free End)
        // y(x) = cos(k(L-x))
        shape = Math.cos(kWave * (length - xPhysical));
      }

      // Resulting Wave
      const envelope = amplitude * gain * shape;
      const yPhysical = envelope * Math.cos(omega * time);

      // Actually, just scale by fixed constant, let it grow.
      // But limit screen space.

      const yDrawFinal = centerY - yPhysical * 60; // 60 is view scale

      ctx.lineTo(padding + px, yDrawFinal);
      if (px === drawWidth) endPointY = yDrawFinal;
    }

    // Helper to draw fixed end correctly visually
    // With sin(k(L-x)), at x_phys = length, sin(0) = 0. So yDraw = centerY.
    // So B is Fixed. Correct.

    // Neon Style Wave
    ctx.strokeStyle = colorWave;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 15;
    ctx.shadowColor = colorWave;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // 4. Draw Nodes/Ends
    // Point A (Source)
    ctx.fillStyle = colorNode;
    ctx.beginPath();
    ctx.arc(padding, centerY, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = colorText;
    ctx.font = '600 14px "Courier New", monospace';
    ctx.fillText('A (Nguồn)', padding - 30, centerY - 20);

    // Point B (End)
    // If Fixed: Clamp. If Free: Ring.
    // We draw the clamp at the PHYSICAL location L. 
    // If the wave node doesn't match, it visually "passes through" or looks disconnected?
    // Let's draw the clamp rigidly.

    if (mode === 'fixed-fixed') {
      ctx.fillStyle = colorNode;
      ctx.beginPath();
      ctx.arc(width - padding, centerY, 6, 0, Math.PI * 2); // Clamp is always at 0 displacement
      ctx.fill();
      ctx.fillStyle = colorText;
      ctx.fillText('B (Cố định)', width - padding - 40, centerY - 20);

      // Visual feedback: If EndPointY is far from CenterY -> "Vibration at Clamp" (Bad)
      if (Math.abs(endPointY - centerY) > 5) {
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(width - padding, centerY);
        ctx.lineTo(width - padding, endPointY);
        ctx.stroke();
      }

    } else {
      // Fixed-Free: B is a ring on a pole
      ctx.strokeStyle = colorNode;
      ctx.lineWidth = 3;
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(width - padding, endPointY, 6, 0, Math.PI * 2); // Ring moves with wave
      ctx.fill();
      ctx.stroke();

      // Pole
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(width - padding, centerY - 100);
      ctx.lineTo(width - padding, centerY + 100);
      ctx.stroke();

      ctx.fillStyle = colorText;
      ctx.fillText('B (Tự do)', width - padding - 40, endPointY - 30);
    }

    // Draw Time
    ctx.fillStyle = '#fff';
    ctx.font = '16px "Courier New", monospace';
    ctx.fillText(`t = ${time.toFixed(3)}s`, 20, 30);

    // Update time
    const timeStep = 0.005;
    if (isPlaying) {
      setTime(prev => prev + timeStep);
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [length, amplitude, kWave, omega, time, isPlaying, mode]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  const handleReset = () => {
    setTime(0);
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] font-sans text-slate-200 selection:bg-cyan-500/30">

      <main className="flex-grow p-4 md:p-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT COLUMN: VISUALIZATION (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">

          {/* Canvas Card */}
          <div className="bg-[#0f172a] rounded-2xl shadow-2xl border border-slate-800 overflow-hidden relative group">
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <div className={`px-3 py-1 rounded-full text-xs font-bold border ${mode === 'fixed-fixed' ? 'border-cyan-500/50 text-cyan-400 bg-cyan-950/30' : 'border-slate-700 text-slate-400 bg-slate-900/50'}`}>
                2 ĐẦU CỐ ĐỊNH
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-bold border ${mode === 'fixed-free' ? 'border-pink-500/50 text-pink-400 bg-pink-950/30' : 'border-slate-700 text-slate-400 bg-slate-900/50'}`}>
                1 ĐẦU TỰ DO
              </div>
            </div>

            <canvas
              ref={canvasRef}
              width={900}
              height={500}
              className="w-full h-auto bg-[#0f172a]"
            />
          </div>

          {/* Playback Control Bar */}
          <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-4">
              <button
                onClick={handleReset}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Reset"
              >
                <RefreshCw size={18} />
              </button>
              <div className="h-8 w-[1px] bg-slate-700 mx-2"></div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all active:scale-95 ${isPlaying ? 'bg-cyan-500/20 text-cyan-400 ring-2 ring-cyan-500/50' : 'bg-cyan-500 text-slate-900 hover:bg-cyan-400'}`}
              >
                {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
              </button>
            </div>

            {/* Live Data Display (Mini) */}
            <div className="hidden sm:flex gap-8 text-right font-mono text-sm">
              <div title="Số bó sóng thực tế (k)">
                <div className="text-slate-500 text-xs uppercase mb-1">Harmonics (k)</div>
                <div className={`font-bold text-lg ${Math.abs(currentK - Math.round(currentK)) < 0.1 ? 'text-green-400' : 'text-slate-400'}`}>
                  {currentK.toFixed(2)}
                </div>
              </div>
              <div>
                <div className="text-slate-500 text-xs uppercase mb-1">Wavelength</div>
                <div className="text-pink-400 font-bold text-lg">{wavelength.toFixed(2)} <span className="text-xs text-slate-500">m</span></div>
              </div>
            </div>
          </div>

          {/* Theory / Formulas Card */}
          <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-lg">
            <h3 className="text-cyan-400 font-bold mb-4 flex items-center gap-2">
              <Type size={18} /> Công thức Sóng Dừng
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 font-mono leading-relaxed">
              <div className="space-y-2">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Vận tốc (v):</span>
                  <span className="text-emerald-400">√(T/μ) = {waveSpeed.toFixed(1)} m/s</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Bước sóng (λ):</span>
                  <span className="text-emerald-400">v/f = {wavelength.toFixed(2)} m</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Số bó sóng (k):</span>
                  <span className="text-emerald-400">2L/λ = {currentK.toFixed(2)}</span>
                </div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                <p className="text-slate-400 text-xs mb-2 uppercase tracking-wider">Điều kiện biên ({mode === 'fixed-fixed' ? '2 Đầu Cố Định' : '1 Đầu Tự Do'})</p>
                <div className="text-lg text-pink-300">
                  {mode === 'fixed-fixed' ? 'L = k(λ/2)' : 'L = (2k-1)(λ/4)'}
                </div>
                <p className={`mt-2 text-xs italic ${Math.abs(currentK - Math.round(currentK)) < 0.1 ? 'text-green-400' : 'text-slate-500'}`}>
                  {Math.abs(currentK - Math.round(currentK)) < 0.1 ? '✓ Đang cộng hưởng!' : '• Chưa cộng hưởng'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: CONTROLS (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">

          {/* Main Parameters Panel */}
          <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-lg">
            <h2 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <Settings size={20} className="text-cyan-400" /> Thông số dao động
            </h2>

            {/* Mode Toggle */}
            <div className="mb-8 p-1 bg-slate-900 rounded-lg flex border border-slate-800">
              <button
                onClick={() => setMode('fixed-fixed')}
                className={`flex-1 py-2 text-xs font-bold rounded-md transition-all uppercase tracking-wide ${mode === 'fixed-fixed'
                  ? 'bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/20'
                  : 'text-slate-500 hover:text-slate-300'
                  }`}
              >
                2 Đầu Cố Định
              </button>
              <button
                onClick={() => setMode('fixed-free')}
                className={`flex-1 py-2 text-xs font-bold rounded-md transition-all uppercase tracking-wide ${mode === 'fixed-free'
                  ? 'bg-pink-500 text-slate-900 shadow-lg shadow-pink-500/20'
                  : 'text-slate-500 hover:text-slate-300'
                  }`}
              >
                1 Đầu Tự Do
              </button>
            </div>

            {/* Sliders */}
            <div className="space-y-8">

              {/* Frequency (Replaced K) */}
              <div className="group">
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">Tần số (Hz)</span>
                  <span className="text-cyan-400 font-mono">{frequency} Hz</span>
                </div>
                <input
                  type="range" min="10" max="100" step="1"
                  value={frequency}
                  onChange={(e) => setFrequency(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400"
                />
              </div>

              {/* Length */}
              <div className="group">
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">Chiều dài dây (L)</span>
                  <span className="text-cyan-400 font-mono">{length.toFixed(1)} m</span>
                </div>
                <input
                  type="range" min="0.5" max="5.0" step="0.1"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400"
                />
              </div>

              {/* Tension */}
              <div className="group">
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">Lực căng (T)</span>
                  <span className="text-cyan-400 font-mono">{tension} N</span>
                </div>
                <input
                  type="range" min="10" max="200" step="1"
                  value={tension}
                  onChange={(e) => setTension(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400"
                />
              </div>

              {/* Amplitude */}
              <div className="group">
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">Biên độ nguồn (A)</span>
                  <span className="text-cyan-400 font-mono">{(amplitude * 2).toFixed(1)} cm</span>
                </div>
                <input
                  type="range" min="0.1" max="1.0" step="0.1"
                  value={amplitude}
                  onChange={(e) => setAmplitude(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400"
                />
              </div>

              {/* Density */}
              <div className="group">
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">Mật độ dây (μ)</span>
                  <span className="text-cyan-400 font-mono">{linearDensity.toFixed(3)} kg/m</span>
                </div>
                <input
                  type="range" min="0.001" max="0.05" step="0.001"
                  value={linearDensity}
                  onChange={(e) => setLinearDensity(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400"
                />
              </div>

            </div>
          </div>

          {/* Energy / Stats Panel */}
          <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-lg">
            <h3 className="text-yellow-400 font-bold mb-4 flex items-center gap-2">
              <Zap size={18} /> Năng lượng sóng
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Tốc độ truyền sóng (v)</span>
                  <span className="text-emerald-400 font-mono">{waveSpeed.toFixed(1)} m/s</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((waveSpeed / 200) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Ước lượng năng lượng (E)</span>
                  <span className="text-yellow-400 font-mono">{energy.toFixed(3)} J</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-500 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((energy * 50), 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-2 text-xs text-slate-500">
                <Circle size={12} className="mt-0.5 text-cyan-400 fill-cyan-400 animate-pulse" />
                <span>Điều chỉnh Tần số, Chiều dài, hoặc Lực căng để tìm điểm cộng hưởng (k nguyên).</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
export default StandingWaveSim;