"use client"

import { Play, Pause, SkipForward, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PlaybackControlsProps {
  isPlaying: boolean
  onPlay: () => void
  onPause: () => void
  onStep: () => void
  onReset: () => void
}

export default function PlaybackControls({ isPlaying, onPlay, onPause, onStep, onReset }: PlaybackControlsProps) {
  return (
    <div className="flex items-center justify-center gap-2 bg-[#16213e] rounded-lg p-3 border border-cyan-900/50">
      <Button
        variant="outline"
        size="icon"
        onClick={onReset}
        className="bg-gray-700 border-gray-600 hover:bg-gray-600 text-white"
      >
        <RotateCcw className="h-4 w-4" />
      </Button>

      {isPlaying ? (
        <Button
          variant="outline"
          size="icon"
          onClick={onPause}
          className="bg-yellow-600 border-yellow-500 hover:bg-yellow-500 text-white"
        >
          <Pause className="h-4 w-4" />
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          onClick={onPlay}
          className="bg-green-600 border-green-500 hover:bg-green-500 text-white"
        >
          <Play className="h-4 w-4" />
        </Button>
      )}

      <Button
        variant="outline"
        size="icon"
        onClick={onStep}
        disabled={isPlaying}
        className="bg-cyan-600 border-cyan-500 hover:bg-cyan-500 text-white disabled:opacity-50"
      >
        <SkipForward className="h-4 w-4" />
      </Button>

      <span className="text-gray-400 text-sm ml-4">
        {isPlaying ? "Đang chạy" : "Tạm dừng"} | Bấm Step để tiến từng khung hình
      </span>
    </div>
  )
}
