import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteFooter from "./site-footer";
import { buildMetadata, siteUrl, siteName } from "./seo";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({
    title: "Cleber Batista | Analista Administrativo e de Processos",
    description: "Portfólio profissional de Cleber Batista: experiência administrativa, processos, dados, automação e tecnologia aplicada para operações mais eficientes.",
    path: "/",
  }),
  robots: { index: true, follow: true },
  other: { "codex-preview": "development" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cleber Batista",
  jobTitle: "Analista Administrativo e de Processos",
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Piracaia", addressRegion: "SP", addressCountry: "BR" },
  sameAs: ["https://www.linkedin.com/in/cleber-silva-batista/"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        {children}<SiteFooter/>
      </body>
    </html>
  );
}
