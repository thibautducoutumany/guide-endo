export const PHASES = {
  mens: {
    id: 'mens',
    label: 'Phase menstruelle',
    short: 'Mens.',
    startDeg: 0,
    endDeg: 64.3,
    colors: {
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      text: 'text-rose-800',
      fill: '#fff1f2',
      stroke: '#fecdd3',
      textFill: '#9f1239'
    },
    priorities: [
      { type: 'ok',   text: 'Légumes cuits : courgette, carotte, fenouil, épinards' },
      { type: 'ok',   text: 'Oméga-3 : sardines, maquereau, saumon' },
      { type: 'ok',   text: 'Infusions fenouil, camomille ou gingembre doux' },
      { type: 'ok',   text: 'Repas simples : soupe, riz + poisson, velouté' },
      { type: 'no',   text: 'Alcool, piment fort, gros repas tardif' },
      { type: 'no',   text: 'Crudités à mettre de côté cette semaine' }
    ],
    meals: {
      lunch:  'Riz + poisson blanc + courgettes vapeur',
      dinner: 'Velouté carotte-gingembre doux + tartine',
      snack:  'Compote + noix + chocolat noir 70%'
    }
  },
  folli: {
    id: 'folli',
    label: 'Phase folliculaire',
    short: 'Folli.',
    startDeg: 64.3,
    endDeg: 166.9,
    colors: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      fill: '#f0fdf4',
      stroke: '#bbf7d0',
      textFill: '#166534'
    },
    priorities: [
      { type: 'ok',   text: 'Énergie en hausse : protéines + fibres progressives' },
      { type: 'ok',   text: 'Légumes cuits + crudités si bien tolérées' },
      { type: 'ok',   text: 'Pâtes ou riz avec légumes cuits, poulet rôti' },
      { type: 'ok',   text: 'Hydratation régulière, repas rythmés' }
    ],
    meals: {
      lunch:  'Poulet rôti + légumes rôtis + quinoa',
      dinner: 'Pâtes semi-complètes + légumes cuits + parmesan',
      snack:  'Yaourt nature + fruits rouges'
    }
  },
  ovul: {
    id: 'ovul',
    label: "Phase d'ovulation",
    short: 'Ovul.',
    startDeg: 166.9,
    endDeg: 205.5,
    colors: {
      bg: 'bg-violet-50',
      border: 'border-violet-200',
      text: 'text-violet-800',
      fill: '#f5f3ff',
      stroke: '#ddd6fe',
      textFill: '#3730a3'
    },
    priorities: [
      { type: 'ok',   text: "Antioxydants : fruits rouges, cacao, huile d'olive" },
      { type: 'ok',   text: 'Repas légers si ballonnements possibles' },
      { type: 'ok',   text: 'Salade tiède légumes cuits + quinoa + saumon' },
      { type: 'warn', text: 'Distension = pression pelvienne, éviter les gros repas' }
    ],
    meals: {
      lunch:  'Sushi bowl : riz + saumon + avocat',
      dinner: 'Cabillaud + purée carotte-panais + épinards',
      snack:  'Fruits rouges + yaourt nature + noix'
    }
  },
  lut: {
    id: 'lut',
    label: 'Phase lutéale',
    short: 'Lut.',
    startDeg: 205.5,
    endDeg: 360,
    colors: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-800',
      fill: '#fffbeb',
      stroke: '#fde68a',
      textFill: '#92400e'
    },
    priorities: [
      { type: 'ok',   text: 'Fibres douces pour soutenir le transit' },
      { type: 'ok',   text: 'Stabilité glycémique : collations intelligentes' },
      { type: 'ok',   text: "Bons gras : noix, huile d'olive, avocat" },
      { type: 'warn', text: 'Jours ballonnés : tester riz, maïs ou sarrasin' }
    ],
    meals: {
      lunch:  'Avoine risotto poireaux-champignons + poulet',
      dinner: 'Pommes de terre vapeur + poulet + haricots verts',
      snack:  'Chocolat noir 70% + amandes + compote'
    }
  }
}

export const PHASE_ORDER = ['mens', 'folli', 'ovul', 'lut']

