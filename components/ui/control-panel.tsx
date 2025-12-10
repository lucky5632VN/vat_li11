import type React from "react"
interface ControlPanelProps {
  title: string
  children: React.ReactNode
}

export default function ControlPanel({ title, children }: ControlPanelProps) {
  return (
    <div className="bg-[#16213e] rounded-lg p-4 border border-cyan-900/50">
      <h3 className="text-cyan-400 font-semibold mb-3">{title}</h3>
      {children}
    </div>
  )
}
