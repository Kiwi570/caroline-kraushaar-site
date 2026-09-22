# Audit et évolutions de la maquette

## Ce qui fonctionnait déjà

- Une identité douce et cohérente, adaptée à un cabinet de neuropsychologie.
- Un contenu riche qui répond aux principales inquiétudes avant un rendez-vous.
- Des outils pédagogiques intéressants : profils cognitifs, parcours guidé et aide au choix d’un bilan.
- Une hiérarchie claire entre bilans, remédiation, tarifs, parcours et contact.

## Limites de la version HTML

- Les six pages étaient simulées dans un unique fichier de 1 378 lignes avec un routeur par ancres.
- Toutes les pages partageaient les mêmes métadonnées, ce qui limitait fortement le référencement local.
- Le splash d’ouverture, le curseur personnalisé, les canvas et les multiples animations alourdissaient une expérience qui doit d’abord inspirer calme et confiance.
- Les formulaires confirmaient un envoi alors qu’aucune donnée n’était transmise.
- Des notes internes et contenus à valider apparaissaient encore dans l’interface.
- Certains composants interactifs ne couvraient pas complètement la navigation clavier et la gestion du focus.

## Direction de la refonte

- Six vraies routes Next.js, chacune avec son titre et sa description.
- Design éditorial plus calme, avec une palette sable, eau et argile conservée mais mieux hiérarchisée.
- Navigation persistante et CTA de contact facilement accessibles sur mobile.
- Interactions ciblées : boussole d’orientation, profils par âge, aide tarifaire et formulaire guidé.
- Images optimisées avec `next/image`, vidéo non bloquante et typographie locale sans requête externe.
- Formulaire transparent : préparation d’un e-mail plutôt qu’un faux message de succès.
- Sitemap, robots, données structurées, métadonnées sociales et page 404 dédiée.

## Mouvement (V2)

Après avoir retiré le splash, le curseur personnalisé et les canvas de la première maquette, cette version réintroduit du mouvement, mais dosé pour un cabinet de neuropsychologie : lent, court, jamais spectaculaire, sans aucune dépendance.

- hero : titre révélé ligne par ligne, cascade eyebrow → texte → boutons → repères, vidéo qui s'installe, halos ambiants qui respirent ;
- toutes les sections apparaissent au scroll avec de longues transitions et de courtes distances ; les grilles en cascade ;
- onglets par âge : un indicateur glisse entre Enfant, Adolescent et Adulte, le panneau se fond, les coches se dessinent une à une ;
- boussole : la boussole tourne d'un quart de tour à chaque réponse, les questions glissent, le résultat s'installe avec sa coche dessinée ;
- aide tarifaire et formulaire : réponses qui apparaissent en douceur, étapes qui glissent, jauge qui se colore ;
- page À propos : la frise du parcours se trace puis chaque étape apparaît ;
- cartes qui se soulèvent doucement au survol, icônes qui s'encrent, flèches qui s'activent ;
- header : compaction au scroll, menu mobile animé avec burger qui se transforme ;
- FAQ : ouverture fluide (progressif) ; images de section en parallax doux.

Tout respecte `prefers-reduced-motion` et reste lisible sans JavaScript.

## Corrections P1 (V2.1)

- page Bilans : sommaire collant calé sur le header compacté (64 px) et ancres décalées pour ne plus passer sous le sommaire ;
- téléphone : bouton icône dès 1024 px, numéro complet dès 1280 px (plus de trou sur tablette et petit portable) ;
- lisibilité : micro-textes remontés à 60 % d'opacité.

## Corrections P2 (V2.2)

- titrage en Instrument Serif (servie par le site via next/font) à la place de Georgia ;
- accroches raccourcies (accueil, bilans, remédiation, tarifs) et hero de page légèrement réduit : plus de titres sur trois lignes ;
- bloc « Le cabinet Landa Gaita » (praticiennes) dans À propos, bloc accès dans Contact (`lib/site-config.ts`, à confirmer) ;
- pages Mentions légales et Politique de confidentialité, liens au footer.

## Bonus P3 (V2.3)

- prise de rendez-vous en ligne prête à activer : renseigner `booking.url` dans `lib/site-config.ts` (Doctolib, Calendly…) fait apparaître le bouton dans le header, le menu mobile, la page Contact et l'appel à contact de chaque page. Vide, rien ne change.
