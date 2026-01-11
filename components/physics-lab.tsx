"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  FlaskConical,
  Menu,
  X,
  Activity,
  Waves,
  Zap,
  Anchor,
  TrendingDown,
  Mic,
  Aperture,
  Infinity,
  Box,
  PlusCircle,
  Trash2,
  Atom,
  Terminal,
  FileCode,
  Hand,
  ChevronDown,
  ChevronRight,
  Beaker,
  Disc,
  Battery,
  Grid
} from "lucide-react"

// Import UI Library
import { LabLayout, NeonButton } from "./ui/sci-fi-lab"
import { ThemeToggle } from "./ui/theme-toggle"

// Imports Experiments
import PhysicsIntro from "./experiments/physics-intro"
import SpringOscillator from "./experiments/spring-oscillator"
import SimplePendulum from "./experiments/simple-pendulum"
import DampedOscillation from "./experiments/damped-oscillation"
import HarmonicOscillation from "./experiments/harmonic-oscillation"
import MechanicalWaves from "./experiments/mechanical-waves"
import SoundWaves from "./experiments/sound-waves"
import WaveInterference from "./experiments/wave-interference"
import StandingWaves from "./experiments/standing-waves"
import SoundSpeedExperiment from "./experiments/sound-speed"
import HandSpringOscillator from "./experiments/hand-spring-oscillator"
import HandSimplePendulum from "./experiments/hand-simple-pendulum"
import PhaseChange3D from "./experiments/phase-change-3d"
import ElectricFieldCurrent from "./experiments/electric-field-current"
import CoulombLaw from "./experiments/coulomb-law"
import CapacitorLab from "./experiments/capacitor-lab"
import DCCircuitLab from "./experiments/dc-circuit-lab"

// Tách mục Intro ra riêng để xử lý hiển thị đặc biệt
const INTRO_ITEM = { id: "intro", label: "Giới thiệu chung", icon: FlaskConical }

// 1. DAO ĐỘNG CƠ
const MECHANICS_EXPERIMENTS = [
  { id: "harmonic-oscillation", label: "Dao động điều hòa", icon: Activity },
  { id: "simple-pendulum", label: "Con lắc đơn", icon: Activity },
  { id: "spring-oscillator", label: "Con lắc lò xo", icon: Activity }, // Added missing item
  { id: "damped-oscillation", label: "Dao động tắt dần", icon: TrendingDown }, // Added missing item
]

// 2. SÓNG CƠ & ÂM HỌC
const WAVES_EXPERIMENTS = [
  { id: "mechanical-waves", label: "Sóng cơ", icon: Waves }, // Added missing item
  { id: "standing-waves", label: "Sóng dừng", icon: Waves },
  { id: "wave-interference", label: "Giao thoa sóng", icon: Disc },
  { id: "sound-waves", label: "Sóng âm", icon: Mic }, // Added missing item
  { id: "sound-speed", label: "Đo tốc độ truyền âm", icon: Mic },
]

// 3. ĐIỆN & TỪ
const ELECTRICITY_EXPERIMENTS = [
  { id: "electric-field-current", label: "Điện trường & Dòng điện", icon: Zap },
  { id: "dc-circuit-lab", label: "Mạch điện một chiều", icon: Grid },
  { id: "coulomb-law", label: "Định luật Coulomb", icon: Zap },
  { id: "capacitor-lab", label: "Tụ điện phẳng", icon: Battery },
]

// Danh sách thử nghiệm (Hand Control / Beta)
const TRIAL_EXPERIMENTS = [
  { id: "hand-spring", label: "Con lò xo (Hand)", icon: Hand },
  { id: "hand-pendulum", label: "Con lắc đơn (Hand)", icon: Hand },
  { id: "su-chuyen-the-html", label: "Sự chuyển thể (3D)", icon: Beaker },
]

const ALL_EXPERIMENTS = [
  ...MECHANICS_EXPERIMENTS,
  ...WAVES_EXPERIMENTS,
  ...ELECTRICITY_EXPERIMENTS,
  ...TRIAL_EXPERIMENTS
]

