import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';

import { contact } from '@/lib/site-config';

export function ContactCta() {
  return (
    <section className="bg-water-dark px-5 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1344px] gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <div>
          <p className="eyebrow text-water-light before:bg-water-light">Premier échange</p>
          <h2 className="mt-5 max-w-3xl font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.92] tracking-[-0.05em]">
            Parlons de <em className="text-peach">votre situation.</em>
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/65">
            Un premier échange permet de vérifier si le bilan est indiqué et de choisir la suite la plus
            adaptée.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-water-dark transition hover:bg-peach-pale"
          >
            Demander un rendez-vous <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-3 rounded-[1.75rem] border border-white/15 bg-white/8 p-6 backdrop-blur">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-4 rounded-2xl bg-white/8 p-4 transition hover:bg-white/14"
          >
            <Phone className="size-5 text-water-light" />
            <span>
              <small className="block text-[10px] uppercase tracking-[0.15em] text-white/45">Téléphone</small>
              <b className="mt-1 block">{contact.phoneDisplay}</b>
            </span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-4 rounded-2xl bg-white/8 p-4 transition hover:bg-white/14"
          >
            <Mail className="size-5 text-water-light" />
            <span className="min-w-0">
              <small className="block text-[10px] uppercase tracking-[0.15em] text-white/45">E-mail</small>
              <b className="mt-1 block truncate">{contact.email}</b>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
