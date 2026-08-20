# Guide Nutrition Endométriose / Adénomyose

Application React + Vite standalone — guide nutritionnel interactif avec roue du cycle et journal de suivi persistant.

## Stack

- **React 18** — UI
- **Vite 5** — bundler
- **Tailwind CSS 3** — styles utilitaires
- **localStorage** — persistance du journal (aucun backend)

## Installation

```bash
# 1. Décompresser ou cloner le projet
cd guide-endo

# 2. Installer les dépendances
npm install

# 3. Lancer en dev
npm run dev
```

Ouvrir **http://localhost:5173**

## Build production

```bash
npm run build
npm run preview   # prévisualiser le build
```

Le build se génère dans `dist/`.

## Structure des fichiers

```
guide-endo/
├── index.html                  # entry point HTML
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                # point d'entrée React
    ├── index.css               # @tailwind directives
    ├── App.jsx                 # root — state global + layout
    ├── data/
    │   └── index.js            # toutes les données du guide
    └── components/
        ├── CycleWheel.jsx      # roue SVG interactive
        ├── TodayTab.jsx        # onglet "Aujourd'hui"
        ├── PlateTab.jsx        # onglet "Mon assiette"
        ├── SOSTab.jsx          # onglet "SOS crise"
        ├── RefsTab.jsx         # onglet "Références"
        └── JournalTab.jsx      # onglet "Journal" + localStorage
```

## Fonctionnalités

- **Roue du cycle** — 4 segments SVG proportionnels (5/8/3/12 jours), clic pour changer de phase
- **Aujourd'hui** — priorités et repas adaptés à la phase sélectionnée
- **Mon assiette** — formule anti-douleur + planning 7 jours
- **SOS crise** — 5 déclencheurs + routine jours 1–4
- **Références** — épices, café/lait/gluten, amplifie/apaise, desserts
- **Journal** — sliders douleur/ventre/énergie + transit, sauvegardé en `localStorage`, historique 10 jours
- **Mode duo** — module pour la personne qui accompagne : ce qu'elle traverse, quoi faire, quoi cuisiner, quoi éviter de dire, signes d'alerte

## Personnalisation

Tout le contenu éditorial est centralisé dans `src/data/index.js`.
Les couleurs par phase sont dans l'objet `PHASES.colors` sous forme de classes Tailwind.