export const PLANNING = [
  { day: 'J1', tag: 'L', tagCls: 'bg-green-100 text-green-800',  meal: 'Poulet rôti + légumes rôtis + riz' },
  { day: 'J2', tag: 'L', tagCls: 'bg-violet-100 text-violet-800', meal: 'Pâtes + courgettes + parmesan + thon' },
  { day: 'J3', tag: 'L', tagCls: 'bg-teal-100 text-teal-800',    meal: 'Sushi bowl : riz + saumon + avocat' },
  { day: 'J4', tag: 'L', tagCls: 'bg-teal-100 text-teal-800',    meal: 'Cabillaud + purée carotte-panais + épinards' },
  { day: 'J5', tag: 'L', tagCls: 'bg-green-100 text-green-800',  meal: 'Avoine risotto poireaux-champignons + poulet' },
  { day: 'J6', tag: 'P', tagCls: 'bg-amber-100 text-amber-800',  meal: 'Pizza maison légumes cuits + mozza + salade' },
  { day: 'J7', tag: 'F', tagCls: 'bg-rose-100 text-rose-800',    meal: 'Viande rouge mijotée + légumes + pommes de terre' }
]

export const TRIGGERS = [
  'Alcool autour des règles – inflammation et congestion pelvienne',
  'Gros repas tardifs – fermentation nocturne, mauvais sommeil',
  'Ultra-transformés fréquents – sel, sucres cachés, additifs',
  'Excès de sucres rapides – pics glycémiques et fatigue',
  'Piment très fort – pendant les règles ou intestin irrité'
]

export const CRISIS_STEPS = [
  { label: "Apaiser l'assiette",   desc: 'Soupe + riz ou poisson + légumes cuits uniquement',  phase: 'crisis' },
  { label: 'Infusions douces',      desc: 'Fenouil, camomille ou gingembre doux',                phase: 'crisis' },
  { label: 'Bouger doucement',      desc: 'Marche 10 min + respiration diaphragmatique',         phase: 'crisis' },
  { label: 'Zéro déclencheurs',     desc: 'Alcool, piment, repas tardif supprimés',              phase: 'crisis' },
  { label: 'Fibres douces',         desc: 'Avoine, compote, légumes fondants',                   phase: 'relapse' },
  { label: 'Réintroduire les bons gras', desc: "Huile d'olive ou noix si tolérées",             phase: 'relapse' },
  { label: 'Mobilité douce',        desc: 'Ouverture des hanches, cat-cow, jambes au mur',       phase: 'relapse' }
]

export const SPICES = {
  ok:     { label: 'Feu vert',    items: 'Curcuma + huile + poivre · Cumin · Coriandre · Cannelle · Cardamome · Thym · Romarin · Origan · Basilic · Persil' },
  mod:    { label: 'Modération',  items: 'Gingembre en excès · Curry fort · Paprika fort · Beaucoup de poivre' },
  crisis: { label: 'En crise',    items: 'Piment très fort · Sauces très piquantes' }
}

/* ─────────────────────────────────────────────
   MODULE PARTENAIRE
   Pour la personne qui accompagne au quotidien
   ───────────────────────────────────────────── */

