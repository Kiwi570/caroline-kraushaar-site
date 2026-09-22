import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

import { Lines } from '@/components/motion/lines';

export default function NotFound() {
  return (
    <main id="main" className="relative grid min-h-[70vh] place-items-center overflow-clip px-5 text-center">
      <div className="ambient ambient-right" />
      <div className="hero-seq relative z-10">
        <div style={{ animationDelay: '0ms' }}>
          <Compass className="mx-auto size-10 animate-[spin_40s_linear_infinite] text-water-dark" strokeWidth={1.4} />
        </div>
        <p className="eyebrow mt-7 justify-center" style={{ animationDelay: '120ms' }}>
          Page introuvable
        </p>
        <h1 className="mt-5 font-serif text-8xl">
          <Lines lines={['404']} />
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-ink/55" style={{ animationDelay: '360ms' }}>
          Cette page n’existe pas ou a été déplacée.
        </p>
        <div className="mt-8" style={{ animationDelay: '480ms' }}>
          <Link href="/" className="button-primary">
            <ArrowLeft className="size-4" /> Revenir à l’accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
