import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, HeartHandshake, Network, Sparkles } from 'lucide-react';

import { ContactCta } from '@/components/site/contact-cta';
import { PageHero } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';

export const metadata: Metadata = {
  title: 'À propos de Caroline Kraushaar',
  description:
    'Découvrez le parcours, l’approche clinique et le cadre de travail de Caroline Kraushaar, psychologue spécialisée en neuropsychologie à Ahetze.',
};

const timeline = [
  {
    period: 'Formation',
    title: 'Master 2 en neuropsychologie clinique',
    text: 'Une formation universitaire à Chambéry centrée sur l’évaluation du fonctionnement cognitif et son retentissement au quotidien.',
  },
  {
    period: 'Recherche',
    title: 'Doctorat à l’Université de Montréal',
    text: 'Un parcours approfondi au croisement de la clinique, de la recherche et de la compréhension du développement cognitif.',
  },
  {
    period: 'Pratique',
    title: 'Plusieurs années au Canada',
    text: 'Une expérience auprès de publics variés avant l’installation au Pays basque et l’ouverture d’une pratique libérale à Ahetze.',
  },
] as const;

const values = [
  {
    icon: HeartHandshake,
    title: 'Écouter avant d’évaluer',
    text: 'Un bilan commence par votre histoire, vos questions et les situations qui posent réellement problème.',
  },
  {
    icon: Sparkles,
    title: 'Faire émerger les ressources',
    text: 'Les résultats éclairent les fragilités, mais aussi les points d’appui sur lesquels construire des solutions.',
  },
  {
    icon: BookOpen,
    title: 'Expliquer clairement',
    text: 'Les conclusions sont traduites en mots accessibles et en recommandations concrètes pour le quotidien.',
  },
  {
    icon: Network,
    title: 'Travailler en lien',
    text: 'Avec votre accord, les échanges peuvent inclure les professionnels de santé, l’école ou les accompagnants.',
  },
] as const;

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="À propos"
        title="Une démarche clinique"
        accent="rigoureuse et accessible."
        description="Caroline Kraushaar accueille enfants, adolescents et adultes pour mettre des mots sur leur fonctionnement et construire des recommandations utiles."
        image="/media/image-04.jpg"
        imageAlt="Salle de consultation lumineuse et apaisante"
        readingTime="3 min"
      />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1344px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Le parcours</p>
            <h2 className="mt-5 font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.96] tracking-[-0.045em]">
              De la recherche à une pratique ancrée dans le quotidien.
            </h2>
            <p className="mt-7 text-base leading-8 text-ink/60">
              La neuropsychologie relie les connaissances sur le cerveau aux difficultés vécues à l’école, au
              travail ou à la maison. Cette double exigence — scientifique et humaine — guide chaque
              accompagnement.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-sand shadow-soft">
            <Image
              src="/media/image-10.jpg"
              alt="Documents et matériel de consultation"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            eyebrow="Étapes clés"
            title="Un parcours entre France et Canada."
            description="Formation, recherche et pratique clinique nourrissent une approche structurée, toujours adaptée à la personne reçue."
          />
          <div className="mt-12 border-l border-water/35 pl-6 sm:pl-10">
            {timeline.map((item, index) => (
              <article key={item.title} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[2.12rem] top-1.5 size-4 rounded-full border-4 border-white bg-water sm:-left-[2.92rem]" />
                <div className="grid gap-3 sm:grid-cols-[8rem_1fr] sm:gap-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-water-dark">
                    {item.period}
                  </p>
                  <div>
                    <div className="flex items-center gap-3">
                      <GraduationCap className="size-5 text-water-dark" />
                      <h2 className="font-serif text-3xl">{item.title}</h2>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/56">{item.text}</p>
                    <p className="mt-3 font-serif text-2xl text-water/30">0{index + 1}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <SectionHeading
            eyebrow="L’approche"
            title="Du sens, avant les scores."
            description="Un test n’est jamais interprété seul. Les résultats prennent sens avec l’histoire, le contexte et les observations cliniques."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-[1.5rem] border border-ink/10 bg-white p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-water-pale text-water-dark">
                  <Icon className="size-5" />
                </span>
                <h2 className="mt-7 font-serif text-2xl">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink/55">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/bilans" className="button-secondary">
              Comprendre les bilans <ArrowRight className="size-4" />
            </Link>
            <Link href="/contact" className="button-primary">
              Échanger sur votre situation <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
