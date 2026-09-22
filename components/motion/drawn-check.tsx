import type { CSSProperties } from 'react';

type DrawnCheckProps = {
  className?: string;
  /** Délai avant le tracé, en ms. */
  delay?: number;
  /** Avec un cercle autour de la coche. */
  circle?: boolean;
};

/**
 * Coche (et cercle optionnel) qui se dessine comme un trait de crayon.
 * Dans un <Reveal>, le tracé attend que la section soit visible (voir .draw dans globals.css).
 */
export function DrawnCheck({ className = '', delay = 300, circle = false }: DrawnCheckProps) {
  const style = { '--draw-delay': `${delay}ms` } as CSSProperties;
  return (
    <svg
      className={`draw ${className}`}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {circle ? <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" pathLength={1} /> : null}
      <path d={circle ? 'M8 12.5l2.6 2.6L16 9.5' : 'M4.5 12.5l4.5 4.5L19.5 7'} pathLength={1} />
    </svg>
  );
}
