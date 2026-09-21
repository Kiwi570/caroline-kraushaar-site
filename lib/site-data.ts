export const audiences = {
  enfant: {
    label: 'Enfant',
    age: '2 à 11 ans',
    title: 'Pour un enfant',
    intro:
      'Souvent à la demande de l’école, du pédiatre ou d’un autre professionnel, ou parce que vous observez des difficultés au quotidien. Le bilan aide à comprendre ce qui se joue et à orienter les aides.',
    reasons: [
      'Difficultés d’apprentissage : lecture, écriture ou calcul',
      'Attention, agitation ou question de TDAH',
      'Retard ou particularités du développement',
      'Question de haut potentiel intellectuel',
      'Question de trouble du spectre de l’autisme',
      'Anxiété ou difficultés à l’école',
    ],
    process:
      'L’entretien initial se fait avec les parents, et l’enfant selon son âge. Les séances sont adaptées, avec des pauses, dans un cadre rassurant.',
  },
  adolescent: {
    label: 'Adolescent',
    age: '12 à 18 ans',
    title: 'Pour un adolescent',
    intro:
      'Au collège ou au lycée, les exigences changent. Un bilan aide à faire la part entre organisation, attention, apprentissages et retentissement émotionnel.',
    reasons: [
      'Chute des résultats ou difficultés d’organisation',
      'Attention, concentration ou lenteur',
      'Troubles des apprentissages persistants',
      'Question de haut potentiel',
      'Anxiété ou stress scolaire',
      'Préparation d’aménagements ou d’une orientation',
    ],
    process:
      'L’adolescent est associé à chaque étape : il participe à l’entretien, comprend les résultats et les recommandations le concernent directement.',
  },
  adulte: {
    label: 'Adulte',
    age: 'et personne âgée',
    title: 'Pour un adulte',
    intro:
      'À tout âge, des questions sur la mémoire, l’attention ou l’organisation peuvent se poser après un événement, dans le cadre d’une maladie ou lorsque les difficultés pèsent au quotidien.',
    reasons: [
      'Plaintes de mémoire ou d’attention',
      'Question de TDAH à l’âge adulte',
      'Suite d’un événement neurologique',
      'Maladies neurodégénératives ou suivi',
      'Anxiété, dépression et fonctionnement cognitif',
      'Aménagements au travail ou dans les études',
    ],
    process:
      'Le bilan peut compléter un suivi médical existant. Le compte-rendu peut être transmis, avec votre accord, au médecin ou au neurologue.',
  },
} as const;

export const cognitiveDomains = [
  ['Fonctionnement intellectuel', 'Raisonnement, compréhension et vitesse de traitement.'],
  [
    'Attention et concentration',
    'Maintenir son attention, résister aux distractions et partager son attention.',
  ],
  ['Fonctions exécutives', 'Planifier, s’organiser, s’adapter et inhiber une réponse automatique.'],
  ['Mémoire', 'Retenir, apprendre et retrouver une information à court et à long terme.'],
  ['Cognition sociale', 'Comprendre les émotions, les intentions et les situations sociales.'],
  ['Autres sphères', 'Langage, praxies et fonctions visuo-spatiales, selon la problématique.'],
] as const;

export const assessmentSteps = [
  {
    number: '01',
    title: 'L’entretien initial',
    duration: 'Environ 1 h',
    text: 'Avec l’enfant, l’adolescent, les parents et/ou l’adulte. Nous faisons le point sur l’histoire, les difficultés et les attentes.',
  },
  {
    number: '02',
    title: 'Les séances d’évaluation',
    duration: '2 à 5 h au total',
    text: 'Tests et questionnaires dans un cadre calme, en une à trois séances selon la problématique et l’âge.',
  },
  {
    number: '03',
    title: 'Le compte-rendu',
    duration: 'Environ 1 h',
    text: 'Explication orale des résultats et recommandations concrètes, puis remise d’un compte-rendu écrit.',
  },
] as const;

export const prices = [
  {
    key: 'qi',
    name: 'Bilan du fonctionnement intellectuel (QI)',
    detail: 'Le socle de toute évaluation',
    price: '300 €',
  },
  {
    key: 'attention',
    name: 'Bilan attentionnel et exécutif',
    detail: 'Lorsqu’un QI a été réalisé dans les deux dernières années',
    price: '300 €',
  },
  {
    key: 'complet',
    name: 'Bilan QI + attentionnel et exécutif',
    detail: 'Le bilan complet le plus fréquent',
    price: '400 €',
  },
  {
    key: 'etendu',
    name: 'Bilan complet + une autre sphère',
    detail: 'Mémoire, cognition sociale ou langage selon la question',
    price: '450 à 500 €',
  },
  {
    key: 'remediation',
    name: 'Remédiation cognitive',
    detail: 'Séance de 30 minutes ou d’une heure',
    price: '40 € ou 60 €',
  },
] as const;

export const faq = [
  {
    question: 'Combien de temps dure un bilan complet ?',
    answer:
      'Un entretien initial d’environ une heure, puis deux à cinq heures d’évaluation réparties sur une à trois séances, et un compte-rendu oral d’environ une heure. Un compte-rendu écrit vous est ensuite remis.',
  },
  {
    question: 'Pourquoi le QI est-il généralement proposé ?',
    answer:
      'L’évaluation du fonctionnement intellectuel constitue le point de départ d’un bilan neuropsychologique complet. Elle n’est pas refaite si elle a été réalisée dans les deux dernières années.',
  },
  {
    question: 'Un bilan est-il remboursé ?',
    answer:
      'Les consultations en neuropsychologie ne sont pas prises en charge par la Sécurité sociale. Certaines mutuelles remboursent quelques séances ; une facture vous est remise.',
  },
  {
    question: 'Où se trouve le cabinet ?',
    answer:
      'Au cabinet Landa Gaita, 109 chemin d’Ostalapea à Ahetze : environ 15 minutes de Saint-Jean-de-Luz, 10 minutes de Bidart et de Saint-Pée-sur-Nivelle, 20 minutes de Biarritz.',
  },
] as const;
