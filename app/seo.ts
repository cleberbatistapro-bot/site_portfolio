import type { Metadata } from "next";

export const siteUrl = "https://cleberbatistapro.com.br";
export const siteName = "Cleber Batista";
export const defaultOgImage = { url: "/cleber-hero.webp", width: 2048, height: 1143, alt: "Cleber Batista, Analista Administrativo e de Processos" };

/** Builds a consistent Metadata object (title, description, canonical, Open Graph, Twitter Card) for a route. */
export function buildMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: path,
      siteName,
      title,
      description,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage.url],
    },
  };
}
