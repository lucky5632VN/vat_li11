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
  Beaker
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

// Tách mục Intro ra riêng để xử lý hiển thị đặc biệt
const INTRO_ITEM = { id: "intro", label: "Giới thiệu chung", icon: FlaskConical }

// Danh sách thí nghiệm cơ bản
const STANDARD_EXPERIMENTS = [
  { id: "harmonic-oscillation", label: "Dao động điều hòa", icon: Zap },
  { id: "spring-oscillator", label: "Con lắc lò xo", icon: Activity },
  { id: "simple-pendulum", label: "Con lắc đơn", icon: Anchor },
  { id: "damped-oscillation", label: "Dao động tắt dần", icon: TrendingDown },
  { id: "mechanical-waves", label: "Sóng cơ", icon: Waves },
  { id: "sound-waves", label: "Sóng âm", icon: Mic },
  { id: "wave-interference", label: "Giao thoa sóng", icon: Aperture },
  { id: "sound-speed", label: "Đo tốc độ truyền âm", icon: Mic },
  { id: "standing-waves", label: "Sóng dừng", icon: Infinity },
]

// Danh sách thử nghiệm (Hand Control / Beta)
const TRIAL_EXPERIMENTS = [
  { id: "hand-spring", label: "Con lò xo ", icon: Hand },
  { id: "hand-pendulum", label: "Con lắc đơn ", icon: Hand },
  { id: "su-chuyen-the-html", label: "Sự chuyển thể (3D)", icon: Beaker },
]

const ALL_EXPERIMENTS = [...STANDARD_EXPERIMENTS, ...TRIAL_EXPERIMENTS]

export default function PhysicsLab() {
  const [activeTab, setActiveTab] = useState("intro")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [customModules, setCustomModules] = useState<any[]>([])

  // Section Collapse State
  const [isStandardOpen, setStandardOpen] = useState(false)
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

      case "hand-spring": return <HandSpringOscillator />
      case "hand-pendulum": return <HandSimplePendulum />
      case "su-chuyen-the-html": return (
        <div className="w-full h-full bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700 relative">
          <iframe
            src="/su-chuyen-the.html"
            className="w-full h-full border-0"
            title="Sự chuyển thể"
            allow="camera; microphone; fullscreen; clipboard-read; clipboard-write;"
          />
        </div>
      )

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

          {/* SECTION 1: GIỚI THIỆU CHUNG */}
          <div className="mb-6 px-0">
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

          {/* SECTION 2: DANH MỤC CƠ BẢN */}
          <button
            onClick={() => setStandardOpen(!isStandardOpen)}
            className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-500 uppercase font-sans tracking-widest mb-2 px-2 hover:text-cyan-500 transition-colors"
          >
            <span className="flex items-center gap-2">
              <FlaskConical size={14} /> CÁC THÍ NGHIỆM
            </span>
            {isStandardOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>

          {isStandardOpen && (
            <div className="space-y-1 overflow-y-auto scrollbar-hide mb-6 pl-2 border-l border-slate-200 dark:border-slate-800 ml-3">
              {STANDARD_EXPERIMENTS.map((item) => (
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
              ))}
            </div>
          )}

          {/* SECTION 3: THỬ NGHIỆM (HAND CONTROL) */}
          <button
            onClick={() => setTrialOpen(!isTrialOpen)}
            className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-500 uppercase font-sans tracking-widest mb-2 px-2 hover:text-cyan-500 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Beaker size={14} /> THỬ NGHIỆM
            </span>
            {isTrialOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>

          {isTrialOpen && (
            <div className="space-y-1 overflow-y-auto scrollbar-hide mb-4 pl-2 border-l border-slate-200 dark:border-slate-800 ml-3">
              {TRIAL_EXPERIMENTS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                  }}
                  className={`
                    w-full text-left px-4 py-2.5 rounded-r font-sans text-xs font-bold uppercase tracking-wide transition-all group relative overflow-hidden
                    ${activeTab === item.id
                      ? 'bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border-l-2 border-purple-500'
                      : 'text-slate-600 dark:text-slate-500 hover:bg-purple-50 dark:hover:bg-slate-800/50 hover:text-purple-600 dark:hover:text-purple-300'}
                    `}
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <item.icon size={16} className={activeTab === item.id ? "animate-pulse" : ""} />
                    {item.label}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* SECTION 3: USER MODULES */}


          {/* CREATE NEW BUTTON */}
          <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800/50 flex flex-col gap-3">


            <div className="p-3 rounded-lg bg-white/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 text-center backdrop-blur-sm group hover:border-sky-300 dark:hover:border-cyan-500/30 transition-colors">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1 font-sans">
                Dev & Designer by : <span className="text-slate-800 dark:text-slate-200 font-bold">Hồ Hoàng Anh</span>
              </div>
              <div className="text-[10px] text-sky-600 dark:text-cyan-400 font-sans font-bold mt-0.5">Class: A1 - K50</div>
            </div>

            <div className="text-[10px] text-slate-500 dark:text-slate-600 text-center font-medium pb-2">
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

          <div className={`animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 h-full w-full ${["spring-oscillator", "simple-pendulum", "harmonic-oscillation", "mechanical-waves", "sound-waves", "su-chuyen-the-html"].includes(activeTab) || customModules.find(m => m.id === activeTab)
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