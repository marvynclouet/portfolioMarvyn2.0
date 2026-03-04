import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Qualités autorisées pour next/image (75 par défaut si non spécifié)
    qualities: [50, 75, 90],
  },
};

export default nextConfig;
