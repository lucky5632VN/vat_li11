import React from "react"
import { Play, Pause, RotateCcw, SkipBack, SkipForward, ChevronLeft, ChevronRight } from "lucide-react"

interface PlaybackControlsProps {
  isPlaying: boolean
  onPlayPause: () => void
  onReset: () => void
  onStepForward?: () => void
  onStepBackward?: () => void
  onSkipForward?: () => void // Optional for larger jumps or fixed intervals
  onSkipBackward?: () => void
  disabled?: boolean
}

export function PlaybackControls({
  isPlaying,
  onPlayPause,
  onReset,
  onStepForward,
  onStepBackward,
  onSkipForward,
  onSkipBackward,
  disabled = false
}: PlaybackControlsProps) {
  const btnClass = "w-10 h-10 rounded-xl bg-[#1e293b] hover:bg-[#334155] border border-slate-700/50 text-slate-300 flex items-center justify-center transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
  const iconClass = "w-5 h-5 text-slate-400 group-hover:text-white transition-colors"

  return (
    <div className="bg-[#0f172a]/60 backdrop-blur-md p-2 rounded-2xl border border-slate-700/50 flex items-center gap-2 inline-flex shadow-lg">
      {/* Reset */}
      <button onClick={onReset} className={btnClass} title="Làm mới">
        <RotateCcw className={iconClass} />
      </button>

      {/* Divider */}
      <div className="w-px h-6 bg-slate-700 mx-1" />

      {/* Skip Back (Large Step) */}
      {onSkipBackward && (
        <button onClick={onSkipBackward} disabled={disabled} className={btnClass} title="Lùi nhanh">
          <SkipBack className={iconClass} />
        </button>
      )}

      {/* Step Back (Small Step) */}
      {onStepBackward && (
        <button onClick={onStepBackward} disabled={disabled} className={btnClass} title="Lùi bước">
          <ChevronLeft className={iconClass} />
        </button>
      )}

      {/* Play/Pause Main Button */}
      <button
        onClick={onPlayPause}
        disabled={disabled}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95 mx-1
                    ${isPlaying
            ? 'bg-amber-500 hover:bg-amber-400 shadow-amber-500/20'
            : 'bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/20'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        title={isPlaying ? "Tạm dừng" : "Phát"}
      >
        {isPlaying ? (
          <Pause className="w-7 h-7 text-white fill-current" />
        ) : (
          <Play className="w-7 h-7 text-white fill-current ml-1" />
        )}
      </button>

      {/* Step Forward (Small Step) */}
      {onStepForward && (
        <button onClick={onStepForward} disabled={disabled} className={btnClass} title="Tiến bước">
          <ChevronRight className={iconClass} />
        </button>
      )}

      {/* Skip Forward (Large Step) */}
      {onSkipForward && (
        <button onClick={onSkipForward} disabled={disabled} className={btnClass} title="Tiến nhanh">
          <SkipForward className={iconClass} />
        </button>
      )}
    </div>
  )
}
