'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

import { contact, navItems } from '@/lib/site-config';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-water-pale font-serif text-sm text-water-dark transition-transform duration-500 group-hover:-rotate-6">
            CK
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-lg leading-tight">Caroline Kraushaar</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/45">
              Neuropsychologue · Ahetze
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link className={`nav-link ${active ? 'is-active' : ''}`} href={item.href} key={item.href}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contact.phoneHref}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-water-dark xl:flex"
          >
            <Phone className="size-4" /> {contact.phoneDisplay}
          </a>
          <Link href="/contact" className="button-primary hidden sm:inline-flex">
            Prendre contact
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-ink/15 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-navigation" className="border-t border-ink/10 bg-cream px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-[1440px] gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-serif text-2xl transition-colors hover:bg-water-pale"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contact.phoneHref}
              className="mt-3 flex items-center gap-2 rounded-xl bg-ink px-4 py-4 font-bold text-white"
            >
              <Phone className="size-4" /> {contact.phoneDisplay}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
