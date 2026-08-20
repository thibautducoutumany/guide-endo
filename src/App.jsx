import React, { useState, useEffect } from 'react'
import CycleWheel     from './components/CycleWheel.jsx'
import CycleSettings  from './components/CycleSettings.jsx'
import AmbientSound   from './components/AmbientSound.jsx'
import TodayTab        from './components/TodayTab.jsx'
import PlateTab        from './components/PlateTab.jsx'
import SOSTab          from './components/SOSTab.jsx'
import RefsTab          from './components/RefsTab.jsx'
import JournalTab       from './components/JournalTab.jsx'
import PartnerTab       from './components/PartnerTab.jsx'
import { PHASES }       from './data/index.js'
import { readCycleSettings, writeCycleSettings, getCycleDay, phaseFromDay } from './utils/cycle.js'

const TABS = [
  { id: 'today',   label: "Aujourd'hui" },
  { id: 'plate',   label: 'Mon assiette' },
  { id: 'sos',     label: 'SOS crise' },
  { id: 'refs',    label: 'Références' },
  { id: 'journal', label: 'Journal' },
  { id: 'partner', label: 'Mode duo' }
]

export default function App() {
  const [cycleSettings, setCycleSettings] = useState(() => readCycleSettings())
  const [manualPhase,   setManualPhase]   = useState(null)
  const [showSettings,  setShowSettings]  = useState(false)
  const [activeTab,     setActiveTab]     = useState('today')

  const autoDay   = cycleSettings.startDate
    ? getCycleDay(cycleSettings.startDate, cycleSettings.cycleLength)
    : null
  const autoPhase = autoDay ? phaseFromDay(autoDay, cycleSettings.cycleLength) : null

  const activePhase = manualPhase || autoPhase || 'mens'

  useEffect(() => {
    setManualPhase(null)
  }, [cycleSettings.startDate, cycleSettings.cycleLength])

  const phase = PHASES[activePhase]

  const handleSaveCycle = settings => {
    setCycleSettings(settings)
    writeCycleSettings(settings)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 py-6">

        <div className="text-center mb-5">
          <h1 className="text-xl font-medium text-gray-900">
            Guide nutrition &amp; endométriose
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            {autoPhase
              ? 'Phase calculée automatiquement — tape la roue pour forcer une phase'
              : 'Renseigne ton cycle ou tape sur ta phase du cycle'}
          </p>
        </div>

        <div className="flex flex-col items-center mb-3 gap-2">
          <CycleWheel
            activePhase={activePhase}
            onPhaseChange={p => setManualPhase(p)}
          />
          <span className={`text-sm font-medium px-4 py-1.5 rounded-full border ${phase.colors.bg} ${phase.colors.border} ${phase.colors.text}`}>
            {phase.label}
            {autoDay && !manualPhase ? ` · jour ${autoDay}` : ''}
          </span>
        </div>

        <div className="flex justify-center mb-4">
          <button
            type="button"
            onClick={() => setShowSettings(!showSettings)}
            className="text-xs text-gray-400 underline underline-offset-2"
          >
            {cycleSettings.startDate ? 'Modifier la date du cycle' : 'Renseigner mon cycle'}
          </button>
        </div>

        {showSettings && (
          <CycleSettings
            settings={cycleSettings}
            onSave={handleSaveCycle}
            onClose={() => setShowSettings(false)}
          />
        )}

        <div className="flex border-b border-gray-200 mb-4 overflow-x-auto scrollbar-hide">
          {TABS.map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 text-sm whitespace-nowrap border-b-2 transition-colors flex-shrink-0 ${
                activeTab === tab.id
                  ? 'border-gray-900 text-gray-900 font-medium'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'today'   && <TodayTab   activePhase={activePhase} />}
        {activeTab === 'plate'   && <PlateTab   />}
        {activeTab === 'sos'     && <SOSTab     />}
        {activeTab === 'refs'    && <RefsTab    />}
        {activeTab === 'journal' && <JournalTab activePhase={activePhase} />}
        {activeTab === 'partner' && <PartnerTab activePhase={activePhase} />}

      </div>

      <AmbientSound />
    </div>
  )
}
