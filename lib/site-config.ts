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
