import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, ReceiptText, ShieldCheck } from 'lucide-react';

import { DrawnCheck } from '@/components/motion/drawn-check';
import { Reveal } from '@/components/motion/reveal';
import { ContactCta } from '@/components/site/contact-cta';
import { PageHero } from '@/components/site/page-hero';
import { PricingGuide } from '@/components/site/pricing-guide';
import { SectionHeading } from '@/components/site/section-heading';
import { prices } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Tarifs des bilans et séances',
  description:
    'Tarifs des bilans neuropsychologiques et des séances de remédiation cognitive au cabinet Caroline Kraushaar à Ahetze.',
};

const included = [
  'L’entretien initial et l’analyse de la demande',
  'Les séances de tests et les questionnaires nécessaires',
  'L’analyse complète des résultats',
  'Le rendez-vous de restitution orale',
  'Le compte-rendu écrit et les recommandations',
];

export default function PricingPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Tarifs"
        title="Des tarifs clairs,"
        accent="connus à l’avance."
        description="Le montant dépend des fonctions à explorer. Après un premier échange, la proposition est précisée avant toute évaluation."
        image="/media/image-09.jpg"
        imageAlt="Espace de travail calme au cabinet"
        readingTime="2 min"
      />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <SectionHeading
            eyebrow="Grille tarifaire"
            title="Une formule adaptée à la question posée."
            description="Chaque bilan comprend les rendez-vous, l’analyse et le compte-rendu. Aucun supplément n’est ajouté au cours de l’évaluation sans échange préalable."
          />
          <Reveal
            stagger={130}
            y={20}
            className="mt-12 overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-soft"
          >
            {prices.map((item, index) => (
              <article
                key={item.key}
                className="group grid gap-4 border-b border-ink/10 p-6 transition-colors duration-500 last:border-b-0 hover:bg-cream/70 sm:p-8 md:grid-cols-[1fr_auto] md:items-center"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-xl text-water/45 transition-colors duration-500 group-hover:text-water">
                      0{index + 1}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl">{item.name}</h2>
                  </div>
                  <p className="mt-2 pl-9 text-sm leading-6 text-ink/52">{item.detail}</p>
                </div>
                <p className="pl-9 font-serif text-3xl text-water-dark md:pl-8 md:text-right">{item.price}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1344px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal stagger={140} y={18}>
            <p className="eyebrow">Tout compris</p>
            <h2 className="mt-5 font-serif text-[clamp(2.7rem,5vw,4.7rem)] leading-[0.96] tracking-[-0.045em]">
              Ce que couvre le tarif du bilan.
            </h2>
            <p className="mt-6 text-base leading-8 text-ink/58">
              Le prix ne correspond pas uniquement au temps passé en consultation. Il intègre la cotation,
              l’interprétation clinique, la rédaction et la restitution des résultats.
            </p>
          </Reveal>
          <Reveal stagger={110} y={22} delay={120} className="grid gap-3 sm:grid-cols-2">
            {included.map((item, index) => (
              <p
                key={item}
                className="flex min-h-24 items-start gap-3 rounded-2xl bg-cream p-5 text-sm font-semibold leading-6"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-water-pale text-water-dark">
                  <DrawnCheck className="size-3.5" delay={500 + index * 130} />
                </span>
                {item}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <Reveal scale={0.985} y={24}>
            <PricingGuide />
          </Reveal>
          <Reveal stagger={140} y={24} className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="lift rounded-[1.5rem] border border-ink/10 bg-white p-6">
              <ReceiptText className="size-5 text-water-dark" />
              <h2 className="mt-5 font-serif text-2xl">Remboursement</h2>
              <p className="mt-3 text-sm leading-7 text-ink/55">
                La Sécurité sociale ne rembourse pas les consultations. Certaines mutuelles proposent un
                forfait ; une facture est remise.
              </p>
            </article>
            <article className="lift rounded-[1.5rem] border border-ink/10 bg-white p-6">
              <FileText className="size-5 text-water-dark" />
              <h2 className="mt-5 font-serif text-2xl">Devis préalable</h2>
              <p className="mt-3 text-sm leading-7 text-ink/55">
                Le contenu et le montant sont précisés avant le bilan, en fonction de l’âge, de la demande et
                des évaluations déjà réalisées.
              </p>
            </article>
            <article className="lift rounded-[1.5rem] bg-water-dark p-6 text-white">
              <ShieldCheck className="size-5 text-water-light" />
              <h2 className="mt-5 font-serif text-2xl">Encore un doute ?</h2>
              <p className="mt-3 text-sm leading-7 text-white/62">
                Un bref échange permet de vérifier si un bilan est indiqué et quelle formule correspond à
                votre situation.
              </p>
              <Link
                href="/contact"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-water-light transition-colors hover:text-white"
              >
                Poser ma question{' '}
                <ArrowRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
