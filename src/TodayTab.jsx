import React from 'react'
import { PHASES } from '../data/index.js'

function ItemRow({ item }) {
  const icon  = item.type === 'ok' ? '✓' : item.type === 'no' ? '✗' : '!'
  const color = item.type === 'ok' ? 'text-green-600' : item.type === 'no' ? 'text-red-500' : 'text-amber-500'
  return (
    <div className="flex items-start gap-2 py-1.5 border-t border-gray-100 text-sm">
      <span className={`${color} font-bold flex-shrink-0 mt-0.5`}>{icon}</span>
      <span className="text-gray-700">{item.text}</span>
    </div>
  )
}

export default function TodayTab({ activePhase }) {
  const phase = PHASES[activePhase]
  if (!phase) return null

  return (
    <div>
      {/* Priorities */}
      <div className={`rounded-xl border p-4 mb-3 ${phase.colors.bg} ${phase.colors.border}`}>
        <h2 className={`text-sm font-medium mb-2 ${phase.colors.text}`}>
          {phase.label} – priorités
        </h2>
        {phase.priorities.map((item, i) => <ItemRow key={i} item={item} />)}
      </div>

      {/* Meals */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 mb-3">
        <h2 className="text-sm font-medium text-gray-900 mb-2">Idées repas du jour</h2>
        <div className="flex items-start gap-2 py-1.5 border-t border-gray-100 text-sm">
          <span className="text-amber-400 flex-shrink-0 mt-0.5">☀</span>
          <span className="text-gray-700">
            <strong className="font-medium">Déj : </strong>{phase.meals.lunch}
          </span>
        </div>
        <div className="flex items-start gap-2 py-1.5 border-t border-gray-100 text-sm">
          <span className="text-violet-400 flex-shrink-0 mt-0.5">◐</span>
          <span className="text-gray-700">
            <strong className="font-medium">Dîn : </strong>{phase.meals.dinner}
          </span>
        </div>
        <div className="flex items-start gap-2 py-1.5 border-t border-gray-100 text-sm">
          <span className="text-green-500 flex-shrink-0 mt-0.5">◇</span>
          <span className="text-gray-700">
            <strong className="font-medium">Col : </strong>{phase.meals.snack}
          </span>
        </div>
      </div>
    </div>
  )
}
