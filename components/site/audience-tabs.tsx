'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { KeyboardEvent, useState } from 'react';

import { audiences } from '@/lib/site-data';

type AudienceKey = keyof typeof audiences;
const keys = Object.keys(audiences) as AudienceKey[];

export function AudienceTabs() {
  const [active, setActive] = useState<AudienceKey>('enfant');
  const audience = audiences[active];

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
      <div className="grid grid-cols-3 border-b border-ink/10" role="tablist" aria-label="Choisir un âge">
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
              className={`border-r border-ink/10 px-2 py-5 text-center last:border-r-0 sm:px-5 sm:py-7 ${selected ? 'bg-water-pale text-ink' : 'text-ink/45 hover:bg-sand'}`}
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
        id="audience-panel"
        role="tabpanel"
        aria-labelledby={`audience-${active}`}
        className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.25fr_0.75fr] lg:p-12"
      >
        <div>
          <h3 className="font-serif text-4xl">{audience.title}</h3>
          <p className="mt-4 max-w-3xl text-base leading-8 text-ink/60">{audience.intro}</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {audience.reasons.map((reason) => (
              <li key={reason} className="flex gap-3 rounded-xl bg-sand p-4 text-sm leading-6">
                <Check className="mt-1 size-4 shrink-0 text-water-dark" /> {reason}
              </li>
            ))}
          </ul>
        </div>
        <aside className="flex flex-col rounded-2xl bg-water-dark p-6 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-water-light">
            Comment ça se passe
          </p>
          <p className="mt-4 text-sm leading-7 text-white/68">{audience.process}</p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-water-light"
          >
            Prendre contact <ArrowRight className="size-4" />
          </Link>
        </aside>
      </div>
    </div>
  );
}
