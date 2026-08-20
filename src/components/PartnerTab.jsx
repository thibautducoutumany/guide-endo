import React, { useState } from 'react'
import { PHASES, PARTNER_GUIDE, PARTNER_ALWAYS, PARTNER_URGENT } from '../data/index.js'

export default function PartnerTab({ activePhase }) {
  const [showAlways, setShowAlways] = useState(false)

  const phase = PHASES[activePhase]
  const guide = PARTNER_GUIDE[activePhase]

  if (!phase || !guide) return null

  return (
    <div>
      {/* Intro */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 mb-3">
        <h2 className="text-sm font-medium text-slate-800 mb-1.5">Mode accompagnant</h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          Ce module est pour la personne qui accompagne. Pas pour diagnostiquer ni pour
          gérer à sa place — juste pour comprendre ce qui se passe et savoir quoi faire
          concrètement.
        </p>
      </div>

      {/* Ce qu'elle traverse */}
      <div className={`rounded-xl border p-4 mb-3 ${phase.colors.bg} ${phase.colors.border}`}>
        <h2 className={`text-sm font-medium mb-2 ${phase.colors.text}`}>
          Ce qu'elle traverse — {phase.label.replace('Phase ', '').toLowerCase()}
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">{guide.context}</p>
      </div>

      {/* Actions concrètes */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 mb-3">
        <h2 className="text-sm font-medium text-gray-900 mb-2">Quoi faire concrètement</h2>
        {guide.actions.map((action, i) => (
          <div
            key={i}
            className={`flex items-start gap-2 py-2 text-sm ${i > 0 ? 'border-t border-gray-100' : ''}`}
          >
            <span className="flex-shrink-0 w-5 h-5 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-medium mt-0.5">
              {i + 1}
            </span>
            <span className="text-gray-700">{action}</span>
          </div>
        ))}
      </div>

      {/* Quoi cuisiner */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-4 mb-3">
        <h2 className="text-sm font-medium text-green-800 mb-1.5">Quoi cuisiner ce soir</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{guide.cook}</p>
      </div>

      {/* À éviter */}
      <div className="rounded-xl border border-amber-200 bg-white p-4 mb-3">
        <h2 className="text-sm font-medium text-amber-800 mb-2">À éviter cette semaine</h2>
        {guide.avoid.map((item, i) => (
          <div
            key={i}
            className={`flex items-start gap-2 py-1.5 text-sm ${i > 0 ? 'border-t border-gray-100' : ''}`}
          >
            <span className="text-amber-500 flex-shrink-0 mt-0.5">!</span>
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      {/* Ce qui aide / ce qui blesse */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 mb-3">
        <h2 className="text-sm font-medium text-gray-900 mb-3">Ce qui aide vs ce qui blesse</h2>
        <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 mb-2">
          <div className="text-xs font-medium text-emerald-800 mb-1">Ce qui aide</div>
          <div className="text-sm text-gray-700 italic">« {guide.say} »</div>
        </div>
        <div className="rounded-lg bg-red-50 border border-red-200 p-3">
          <div className="text-xs font-medium text-red-800 mb-1">Ce qui blesse</div>
          <div className="text-sm text-gray-700 italic">« {guide.dontSay} »</div>
        </div>
      </div>

      {/* Toujours vrai — collapsible */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 mb-3">
        <button
          type="button"
          onClick={() => setShowAlways(!showAlways)}
          className="w-full flex items-center justify-between text-sm font-medium text-gray-900"
        >
          <span>À savoir, quelle que soit la phase</span>
          <span className="text-gray-400 text-xs">{showAlways ? '▲' : '▼'}</span>
        </button>

        {showAlways && (
          <div className="mt-3">
            {PARTNER_ALWAYS.map((item, i) => (
              <div key={i} className={`py-2.5 ${i > 0 ? 'border-t border-gray-100' : ''}`}>
                <div className="text-sm font-medium text-gray-800 mb-0.5">{item.title}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Urgences */}
      <div className="rounded-xl border border-red-300 bg-red-50 p-4">
        <h2 className="text-sm font-medium text-red-800 mb-2">
          Consulter rapidement si
        </h2>
        {PARTNER_URGENT.map((sign, i) => (
          <div
            key={i}
            className={`flex items-start gap-2 py-1.5 text-sm ${i > 0 ? 'border-t border-red-200' : ''}`}
          >
            <span className="text-red-500 flex-shrink-0 mt-0.5">●</span>
            <span className="text-gray-700">{sign}</span>
          </div>
        ))}
        <p className="text-xs text-red-700 mt-3 leading-relaxed">
          En cas de doute, un avis médical rapide vaut toujours mieux qu'une nuit à
          attendre de voir.
        </p>
      </div>
    </div>
  )
}