export const PARTNER_GUIDE = {
  mens: {
    context: "Les règles sont souvent le pic douloureux. Crampes profondes, fatigue réelle (pas de la paresse), parfois des saignements abondants. Le corps travaille dur.",
    actions: [
      "Prépare une bouillotte avant qu'elle ait à la demander",
      "Prends en charge un repas complet - soupe, riz, poisson",
      "Baisse le rythme des projets communs cette semaine",
      "Propose une marche lente, pas une sortie sportive"
    ],
    cook: "Velouté carotte-gingembre · Riz + poisson blanc + courgettes vapeur · Infusion fenouil ou camomille",
    avoid: [
      "Zéro alcool à la maison cette semaine - ça amplifie tout",
      "Pas de restaurant très épicé ou de repas très tardif",
      "Éviter \"tu as tes règles ?\" comme explication d'une émotion"
    ],
    say: "Qu'est-ce qui t'aiderait là maintenant ?",
    dontSay: "Ça va passer, c'est normal."
  },
  folli: {
    context: "L'énergie remonte progressivement. C'est souvent la meilleure fenêtre du cycle - moins de douleur, plus de disponibilité mentale et physique.",
    actions: [
      "C'est le moment pour les projets, sorties, décisions à deux",
      "Propose une activité que vous aimez faire ensemble",
      "Aide à préparer des bases digestes pour les jours durs à venir",
      "Profite de cette fenêtre sans la surcharger non plus"
    ],
    cook: "Poulet rôti + légumes rôtis + quinoa · Pâtes semi-complètes + légumes cuits · Batch cooking pour la suite",
    avoid: [
      "Ne pas tout empiler sur cette semaine sous prétexte qu'elle va mieux",
      "Éviter de traiter cette phase comme un retour à la normale définitif"
    ],
    say: "T'as envie qu'on fasse quelque chose ce week-end ?",
    dontSay: "Enfin, tu es redevenue toi-même."
  },
  ovul: {
    context: "Certaines ressentent une douleur nette à l'ovulation - parfois brève, parfois intense. Les ballonnements peuvent revenir. Les rapports peuvent devenir douloureux.",
    actions: [
      "Reste attentif à une douleur soudaine sur un côté du ventre",
      "Propose des repas plus légers si le ventre gonfle",
      "Sur l'intimité : demande, ne présume pas - la douleur pendant les rapports est fréquente et n'est pas un rejet",
      "Chaleur locale si la douleur ovulatoire est marquée"
    ],
    cook: "Sushi bowl maison · Cabillaud + purée carotte-panais · Fruits rouges + yaourt nature",
    avoid: [
      "Ne pas insister sur l'intimité si elle décline",
      "Éviter les gros repas copieux - distension = pression pelvienne"
    ],
    say: "Dis-moi si tu préfères qu'on reste tranquilles.",
    dontSay: "Encore ? Mais tu n'avais pas mal la semaine dernière."
  },
  lut: {
    context: "La phase la plus longue et souvent la plus insidieuse. Ballonnements, constipation, fatigue qui monte, irritabilité liée à un inconfort physique réel. La douleur revient souvent en fin de phase.",
    actions: [
      "Anticipe : les jours difficiles arrivent, allège le planning",
      "Prends en charge les courses et un ou deux repas",
      "Une irritabilité ici vient souvent d'un corps qui fait mal, pas d'un reproche",
      "Marche digestive après le dîner - propose, n'impose pas"
    ],
    cook: "Avoine risotto poireaux-champignons · Pommes de terre vapeur + poulet + haricots verts · Fibres douces",
    avoid: [
      "Ne pas prévoir de gros événement social en fin de phase lutéale",
      "Éviter les plats très gras, très sucrés ou très épicés"
    ],
    say: "Je gère le dîner ce soir, repose-toi.",
    dontSay: "Tu es de mauvaise humeur en ce moment."
  }
}

export const PARTNER_ALWAYS = [
  {
    title: "La douleur est réelle",
    text: "L'endométriose et l'adénomyose provoquent des douleurs organiques mesurables. Ce n'est ni psychologique, ni exagéré, ni une question de seuil de tolérance."
  },
  {
    title: "Ne pas jouer au médecin",
    text: "Accompagner aux rendez-vous, prendre des notes, poser des questions : oui. Diagnostiquer ou décider à sa place : non."
  },
  {
    title: "L'errance médicale épuise",
    text: "Le diagnostic prend souvent des années, avec des soignants qui minimisent. Être crue chez soi change beaucoup de choses."
  },
  {
    title: "Charge mentale",
    text: "Gérer la douleur est déjà un travail à plein temps. Prendre en charge des tâches sans qu'on te les demande vaut mieux que de proposer de l'aide."
  },
  {
    title: "L'intimité peut faire mal",
    text: "Les rapports douloureux sont fréquents. Ce n'est pas un rejet. Demander, ralentir, accepter un non sans le prendre personnellement."
  }
]

export const PARTNER_URGENT = [
  "Douleur brutale et inhabituelle, différente des douleurs habituelles",
  "Fièvre associée à des douleurs pelviennes",
  "Saignements très abondants (protection saturée en moins d'une heure)",
  "Signes d'anémie : pâleur marquée, essoufflement, vertiges",
  "Sang dans les selles ou les urines",
  "Vomissements empêchant de s'hydrater"
]

export const INFO_ITEMS = [
  { color: 'text-amber-600', label: 'Café',           desc: "~1 tasse/jour, pas à jeun. Eau + quelques bouchées avant." },
  { color: 'text-amber-600', label: 'Lait',           desc: "Préférer sans lactose ou amande, avoine, coco." },
  { color: 'text-green-600', label: 'Gluten',         desc: "Pas d'obligation. Jours difficiles : riz, maïs, sarrasin." },
  { color: 'text-green-600', label: 'Fromage affiné', desc: "Comté, parmesan souvent mieux tolérés." }
]
