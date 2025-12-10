"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, Mic, MicOff, Activity, Settings, RefreshCw, Volume2, Info, BookOpen, RotateCcw, SkipBack, SkipForward, BarChart3, Radio } from 'lucide-react';

// --- COMPONENT CON ---
const ControlPanel = ({ title, icon: Icon, children }: { title: string; icon?: any; children: React.ReactNode }) => (
  <div className="bg-[#1e293b] rounded-xl border border-slate-700/50 shadow-sm flex flex-col">
    <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700/50 flex items-center gap-2">
      {Icon && <Icon size={16} className="text-cyan-400" />}
      <h3 className="text-slate-300 font-bold text-xs uppercase tracking-wider">{title}</h3>
    </div>
    <div className="p-4 space-y-4 flex-1">{children}</div>
  </div>
)

const StatBox = ({ label, value, unit, color = "text-slate-200" }: { label: string, value: string | number, unit?: string, color?: string }) => (
  <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-700/50 flex flex-col items-center justify-center min-w-[80px]">
    <div className="text-[10px] text-slate-500 uppercase font-semibold mb-1">{label}</div>
    <div className={`text-lg font-mono font-bold ${color}`}>
      {value} <span className="text-xs font-normal text-slate-500">{unit}</span>
    </div>
  </div>
)

