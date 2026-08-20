import React from 'react'
import { SPICES, INFO_ITEMS } from '../data/index.js'

const spiceCols = [
  { key: 'ok',     cls: 'bg-green-50 border-green-200',  titleCls: 'text-green-800',  prefix: '✓' },
  { key: 'mod',    cls: 'bg-amber-50 border-amber-200',  titleCls: 'text-amber-800',  prefix: '!' },
  { key: 'crisis', cls: 'bg-red-50   border-red-200',    titleCls: 'text-red-800',    prefix: '✗' }
]

const desserts = [
  { cls: 'bg-green-50 text-green-800',  label: 'Chocolat noir 70% – 1 à 2 carrés' },
  { cls: 'bg-green-50 text-green-800',  label: 'Pomme ou poire au four' },
  { cls: 'bg-green-50 text-green-800',  label: 'Yaourt + noix + cannelle' },
  { cls: 'bg-amber-50 text-amber-800',  label: 'Pâtisserie – plutôt le midi' },
  { cls: 'bg-red-50   text-red-800',    label: 'Dessert + alcool + repas tardif cumulés' }
]

export default function RefsTab() {
  return (
    <div>
      {/* Spices */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 mb-3">
        <h2 className="text-sm font-medium text-gray-900 mb-3">Épices &amp; aromates</h2>
        <div className="grid grid-cols-3 gap-2">
          {spiceCols.map(col => (
            <div key={col.key} className={`rounded-lg border p-2.5 ${col.cls}`}>
              <div className={`text-xs font-medium mb-1.5 ${col.titleCls}`}>
                {col.prefix} {SPICES[col.key].label}
              </div>
              <div className="text-xs text-gray-600 leading-relaxed">{SPICES[col.key].items}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Coffee / milk / gluten */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 mb-3">
        <h2 className="text-sm font-medium text-gray-900 mb-2">Café, lait, gluten</h2>
        {INFO_ITEMS.map((item, i) => (
          <div key={i} className={`flex items-start gap-2 py-1.5 text-sm ${i > 0 ? 'border-t border-gray-100' : ''}`}>
            <span className={`flex-shrink-0 mt-0.5 ${item.color}`}>ℹ</span>
            <span className="text-gray-700">
              <strong className="font-medium">{item.label}</strong> – {item.desc}
            </span>
          </div>
        ))}
      </div>

      {/* Amplify vs soothe */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 mb-3">
        <h2 className="text-sm font-medium text-gray-900 mb-3">Ce qui amplifie vs apaise</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-red-50 border border-red-200 p-3">
            <div className="text-xs font-medium text-red-800 mb-1.5">Amplifie</div>
            <div className="text-xs text-red-700 leading-relaxed">
              Alcool · Ultra-transformés · Sucres rapides · Fritures · Repas tardifs
            </div>
          </div>
          <div className="rounded-lg bg-green-50 border border-green-200 p-3">
            <div className="text-xs font-medium text-green-800 mb-1.5">Apaise</div>
            <div className="text-xs text-green-700 leading-relaxed">
              Oméga-3 · Fruits rouges · Huile d'olive · Curcuma · Légumes cuits
            </div>
          </div>
        </div>
      </div>

      {/* Desserts */}
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h2 className="text-sm font-medium text-gray-900 mb-3">Desserts sans culpabilité</h2>
        <div className="flex flex-wrap gap-2">
          {desserts.map((d, i) => (
            <span key={i} className={`text-xs px-2 py-1 rounded-md ${d.cls}`}>{d.label}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
