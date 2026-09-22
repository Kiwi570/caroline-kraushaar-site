# Caroline Kraushaar — Neuropsychologue à Ahetze

Refonte Next.js de la maquette du cabinet de neuropsychologie Caroline Kraushaar.

## Développement local

```bash
npm ci
npm run dev
```

Ouvrez ensuite `http://localhost:3000`.

## Validation de production

```bash
npm run check
```

## Déploiement Vercel

Importez le dépôt dans Vercel et laissez la plateforme détecter Next.js. La variable facultative `NEXT_PUBLIC_SITE_URL` permet d’indiquer le domaine public final utilisé par le sitemap et les métadonnées sociales.

## Avant publication définitive

- faire valider tous les textes cliniques, tarifs et modalités par la praticienne ;
- remplacer les visuels provisoires par des photographies authentiques du cabinet et de Caroline ;
- connecter le formulaire à une solution conforme aux exigences de confidentialité retenues par la praticienne ;
- compléter les passages entre crochets des pages Mentions légales et Politique de confidentialité ;
- confirmer les informations du cabinet Landa Gaita (praticiennes, accès, stationnement) dans `lib/site-config.ts` (`cabinet`) ;
- brancher un outil de prise de rendez-vous en ligne si Caroline en utilise un.

## Motion

Le mouvement du site repose sur un petit kit sans dépendance, dans `components/motion/` et la section « MOTION KIT » de `app/globals.css`. C'est le même kit que sur les autres refontes, réglé ici sur un rythme calme : courtes distances, longues durées.

| Composant | Rôle | Type |
| --- | --- | --- |
| `Lines` | Révélation ligne par ligne d'un titre (masque + montée), CSS pur | serveur |
| `Reveal` | Apparition au scroll (IntersectionObserver), cascade des enfants avec `stagger` | client |
| `DrawnCheck` | Coche (et cercle) qui se dessine, synchronisée avec le `Reveal` qui l'entoure | serveur |

Classes utilitaires : `.hero-seq` (séquence d'entrée d'un hero, délais posés inline), `.anim-rise` / `.anim-scale` / `.anim-fade` (entrées au chargement), `.stagger-in` (cascade), `.lift` (carte qui se soulève doucement), `.timeline` (frise qui se trace), `.ambient` (halo qui respire), `.parallax` (piloté par le scroll, ignoré si non supporté).

Principes :

- les entrées « au chargement » sont en CSS pur et jouent avant l'hydratation ;
- les entrées « au scroll » ne masquent rien tant que la classe `.js` (posée dans `app/layout.tsx`) n'est pas là ;
- `prefers-reduced-motion` désactive halo et parallax, dessine les coches immédiatement et affiche tout d'un coup ;
- aucun effet lié au curseur : le site doit inspirer calme et confiance.
