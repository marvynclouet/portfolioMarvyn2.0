# Portfolio Marvyn Clouet — Esprit Apple

Portfolio one-page inspiré du design Apple : Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion.

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Personnalisation

- **CV** : placer ton fichier PDF dans `public/cv-marvyn-clouet.pdf` pour que le bouton « Télécharger mon CV » fonctionne.
- **Avatar Hero** : remplacer l’emoji dans `src/components/Hero.tsx` par une image (ex. Memoji) ou un composant 3D.
- **Images projets** : ajouter les visuels dans `public/projects/` (ex. `kbh-corporate.jpg`) et mettre à jour les chemins dans `src/data/projects.ts`. Tu peux aussi utiliser `next/image` avec ces chemins.
- **Réseaux** : modifier les URLs GitHub et LinkedIn dans `src/components/Contact.tsx`.

## Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Hook Form

## Build

```bash
npm run build
npm start
```
