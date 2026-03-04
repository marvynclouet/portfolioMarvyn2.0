export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  /** Initiales si pas de photo (ex. "MC") */
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Marvyn a su livrer notre site vitrine dans les temps avec un rendu professionnel. Réactif et à l'écoute.",
    author: "KBH Corporate",
    role: "Client",
    company: "KBH Corporate",
    initials: "KB",
  },
  {
    id: "2",
    quote: "Développement de notre application de réservation fluide et bien structuré. Je recommande.",
    author: "ADM",
    role: "Client",
    company: "ADM",
    initials: "AD",
  },
  {
    id: "3",
    quote: "Site du studio réalisé avec soin. Mise en avant des services et formulaire de contact au top.",
    author: "RF Studi",
    role: "Client",
    company: "RF Studio",
    initials: "RF",
  },
  {
    id: "4",
    quote: "Un profil full stack rare : mobile, web et IA. Marvyn livre des solutions complètes et maintenables.",
    author: "Collègue dev",
    role: "Développeur",
    company: "—",
    initials: "CD",
  },
];
