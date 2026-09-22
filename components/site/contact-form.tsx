'use client';

import { ArrowLeft, ArrowRight, Mail, ShieldCheck } from 'lucide-react';
import { FormEvent, useState } from 'react';

import { contact } from '@/lib/site-config';

const motifs = [
  'Difficultés scolaires ou d’apprentissage',
  'Attention ou concentration',
  'Question de haut potentiel',
  'Développement ou autisme',
  'Mémoire ou plaintes cognitives',
  'Remédiation cognitive après un bilan',
  'Suite à une recommandation professionnelle',
  'Autre demande',
];

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [audience, setAudience] = useState('Un enfant');
  const [motif, setMotif] = useState(motifs[0]);
  const [message, setMessage] = useState('');
  const [availability, setAvailability] = useState('Peu importe');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const phone = String(data.get('phone') || '');
    const email = String(data.get('email') || 'Non renseigné');
    const subject = encodeURIComponent(`Demande de premier échange — ${name}`);
    const body = encodeURIComponent(
      `Bonjour Madame Kraushaar,\n\nJe souhaite être recontacté(e) pour un premier échange.\n\nLa demande concerne : ${audience}\nMotif : ${motif}\nDisponibilités : ${availability}\nTéléphone : ${phone}\nE-mail : ${email}\n\nMessage :\n${message || 'Aucun détail supplémentaire.'}\n\nCordialement,\n${name}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft sm:p-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-water-dark">
            Demande de rendez-vous
          </p>
          <h2 className="mt-2 font-serif text-4xl">Trois étapes, deux minutes.</h2>
        </div>
        <span className="rounded-full bg-water-pale px-3 py-1.5 text-xs font-bold text-water-dark">
          <span key={step} className="anim-fade inline-block">
            {step}/3
          </span>
        </span>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2" aria-hidden="true">
        {[1, 2, 3].map((item) => (
          <span
            key={item}
            className={`h-1.5 rounded-full transition-colors duration-700 ${item <= step ? 'bg-water' : 'bg-sand-dark'}`}
          />
        ))}
      </div>

      <form className="mt-8" onSubmit={submit}>
        {step === 1 ? (
          <div key="step-1" className="anim-rise">
            <fieldset>
              <legend className="font-semibold">La demande concerne</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Un enfant', 'Un adolescent', 'Un adulte'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={audience === option}
                    onClick={() => setAudience(option)}
                    className={`choice-chip ${audience === option ? 'is-selected' : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="field-label mt-7" htmlFor="motif">
              Ce qui vous amène
            </label>
            <select
              id="motif"
              value={motif}
              onChange={(event) => setMotif(event.target.value)}
              className="field-control"
            >
              {motifs.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        ) : null}

        {step === 2 ? (
          <div key="step-2" className="anim-rise">
            <label className="field-label" htmlFor="message">
              En quelques mots
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={6}
              className="field-control resize-y"
              placeholder="Décrivez brièvement votre demande, sans information médicale détaillée."
            />
            <label className="field-label mt-6" htmlFor="availability">
              Vos disponibilités
            </label>
            <select
              id="availability"
              value={availability}
              onChange={(event) => setAvailability(event.target.value)}
              className="field-control"
            >
              <option>Plutôt le matin</option>
              <option>Plutôt l’après-midi</option>
              <option>Mercredi ou vacances scolaires</option>
              <option>Peu importe</option>
            </select>
          </div>
        ) : null}

        {step === 3 ? (
          <div key="step-3" className="anim-rise grid gap-5">
            <div>
              <label className="field-label" htmlFor="name">
                Votre nom
              </label>
              <input className="field-control" id="name" name="name" required autoComplete="name" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="phone">
                  Téléphone
                </label>
                <input
                  className="field-control"
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                />
              </div>
              <div>
                <label className="field-label" htmlFor="email">
                  E-mail
                </label>
                <input className="field-control" id="email" name="email" type="email" autoComplete="email" />
              </div>
            </div>
            <div className="flex gap-3 rounded-xl bg-water-pale p-4 text-xs leading-6 text-water-dark">
              <ShieldCheck className="mt-0.5 size-4 shrink-0" />
              <p>
                Ce prototype ne stocke aucune donnée. Le bouton prépare un e-mail dans votre messagerie ; vous
                gardez le contrôle avant l’envoi.
              </p>
            </div>
          </div>
        ) : null}

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-ink/10 pt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((current) => current - 1)}
              className="button-secondary"
            >
              <ArrowLeft className="size-4" /> Retour
            </button>
          ) : (
            <span />
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep((current) => current + 1)}
              className="button-primary"
            >
              Continuer <ArrowRight className="size-4" />
            </button>
          ) : (
            <button type="submit" className="button-primary">
              <Mail className="size-4" /> Préparer mon e-mail
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
