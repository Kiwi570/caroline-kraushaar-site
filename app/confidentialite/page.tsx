import type { Metadata } from 'next';

import { Lines } from '@/components/motion/lines';
import { contact } from '@/lib/site-config';

export const metadata: Metadata = { title: 'Politique de confidentialité', robots: { index: false, follow: true } };

/* Les crochets signalent les points à valider avec Caroline avant publication. */
const sections = [
  ['Ce que le site collecte', 'Aucune donnée n’est enregistrée par le site lui-même : le formulaire de contact prépare un e-mail dans votre messagerie et vous décidez de l’envoyer. Le site n’utilise ni cookie de suivi ni outil de mesure d’audience tiers.'],
  ['Les e-mails reçus', `Les messages reçus à ${contact.email} contiennent les informations que vous choisissez d’y écrire. Ils sont lus uniquement par Caroline Kraushaar, conservés le temps nécessaire à la prise de contact et à l’éventuel suivi, puis supprimés. [Durée de conservation à préciser.]`],
  ['Informations de santé', 'Nous vous invitons à ne pas transmettre de documents médicaux détaillés par e-mail avant qu’un mode de transmission adapté vous ait été proposé. Les éléments cliniques sont recueillis en consultation et conservés dans le dossier du patient, soumis au secret professionnel.'],
  ['Vos droits', `Vous pouvez demander l’accès, la rectification ou la suppression des informations vous concernant en écrivant à ${contact.email}. [Coordonnées du délégué ou de la personne référente, procédure de réclamation auprès de la CNIL.]`],
];

export default function PrivacyPage() {
  return (
    <main id="main">
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <article className="hero-seq mx-auto max-w-3xl">
          <p className="eyebrow" style={{ animationDelay: '80ms' }}>
            Informations
          </p>
          <h1 className="mt-6 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">
            <Lines lines={['Politique de', 'confidentialité.']} />
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
