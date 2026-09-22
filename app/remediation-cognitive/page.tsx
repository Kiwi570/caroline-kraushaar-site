import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Brain, CalendarClock, ListChecks, MemoryStick, ShieldCheck } from 'lucide-react';

import { Reveal } from '@/components/motion/reveal';
import { ContactCta } from '@/components/site/contact-cta';
import { PageHero } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';

export const metadata: Metadata = {
  title: 'Remédiation cognitive',
  description:
    'Séances personnalisées de remédiation cognitive après un bilan neuropsychologique, pour enfants, adolescents et adultes.',
};

const functions = [
  {
    icon: Brain,
    title: 'Attention',
    text: 'Maintenir, sélectionner et partager son attention dans la durée.',
  },
  {
    icon: MemoryStick,
    title: 'Mémoire',
    text: 'Développer des stratégies d’encodage, de récupération et des aides externes.',
  },
  {
    icon: ListChecks,
    title: 'Organisation',
    text: 'Planifier, anticiper, découper une tâche et mieux gérer le temps.',
  },
  {
    icon: ShieldCheck,
    title: 'Régulation',
    text: 'S’adapter, gérer la fatigue et freiner les réponses impulsives.',
  },
];

export default function RemediationPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Remédiation cognitive"
        title="Entraîner l’essentiel,"
        accent="contourner le reste."
        description="Après un bilan, un accompagnement personnalisé peut aider à entraîner certaines fonctions et à construire des stratégies réutilisables au quotidien."
        image="/media/image-07.jpg"
        imageAlt="Ambiance apaisante du cabinet"
        readingTime="3 min"
      />
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1344px] items-center gap-12 lg:grid-cols-2">
          <Reveal scale={0.97} y={0} className="relative aspect-[4/3] overflow-clip rounded-[2rem] bg-sand shadow-soft">
            <Image
              src="/media/image-08.jpg"
              alt="Exercices préparés pour une séance de remédiation cognitive"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="parallax object-cover"
            />
          </Reveal>
          <Reveal stagger={140} delay={120} y={18}>
            <p className="eyebrow">Le principe</p>
            <h2 className="mt-5 font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.96] tracking-[-0.045em]">
              Après le bilan, un programme sur mesure.
            </h2>
            <p className="mt-7 text-base leading-8 text-ink/60">
              Le bilan identifie les fonctions fragiles et les points d’appui. La remédiation s’appuie sur les
              deux : elle entraîne ce qui peut progresser et apprend à compenser le reste avec des stratégies
              concrètes pour l’école, le travail ou la maison.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="lift rounded-2xl bg-water-pale p-5">
                <b className="font-serif text-3xl font-normal text-water-dark">40 €</b>
                <small className="mt-1 block text-ink/50">Séance de 30 minutes</small>
              </div>
              <div className="lift rounded-2xl bg-peach-pale p-5">
                <b className="font-serif text-3xl font-normal">60 €</b>
                <small className="mt-1 block text-ink/50">Séance d’une heure</small>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="button-primary">
                Parler de mes besoins <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <SectionHeading
            eyebrow="Sur quoi on travaille"
            title="Des stratégies qui sortent du cabinet."
            description="Les fonctions travaillées dépendent du bilan et des situations concrètes qui posent problème au quotidien."
          />
          <Reveal stagger={120} y={26} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {functions.map(({ icon: Icon, title, text }) => (
              <article key={title} className="lift group rounded-[1.5rem] bg-cream p-7">
                <Icon className="size-6 text-water-dark transition-transform duration-700 ease-out-expo group-hover:-rotate-6 group-hover:scale-110" />
                <h3 className="mt-7 font-serif text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/55">{text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <Reveal stagger={160} y={26} className="mx-auto grid max-w-[1100px] gap-5 lg:grid-cols-2">
          <article className="lift rounded-[1.75rem] border border-ink/10 bg-white p-8">
            <CalendarClock className="size-6 text-water-dark" />
            <h2 className="mt-6 font-serif text-3xl">Pour qui ?</h2>
            <p className="mt-4 text-sm leading-7 text-ink/58">
              Enfants, adolescents ou adultes, après un bilan réalisé au cabinet ou ailleurs, lorsque des
              difficultés d’attention, de mémoire ou d’organisation pèsent au quotidien.
            </p>
          </article>
          <article className="lift rounded-[1.75rem] bg-water-dark p-8 text-white">
            <ShieldCheck className="size-6 text-water-light" />
            <h2 className="mt-6 font-serif text-3xl">Avec qui ?</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">
              En lien, si vous le souhaitez, avec l’école, l’orthophoniste, le médecin ou les autres
              professionnels afin que les stratégies se prolongent hors du cabinet.
            </p>
          </article>
        </Reveal>
      </section>
      <ContactCta />
    </main>
  );
}
