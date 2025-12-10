"use client"

import React, { useState, useEffect } from "react"
import {
  Activity, Waves, Mic, Anchor, Aperture, Infinity, TrendingDown, Zap,
  Database, Cpu, ArrowUpRight, Box, Trash2, Atom, Terminal, FileCode, FlaskConical
} from "lucide-react"
// Sửa đường dẫn import cho đúng cấu trúc thư mục
import { HoloCard, NeonButton } from "../ui/sci-fi-lab"

const EXPERIMENTS = [
  {
    id: "spring-oscillator",
    title: "Con lắc lò xo",
    icon: Activity,
    code: "EXP-01",
    desc: "Mô phỏng dao động điều hòa lò xo ngang/dọc."
  },
  {
    id: "simple-pendulum",
    title: "Con lắc đơn",
    icon: Anchor,
    code: "EXP-02",
    desc: "Khảo sát chu kỳ và quỹ đạo con lắc đơn."
  },
  {
    id: "damped-oscillation",
    title: "Dao động tắt dần",
    icon: TrendingDown,
    code: "EXP-03",
    desc: "Sự suy giảm năng lượng trong môi trường cản."
  },
  {
    id: "harmonic-oscillation",
    title: "Dao động điều hòa",
    icon: Zap,
    code: "EXP-04",
    desc: "Mối liên hệ chuyển động tròn đều."
  },
  {
    id: "mechanical-waves",
    title: "Sóng cơ",
    icon: Waves,
    code: "EXP-05",
    desc: "Truyền sóng ngang và dọc trong môi trường."
  },
  {
    id: "sound-waves",
    title: "Sóng âm",
    icon: Mic,
    code: "EXP-06",
    desc: "Phân tích tần số và biên độ âm thanh."
  },
  {
    id: "wave-interference",
    title: "Giao thoa sóng",
    icon: Aperture,
    code: "EXP-07",
    desc: "Hiện tượng giao thoa hai nguồn kết hợp."
  },
  {
    id: "standing-waves",
    title: "Sóng dừng",
    icon: Infinity,
    code: "EXP-08",
    desc: "Bụng sóng và nút sóng trên dây."
  },
  {
    id: "sound-speed",
    title: "Đo tốc độ truyền âm",
    icon: Mic,
    code: "EXP-09",
    desc: "Đo tốc độ âm bằng cột khí cộng hưởng."
  },
]

