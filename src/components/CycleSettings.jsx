import React, { useState } from 'react'
import { PHASES } from '../data/index.js'
import { getCycleDay, phaseFromDay } from '../utils/cycle.js'

export default function CycleSettings({ settings, onSave, onClose }) {
  const [startDate, setStartDate] = useState(settings.startDate || '')
  const [cycleLength, setCycleLength] = useState(settings.cycleLength || 28)

  const previewDay = startDate ? getCycleDay(startDate, cycleLength) : null
  const previewPhase = previewDay ? phaseFromDay(previewDay, cycleLength) : null

  const handleSave = () => {
    onSave({ startDate, cycleLength: Number(cycleLength) })
    onClose()
  }

  const handleClear = () => {
    setStartDate('')
    onSave({ startDate: '', cycleLength: Number(cycleLength) })
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-medium text-gray-900">Réglage du cycle</h2>
        <button
          type="button"
          onClick={onClose}
          className="text-xs text-gray-400 hover:text-gray-600"
        >
          Fermer
        </button>
      </div>

      <div className="mb-3">
        <label className="text-xs text-gray-500 block mb-1.5">
          Date de début des dernières règles
        </label>
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          max={new Date().toISOString().slice(0, 10)}
          className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-800"
        />
      </div>

      <div className="mb-4">
        <label className="text-xs text-gray-500 block mb-1.5">
          Durée moyenne du cycle (jours)
        </label>
        <input
          type="number"
          min={21}
          max={35}
          value={cycleLength}
          onChange={e => setCycleLength(e.target.value)}
          className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-800"
        />
      </div>

      {previewPhase && (
        <div
          className={`rounded-lg border px-3 py-2 mb-4 text-xs ${PHASES[previewPhase].colors.bg} ${PHASES[previewPhase].colors.border} ${PHASES[previewPhase].colors.text}`}
        >
          Jour {previewDay} du cycle → <strong className="font-medium">{PHASES[previewPhase].label}</strong>
        </div>
      )}

      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleSave}
          className="flex-1 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium"
        >
          Enregistrer
        </button>
        {settings.startDate && (
          <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-500"
          >
            Effacer
          </button>
        )}
      </div>

      <p className="text-xs text-gray-400 mt-3 leading-relaxed">
        La phase se recalcule chaque jour automatiquement. Tu peux toujours
        taper sur la roue pour la forcer ponctuellement.
      </p>
    </div>
  )
}
