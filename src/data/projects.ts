export interface Project {
  id: string;
  title: string;
  year: number;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  /** Vidéo d'aperçu (ex. projet non déployé) */
  video?: string;
  /** URL du dépôt / code source */
  codeUrl?: string;
  /** URLs d'images additionnelles pour le carousel */
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "flow-ia",
    title: "Flow IA",
    year: 2025,
    description:
      "SaaS de gestion et de démarche commerciale avec IA : automatisation des prospects et clients sur TikTok, Instagram et LinkedIn. Projet en cours de déploiement côté client.",
    technologies: ["React", "Next.js", "Node.js", "IA"],
    image: "/projects/flow-ia.jpg",
    video: "/projects/flow-ia.mov",
  },
  {
    id: "adm-beauty-booking",
    title: "ADM Beauty Booking",
    year: 2025,
    description:
      "Application de réservation et de gestion de rendez-vous pour instituts de beauté.",
    technologies: ["React", "TypeScript", "Node.js"],
    image: "/projects/adm-beauty.jpg",
    link: "https://adm-app-eight.vercel.app/",
  },
  {
    id: "bpm-tools",
    title: "BPM Tools",
    year: 2025,
    description:
      "Outil de gestion et tableau de bord pour les professionnels de la production musicale. Connexion et démo disponibles.",
    technologies: ["React", "TypeScript", "Next.js"],
    image: "/projects/bpm-tools.jpg",
    link: "https://bpm-tools.vercel.app/dashboard",
  },
  {
    id: "bpm-connect",
    title: "BPM Connect",
    year: 2025,
    description:
      "Plateforme carrière des créateurs musicaux : marketplace de services, crowdfunding, collaborations et messagerie. Paiements Stripe, plans Free / Pro / Boss.",
    technologies: ["React", "Next.js", "Stripe", "Node.js"],
    image: "/projects/bpm-connect.jpg",
    link: "https://bpmconnect.vercel.app/",
  },
  {
    id: "freeagent",
    title: "FreeAgent App",
    year: 2025,
    description: "Application de gestion et suivi pour freelances et indépendants.",
    technologies: ["Flutter", "Dart", "React"],
    image: "/projects/freeagent.jpg",
    link: "https://free-agen-app.vercel.app/",
  },
  {
    id: "kbh-corporate",
    title: "KBH Studios Corporate",
    year: 2023,
    description:
      "Site vitrine pour KBH CORPORATE : marketing digital, création de sites web, production photos et vidéos corporate. Développé par Marvyn Clouet.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP"],
    image: "/projects/kbh-corporate.jpg",
    link: "https://kbhcorporate.fr/",
  },
  {
    id: "same-founders",
    title: "SAME Founders",
    year: 2025,
    description:
      "Boutique e-commerce (prêt-à-porter, accessoires). Paiement multi-devises, Shopify/Shop Pay, Apple Pay, PayPal.",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
    image: "/projects/same-founders.jpg",
    link: "https://samefounders.fr/",
  },
  {
    id: "bpm-formation",
    title: "BPM Formation",
    year: 2024,
    description:
      "Site de l'école de production musicale et beatmaking : formations Beatmaking, Ingénierie du son, Mixage & Mastering. Tarifs, témoignages, contact.",
    technologies: ["React", "Next.js", "JavaScript", "CSS"],
    image: "/projects/bpm-formation.jpg",
    link: "https://bpmformation.fr/",
  },
  {
    id: "rf-studio",
    title: "RF Studio",
    year: 2024,
    description:
      "Site vitrine du studio d'enregistrement professionnel : réservation de sessions, tarifs (enregistrement, mixage, mastering), galerie et contact.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/rf-studio.jpg",
    link: "https://marvynclouet.github.io/RFSTUDSITE/",
  },
  {
    id: "lbdc",
    title: "LBDC - Site Électricien",
    year: 2024,
    description:
      "Site vitrine pour LBDC (La Banque de Christ), entreprise d'électricité en région parisienne : installations, maintenance, mises aux normes, dépannage.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    image: "/projects/lbdc.jpg",
    link: "https://marvynclouet.github.io/LBDCSite/",
  },
  {
    id: "kbh-formation-ios",
    title: "KBH Formation (iOS)",
    year: 2024,
    description:
      "Application de formation digitale sur iOS pour KBH : catalogue de formations, lecteur vidéo par chapitres, authentification, favoris, page À propos et contact. Développée par KBH DEV.",
    technologies: ["Swift", "SwiftUI", "iOS"],
    image: "/projects/kbh-formation-ios.webp",
  },
  {
    id: "the-frenchfam",
    title: "The French Family Consulting",
    year: 2025,
    description:
      "Site vitrine pour le cabinet de consulting familial The French Fam. Design monochrome, mise en avant « All Together », responsive desktop et mobile. Projet freelance.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/the-frenchfam.webp",
  },
  {
    id: "gsb-pharmacy",
    title: "GSB Pharmacy",
    year: 2024,
    description:
      "Application mobile de gestion pour pharmacies : authentification, tableau de bord avec statistiques (commandes, ventes, stock, dépenses), suivi des commandes et factures. Interface épurée aux couleurs vert et blanc.",
    technologies: ["Swift", "SwiftUI", "iOS"],
    image: "/projects/gsb-pharmacy.webp",
  },
  {
    id: "babi-gourmandise",
    title: "Babi Gourmandise",
    year: 2024,
    description:
      "Site vitrine et présentation pour Babi Gourmandises & Co : pâtisserie sur mesure, gâteaux personnalisés et créations sucrées/salées. Hero avec CTA « Commander maintenant », section À propos, design responsive bleu et blanc.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    image: "/projects/babi-gourmandise.webp",
  },
];
