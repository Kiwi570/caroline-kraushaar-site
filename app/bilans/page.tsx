import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, BriefcaseBusiness, Eye, Focus, MemoryStick, MessagesSquare } from 'lucide-react';

import { DrawnCheck } from '@/components/motion/drawn-check';
import { Reveal } from '@/components/motion/reveal';
import { AudienceTabs } from '@/components/site/audience-tabs';
import { ContactCta } from '@/components/site/contact-cta';
import { PageHero } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { assessmentSteps, cognitiveDomains, faq } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Bilans neuropsychologiques',
  description: 'Comprendre pour qui, pourquoi et comment se déroule un bilan neuropsychologique à Ahetze.',
};

const icons = [BrainCircuit, Focus, BriefcaseBusiness, MemoryStick, MessagesSquare, Eye];

const toBring = [
  'Comptes-rendus de bilans précédents',
  'Derniers bulletins ou remarques de l’école',
  'Carnet de santé ou courriers médicaux utiles',
  'Lunettes ou appareil auditif si nécessaire',
  'Vos questions, notées à l’avance',
];

const summary = [
  ['#pour-qui', 'Pour qui'],
  ['#domaines', 'Ce qui est évalué'],
  ['#deroulement', 'Déroulement'],
  ['#preparer', 'Préparer votre venue'],
  ['#faq', 'FAQ'],
];

export default function AssessmentsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Les bilans"
        title="Un profil clair,"
        accent="forces et fragilités."
        description="L’évaluation porte sur les capacités intellectuelles et cognitives, toujours mises en lien avec le comportement, le quotidien et les difficultés ressenties."
        image="/media/image-05.jpg"
        imageAlt="Salle de consultation calme et lumineuse"
        readingTime="5 min"
      />

      <nav
        className="sticky top-16 z-30 overflow-x-auto border-b border-ink/10 bg-cream/92 px-5 backdrop-blur sm:px-8"
        aria-label="Sommaire des bilans"
      >
        <div className="mx-auto flex min-w-max max-w-[1344px] gap-7 py-4 text-xs font-bold text-ink/55">
          {summary.map(([href, label]) => (
            <a key={href} href={href} className="subnav-link">
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section id="pour-qui" className="scroll-mt-6 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <SectionHeading
            eyebrow="Pour qui"
            title="À chaque âge, ses questions."
            description="Les motifs ci-dessous sont des exemples. Le premier échange permet de vérifier si un bilan neuropsychologique est indiqué."
          />
          <Reveal scale={0.985} y={24} className="mt-12">
            <AudienceTabs />
          </Reveal>
        </div>
      </section>

      <section id="domaines" className="scroll-mt-6 bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <SectionHeading
            eyebrow="Ce qui est évalué"
            title="Six domaines, un profil singulier."
            description="Les outils sont choisis en fonction de l’âge et de la question posée. Il ne s’agit pas d’accumuler des scores, mais de comprendre leur organisation."
          />
          <Reveal stagger={110} y={26} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cognitiveDomains.map(([title, text], index) => {
              const Icon = icons[index];
              return (
                <article key={title} className="lift group rounded-[1.5rem] border border-ink/10 bg-cream p-7 hover:border-water/60">
                  <span className="grid size-11 place-items-center rounded-xl bg-water-pale text-water-dark transition-[background-color,color] duration-500 group-hover:bg-water-dark group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-7 font-serif text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/55">{text}</p>
                </article>
              );
            })}
          </Reveal>
          <Reveal y={16} delay={150}>
            <aside className="mt-5 rounded-2xl border-l-4 border-peach bg-peach-pale p-6 text-sm leading-7 text-ink/65">
              L’évaluation du fonctionnement intellectuel constitue généralement le point de départ d’un bilan
              complet. Elle n’est pas répétée lorsqu’une mesure récente et exploitable est disponible.
            </aside>
          </Reveal>
        </div>
      </section>

      <section id="deroulement" className="scroll-mt-6 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <SectionHeading
            eyebrow="Déroulement"
            title="Trois rendez-vous repères."
            description="Le rythme est adapté à la fatigabilité, à l’âge et à la problématique. Les durées indiquées sont des repères."
          />
          <Reveal stagger={150} y={30} className="mt-12 grid gap-5 lg:grid-cols-3">
            {assessmentSteps.map((step) => (
              <article
                key={step.number}
                className="lift group relative rounded-[1.5rem] border border-ink/10 bg-white p-7 shadow-soft"
              >
                <span className="font-serif text-5xl text-water/35 transition-colors duration-700 group-hover:text-water">
                  {step.number}
                </span>
                <h3 className="mt-7 font-serif text-3xl">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/55">{step.text}</p>
                <p className="mt-6 inline-flex rounded-full bg-water-pale px-3 py-1 text-xs font-bold text-water-dark">
                  {step.duration}
                </p>
              </article>
            ))}
          </Reveal>
          <Reveal stagger={150} y={24} className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-water-dark p-7 text-white">
              <h3 className="font-serif text-2xl">Un compte-rendu écrit</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">
                Il peut être partagé, avec votre accord, avec l’école, le médecin ou les professionnels qui
                accompagnent la personne.
              </p>
            </div>
            <div className="rounded-2xl bg-sand p-7">
              <h3 className="font-serif text-2xl">Et ensuite ?</h3>
              <p className="mt-3 text-sm leading-7 text-ink/58">
                Recommandations pour le quotidien, orientation vers d’autres professionnels ou séances de
                remédiation cognitive selon les résultats.
              </p>
              <Link
                href="/remediation-cognitive"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-water-dark"
              >
                Découvrir la remédiation{' '}
                <ArrowRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="preparer" className="scroll-mt-6 bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1344px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal scale={0.97} y={0} className="relative aspect-[4/3] overflow-clip rounded-[2rem] bg-sand">
            <Image
              src="/media/image-06.jpg"
              alt="Documents et carnet préparés avant un rendez-vous"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="parallax object-cover"
            />
          </Reveal>
          <Reveal stagger={140} delay={120} y={18}>
            <p className="eyebrow">Préparer votre venue</p>
            <h2 className="mt-5 font-serif text-5xl leading-tight">Ce qui peut aider le jour de l’entretien.</h2>
            <p className="mt-5 text-sm leading-7 text-ink/55">
              Rien n’est obligatoire. Apportez uniquement les documents que vous avez déjà et qui vous
              semblent utiles.
            </p>
            <ul className="mt-7 grid gap-3">
              {toBring.map((item, index) => (
                <li key={item} className="flex gap-3 rounded-xl bg-cream p-4 text-sm">
                  <DrawnCheck className="size-4 shrink-0 text-water-dark" delay={600 + index * 140} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="scroll-mt-6 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Questions fréquentes" title="Avant de prendre rendez-vous." />
          <Reveal stagger={110} y={18} className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {faq.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-xl transition-colors duration-300 hover:text-water-dark sm:text-2xl">
                  <span>{item.question}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-water-pale text-water-dark transition-[transform,background-color,color] duration-500 ease-out-expo group-open:rotate-45 group-open:bg-water-dark group-open:text-white">
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pb-2 pt-4 text-sm leading-7 text-ink/58">{item.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
