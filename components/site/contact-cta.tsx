import Link from 'next/link';
import { ArrowRight, CalendarCheck, Mail, Phone } from 'lucide-react';

import { Reveal } from '@/components/motion/reveal';
import { booking, contact } from '@/lib/site-config';

export function ContactCta() {
  return (
    <section className="bg-water-dark px-5 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1344px] gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <Reveal stagger={150} y={18}>
          <p className="eyebrow text-water-light before:bg-water-light">Premier échange</p>
          <h2 className="mt-5 max-w-3xl font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.92] tracking-[-0.05em]">
            Parlons de <em className="text-peach">votre situation.</em>
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/65">
            Un premier échange permet de vérifier si le bilan est indiqué et de choisir la suite la plus
            adaptée.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {booking.url ? (
              <a
                href={booking.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-peach px-6 py-3.5 text-sm font-bold text-ink transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
              >
                <CalendarCheck className="size-4" /> {booking.label}
              </a>
            ) : null}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-water-dark transition-[background-color,transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-peach-pale hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
            >
              Demander un rendez-vous{' '}
              <ArrowRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <Reveal
          delay={200}
          y={24}
          className="grid gap-3 rounded-[1.75rem] border border-white/15 bg-white/8 p-6 backdrop-blur"
        >
          <a
            href={contact.phoneHref}
            className="flex items-center gap-4 rounded-2xl bg-white/8 p-4 transition-[background-color,transform] duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-white/14"
          >
            <Phone className="size-5 text-water-light" />
            <span>
              <small className="block text-[10px] uppercase tracking-[0.15em] text-white/60">Téléphone</small>
              <b className="mt-1 block">{contact.phoneDisplay}</b>
            </span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-4 rounded-2xl bg-white/8 p-4 transition-[background-color,transform] duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-white/14"
          >
            <Mail className="size-5 text-water-light" />
            <span className="min-w-0">
              <small className="block text-[10px] uppercase tracking-[0.15em] text-white/60">E-mail</small>
              <b className="mt-1 block truncate">{contact.email}</b>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
