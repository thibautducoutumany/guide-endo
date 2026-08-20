import React, { useState, useCallback } from 'react'
import { PHASES } from '../data/index.js'

const LS_KEY       = 'endo_journal'
const TRANSIT_OPTS = ['normal', 'lent', 'rapide', 'douloureux']
const MONTHS_LONG  = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']
const MONTHS_SHORT = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

function formatDateShort(key) {
  const [, m, d] = key.split('-')
  return `${d} ${MONTHS_SHORT[parseInt(m, 10) - 1]}`
}

function readStorage() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}') } catch { return {} }
}

function writeStorage(data) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(data)) } catch { /* quota */ }
}

function Slider({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <div className="text-xs text-gray-500 mb-1.5">{label}</div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400 w-3">0</span>
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="flex-1 accent-rose-400"
        />
        <span className="text-xs text-gray-400 w-3">10</span>
        <span className="w-5 text-right text-sm font-medium text-gray-900">{value}</span>
      </div>
    </div>
  )
}

function MiniBar({ value, color }) {
  return (
    <div className="flex flex-col items-center gap-0.5 flex-1">
      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value * 10}%` }} />
      </div>
      <span className="text-xs text-gray-400">{value}</span>
    </div>
  )
}

export default function JournalTab({ activePhase }) {
  const today        = todayKey()
  const allEntries   = readStorage()
  const todayEntry   = allEntries[today]

  const [douleur, setDouleur] = useState(todayEntry?.douleur ?? 3)
  const [ventre,  setVentre]  = useState(todayEntry?.ventre  ?? 3)
  const [energie, setEnergie] = useState(todayEntry?.energie ?? 6)
  const [transit, setTransit] = useState(todayEntry?.transit ?? 'normal')
  const [saved,   setSaved]   = useState(false)
  const [entries, setEntries] = useState(allEntries)

  const dateLabel = (() => {
    const d = new Date()
    return `${d.getDate()} ${MONTHS_LONG[d.getMonth()]}`
  })()

  const save = useCallback(() => {
    const all = readStorage()
    all[today] = { douleur, ventre, energie, transit, phase: activePhase }
    writeStorage(all)
    setEntries({ ...all })
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }, [today, douleur, ventre, energie, transit, activePhase])

  const histKeys = Object.keys(entries).sort().reverse().slice(0, 10)
  const phase    = PHASES[activePhase]

  return (
    <div>
      {/* Entry form */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 mb-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-gray-900">Entrée du jour</h2>
          <span className="text-xs text-gray-400">{dateLabel}</span>
        </div>

        <Slider label="Douleur"      value={douleur} onChange={setDouleur} />
        <Slider label="Ventre gonflé" value={ventre}  onChange={setVentre}  />
        <Slider label="Énergie"       value={energie} onChange={setEnergie} />

        <div className="text-xs text-gray-500 mb-2">Transit</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {TRANSIT_OPTS.map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => setTransit(opt)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                transit === opt
                  ? 'bg-green-50 border-green-400 text-green-800'
                  : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
              }`}
            >
              {opt.charAt(0).toUpperCase() + opt.slice(1)}
            </button>
          ))}
        </div>

        <div className="text-xs text-gray-400 mb-3">
          Phase notée :{' '}
          <strong className="font-medium text-gray-600">
            {phase?.label?.replace('Phase ', '')}
          </strong>
        </div>

        <button
          type="button"
          onClick={save}
          className="w-full py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
        >
          Sauvegarder aujourd'hui
        </button>

        {saved && (
          <div className="mt-2 text-xs text-center text-green-700 bg-green-50 py-1.5 rounded-lg border border-green-200">
            ✓ Entrée sauvegardée
          </div>
        )}
      </div>

      {/* History */}
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-sm font-medium text-gray-900">Historique</h2>
          {histKeys.length > 0 && (
            <span className="text-xs text-gray-400">
              {histKeys.length} jour{histKeys.length > 1 ? 's' : ''}
            </span>
          )}
        </div>

        <div className="flex gap-3 mb-3">
          {[
            { color: 'bg-rose-400',    label: 'Douleur' },
            { color: 'bg-violet-400',  label: 'Ventre'  },
            { color: 'bg-emerald-500', label: 'Énergie' }
          ].map(l => (
            <div key={l.label} className="flex items-center gap-1 text-xs text-gray-400">
              <span className={`w-2 h-2 rounded-sm ${l.color}`} />
              {l.label}
            </div>
          ))}
        </div>

        {histKeys.length === 0 ? (
          <div className="text-sm text-gray-400 text-center py-6 leading-relaxed">
            Aucune entrée pour l'instant.<br />Commence à noter chaque jour !
          </div>
        ) : (
          histKeys.map((key, idx) => {
            const e  = entries[key]
            const pd = PHASES[e.phase] || PHASES.mens
            return (
              <div
                key={key}
                className={`flex items-center gap-3 py-2 ${idx > 0 ? 'border-t border-gray-100' : ''}`}
              >
                <span className="text-xs text-gray-400 w-16 flex-shrink-0">
                  {formatDateShort(key)}
                  {key === today && <span className="ml-1 text-green-500">auj.</span>}
                </span>
                <div className="flex gap-1.5 flex-1">
                  <MiniBar value={e.douleur} color="bg-rose-400"    />
                  <MiniBar value={e.ventre}  color="bg-violet-400"  />
                  <MiniBar value={e.energie} color="bg-emerald-500" />
                </div>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full flex-shrink-0 border
                    ${pd.colors.bg} ${pd.colors.text} ${pd.colors.border}`}
                >
                  {pd.short}
                </span>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
