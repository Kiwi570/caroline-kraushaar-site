import { Reveal } from '@/components/motion/reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal
      stagger={160}
      y={18}
      className={
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'grid gap-6 lg:grid-cols-2 lg:items-end'
      }
    >
      <div>
        <p className={`eyebrow ${align === 'center' ? 'justify-center' : ''}`}>{eyebrow}</p>
        <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.98] tracking-[-0.045em]">
          {title}
        </h2>
      </div>
      {description ? <p className="max-w-xl text-base leading-8 text-ink/60">{description}</p> : null}
    </Reveal>
  );
}
