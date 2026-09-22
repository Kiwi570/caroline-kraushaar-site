'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CalendarCheck, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

import { booking, contact, navItems } from '@/lib/site-config';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-700 ${
        scrolled
          ? 'border-ink/12 bg-cream/85 shadow-[0_18px_50px_rgba(31,42,51,0.07)]'
          : 'border-ink/10 bg-cream/90'
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 transition-[height] duration-700 ease-out-expo sm:px-8 lg:px-12 ${
          scrolled ? 'h-16' : 'h-[76px]'
        }`}
      >
        <Link href="/" className="group flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-water-pale font-serif text-sm text-water-dark transition-[transform,background-color,color] duration-700 ease-out-expo group-hover:-rotate-6 group-hover:bg-water-dark group-hover:text-white">
            CK
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-lg leading-tight">Caroline Kraushaar</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/60">
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
            className="hidden size-11 place-items-center rounded-full border border-ink/15 text-water-dark transition-colors duration-300 hover:border-water hover:bg-water-pale lg:grid xl:hidden"
            aria-label={`Appeler le cabinet au ${contact.phoneDisplay}`}
            title={contact.phoneDisplay}
          >
            <Phone className="size-4" />
          </a>
          <a
            href={contact.phoneHref}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-water-dark transition-colors duration-300 hover:bg-water-pale xl:flex"
          >
            <Phone className="size-4" /> {contact.phoneDisplay}
          </a>
          {booking.url ? (
            <a href={booking.url} target="_blank" rel="noreferrer" className="button-primary hidden sm:inline-flex">
              {booking.label}
            </a>
          ) : (
            <Link href="/contact" className="button-primary hidden sm:inline-flex">
              Prendre contact
            </Link>
          )}
          <button
            type="button"
            className={`grid size-11 place-items-center rounded-full border border-ink/15 transition-colors duration-300 hover:border-water lg:hidden ${
              open ? 'is-open' : ''
            }`}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((current) => !current)}
          >
            <span className="burger" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav lg:hidden ${open ? 'is-open' : ''}`}
        {...(open ? {} : { inert: true })}
      >
        <nav className="bg-cream" aria-label="Navigation mobile">
          <div className="mx-auto grid max-w-[1440px] gap-1 px-5 py-5">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-serif text-2xl hover:bg-water-pale"
                style={{ transitionDelay: open ? `${100 + index * 50}ms` : '0ms' }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contact.phoneHref}
              className="mt-3 flex items-center gap-2 rounded-xl bg-ink px-4 py-4 font-bold text-white"
              style={{ transitionDelay: open ? `${100 + navItems.length * 50}ms` : '0ms' }}
            >
              <Phone className="size-4" /> {contact.phoneDisplay}
            </a>
            {booking.url ? (
              <a
                href={booking.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-water-dark px-4 py-4 font-bold text-white"
                style={{ transitionDelay: open ? `${150 + navItems.length * 50}ms` : '0ms' }}
              >
                <CalendarCheck className="size-4" /> {booking.label}
              </a>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
}
