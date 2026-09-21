import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div>
        <Compass className="mx-auto size-10 text-water-dark" strokeWidth={1.4} />
        <p className="eyebrow mt-7 justify-center">Page introuvable</p>
        <h1 className="mt-5 font-serif text-8xl">404</h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-ink/55">
          Cette page n’existe pas ou a été déplacée.
        </p>
        <Link href="/" className="button-primary mt-8">
          <ArrowLeft className="size-4" /> Revenir à l’accueil
        </Link>
      </div>
    </main>
  );
}