export default function PhysicsLab() {
  const [activeTab, setActiveTab] = useState("intro")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [customModules, setCustomModules] = useState<any[]>([])

  // Section Collapse State
  const [isMechanicsOpen, setMechanicsOpen] = useState(true)
  const [isWavesOpen, setWavesOpen] = useState(false)
  const [isElectricityOpen, setElectricityOpen] = useState(false)
  const [isTrialOpen, setTrialOpen] = useState(false)

  const mainContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll handling
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [activeTab])

  useEffect(() => {
    // Fetch user modules
    fetch('/api/modules')
      .then(res => res.json())
      .then(data => setCustomModules(data))
      .catch(err => console.error("Failed to load modules", err))
  }, [])

  const handleDeleteModule = async (e: React.MouseEvent, id: string) => {
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
        if (activeTab === id) setActiveTab('intro')
      } else {
        alert("Xóa thất bại")
      }
    } catch (err) {
      console.error("Failed to delete", err)
      alert("Có lỗi xảy ra")
    }
  }

  const currentItem = activeTab === 'intro'
    ? INTRO_ITEM
    : ALL_EXPERIMENTS.find(e => e.id === activeTab) || customModules.find(m => m.id === activeTab)

  const ActiveIcon = currentItem?.icon || (currentItem?.type === 'iframe' ? Box : FlaskConical)

  const renderContent = () => {
    // Check built-in experiments
    switch (activeTab) {
      case "intro": return <PhysicsIntro onSelectExperiment={setActiveTab} />
      case "spring-oscillator": return <SpringOscillator />
      case "simple-pendulum": return <SimplePendulum />
      case "damped-oscillation": return <DampedOscillation />
      case "harmonic-oscillation": return <HarmonicOscillation />
      case "mechanical-waves": return <MechanicalWaves />
      case "sound-waves": return <SoundWaves />
      case "wave-interference": return <WaveInterference />
      case "standing-waves": return <StandingWaves />
      case "sound-speed": return <SoundSpeedExperiment />
      case "electric-field-current": return <ElectricFieldCurrent />
      case "coulomb-law": return <CoulombLaw />
      case "capacitor-lab": return <CapacitorLab />;
      case "dc-circuit-lab": return <DCCircuitLab />;
      case "hand-spring": return <HandSpringOscillator />
      case "hand-pendulum": return <HandSimplePendulum />
      case "su-chuyen-the-html": return <PhaseChange3D />
    }

    // Check custom modules
    const custom = customModules.find(m => m.id === activeTab)
    if (custom) {
      return (
        <div className="w-full h-full bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700 relative">
          <iframe
            src={custom.path}
            className="w-full h-full border-0"
            title={custom.label}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      )
    }

    return <PhysicsIntro onSelectExperiment={setActiveTab} />
  }

  const SidebarItem = ({ item }: { item: any }) => (
    <button
      key={item.id}
      onClick={() => {
        setActiveTab(item.id);
        if (window.innerWidth < 768) setIsSidebarOpen(false);
      }}
      className={`
        w-full text-left px-4 py-2.5 rounded-r font-sans text-xs font-bold uppercase tracking-wide transition-all group relative overflow-hidden
        ${activeTab === item.id
          ? 'bg-sky-100 dark:bg-cyan-950/40 text-sky-700 dark:text-cyan-400 border-l-2 border-cyan-500'
          : 'text-slate-600 dark:text-slate-500 hover:bg-sky-50 dark:hover:bg-slate-800/50 hover:text-sky-600 dark:hover:text-cyan-300'}
        `}
    >
      <div className="relative z-10 flex items-center gap-3">
        <item.icon size={16} className={activeTab === item.id ? "animate-pulse" : ""} />
        {item.label}
      </div>
    </button>
  );

  return (
    <LabLayout>
      {/* HEADER BAR */}
      <header className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800/60 shrink-0 transition-colors">
        <div className="flex items-center gap-4">
          <NeonButton
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="!px-3 !py-2"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </NeonButton>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 select-none group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <Atom className="w-8 h-8 md:w-10 md:h-10 text-cyan-600 dark:text-cyan-400 relative z-10 transition-transform duration-700 group-hover:rotate-180" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold font-sans tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 dark:from-cyan-400 dark:via-sky-400 dark:to-blue-500 uppercase flex items-center gap-2">
                  VẬT LÝ <span className="text-slate-700 dark:text-white">LAB</span>
                </h1>
                <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-sans font-bold uppercase tracking-widest leading-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)] animate-pulse"></span>
                  ONLINE v2.0
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <ThemeToggle />
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-800"></div>
          <div className="text-right">
            <div className="text-sky-700 dark:text-cyan-400 font-sans font-bold flex items-center justify-end gap-2">
              {currentItem?.label || "Giới thiệu"} <ActiveIcon size={16} />
            </div>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-800"></div>
          <div className="text-right">
            <div className="text-[10px] text-slate-500 uppercase font-sans font-bold">Giáo viên hướng dẫn</div>
            <div className="font-sans font-bold text-sky-600 dark:text-cyan-500">Nguyễn Thị Hương</div>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-800"></div>
          <div className="text-right">
            <div className="text-[10px] text-slate-500 uppercase font-sans font-bold">Chủ dự án</div>
            <div className="font-sans font-bold text-sky-600 dark:text-cyan-500">Hồ Hoàng Anh</div>
          </div>
        </div>
      </header>

      {/* MAIN BODY */}
      <div className="flex flex-1 overflow-hidden gap-6 relative">

        {/* SIDEBAR NAVIGATION */}
        <aside
          className={`
            fixed md:static inset-y-0 left-0 z-50 w-64 bg-white/95 dark:bg-[#02040a]/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border-r border-slate-200 dark:border-slate-800/50 md:border-none
            transform transition-transform duration-300 ease-out flex flex-col gap-2 p-4 md:p-0
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:hidden'}
          `}
        >
          <div className="md:hidden flex justify-end mb-4">
            <button onClick={() => setIsSidebarOpen(false)} className="text-slate-500 hover:text-sky-600 dark:hover:text-cyan-400"><X /></button>
          </div>

          {/* SECTION: GIỚI THIỆU CHUNG */}
          <div className="mb-2 px-0">
            <button
              onClick={() => {
                setActiveTab(INTRO_ITEM.id);
                if (window.innerWidth < 768) setIsSidebarOpen(false);
              }}
              className={`
                  w-full text-left px-4 py-3 rounded border font-sans text-xs font-bold uppercase tracking-wide transition-all group relative overflow-hidden
                  ${activeTab === INTRO_ITEM.id
                  ? 'bg-sky-100 dark:bg-cyan-950/40 border-sky-300 dark:border-cyan-500/50 text-sky-700 dark:text-cyan-400 shadow-sm dark:shadow-[0_0_10px_rgba(6,182,212,0.1)]'
                  : 'bg-transparent border-transparent text-slate-600 dark:text-slate-500 hover:bg-sky-50 dark:hover:bg-slate-900 hover:text-sky-600 dark:hover:text-cyan-300'}
                `}
            >
              <div className="absolute inset-0 w-[150%] -translate-x-[120%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-sky-300/30 dark:via-cyan-400/20 to-transparent skew-x-12 pointer-events-none" />
              <div className="relative z-10 flex items-center gap-3">
                <INTRO_ITEM.icon size={16} className={activeTab === INTRO_ITEM.id ? "animate-pulse" : ""} />
                {INTRO_ITEM.label}
              </div>
            </button>
          </div>

          <div className="overflow-y-auto flex-1 custom-scrollbar pr-2 space-y-4">

            {/* GROUP 1: MECHANICS */}
            <div>
              <button
                onClick={() => setMechanicsOpen(!isMechanicsOpen)}
                className={`flex items-center justify-between text-xs font-bold uppercase font-sans tracking-widest mb-2 px-2 transition-colors w-full
                  ${isMechanicsOpen
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-cyan-500'
                  }`}
              >
                <span className="flex items-center gap-2">
                  <Activity size={14} /> DAO ĐỘNG CƠ
                </span>
                {isMechanicsOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
              {isMechanicsOpen && (
                <div className="space-y-1 pl-2 border-l border-slate-200 dark:border-slate-800 ml-3">
                  {MECHANICS_EXPERIMENTS.map((item) => <SidebarItem key={item.id} item={item} />)}
                </div>
              )}
            </div>

            {/* GROUP 2: WAVES */}
            <div>
              <button
                onClick={() => setWavesOpen(!isWavesOpen)}
                className={`flex items-center justify-between text-xs font-bold uppercase font-sans tracking-widest mb-2 px-2 transition-colors w-full
                  ${isWavesOpen
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-cyan-500'
                  }`}
              >
                <span className="flex items-center gap-2">
                  <Waves size={14} /> SÓNG CƠ & ÂM
                </span>
                {isWavesOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
              {isWavesOpen && (
                <div className="space-y-1 pl-2 border-l border-slate-200 dark:border-slate-800 ml-3">
                  {WAVES_EXPERIMENTS.map((item) => <SidebarItem key={item.id} item={item} />)}
                </div>
              )}
            </div>

            {/* GROUP 3: ELECTRICITY */}
            <div>
              <button
                onClick={() => setElectricityOpen(!isElectricityOpen)}
                className={`flex items-center justify-between text-xs font-bold uppercase font-sans tracking-widest mb-2 px-2 transition-colors w-full
                  ${isElectricityOpen
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-cyan-500'
                  }`}
              >
                <span className="flex items-center gap-2">
                  <Zap size={14} /> ĐIỆN & TỪ
                </span>
                {isElectricityOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
              {isElectricityOpen && (
                <div className="space-y-1 pl-2 border-l border-slate-200 dark:border-slate-800 ml-3">
                  {ELECTRICITY_EXPERIMENTS.map((item) => <SidebarItem key={item.id} item={item} />)}
                </div>
              )}
            </div>

            {/* GROUP 4: TRIALS */}

            {/* GROUP 5: TRIALS */}
            <div>
              <button
                onClick={() => setTrialOpen(!isTrialOpen)}
                className={`flex items-center justify-between text-xs font-bold uppercase font-sans tracking-widest mb-2 px-2 transition-colors w-full
                  ${isTrialOpen
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-purple-500'
                  }`}
              >
                <span className="flex items-center gap-2">
                  <Hand size={14} /> THỬ NGHIỆM
                </span>
                {isTrialOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
              {isTrialOpen && (
                <div className="space-y-1 pl-2 border-l border-slate-200 dark:border-slate-800 ml-3">
                  {TRIAL_EXPERIMENTS.map((item) => <SidebarItem key={item.id} item={item} />)}
                </div>
              )}
            </div>

          </div>

          {/* SECTION 3: USER MODULES */}


          {/* CREATE NEW BUTTON */}
          <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800/50 flex flex-col gap-3">


            <div className="p-3 rounded-lg bg-white/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 text-center backdrop-blur-sm group hover:border-sky-300 dark:hover:border-cyan-500/30 transition-colors">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1 font-sans">
                Dev & Designer by : <span className="text-slate-800 dark:text-slate-200 font-bold">Hồ Hoàng Anh</span>
              </div>
              <div className="text-[10px] text-sky-600 dark:text-cyan-400 font-sans font-bold mt-0.5">Class: A1 - K50</div>
            </div>

            <div className="text-[10px] text-slate-500 dark:text-slate-600 text-center font-medium pb-10">
              2025 © <span className="text-slate-600 dark:text-slate-500 hover:text-sky-600 dark:hover:text-cyan-500 cursor-pointer transition-colors">Metronic Physics Theme</span>
            </div>
          </div>
        </aside>

        {/* CONTENT AREA */}
        <main
          ref={mainContentRef}
          className="flex-1 flex flex-col overflow-hidden relative bg-slate-50 dark:bg-[#02040a]"
        >
          {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}

          <div className={`animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 h-full w-full ${["spring-oscillator", "simple-pendulum", "harmonic-oscillation", "mechanical-waves", "sound-waves", "electric-field", "coulomb-law", "su-chuyen-the-html"].includes(activeTab) || customModules.find(m => m.id === activeTab)
            ? "overflow-hidden"
            : "overflow-y-auto overflow-x-hidden custom-scrollbar"
            }`}>
            {renderContent()}
          </div>
        </main>
      </div>
    </LabLayout >
  )
}