// Tách component Typewriter để tái sử dụng
const Typewriter = ({ text, speed = 30, delay = 0 }: { text: string, speed?: number, delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const startTyping = () => {
      let i = 0;
      setDisplayText('');
      const interval = setInterval(() => {
        setDisplayText(text.substring(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, speed);
    };

    timeout = setTimeout(startTyping, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(v => !v), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="font-sans">
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-cyan-500 font-bold`}>_</span>
    </span>
  );
};

export default function PhysicsIntro({ onSelectExperiment }: { onSelectExperiment?: (id: string) => void }) {
  const [customModules, setCustomModules] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/modules')
      .then(res => res.json())
      .then(data => setCustomModules(data))
      .catch(err => console.error(err))
  }, [])

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    if (!confirm("Bạn có chắc muốn xóa module này không?")) return

    try {
      const res = await fetch('/api/modules', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })
      if (res.ok) {
        setCustomModules(prev => prev.filter(m => m.id !== id))
      } else {
        alert("Xóa thất bại")
      }
    } catch (err) {
      console.error(err)
      alert("Có lỗi xảy ra")
    }
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden border border-slate-300 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 py-8 pr-8 pl-20 md:pl-24 md:py-12 md:pr-12 shadow-sm dark:shadow-none group transition-all duration-300 hover:shadow-md hover:border-cyan-400/50 hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/20 dark:hover:border-cyan-500/50">

        {/* Left Tech Sidebar - "Pro Dev" Decoration */}
        <div className="absolute left-0 top-0 bottom-0 w-14 border-r border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-black/20 flex flex-col items-center py-6 gap-6 z-20 backdrop-blur-sm">
          {/* Top Status Dots */}
          <div className="flex flex-col gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
          </div>

          {/* Vertical Line */}
          <div className="w-[1px] flex-1 bg-gradient-to-b from-slate-300 via-cyan-400/50 to-slate-300 dark:from-slate-800 dark:via-cyan-900 dark:to-slate-800 opacity-50"></div>

          {/* Vertical Text - REMOVED */}
          <div className="flex-1"></div>

          {/* Bottom Code Block Decor */}
          <div className="flex flex-col gap-1 opacity-40">
            <div className="w-4 h-[2px] bg-cyan-500"></div>
            <div className="w-2 h-[2px] bg-slate-400"></div>
            <div className="w-3 h-[2px] bg-slate-400"></div>
          </div>
        </div>

        {/* Abstract Background Code Rain (Static for now, can be animated) */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03] dark:opacity-20 pointer-events-none select-none font-mono text-[10px] leading-3 text-cyan-500 dark:text-cyan-900">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap transform -rotate-12 translate-y-[-50%]" style={{ marginLeft: `${i * 5}%` }}>
              {`0101011010101010101010101010101010101010101010101`}
            </div>
          ))}
        </div>

        {/* Right 3D Animated Element - Solar System */}
        <div className="absolute top-1/2 right-4 md:right-16 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 pointer-events-none opacity-90 dark:opacity-80 scale-65 md:scale-90">
          <div className="relative w-full h-full">
            {/* Sun */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-500 rounded-full shadow-[0_0_50px_rgba(234,179,8,0.6)] animate-pulse z-10"></div>

            {/* Mercury Orbit & Planet (Right) */}
            <div className="absolute inset-[38%] border border-slate-400/50 dark:border-slate-600/30 rounded-full animate-spin" style={{ animationDuration: '4s' }}>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-500 dark:bg-slate-400 rounded-full shadow-sm"></div>
            </div>

            {/* Venus Orbit & Planet (Bottom) */}
            <div className="absolute inset-[32%] border border-slate-400/50 dark:border-slate-600/30 rounded-full animate-spin" style={{ animationDuration: '7s' }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 bg-orange-400 dark:bg-orange-300 rounded-full shadow-sm"></div>
            </div>

            {/* Earth Orbit & Planet (Top) + Moon */}
            <div className="absolute inset-[26%] border border-slate-400/50 dark:border-slate-600/30 rounded-full animate-spin" style={{ animationDuration: '12s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                {/* Earth */}
                <div className="w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)] relative z-10"></div>
                {/* Moon Orbit & Moon */}
                <div className="absolute w-6 h-6 border border-slate-400/30 rounded-full animate-spin" style={{ animationDuration: '2s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-slate-300 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Mars Orbit & Planet (Left) */}
            <div className="absolute inset-[20%] border border-slate-400/50 dark:border-slate-600/30 rounded-full animate-spin" style={{ animationDuration: '18s' }}>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-red-500 dark:bg-red-400 rounded-full shadow-sm"></div>
            </div>

            {/* Jupiter Orbit & Planet (Bottom Right) */}
            <div className="absolute inset-[12%] border border-slate-400/50 dark:border-slate-600/30 rounded-full animate-spin" style={{ animationDuration: '30s' }}>
              <div className="absolute bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2 w-6 h-6 bg-orange-300 dark:bg-orange-200 rounded-full shadow-sm flex items-center justify-center overflow-hidden">
                <div className="w-full h-[2px] bg-orange-400/50 mt-1"></div>
              </div>
            </div>

            {/* Saturn Orbit & Planet (Top Left) */}
            <div className="absolute inset-[4%] border border-slate-400/50 dark:border-slate-600/30 rounded-full animate-spin" style={{ animationDuration: '45s' }}>
              <div className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-yellow-300 dark:bg-yellow-200 rounded-full shadow-sm flex items-center justify-center">
                <div className="absolute w-8 h-2 border border-slate-500/50 dark:border-slate-400/50 rounded-full bg-slate-400/30 dark:bg-slate-300/20 transform -rotate-12"></div>
              </div>
            </div>

            {/* Uranus Orbit & Planet (Bottom Left) */}
            <div className="absolute inset-[-4%] border border-slate-400/50 dark:border-slate-600/30 rounded-full animate-spin" style={{ animationDuration: '60s' }}>
              <div className="absolute bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-cyan-300 dark:bg-cyan-400 rounded-full shadow-sm"></div>
            </div>

            {/* Neptune Orbit & Planet (Top Right) */}
            <div className="absolute inset-[-12%] border border-slate-400/50 dark:border-slate-600/30 rounded-full animate-spin" style={{ animationDuration: '75s' }}>
              <div className="absolute top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-700 dark:bg-blue-600 rounded-full shadow-sm"></div>
            </div>

            {/* Asteroid Belt (Decorative) */}
            <div className="absolute inset-[10%] border border-dashed border-slate-500/20 dark:border-slate-400/10 rounded-full animate-spin-slow pointer-events-none"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-2xl">
          {/* Version Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-200 dark:border-cyan-800 bg-white dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 dark:bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600 dark:bg-cyan-500"></span>
            </span>
            <span>Phòng thí nghiệm ảo v2.0 // Minimalist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-snug">
            Chào mừng đến với <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 relative inline-block tracking-wide mt-2 drop-shadow-sm">
              PHÒNG THÍ NGHIỆM VẬT LÝ
              <span className="absolute -inset-1 blur-xl bg-cyan-400/20 dark:bg-cyan-500/20 animate-pulse rounded-full opacity-50"></span>
            </span>
          </h1>

          <div className="min-h-[80px] text-slate-500 dark:text-slate-400 text-base md:text-lg mb-8 leading-relaxed font-mono border-l-[3px] border-cyan-400 dark:border-cyan-500/50 pl-4 py-1 bg-white/40 dark:bg-transparent rounded-r-lg">
            <span className="text-cyan-600 dark:text-cyan-400 mr-2 font-bold">{'>'}</span>
            <Typewriter
              text="Hệ thống mô phỏng tương tác cao cấp dành cho Vật lý 11. Truy cập dữ liệu thời gian thực, đồ thị năng lượng và các tham số vật lý chính xác..."
              speed={20}
              delay={500}
            />
          </div>

          <div className="flex gap-4">
            <NeonButton onClick={() => onSelectExperiment && onSelectExperiment('harmonic-oscillation')} active={true}>
              <FileCode className="mr-2" size={16} /> BẮT ĐẦU NGAY
            </NeonButton>
            <NeonButton onClick={() => window.open('https://github.com', '_blank')}>
              <Terminal className="mr-2" size={16} /> TÀI LIỆU HƯỚNG DẪN
            </NeonButton>
          </div>
        </div>
      </div>

      {/* Grid Dashboard */}
      <div>
        <div className="flex items-center gap-2 mb-6 border-b border-slate-300 dark:border-slate-800 pb-2">
          <Database size={18} className="text-cyan-600 dark:text-cyan-500" />
          <h2 className="text-sm font-bold text-cyan-800 dark:text-slate-300 uppercase tracking-widest font-mono">Danh mục thí nghiệm</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {EXPERIMENTS.map((exp) => (
            <HoloCard key={exp.id} className="h-full flex flex-col hover:-translate-y-1 hover:shadow-lg transition-transform">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 rounded bg-white dark:bg-slate-900/50 border border-cyan-100 dark:border-slate-700 text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-500 group-hover:border-cyan-400 dark:group-hover:border-cyan-500/50 transition-colors">
                  <exp.icon size={20} />
                </div>
                <span className="text-[10px] font-mono text-cyan-400 dark:text-slate-600 font-bold border border-cyan-100 dark:border-slate-800 px-1.5 py-0.5 rounded group-hover:text-cyan-700 dark:group-hover:text-cyan-500 group-hover:border-cyan-300 dark:group-hover:border-cyan-900 bg-white dark:bg-transparent">
                  {exp.code}
                </span>
              </div>

              <h3 className="text-lg font-bold text-cyan-900 dark:text-slate-200 mb-2 group-hover:text-cyan-700 dark:group-hover:text-cyan-400">{exp.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed mb-6 flex-1">{exp.desc}</p>

              <button
                onClick={() => onSelectExperiment && onSelectExperiment(exp.id)}
                className="w-full py-2 rounded border border-slate-300 dark:border-slate-700 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 dark:hover:bg-slate-800 dark:hover:text-cyan-400 dark:hover:border-cyan-500 transition-all flex items-center justify-center gap-2 group-hover:bg-white dark:group-hover:bg-slate-800"
              >
                Truy cập <ArrowUpRight size={14} />
              </button>
            </HoloCard>
          ))}
        </div>
      </div>

      {/* Custom Modules Section */}

    </div>
  )
}