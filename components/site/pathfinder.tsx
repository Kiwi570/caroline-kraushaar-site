'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import { useState } from 'react';

type Answers = {
  audience?: 'enfant' | 'adolescent' | 'adulte';
  stage?: 'aucun' | 'qi' | 'complet';
  goal?: 'comprendre' | 'agir' | 'tarif';
};

const questions = [
  {
    key: 'audience' as const,
    title: 'La demande concerne…',
    options: [
      ['enfant', 'Un enfant', 'De 2 à 11 ans'],
      ['adolescent', 'Un adolescent', 'De 12 à 18 ans'],
      ['adulte', 'Un adulte', 'Ou une personne âgée'],
    ],
  },
  {
    key: 'stage' as const,
    title: 'Où en êtes-vous ?',
    options: [
      ['aucun', 'Je me pose des questions', 'Aucun bilan récent'],
      ['qi', 'Un bilan de QI existe', 'Réalisé depuis moins de deux ans'],
      ['complet', 'Un bilan complet existe', 'Réalisé ici ou ailleurs'],
    ],
  },
  {
    key: 'goal' as const,
    title: 'Ce que vous cherchez…',
    options: [
      ['comprendre', 'Mieux comprendre', 'Obtenir un profil clair'],
      ['agir', 'Agir au quotidien', 'Attention, mémoire, organisation'],
      ['tarif', 'Connaître le tarif', 'Identifier une première fourchette'],
    ],
  },
] as const;

function getResult(answers: Answers) {
  if (answers.goal === 'tarif') {
    return {
      title: 'Commencer par les tarifs',
      text:
        answers.stage === 'qi'
          ? 'Un bilan attentionnel et exécutif seul peut être envisagé lorsqu’un QI récent est disponible.'
          : 'La page Tarifs présente les différents niveaux de bilan et une aide au repérage.',
      href: '/tarifs#orientation',
      label: 'Voir les tarifs',
    };
  }
  if (answers.goal === 'agir' && answers.stage === 'complet') {
    return {
      title: 'Découvrir la remédiation cognitive',
      text: 'Un bilan existe déjà : des séances ciblées peuvent s’appuyer sur les résultats pour construire des stratégies concrètes.',
      href: '/remediation-cognitive',
      label: 'Explorer la remédiation',
    };
  }
  return {
    title: 'Comprendre les bilans',
    text: 'Les motifs fréquents, les domaines évalués et le déroulement sont présentés selon l’âge et la question posée.',
    href: '/bilans#pour-qui',
    label: 'Découvrir les bilans',
  };
}

export function Pathfinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const result = step === questions.length ? getResult(answers) : null;

  function select(key: keyof Answers, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
    setStep((current) => Math.min(questions.length, current + 1));
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  return (
    <section className="overflow-hidden rounded-[2rem] bg-ink text-white shadow-soft" id="boussole">
      <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
        <div className="border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r">
          <Compass className="size-8 text-water-light" strokeWidth={1.5} />
          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-water-light">
            La boussole
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            Trouvez le bon chemin en trois questions.
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/55">
            Une orientation indicative, sans diagnostic et sans engagement.
          </p>
          <div className="mt-9 flex gap-2" aria-label={`Étape ${Math.min(step + 1, 3)} sur 3`}>
            {questions.map((question, index) => (
              <span
                key={question.key}
                className={`h-1.5 flex-1 rounded-full ${index <= step ? 'bg-water-light' : 'bg-white/15'}`}
              />
            ))}
          </div>
        </div>
        <div className="min-h-[430px] p-7 sm:p-10 lg:p-12">
          {result ? (
            <div className="flex h-full flex-col justify-center">
              <CheckCircle2 className="size-9 text-water-light" />
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-water-light">
                Votre orientation
              </p>
              <h3 className="mt-3 font-serif text-4xl">{result.title}</h3>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/62">{result.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={result.href}
                  className="inline-flex items-center gap-2 rounded-full bg-water px-5 py-3 text-sm font-bold hover:bg-water-light hover:text-ink"
                >
                  {result.label} <ArrowRight className="size-4" />
                </Link>
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold hover:bg-white/10"
                >
                  Recommencer
                </button>
              </div>
            </div>
          ) : (
            <div>
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep((current) => current - 1)}
                  className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white"
                >
                  <ArrowLeft className="size-4" /> Retour
                </button>
              ) : null}
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-water-light">
                Question {step + 1} sur 3
              </p>
              <h3 className="mt-3 font-serif text-4xl">{questions[step].title}</h3>
              <div className="mt-8 grid gap-3">
                {questions[step].options.map(([value, label, detail]) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => select(questions[step].key, value)}
                    className="group flex items-center justify-between gap-5 rounded-2xl border border-white/15 bg-white/5 p-5 text-left transition hover:border-water-light hover:bg-white/10"
                  >
                    <span>
                      <b className="block font-serif text-2xl font-normal">{label}</b>
                      <small className="mt-1 block text-white/45">{detail}</small>
                    </span>
                    <ArrowRight className="size-5 text-water-light transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
