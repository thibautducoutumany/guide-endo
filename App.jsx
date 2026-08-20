import React, { useState } from 'react'
import CycleWheel  from './components/CycleWheel.jsx'
import TodayTab    from './components/TodayTab.jsx'
import PlateTab    from './components/PlateTab.jsx'
import SOSTab      from './components/SOSTab.jsx'
import RefsTab     from './components/RefsTab.jsx'
import JournalTab  from './components/JournalTab.jsx'
import PartnerTab  from './components/PartnerTab.jsx'
import { PHASES }  from './data/index.js'

const TABS = [
  { id: 'today',   label: "Aujourd'hui" },
  { id: 'plate',   label: 'Mon assiette' },
  { id: 'sos',     label: 'SOS crise' },
  { id: 'refs',    label: 'Références' },
  { id: 'journal', label: 'Journal' },
  { id: 'partner', label: 'Mode duo' }
]

export default function App() {
  const [activePhase, setActivePhase] = useState('mens')
  const [activeTab,   setActiveTab]   = useState('today')

  const phase = PHASES[activePhase]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 py-6">

        {/* ── Header ── */}
        <div className="text-center mb-5">
          <h1 className="text-xl font-medium text-gray-900">
            Guide nutrition &amp; endométriose
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Clique sur ta phase du cycle pour personnaliser les conseils
          </p>
        </div>

        {/* ── Cycle wheel ── */}
        <div className="flex flex-col items-center mb-5 gap-2">
          <CycleWheel activePhase={activePhase} onPhaseChange={setActivePhase} />
          <span
            className={`text-sm font-medium px-4 py-1.5 rounded-full border
              ${phase.colors.bg} ${phase.colors.border} ${phase.colors.text}`}
          >
            {phase.label}
          </span>
        </div>

        {/* ── Tab bar ── */}
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

        {/* ── Content ── */}
        {activeTab === 'today'   && <TodayTab   activePhase={activePhase} />}
        {activeTab === 'plate'   && <PlateTab   />}
        {activeTab === 'sos'     && <SOSTab     />}
        {activeTab === 'refs'    && <RefsTab    />}
        {activeTab === 'journal' && <JournalTab activePhase={activePhase} />}
        {activeTab === 'partner' && <PartnerTab activePhase={activePhase} />}

      </div>
    </div>
  )
}
