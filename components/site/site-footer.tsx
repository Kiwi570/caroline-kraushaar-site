import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

import { contact, navItems } from '@/lib/site-config';

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 pb-8 pt-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1344px]">
        <div className="grid gap-12 border-b border-white/12 pb-14 lg:grid-cols-[1.15fr_0.65fr_1fr]">
          <div>
            <p className="font-serif text-4xl leading-tight">Caroline Kraushaar</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-water-light">
              Psychologue spécialisée en neuropsychologie
            </p>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
              Bilans neuropsychologiques et remédiation cognitive pour enfants, adolescents et adultes au Pays
              basque.
            </p>
          </div>
          <div>
            <p className="footer-title">Explorer</p>
            <div className="mt-5 grid gap-3 text-sm text-white/60">
              {navItems.map((item) => (
                <Link href={item.href} key={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-title">Le cabinet</p>
            <div className="mt-5 grid gap-4 text-sm text-white/60">
              <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-white">
                <Phone className="size-4 text-water-light" /> {contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-3 break-all hover:text-white"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-water-light" /> {contact.email}
              </a>
              <a
                href={contact.directions}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-white"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-water-light" />
                <span>{contact.address}</span>
                <ArrowUpRight className="mt-0.5 size-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-[10px] uppercase tracking-[0.14em] text-white/35 sm:flex-row sm:justify-between">
          <p>© 2026 Caroline Kraushaar · Tous droits réservés</p>
          <p>Consultations uniquement sur rendez-vous</p>
        </div>
      </div>
    </footer>
  );
}
