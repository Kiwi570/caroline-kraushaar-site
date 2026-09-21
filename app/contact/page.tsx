import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Clock3, Mail, MapPin, Phone, Route, ShieldCheck } from 'lucide-react';

import { ContactForm } from '@/components/site/contact-form';
import { PageHero } from '@/components/site/page-hero';
import { contact } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact et rendez-vous',
  description:
    'Contactez Caroline Kraushaar, psychologue spécialisée en neuropsychologie au cabinet Landa Gaita à Ahetze.',
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Commençons par"
        accent="un premier échange."
        description="Expliquez simplement ce qui vous amène. Ce premier contact permet de vérifier si l’accompagnement proposé correspond à votre besoin."
        readingTime="Réponse dès que possible"
      />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1344px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="grid gap-4 lg:sticky lg:top-28">
            <article className="rounded-[1.75rem] bg-water-dark p-7 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-water-light">Contact direct</p>
              <a
                href={contact.phoneHref}
                className="mt-7 flex items-center gap-3 font-serif text-2xl hover:text-water-light"
              >
                <Phone className="size-5" /> {contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="mt-4 flex items-start gap-3 break-all text-sm leading-6 text-white/68 hover:text-white"
              >
                <Mail className="mt-0.5 size-5 shrink-0" /> {contact.email}
              </a>
              <div className="mt-7 flex gap-3 border-t border-white/14 pt-6 text-sm leading-6 text-white/58">
                <Clock3 className="mt-0.5 size-5 shrink-0 text-water-light" />
                <p>
                  Consultations sur rendez-vous. En cas d’absence, laissez un message avec vos coordonnées.
                </p>
              </div>
            </article>
            <article className="rounded-[1.75rem] border border-ink/10 bg-white p-7 sm:p-8">
              <MapPin className="size-5 text-water-dark" />
              <h2 className="mt-5 font-serif text-3xl">Cabinet Landa Gaita</h2>
              <p className="mt-3 text-sm leading-7 text-ink/56">{contact.address}</p>
              <a
                href={contact.directions}
                target="_blank"
                rel="noreferrer"
                className="button-secondary mt-6 w-full"
              >
                <Route className="size-4" /> Ouvrir l’itinéraire <ArrowUpRight className="size-4" />
              </a>
            </article>
          </aside>
          <ContactForm />
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1344px] items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-sand shadow-soft">
            <Image
              src="/media/image-12.jpg"
              alt="Salle d’attente du cabinet"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Venir au cabinet</p>
            <h2 className="mt-5 font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.96] tracking-[-0.045em]">
              À Ahetze, au cœur du Pays basque.
            </h2>
            <p className="mt-7 text-base leading-8 text-ink/60">
              Le cabinet se situe à environ 15 minutes de Saint-Jean-de-Luz, 10 minutes de Bidart et de
              Saint-Pée-sur-Nivelle, et 20 minutes de Biarritz.
            </p>
            <div className="mt-7 flex gap-3 rounded-2xl bg-water-pale p-5 text-sm leading-7 text-water-dark">
              <ShieldCheck className="mt-1 size-5 shrink-0" />
              <p>
                Pour préserver votre confidentialité, évitez d’envoyer des documents médicaux sensibles par
                e-mail avant qu’un mode de transmission adapté vous soit proposé.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
