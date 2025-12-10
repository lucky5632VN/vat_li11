import React from 'react';
import { Activity, Power, Settings, Cpu, Terminal, Hash, Code } from 'lucide-react';



// --- 1. GLOBAL LAYOUT (TRUE IT THEME) ---
export const LabLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#050505] text-cyan-700 dark:text-cyan-500 font-mono selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-300 overflow-x-hidden relative transition-colors duration-300">

      {/* Minimalist Grid - Subtle Blue (Light) / Cyan (Dark) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-10 transition-opacity"
        style={{
          backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
        }}>
      </div>

      {/* Dark Mode Grid Override (using CSS for simplicity or just conditional rendering if needed, but here we let the light grid disappear or verify dark blend) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-0 dark:opacity-10 transition-opacity"
        style={{
          backgroundImage: 'linear-gradient(#0891b2 0.5px, transparent 0.5px), linear-gradient(90deg, #0891b2 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)'
        }}>
      </div>

      {/* Scanlines Effect (CRT) - Dark Mode Only */}
      <div className="fixed inset-0 z-[1] pointer-events-none hidden dark:block opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1800px] mx-auto p-4 md:p-6 flex flex-col h-screen">
        {children}
      </div>
    </div>
  );
};

// --- 2. HOLO CARD -> TERMINAL WINDOW ---
export const HoloCard = ({ children, className = "", title, icon: Icon, active = false }: { children: React.ReactNode, className?: string, title?: string, icon?: any, active?: boolean }) => (
  <div className={`
    relative backdrop-blur-md rounded-lg border-l-2 transition-all duration-300 ease-out group overflow-hidden
    ${active
      ? 'bg-white/90 dark:bg-[#0a0f1c]/90 border-cyan-600 dark:border-cyan-500 shadow-lg shadow-cyan-500/20 dark:shadow-cyan-500/20 ring-1 ring-cyan-500/30 dark:ring-cyan-500/20'
      : 'bg-white/80 dark:bg-[#0a0f1c]/60 border-slate-300 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500 hover:bg-white dark:hover:bg-[#0f1629]/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-200/50 dark:hover:shadow-cyan-500/10 group-hover:ring-1 group-hover:ring-cyan-300/30 dark:group-hover:ring-cyan-500/30'}
    ${className}
  `}>

    {/* Scan/Sweep Effect */}
    <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-linear bg-gradient-to-r from-transparent via-sky-400/20 dark:via-cyan-400/20 to-transparent z-20 pointer-events-none -skew-x-12"></div>

    {/* Terminal Header */}
    {title && (
      <div className={`px-3 py-2 border-b flex items-center justify-between text-[10px] font-mono tracking-wider uppercase
        ${active ? 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-500/30' : 'bg-slate-200/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-800'}`}>
        <div className="flex items-center gap-2">
          {Icon ? <Icon size={14} className={active ? "text-cyan-600 dark:text-cyan-400" : "text-cyan-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"} /> : <Terminal size={14} />}
          <span className={`font-bold ${active ? 'text-cyan-700 dark:text-cyan-400' : 'text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300'}`}>
            {title}
          </span>
        </div>
        <div className="flex gap-1.5 opacity-50">
          <div className="w-2 h-2 rounded-full bg-slate-700 dark:bg-slate-600"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700 dark:bg-slate-600"></div>
        </div>
      </div>
    )}
    <div className="p-4 relative z-10">
      {children}
    </div>
  </div>
);

// --- 3. MONITOR SCREEN (Keep dark but cleaner) ---
export const MonitorScreen = ({ children, label = "EXECUTION_WINDOW" }: { children: React.ReactNode, label?: string }) => (
  <div className="relative rounded overflow-hidden border border-cyan-200 dark:border-slate-700 bg-white dark:bg-black shadow-inner group hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-colors">
    {/* Scanline Effect */}
    <div className="absolute inset-0 z-10 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%]"></div>
    <div className="absolute top-2 left-2 z-30 flex items-center gap-2 px-1 py-0.5 bg-white/90 dark:bg-black/80 text-[10px] font-mono text-cyan-600 dark:text-cyan-500 border border-cyan-200 dark:border-cyan-500/30">
      <span className="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-500 animate-pulse"></span>
      {label}
    </div>
    {children}
  </div>
);

// --- 4. NEON BUTTON (COMMAND STYLE) ---
// --- 4. NEON BUTTON (COMMAND STYLE) ---
export const NeonButton = ({ children, onClick, active = false, variant = 'cyan', className = "" }: any) => {
  // Mapping variants to IT colors: Cyan -> Blue/Green, Amber -> Orange, Red -> Red
  const style = active
    ? "bg-cyan-600 text-white dark:bg-cyan-500/20 dark:text-cyan-400 border-cyan-600 dark:border-cyan-500 shadow-lg shadow-cyan-500/30 dark:shadow-cyan-500/20"
    : "bg-white/80 dark:bg-transparent border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-cyan-500 dark:hover:border-cyan-500 hover:bg-white dark:hover:bg-cyan-950/30 hover:shadow-md dark:hover:shadow-none";

  return (
    <button
      onClick={onClick}
      className={`
        relative px-6 py-2.5 rounded-md border font-mono text-sm font-bold uppercase tracking-wider transition-all duration-200
        active:scale-95 flex items-center justify-center gap-2 group
        ${style} ${className}
      `}
    >
      {children}
    </button>
  );
};

// --- 5. DATA READOUT (SYSTEM STATS) ---
export const DataReadout = ({ label, value, unit, color = "text-cyan-400" }: any) => (
  <div className="flex flex-col border-l-2 border-cyan-200 dark:border-slate-800 pl-3 font-mono">
    <span className="text-[10px] text-slate-500 uppercase tracking-tighter mb-0.5 opacity-80">{label}</span>
    <div className="flex items-baseline gap-2">
      <span className={`text - xl font - bold leading - none ${color} `}>{value}</span>
      <span className="text-xs text-slate-400">{unit}</span>
    </div>
  </div>
);