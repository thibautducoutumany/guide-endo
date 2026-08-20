import React from 'react'
import { TRIGGERS, CRISIS_STEPS } from '../data/index.js'

function Step({ step, index }) {
  const isCrisis = step.phase === 'crisis'
  const numCls = isCrisis
    ? 'bg-rose-100 text-rose-800'
    : 'bg-green-100 text-green-800'
  return (
    <div className={`flex gap-3 py-2.5 ${index > 0 ? 'border-t border-gray-100' : ''}`}>
      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5 ${numCls}`}>
        {index + 1}
      </span>
      <div className="text-sm">
        <div className="font-medium text-gray-900">{step.label}</div>
        <div className="text-gray-500">{step.desc}</div>
      </div>
    </div>
  )
}

const crisisSteps  = CRISIS_STEPS.filter(s => s.phase === 'crisis')
const relapseSteps = CRISIS_STEPS.filter(s => s.phase === 'relapse')

export default function SOSTab() {
  return (
    <div>
      {/* Triggers */}
      <div className="rounded-xl border border-red-200 bg-white p-4 mb-3">
        <h2 className="text-sm font-medium text-red-700 mb-3">5 déclencheurs à surveiller</h2>
        {TRIGGERS.map((t, i) => (
          <div key={i} className={`flex items-start gap-2 py-1.5 text-sm ${i > 0 ? 'border-t border-gray-100' : ''}`}>
            <span className="flex-shrink-0 w-5 h-5 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-xs font-medium">
              {i + 1}
            </span>
            <span className="text-gray-700">{t}</span>
          </div>
        ))}
      </div>

      {/* Crisis days 1-2 */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 mb-3">
        <h2 className="text-sm font-medium text-rose-700 mb-1">Routine crise – jours 1 &amp; 2</h2>
        {crisisSteps.map((s, i) => <Step key={i} step={s} index={i} />)}
      </div>

      {/* Relapse days 3-4 */}
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h2 className="text-sm font-medium text-green-700 mb-1">Jours 3 &amp; 4 – relancer</h2>
        {relapseSteps.map((s, i) => <Step key={i} step={s} index={i} />)}
      </div>
    </div>
  )
}
