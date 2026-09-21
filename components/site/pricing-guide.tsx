'use client';

import { CheckCircle2, HelpCircle } from 'lucide-react';
import { useState } from 'react';

import { prices } from '@/lib/site-data';

type Answer = 'oui' | 'non' | null;

function getRecommendation(qi: Answer, extra: Answer) {
  if (!qi || !extra) return null;
  if (qi === 'oui' && extra === 'non')
    return {
      key: 'attention',
      title: 'Bilan attentionnel et exécutif',
      price: '300 €',
      note: 'Le QI récent peut servir de point d’appui.',
    };
  if (qi === 'oui' && extra === 'oui')
    return {
      key: 'etendu',
      title: 'Bilan ciblé à préciser ensemble',
      price: 'Sur devis',
      note: 'La sphère supplémentaire est définie lors du premier échange.',
    };
  if (extra === 'non')
    return {
      key: 'complet',
      title: 'Bilan QI + attentionnel et exécutif',
      price: '400 €',
      note: 'Le bilan complet le plus fréquent.',
    };
  return {
    key: 'etendu',
    title: 'Bilan complet + une autre sphère',
    price: '450 à 500 €',
    note: 'Selon la sphère explorée et le nombre de séances.',
  };
}

export function PricingGuide() {
  const [qi, setQi] = useState<Answer>(null);
  const [extra, setExtra] = useState<Answer>(null);
  const recommendation = getRecommendation(qi, extra);

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.82fr]" id="orientation">
      <div className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft sm:p-9">
        <HelpCircle className="size-7 text-water-dark" />
        <h2 className="mt-5 font-serif text-4xl">Quel bilan pour votre situation ?</h2>
        <p className="mt-3 text-sm leading-7 text-ink/55">
          Deux questions pour vous repérer. L’indication définitive se décide lors du premier échange.
        </p>
        <fieldset className="mt-8">
          <legend className="font-semibold">
            Un bilan de QI a-t-il été réalisé dans les deux dernières années ?
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {(['non', 'oui'] as const).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={qi === value}
                onClick={() => setQi(value)}
                className={`choice-chip ${qi === value ? 'is-selected' : ''}`}
              >
                {value === 'oui' ? 'Oui' : 'Non, ou je ne sais pas'}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-7">
          <legend className="font-semibold">
            La question porte-t-elle sur une autre sphère que l’attention et les fonctions exécutives ?
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {(['non', 'oui'] as const).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={extra === value}
                onClick={() => setExtra(value)}
                className={`choice-chip ${extra === value ? 'is-selected' : ''}`}
              >
                {value === 'oui' ? 'Oui, par exemple la mémoire' : 'Non'}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
      <div
        className="flex min-h-[360px] flex-col justify-center rounded-[2rem] bg-water-dark p-7 text-white sm:p-10"
        aria-live="polite"
      >
        {recommendation ? (
          <>
            <CheckCircle2 className="size-8 text-water-light" />
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-water-light">
              Première orientation
            </p>
            <h3 className="mt-3 font-serif text-4xl">{recommendation.title}</h3>
            <p className="mt-5 font-serif text-5xl text-peach">{recommendation.price}</p>
            <p className="mt-4 text-sm leading-7 text-white/60">{recommendation.note}</p>
            <p className="mt-5 border-t border-white/12 pt-5 text-xs leading-6 text-white/40">
              Cette indication est informative et ne remplace pas l’entretien initial.
            </p>
          </>
        ) : (
          <>
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-water-light">
              Orientation
            </p>
            <h3 className="mt-3 font-serif text-4xl">Répondez aux deux questions.</h3>
            <p className="mt-5 text-sm leading-7 text-white/55">
              La ligne tarifaire la plus proche de votre situation apparaîtra ici.
            </p>
          </>
        )}
      </div>
      {recommendation ? (
        <p className="sr-only">
          Tarif correspondant dans la grille :{' '}
          {prices.find((price) => price.key === recommendation.key)?.name}
        </p>
      ) : null}
    </div>
  );
}
