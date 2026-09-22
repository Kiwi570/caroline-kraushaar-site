import Image from 'next/image';
import Link from 'next/link';

import { Lines } from '@/components/motion/lines';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image?: string;
  imageAlt?: string;
  readingTime?: string;
};

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  imageAlt = '',
  readingTime,
}: PageHeroProps) {
  return (
    <section className="relative overflow-clip border-b border-ink/10 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="ambient ambient-right" />
      <div
        className={`mx-auto grid max-w-[1344px] gap-12 ${image ? 'lg:grid-cols-[1fr_0.72fr] lg:items-center' : ''}`}
      >
        <div className="hero-seq relative z-10 max-w-4xl">
          <div
            className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink/60"
            style={{ animationDelay: '80ms' }}
          >
            <Link href="/" className="transition-colors hover:text-water-dark">
              Accueil
            </Link>
            <span aria-hidden="true">/</span>
            <span>{eyebrow}</span>
            {readingTime ? (
              <span className="rounded-full bg-white/70 px-3 py-1 normal-case tracking-normal">
                {readingTime}
              </span>
            ) : null}
          </div>
          <h1 className="mt-8 font-serif text-[clamp(3rem,6.6vw,6.6rem)] leading-[0.9] tracking-[-0.055em]">
            <Lines
              lines={[
                title,
                <em key="accent" className="text-water-dark">
                  {accent}
                </em>,
              ]}
            />
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/62" style={{ animationDelay: '520ms' }}>
            {description}
          </p>
        </div>
        {image ? (
          <div
            className="anim-scale relative aspect-[4/3] overflow-clip rounded-[2rem] bg-sand shadow-soft"
            style={{ animationDelay: '260ms' }}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="parallax object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
