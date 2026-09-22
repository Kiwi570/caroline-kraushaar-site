import type { Metadata } from 'next';

import { Lines } from '@/components/motion/lines';
import { contact } from '@/lib/site-config';

export const metadata: Metadata = { title: 'Mentions légales', robots: { index: false, follow: true } };

/* Les crochets signalent les informations à compléter avec Caroline avant publication. */
const sections = [
  ['Éditeur', `Caroline Kraushaar, psychologue spécialisée en neuropsychologie. ${contact.address}. [Numéro ADELI ou RPPS, numéro SIRET, statut.] Directrice de la publication : Caroline Kraushaar.`],
  ['Hébergement', '[Nom de l’hébergeur, adresse, téléphone.]'],
  ['Déontologie', 'L’activité est exercée dans le respect du Code de déontologie des psychologues. Les informations publiées sur ce site ont une vocation générale et ne remplacent pas un entretien clinique.'],
  ['Propriété intellectuelle', 'Les textes et visuels de ce site sont protégés. Toute reproduction sans autorisation est interdite. [Crédits des photographies définitives.]'],
];

export default function LegalPage() {
  return (
    <main id="main">
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <article className="hero-seq mx-auto max-w-3xl">
          <p className="eyebrow" style={{ animationDelay: '80ms' }}>
            Informations
          </p>
          <h1 className="mt-6 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">
            <Lines lines={['Mentions légales.']} />
          </h1>
          <div className="mt-12 grid gap-9 text-sm leading-7 text-ink/60" style={{ animationDelay: '320ms' }}>
            {sections.map(([title, text]) => (
              <section key={title}>
                <h2 className="font-serif text-3xl text-ink">{title}</h2>
                <p className="mt-3">{text}</p>
              </section>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
