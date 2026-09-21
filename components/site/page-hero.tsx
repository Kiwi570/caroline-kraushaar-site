import Image from 'next/image';
import Link from 'next/link';

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
    <section className="relative overflow-hidden border-b border-ink/10 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="ambient ambient-right" />
      <div
        className={`mx-auto grid max-w-[1344px] gap-12 ${image ? 'lg:grid-cols-[1fr_0.72fr] lg:items-center' : ''}`}
      >
        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            <Link href="/" className="hover:text-water-dark">
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
          <h1 className="mt-8 font-serif text-[clamp(3.3rem,7.2vw,7.2rem)] leading-[0.88] tracking-[-0.055em]">
            {title} <em className="text-water-dark">{accent}</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/62">{description}</p>
        </div>
        {image ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-sand shadow-soft">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
