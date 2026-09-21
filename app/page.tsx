import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock3,
  FileText,
  MapPin,
  MessageCircle,
  WalletCards,
} from 'lucide-react';

import { ContactCta } from '@/components/site/contact-cta';
import { HeroMedia } from '@/components/site/hero-media';
import { Pathfinder } from '@/components/site/pathfinder';
import { SectionHeading } from '@/components/site/section-heading';
import { assessmentSteps } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Neuropsychologue à Ahetze',
  description:
    'Bilans neuropsychologiques et remédiation cognitive pour enfants, adolescents et adultes au cabinet Landa Gaita à Ahetze.',
};

const doors = [
  {
    href: '/bilans',
    icon: Brain,
    title: 'Comprendre les bilans',
    text: 'Ce qui est évalué, pour qui, comment se déroulent les séances et ce que vous recevez à la fin.',
  },
  {
    href: '/tarifs',
    icon: WalletCards,
    title: 'Connaître les tarifs',
    text: 'Une grille lisible, tout compris, avec une aide simple pour situer votre demande.',
  },
  {
    href: '/contact',
    icon: MessageCircle,
    title: 'Prendre rendez-vous',
    text: 'Un premier échange pour vérifier l’indication et définir ensemble la prochaine étape.',
  },
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="relative overflow-hidden px-5 pb-16 pt-10 sm:px-8 sm:pb-24 lg:px-12 lg:pt-16">
        <div className="ambient ambient-right" />
        <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="eyebrow">Enfants · Adolescents · Adultes · Pays basque</p>
            <h1 className="mt-7 max-w-[12ch] font-serif text-[clamp(3.7rem,7.4vw,8rem)] leading-[0.86] tracking-[-0.06em]">
              Comprendre votre fonctionnement, <em className="text-water-dark">pour avancer.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/62">
              Psychologue spécialisée en neuropsychologie, Caroline Kraushaar propose des évaluations du
              fonctionnement cognitif et, si besoin, un accompagnement en remédiation cognitive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="button-primary">
                Prendre contact <ArrowRight className="size-4" />
              </Link>
              <Link href="/bilans" className="button-secondary">
                Comprendre les bilans
              </Link>
            </div>
            <div className="mt-10 grid gap-4 border-t border-ink/12 pt-6 text-sm text-ink/55 sm:grid-cols-3">
              <p>
                <MapPin className="mb-2 size-4 text-water-dark" />
                <b className="block text-ink">Cabinet Landa Gaita</b>Ahetze, Pays basque
              </p>
              <p>
                <Clock3 className="mb-2 size-4 text-water-dark" />
                <b className="block text-ink">Sur rendez-vous</b>Premier échange direct
              </p>
              <p>
                <FileText className="mb-2 size-4 text-water-dark" />
                <b className="block text-ink">Compte-rendu écrit</b>À l’issue du bilan
              </p>
            </div>
          </div>
          <HeroMedia />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <SectionHeading
            eyebrow="Par où commencer"
            title="Trois portes, selon ce que vous cherchez."
            description="Vous vous posez une question pour un enfant, un adolescent ou vous-même ? Accédez directement aux informations utiles."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {doors.map(({ href, icon: Icon, title, text }, index) => (
              <Link
                href={href}
                key={href}
                className="group flex min-h-[320px] flex-col rounded-[1.75rem] border border-ink/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-water hover:shadow-soft sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-water-pale text-water-dark">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-serif text-4xl text-water/35">0{index + 1}</span>
                </div>
                <h2 className="mt-10 font-serif text-3xl">{title}</h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-ink/55">{text}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-water-dark">
                  Explorer <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <Pathfinder />
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <SectionHeading
            eyebrow="Le bilan"
            title="Trois temps, à votre rythme."
            description="La durée s’adapte à l’âge, à la fatigabilité et à la question posée. Chaque étape est expliquée en amont."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {assessmentSteps.map((step) => (
              <article key={step.number} className="rounded-[1.5rem] bg-cream p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-5xl text-water/35">{step.number}</span>
                  <span className="rounded-full bg-water-pale px-3 py-1 text-xs font-bold text-water-dark">
                    {step.duration}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-3xl">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/56">{step.text}</p>
              </article>
            ))}
          </div>
          <Link href="/bilans#deroulement" className="button-secondary mt-8">
            Voir le déroulement détaillé <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1344px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-sand shadow-soft">
            <Image
              src="/media/image-04.jpg"
              alt="Salle de consultation du cabinet"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Caroline Kraushaar</p>
            <h2 className="mt-5 font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.96] tracking-[-0.045em]">
              Une formation clinique, en France et au Canada.
            </h2>
            <p className="mt-7 text-base leading-8 text-ink/60">
              Master 2 en neuropsychologie clinique à Chambéry, doctorat à l’Université de Montréal, plusieurs
              années de pratique au Canada, puis une installation en libéral au Pays basque.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                'De 2 ans à plus de 70 ans',
                'Approche individualisée',
                'Compte-rendu expliqué',
                'Travail en réseau',
              ].map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm font-semibold">
                  <CheckCircle2 className="size-4 text-water-dark" />
                  {item}
                </p>
              ))}
            </div>
            <Link href="/a-propos" className="button-secondary mt-8">
              Découvrir le parcours <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
