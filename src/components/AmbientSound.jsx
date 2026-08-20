import React, { useRef, useState, useEffect } from 'react'

/**
 * Bouton flottant qui joue un fond sonore doux généré en direct
 * via Web Audio API — aucun fichier audio externe à héberger.
 */
export default function AmbientSound() {
  const [playing, setPlaying] = useState(false)
  const ctxRef    = useRef(null)
  const nodesRef  = useRef([])

  useEffect(() => {
    return () => stop() // cleanup on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function start() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return
    const ctx = new AudioCtx()
    ctxRef.current = ctx

    const masterGain = ctx.createGain()
    masterGain.gain.value = 0
    masterGain.connect(ctx.destination)
    masterGain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 2)

    // Deux oscillateurs légèrement désaccordés pour un pad doux
    const freqs = [196.0, 246.94, 293.66] // G3, B3, D4 — accord apaisant
    const nodes = []

    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = freq

      const oscGain = ctx.createGain()
      oscGain.gain.value = 1 / freqs.length

      // Léger vibrato lent pour un effet "vivant"
      const lfo = ctx.createOscillator()
      lfo.frequency.value = 0.08 + i * 0.02
      const lfoGain = ctx.createGain()
      lfoGain.gain.value = 2.5
      lfo.connect(lfoGain)
      lfoGain.connect(osc.frequency)

      osc.connect(oscGain)
      oscGain.connect(masterGain)

      osc.start()
      lfo.start()

      nodes.push(osc, lfo)
    })

    nodesRef.current = nodes
    nodesRef.current.masterGain = masterGain
    setPlaying(true)
  }

  function stop() {
    const ctx = ctxRef.current
    if (!ctx) return

    const masterGain = nodesRef.current.masterGain
    if (masterGain) {
      masterGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1)
    }

    setTimeout(() => {
      nodesRef.current.forEach(n => {
        try { n.stop && n.stop() } catch { /* already stopped */ }
      })
      ctx.close()
      ctxRef.current = null
      nodesRef.current = []
    }, 1100)

    setPlaying(false)
  }

  function toggle() {
    if (playing) stop()
    else start()
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? 'Couper le son d\'ambiance' : 'Activer le son d\'ambiance'}
      className={`fixed bottom-5 right-5 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-lg transition-colors z-50 ${
        playing
          ? 'bg-rose-400 text-white'
          : 'bg-white text-gray-400 border border-gray-200'
      }`}
    >
      {playing ? '♪' : '♪'}
      {playing && (
        <span className="absolute inset-0 rounded-full border-2 border-rose-300 animate-ping" />
      )}
    </button>
  )
}
