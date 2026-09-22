const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '');

export const siteUrl = configuredSiteUrl || 'https://www.caroline-kraushaar.fr';

export const contact = {
  phoneDisplay: '07 75 77 02 99',
  phoneHref: 'tel:+33775770299',
  email: 'ckraushaar.neuropsy@gmail.com',
  address: 'Cabinet Landa Gaita, 109 chemin d’Ostalapea, 64210 Ahetze',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=109%20chemin%20d%27Ostalapea%2C%2064210%20Ahetze',
};

export const navItems = [
  { href: '/bilans', label: 'Les bilans' },
  { href: '/remediation-cognitive', label: 'Remédiation' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

/** Le cabinet Landa Gaita : informations reprises du site actuel, à confirmer avec Caroline. */
export const cabinet = {
  name: 'Cabinet Landa Gaita',
  intro: 'Un cabinet pluridisciplinaire à Ahetze, où plusieurs praticiennes accompagnent enfants, adolescents et adultes.',
  team: [
    { name: 'Caroline Kraushaar', role: 'Psychologue spécialisée en neuropsychologie' },
    { name: 'Noëllie Moizard', role: 'Orthophoniste' },
    { name: 'Gaëlle Larroquet', role: 'Thérapeute' },
  ],
  access: [
    'À 15 minutes de Saint-Jean-de-Luz',
    'À 10 minutes de Bidart et de Saint-Pée-sur-Nivelle',
    'À 20 minutes de Biarritz',
    '[Stationnement et accès au cabinet : à préciser avec Caroline]',
  ],
};

export const legalLinks = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/confidentialite', label: 'Politique de confidentialité' },
];

/**
 * Prise de rendez-vous en ligne (Doctolib, Calendly…) : renseigner `url` pour faire apparaître
 * le bouton dans le header, la page Contact et l'appel à contact de chaque page. Vide = masqué.
 */
export const booking = {
  url: '',
  label: 'Prendre rendez-vous en ligne',
};