const SoundWaveLab = () => {
  // --- STATE ---
  const [isListening, setIsListening] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);

  // Physics & Measurement
  const [frequency, setFrequency] = useState(0); // Measured freq
  const [medium, setMedium] = useState('air');
  const [velocity, setVelocity] = useState(343);

  // Generator
  const [genFreq, setGenFreq] = useState(440);
  const [genType, setGenType] = useState<OscillatorType>('sine');
  const [genVolume, setGenVolume] = useState(0.5);

  // --- REFS ---
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const requestRef = useRef<number | null>(null);

  const canvasTimeRef = useRef<HTMLCanvasElement>(null); // Oscilloscope
  const canvasFreqRef = useRef<HTMLCanvasElement>(null); // Spectrum

  const timeDataRef = useRef(new Uint8Array(0));
  const freqDataRef = useRef(new Uint8Array(0));

  const MEDIUMS: Record<string, { name: string; v: number }> = {
    air: { name: 'Không khí (20°C)', v: 343 },
    water: { name: 'Nước (25°C)', v: 1493 },
    soil: { name: 'Đất', v: 3000 },
  };

  const WAVEFORMS: Record<string, string> = {
    sine: 'Hình Sin',
    square: 'Hình Vuông',
    sawtooth: 'Răng Cưa',
    triangle: 'Tam Giác'
  };

  useEffect(() => {
    setVelocity(MEDIUMS[medium].v);
  }, [medium]);

  // --- AUDIO LOGIC ---
  const initAudio = async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioContextRef.current?.state === 'suspended') await audioContextRef.current.resume();
  };

  const startMicrophone = async () => {
    try {
      await initAudio();
      if (!audioContextRef.current) return;
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setupAnalyser();
      microphoneRef.current = audioContextRef.current.createMediaStreamSource(stream);
      microphoneRef.current.connect(analyserRef.current!);
      setIsListening(true);
      setIsGenerating(false);
      setIsFrozen(false);
    } catch (err) { alert("Cần cấp quyền Micro!"); }
  };

  const startGenerator = async () => {
    await initAudio();
    if (!audioContextRef.current) return;
    if (isListening) stopMicrophone();

    setupAnalyser();
    oscillatorRef.current = audioContextRef.current.createOscillator();
    gainNodeRef.current = audioContextRef.current.createGain();

    oscillatorRef.current.type = genType;
    oscillatorRef.current.frequency.setValueAtTime(genFreq, audioContextRef.current.currentTime);
    gainNodeRef.current!.gain.setValueAtTime(genVolume, audioContextRef.current.currentTime);

    oscillatorRef.current.connect(gainNodeRef.current!);
    gainNodeRef.current!.connect(analyserRef.current!);
    gainNodeRef.current!.connect(audioContextRef.current.destination);

    oscillatorRef.current.start();
    setIsGenerating(true);
    setIsListening(false);
    setIsFrozen(false);
  };

  const setupAnalyser = () => {
    if (!audioContextRef.current) return;
    analyserRef.current = audioContextRef.current.createAnalyser();
    analyserRef.current.fftSize = 2048;
    analyserRef.current.smoothingTimeConstant = 0.8;
  }

  const stopMicrophone = () => {
    microphoneRef.current?.disconnect();
    microphoneRef.current = null;
    setIsListening(false);
  };

  const stopGenerator = () => {
    try { oscillatorRef.current?.stop(); } catch (e) { }
    oscillatorRef.current?.disconnect();
    oscillatorRef.current = null;
    setIsGenerating(false);
  };

  const updateGen = (freq: number, type: OscillatorType, vol: number) => {
    if (audioContextRef.current && oscillatorRef.current && gainNodeRef.current) {
      oscillatorRef.current.frequency.setValueAtTime(freq, audioContextRef.current.currentTime);
      oscillatorRef.current.type = type;
      gainNodeRef.current.gain.setValueAtTime(vol, audioContextRef.current.currentTime);
    }
    setGenFreq(freq); setGenType(type); setGenVolume(vol);
  };

  const getPitch = (buffer: Uint8Array, sampleRate: number) => {
    let maxVal = -Infinity; let maxIndex = -1;
    for (let i = 1; i < buffer.length / 2; i++) {
      if (buffer[i] > maxVal) { maxVal = buffer[i]; maxIndex = i; }
    }
    if (maxVal < 100) return 0; // Noise gate
    // Interpolation
    const prev = buffer[maxIndex - 1]; const next = buffer[maxIndex + 1]; const curr = buffer[maxIndex];
    const trueIndex = maxIndex + (next - prev) / (2 * (2 * curr - next - prev));
    return trueIndex * sampleRate / (analyserRef.current?.fftSize || 2048);
  };

  // --- DRAW LOOP ---
  const draw = useCallback(() => {
    if (!analyserRef.current || !audioContextRef.current) return;

    if (!isFrozen) {
      const bufferLength = analyserRef.current.frequencyBinCount;
      if (timeDataRef.current.length !== bufferLength) {
        timeDataRef.current = new Uint8Array(bufferLength);
        freqDataRef.current = new Uint8Array(bufferLength);
      }
      analyserRef.current.getByteTimeDomainData(timeDataRef.current);
      analyserRef.current.getByteFrequencyData(freqDataRef.current);

      // Update Freq Display
      if (isGenerating) setFrequency(genFreq);
      else {
        const f = getPitch(freqDataRef.current, audioContextRef.current.sampleRate);
        setFrequency(prev => (f > 0 && Math.abs(prev - f) > 5) ? f : prev); // Simple smoothing
      }
    }

    // 1. Draw Time Domain (Oscilloscope)
    const ctxTime = canvasTimeRef.current?.getContext('2d');
    if (ctxTime && canvasTimeRef.current) {
      const w = canvasTimeRef.current.width; const h = canvasTimeRef.current.height;
      ctxTime.fillStyle = '#0f172a'; ctxTime.fillRect(0, 0, w, h);

      // Grid
      ctxTime.strokeStyle = '#1e293b'; ctxTime.lineWidth = 1; ctxTime.beginPath();
      for (let x = 0; x <= w; x += w / 10) { ctxTime.moveTo(x, 0); ctxTime.lineTo(x, h); }
      ctxTime.stroke();
      ctxTime.strokeStyle = '#334155'; ctxTime.beginPath(); ctxTime.moveTo(0, h / 2); ctxTime.lineTo(w, h / 2); ctxTime.stroke();

      // Wave
      ctxTime.lineWidth = 3; ctxTime.strokeStyle = '#38bdf8'; ctxTime.beginPath();
      const sliceWidth = w * 1.0 / timeDataRef.current.length;
      let x = 0;
      for (let i = 0; i < timeDataRef.current.length; i++) {
        const v = timeDataRef.current[i] / 128.0;
        const y = v * h / 2;
        if (i === 0) ctxTime.moveTo(x, y); else ctxTime.lineTo(x, y);
        x += sliceWidth;
      }
      ctxTime.stroke();

      // Author
      ctxTime.fillStyle = "rgba(255,255,255,0.1)"; ctxTime.font = "12px sans-serif"; ctxTime.textAlign = "right";
      ctxTime.fillText("Hô Hoàng Anh A1K50", w - 10, h - 10);
    }

    // 2. Draw Frequency Domain (Spectrum)
    const ctxFreq = canvasFreqRef.current?.getContext('2d');
    if (ctxFreq && canvasFreqRef.current) {
      const w = canvasFreqRef.current.width; const h = canvasFreqRef.current.height;
      ctxFreq.fillStyle = '#0f172a'; ctxFreq.fillRect(0, 0, w, h);

      const barWidth = (w / freqDataRef.current.length) * 2.5;
      let x = 0;
      for (let i = 0; i < freqDataRef.current.length; i++) {
        const barHeight = freqDataRef.current[i] / 255 * h;
        ctxFreq.fillStyle = `rgb(${barHeight + 100},50,200)`;
        ctxFreq.fillRect(x, h - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    }

    requestRef.current = requestAnimationFrame(draw);
  }, [isFrozen, isGenerating, genFreq]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(draw);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); }
  }, [draw]);

  // Resize Handler
  useEffect(() => {
    const handleResize = () => {
      if (canvasTimeRef.current && canvasTimeRef.current.parentElement) {
        canvasTimeRef.current.width = canvasTimeRef.current.parentElement.clientWidth;
        canvasTimeRef.current.height = canvasTimeRef.current.parentElement.clientHeight;
      }
      if (canvasFreqRef.current && canvasFreqRef.current.parentElement) {
        canvasFreqRef.current.width = canvasFreqRef.current.parentElement.clientWidth;
        canvasFreqRef.current.height = canvasFreqRef.current.parentElement.clientHeight;
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-full gap-4 p-4 lg:p-6 w-full">
      {/* CỘT TRÁI - Main Visualization */}
      <div className="flex-1 flex flex-col min-h-0 gap-4">
        {/* Visualizer Main - Grows */}
        <div className="flex-1 bg-[#1e293b] rounded-xl border border-slate-700/50 shadow-lg relative overflow-hidden group flex flex-col">
          <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur px-3 py-2 rounded-lg border border-slate-700 text-xs font-mono text-cyan-400 flex gap-2 items-center z-10">
            <Activity size={14} /> Dao động ký điện tử
          </div>
          <div className="flex-1 relative w-full h-full min-h-0">
            <canvas ref={canvasTimeRef} className="absolute inset-0 w-full h-full block bg-[#0f172a]" />
          </div>
        </div>

        {/* Spectrum Graph - Fixed Height */}
        <div className="bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 shadow-md shrink-0 h-32 flex flex-col">
          <div className="flex justify-between items-center mb-1 shrink-0">
            <h3 className="text-[10px] font-bold text-purple-400 uppercase flex items-center gap-2"><BarChart3 size={12} /> Phổ Tần Số (FFT)</h3>
          </div>
          <div className="relative flex-1 w-full bg-[#0f172a] rounded overflow-hidden">
            <canvas ref={canvasFreqRef} className="absolute inset-0 w-full h-full" />
          </div>
        </div>

        {/* Controls - Fixed Bottom */}
        <div className="bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 shadow-md flex items-center gap-4 justify-between shrink-0">
          <div className="flex gap-2">
            <button
              onClick={() => { if (isGenerating) stopGenerator(); else startGenerator(); }}
              disabled={isListening}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isGenerating ? 'bg-green-600 text-white shadow-lg' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'} ${isListening ? 'opacity-30' : ''}`}
            >
              <Radio size={18} /> {isGenerating ? "Tắt Máy Phát" : "Bật Máy Phát"}
            </button>
            <button
              onClick={() => { if (isListening) stopMicrophone(); else startMicrophone(); }}
              disabled={isGenerating}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isListening ? 'bg-red-500 text-white shadow-lg' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'} ${isGenerating ? 'opacity-30' : ''}`}
            >
              {isListening ? <MicOff size={18} /> : <Mic size={18} />} {isListening ? "Tắt Mic" : "Bật Mic"}
            </button>
          </div>

          <button
            onClick={() => setIsFrozen(!isFrozen)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isFrozen ? 'bg-amber-500 text-white' : 'bg-cyan-600 text-white'}`}
          >
            {isFrozen ? <Play size={18} fill="currentColor" /> : <Pause size={18} fill="currentColor" />} {isFrozen ? "Tiếp tục" : "Dừng hình"}
          </button>
        </div>
      </div>

      {/* CỘT PHẢI - Scrollable Sidebar */}
      <div className="lg:w-80 flex-none flex flex-col gap-4 overflow-y-auto pr-1 pb-20 custom-scrollbar lg:h-full">
        {/* Frequency Display */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-2xl text-center relative shrink-0">
          <div className="absolute top-4 right-4 animate-pulse">
            <div className={`w-3 h-3 rounded-full ${frequency > 20 ? (isGenerating ? 'bg-green-500' : 'bg-red-500') : 'bg-slate-600'}`}></div>
          </div>
          <h2 className="text-slate-400 text-sm uppercase tracking-wider mb-2">
            {isGenerating ? "Tần số đang phát" : "Tần số đo được"}
          </h2>
          <div className={`text-4xl lg:text-5xl font-mono font-bold tracking-tighter tabular-nums ${isGenerating ? 'text-green-400' : 'text-cyan-400'}`}>
            {frequency > 0 ? frequency.toFixed(1) : "--"}
            <span className="text-xl text-slate-500 ml-2">Hz</span>
          </div>
        </div>

        {/* Generator Settings */}
        <ControlPanel title="Cấu hình nguồn phát" icon={Settings}>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Tần số phát (Hz)</span> <span className="text-green-400 font-mono font-bold">{genFreq.toFixed(0)}</span>
              </div>
              <input type="range" min="20" max="5000" step="1" value={genFreq} onChange={(e) => updateGen(Number(e.target.value), genType, genVolume)} className="w-full accent-green-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer" />
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Biên độ (Volume)</span> <span className="text-green-400 font-mono font-bold">{(genVolume * 100).toFixed(0)}%</span>
              </div>
              <input type="range" min="0" max="1" step="0.01" value={genVolume} onChange={(e) => updateGen(genFreq, genType, Number(e.target.value))} className="w-full accent-green-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer" />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-2 block">Dạng sóng</label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(WAVEFORMS).map(([key, label]) => (
                  <button key={key} onClick={() => updateGen(genFreq, key as OscillatorType, genVolume)} className={`text-[10px] py-2 rounded border transition-all ${genType === key ? 'bg-green-600 border-green-500 text-white' : 'bg-slate-800 border-slate-600 text-slate-400 hover:text-white'}`}>{label}</button>
                ))}
              </div>
            </div>
          </div>
        </ControlPanel>

        {/* Physics Info */}
        <ControlPanel title="Thông số vật lý" icon={BookOpen}>
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-slate-400 mb-1 block">Môi trường</label>
              <select value={medium} onChange={(e) => setMedium(e.target.value)} className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1.5 text-slate-200 outline-none focus:border-cyan-500">
                {Object.entries(MEDIUMS).map(([key, val]) => (
                  <option key={key} value={key}>{val.name} (v={val.v}m/s)</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <StatBox label="Bước sóng (λ)" value={frequency > 0 ? (velocity / frequency).toFixed(3) : "--"} unit="m" color="text-yellow-400" />
              <StatBox label="Chu kỳ (T)" value={frequency > 0 ? (1000 / frequency).toFixed(2) : "--"} unit="ms" color="text-orange-400" />
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700">
              <h4 className="text-xs font-bold text-slate-300 mb-2 flex items-center gap-1">
                <BookOpen size={14} /> CÔNG THỨC & CHÚ THÍCH
              </h4>
              <div className="bg-slate-900/50 p-3 rounded text-xs space-y-2 border border-slate-700/50 font-mono text-slate-400">
                <div className="flex justify-between">
                  <span>x = A·cos(ωt + φ)</span>
                  <span className="text-slate-600">// PT Dao động</span>
                </div>
                <div className="flex justify-between">
                  <span>ω = 2πf</span>
                  <span className="text-slate-600">// Tần số góc</span>
                </div>
                <div className="flex justify-between">
                  <span>T = 1/f</span>
                  <span className="text-slate-600">// Chu kỳ</span>
                </div>
                <div className="flex justify-between">
                  <span>λ = v/f = v·T</span>
                  <span className="text-slate-600">// Bước sóng</span>
                </div>
                <div className="flex justify-between">
                  <span>k = 2π/λ</span>
                  <span className="text-slate-600">// Số sóng</span>
                </div>
                <div className="flex justify-between text-yellow-500/80 pt-1 border-t border-slate-800">
                  <span>u = A·cos(ωt - kx)</span>
                  <span>// PT Sóng</span>
                </div>
              </div>
            </div>
          </div>
        </ControlPanel>
      </div>
    </div>
  );
};

export default SoundWaveLab;