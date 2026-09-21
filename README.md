# Caroline Kraushaar, neuropsychologue — maquette du site

Site statique, sans dépendance : `index.html`, le dossier `media/`, un favicon.
Les six pages (Accueil, Bilans, Remédiation, Tarifs, À propos, Contact) sont dans `index.html`
et se naviguent par l'adresse (`#bilans`, `#tarifs`, `#bilans/deroulement`…).

## Déployer sur Vercel
1. Pousser ce dossier sur un dépôt Git.
2. Sur Vercel : New Project → importer le dépôt → Framework preset « Other » → Deploy.
   Aucune commande de build, aucun dossier de sortie à préciser.

## Avant la mise en ligne définitive
- Remplacer les images provisoires par les vraies photos (étiquettes « Photo à réaliser » dans la maquette).
- Retirer les notes destinées à la relecture (« Liste à valider… », « Formulations proposées… », « Image provisoire… »).
- Brancher les formulaires (contact, être rappelé) sur un service d'envoi (Formspree, Vercel Forms, ou l'e-mail).
- Intégrer une carte interactive sur la page Contact.
- Ajouter les mentions légales et la politique de confidentialité.
