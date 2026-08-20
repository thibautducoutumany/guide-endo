import React, { useMemo } from 'react'
import { PHASES, PHASE_ORDER } from '../data/index.js'

const CX = 100
const CY = 100
const RO = 86
const RI = 50
const GAP = 3

function polarToXY(r, deg) {
  const rad = (deg - 90) * Math.PI / 180
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)]
}

function makeArcPath(startDeg, endDeg) {
  const [ax, ay] = polarToXY(RO, startDeg + GAP)
  const [bx, by] = polarToXY(RO, endDeg   - GAP)
  const [cx, cy] = polarToXY(RI, endDeg   - GAP)
  const [dx, dy] = polarToXY(RI, startDeg + GAP)
  const large = (endDeg - startDeg - 2 * GAP) > 180 ? 1 : 0
  const f = n => n.toFixed(2)
  return `M${f(ax)} ${f(ay)} A${RO} ${RO} 0 ${large} 1 ${f(bx)} ${f(by)} L${f(cx)} ${f(cy)} A${RI} ${RI} 0 ${large} 0 ${f(dx)} ${f(dy)}Z`
}

export default function CycleWheel({ activePhase, onPhaseChange }) {
  const segments = useMemo(() => {
    return PHASE_ORDER.map(id => {
      const p = PHASES[id]
      const mid = (p.startDeg + p.endDeg) / 2
      const lr  = (RO + RI) / 2
      const [lx, ly] = polarToXY(lr, mid)
      return {
        id,
        path:      makeArcPath(p.startDeg, p.endDeg),
        fill:      p.colors.fill,
        stroke:    p.colors.stroke,
        textFill:  p.colors.textFill,
        short:     p.short,
        lx,
        ly
      }
    })
  }, [])

  const active = PHASES[activePhase]

  return (
    <svg
      viewBox="0 0 200 200"
      width={192}
      height={192}
      aria-label="Roue du cycle menstruel — cliquer pour changer de phase"
      className="cursor-pointer"
    >
      {segments.map(seg => (
        <g key={seg.id} onClick={() => onPhaseChange(seg.id)} style={{ cursor: 'pointer' }}>
          <path
            d={seg.path}
            fill={seg.fill}
            stroke={seg.stroke}
            strokeWidth={seg.id === activePhase ? 2.5 : 1}
            opacity={seg.id === activePhase ? 1 : 0.42}
          />
          <text
            x={seg.lx}
            y={seg.ly}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={8.5}
            fontWeight={500}
            fill={seg.textFill}
            pointerEvents="none"
          >
            {seg.short}
          </text>
        </g>
      ))}

      {/* Center hole */}
      <circle cx={CX} cy={CY} r={RI - 2} fill="white" stroke="#e5e7eb" strokeWidth={0.5} />
      <text
        x={CX}
        y={CY - 4}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={12}
        fontWeight={500}
        fill="#374151"
      >
        {active?.short}
      </text>
      <text x={CX} y={CY + 12} textAnchor="middle" fontSize={8} fill="#9ca3af">
        ta phase
      </text>
    </svg>
  )
}
