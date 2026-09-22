import type { Metadata, Viewport } from 'next';
import { Instrument_Serif } from 'next/font/google';
import localFont from 'next/font/local';

import { SiteFooter } from '@/components/site/site-footer';
import { SiteHeader } from '@/components/site/site-header';
import { contact } from '@/lib/site-config';
import { siteUrl } from '@/lib/site-config';

import './globals.css';

const geist = localFont({
  src: './fonts/geist-latin.woff2',
  variable: '--font-geist',
  display: 'swap',
  weight: '100 900',
});
/* Serif de titrage : téléchargée au build par next/font, servie depuis le site (aucune requête externe). */
const instrument = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Caroline Kraushaar — Neuropsychologue à Ahetze',
    template: '%s — Caroline Kraushaar',
  },
  description:
    'Bilans neuropsychologiques et remédiation cognitive pour enfants, adolescents et adultes à Ahetze, au Pays basque.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Caroline Kraushaar — Neuropsychologue à Ahetze',
    description: 'Bilans neuropsychologiques et remédiation cognitive au cabinet Landa Gaita, à Ahetze.',
    images: [
      { url: '/media/image-04.jpg', width: 1045, height: 784, alt: 'Cabinet de Caroline Kraushaar à Ahetze' },
    ],
    locale: 'fr_FR',
    type: 'website',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caroline Kraushaar — Neuropsychologue à Ahetze',
    description: 'Bilans neuropsychologiques et remédiation cognitive au Pays basque.',
    images: ['/media/image-04.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#f7f5f0',
  colorScheme: 'light',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Caroline Kraushaar — Neuropsychologue',
  url: siteUrl,
  telephone: contact.phoneDisplay,
  email: contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '109 chemin d’Ostalapea',
    postalCode: '64210',
    addressLocality: 'Ahetze',
    addressCountry: 'FR',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geist.variable} ${instrument.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        {/* Pose la classe .js avant le premier rendu : les éléments révélés au scroll
            ne sont masqués que si le JS est bien là (voir globals.css). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <a href="#main" className="skip-link">
          Aller au contenu
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
