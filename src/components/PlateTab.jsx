import React from 'react'
import { PLANNING } from '../data/index.js'

export default function PlateTab() {
  return (
    <div>
      {/* Plate formula */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 mb-3">
        <h2 className="text-sm font-medium text-gray-900 mb-3">La formule anti-douleur</h2>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="col-span-2 rounded-lg bg-green-50 border border-green-200 p-3">
            <div className="text-xs font-medium text-green-800 mb-1">½ légumes cuits</div>
            <div className="text-xs text-gray-500 leading-relaxed">
              Courgette · Carotte · Fenouil · Potimarron · Épinards · Poireau fondu · Champignons · Brocoli
            </div>
          </div>
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-3">
            <div className="text-xs font-medium text-blue-800 mb-1">¼ protéine</div>
            <div className="text-xs text-gray-500 leading-relaxed">Poisson · Poulet · Sardines · Saumon · Œufs</div>
          </div>
          <div className="rounded-lg bg-violet-50 border border-violet-200 p-3">
            <div className="text-xs font-medium text-violet-800 mb-1">¼ féculent</div>
            <div className="text-xs text-gray-500 leading-relaxed">Riz · Quinoa · Pommes de terre · Avoine · Sarrasin</div>
          </div>
        </div>
        <div className="rounded-lg bg-rose-50 border border-rose-200 p-3">
          <div className="text-xs font-medium text-rose-800 mb-1">+ bon gras</div>
          <div className="text-xs text-gray-500">Huile d'olive · Noix · Avocat · Graines de lin · Poissons gras</div>
        </div>
      </div>

      {/* 7-day plan */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 mb-3">
        <h2 className="text-sm font-medium text-gray-900 mb-3">Planning déjeuners – 7 jours</h2>
        {PLANNING.map((row, i) => (
          <div key={i} className={`flex items-center gap-3 py-2 text-sm ${i > 0 ? 'border-t border-gray-100' : ''}`}>
            <span className="text-xs font-medium text-gray-400 w-5 flex-shrink-0">{row.day}</span>
            <span className={`text-xs px-2 py-0.5 rounded-md font-medium flex-shrink-0 ${row.tagCls}`}>{row.tag}</span>
            <span className="text-gray-700">{row.meal}</span>
          </div>
        ))}
      </div>

      {/* Swaps */}
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h2 className="text-sm font-medium text-gray-900 mb-2">Échanges faciles</h2>
        <div className="space-y-1 text-xs text-gray-500">
          <div>Pâtes ↔ Riz ↔ Pommes de terre ↔ Avoine</div>
          <div>Crudités ↔ Légumes cuits ↔ Soupe</div>
          <div>Café lait ↔ Sans lactose ↔ Avoine</div>
        </div>
      </div>
    </div>
  )
}
