interface EnergyBarsProps {
  kinetic: number
  potential: number
  total: number
  showLoss?: boolean
  initialTotal?: number
}

export default function EnergyBars({ kinetic, potential, total, showLoss = false, initialTotal = 0 }: EnergyBarsProps) {
  const maxEnergy = Math.max(kinetic + potential, initialTotal, 0.1)
  const kineticPercent = (kinetic / maxEnergy) * 100
  const potentialPercent = (potential / maxEnergy) * 100
  const lossPercent = showLoss ? ((initialTotal - total) / maxEnergy) * 100 : 0

  return (
    <div className="bg-[#16213e] rounded-lg p-4 border border-cyan-900/50">
      <h3 className="text-cyan-400 font-semibold mb-3">Năng lượng</h3>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-green-400">Động năng (Wđ)</span>
            <span className="text-green-400">{kinetic.toFixed(3)} J</span>
          </div>
          <div className="h-4 bg-gray-700 rounded overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-100"
              style={{ width: `${Math.min(kineticPercent, 100)}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-blue-400">Thế năng (Wt)</span>
            <span className="text-blue-400">{potential.toFixed(3)} J</span>
          </div>
          <div className="h-4 bg-gray-700 rounded overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-100"
              style={{ width: `${Math.min(potentialPercent, 100)}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-yellow-400">Cơ năng (W)</span>
            <span className="text-yellow-400">{total.toFixed(3)} J</span>
          </div>
          <div className="h-4 bg-gray-700 rounded overflow-hidden">
            <div
              className="h-full bg-yellow-500 transition-all duration-100"
              style={{ width: `${Math.min(kineticPercent + potentialPercent, 100)}%` }}
            />
          </div>
        </div>

        {showLoss && lossPercent > 0 && (
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-red-400">Năng lượng mất</span>
              <span className="text-red-400">{(initialTotal - total).toFixed(3)} J</span>
            </div>
            <div className="h-4 bg-gray-700 rounded overflow-hidden">
              <div
                className="h-full bg-red-500 transition-all duration-100"
                style={{ width: `${Math.min(lossPercent, 100)}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
