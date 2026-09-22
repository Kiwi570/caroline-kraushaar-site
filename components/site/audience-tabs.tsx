'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { KeyboardEvent, useState } from 'react';

import { DrawnCheck } from '@/components/motion/drawn-check';
import { audiences } from '@/lib/site-data';

type AudienceKey = keyof typeof audiences;
const keys = Object.keys(audiences) as AudienceKey[];

export function AudienceTabs() {
  const [active, setActive] = useState<AudienceKey>('enfant');
  const audience = audiences[active];
  const activeIndex = keys.indexOf(active);

  function handleKeys(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? keys.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + keys.length) % keys.length;
    const nextKey = keys[nextIndex];
    setActive(nextKey);
    document.getElementById(`audience-${nextKey}`)?.focus();
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-soft">
      <div className="relative grid grid-cols-3 border-b border-ink/10" role="tablist" aria-label="Choisir un âge">
        {/* Indicateur qui glisse sous l'onglet actif */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-water-pale transition-transform duration-700 ease-out-expo"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        />
        {keys.map((key, index) => {
          const item = audiences[key];
          const selected = active === key;
          return (
            <button
              key={key}
              id={`audience-${key}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="audience-panel"
              tabIndex={selected ? 0 : -1}
              onKeyDown={(event) => handleKeys(event, index)}
              onClick={() => setActive(key)}
              className={`relative border-r border-ink/10 px-2 py-5 text-center transition-colors duration-500 last:border-r-0 sm:px-5 sm:py-7 ${
                selected ? 'text-ink' : 'text-ink/60 hover:text-ink/70'
              }`}
            >
              <b className="block font-serif text-lg font-normal sm:text-2xl">{item.label}</b>
              <small className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.12em] sm:text-[10px]">
                {item.age}
              </small>
            </button>
          );
        })}
      </div>
      <div
        key={active}
        id="audience-panel"
        role="tabpanel"
        aria-labelledby={`audience-${active}`}
        className="anim-fade grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.25fr_0.75fr] lg:p-12"
      >
        <div>
          <h3 className="font-serif text-4xl">{audience.title}</h3>
          <p className="mt-4 max-w-3xl text-base leading-8 text-ink/60">{audience.intro}</p>
          <ul className="stagger-in mt-7 grid gap-3 sm:grid-cols-2">
            {audience.reasons.map((reason, index) => (
              <li
                key={reason}
                className="flex gap-3 rounded-xl bg-sand p-4 text-sm leading-6"
                style={{ animationDelay: `${120 + index * 70}ms` }}
              >
                <DrawnCheck className="mt-1 size-4 shrink-0 text-water-dark" delay={300 + index * 90} /> {reason}
              </li>
            ))}
          </ul>
        </div>
        <aside className="anim-rise flex flex-col rounded-2xl bg-water-dark p-6 text-white" style={{ animationDelay: '200ms' }}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-water-light">
            Comment ça se passe
          </p>
          <p className="mt-4 text-sm leading-7 text-white/68">{audience.process}</p>
          <Link
            href="/contact"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-water-light transition-colors hover:text-white"
          >
            Prendre contact{' '}
            <ArrowRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
          </Link>
        </aside>
      </div>
    </div>
  );
}
