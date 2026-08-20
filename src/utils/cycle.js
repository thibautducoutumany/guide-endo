/**
 * Utilitaires de calcul du cycle.
 * Les 4 phases sont réparties sur un cycle de N jours,
 * proportionnellement à la roue visuelle (5 / 8 / 3 / 12 jours sur 28).
 */

const LS_KEY = 'endo_cycle_settings'

export function readCycleSettings() {
  try {
    const raw = localStorage.getItem(LS_KEY)
    if (!raw) return { startDate: '', cycleLength: 28 }
    return JSON.parse(raw)
  } catch {
    return { startDate: '', cycleLength: 28 }
  }
}

export function writeCycleSettings(settings) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(settings))
  } catch {
    /* quota or unavailable */
  }
}

/**
 * Jour du cycle (1-indexé) à partir d'une date de début et d'une durée totale.
 */
export function getCycleDay(startDateStr, cycleLength = 28) {
  if (!startDateStr) return null
  const start = new Date(startDateStr + 'T00:00:00')
  if (Number.isNaN(start.getTime())) return null

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const diffDays = Math.floor((today - start) / 86400000)
  let day = (diffDays % cycleLength) + 1
  if (day < 1) day += cycleLength
  return day
}

/**
 * Convertit un jour de cycle (sur une base de 28 jours, mise à l'échelle
 * si cycleLength diffère) en identifiant de phase.
 */
export function phaseFromDay(day, cycleLength = 28) {
  if (day == null) return null
  // Ramène à une échelle 28 jours pour utiliser les mêmes proportions
  const scaled = (day / cycleLength) * 28

  if (scaled <= 5) return 'mens'
  if (scaled <= 13) return 'folli'
  if (scaled <= 16) return 'ovul'
  return 'lut'
}
