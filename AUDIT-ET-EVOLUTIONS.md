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
