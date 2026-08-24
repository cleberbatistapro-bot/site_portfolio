import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteFooter from "./site-footer";
import { buildMetadata, siteUrl, siteName } from "./seo";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({
    title: "Cleber Batista | Analista de Processos, Automação e IA Aplicada",
    description: "Identifico ineficiências, redesenho processos e construo automações com Python e IA aplicada. Mais de 20 anos de carreira em diferentes áreas, hoje voltados a resolver problemas e acelerar decisões.",
    path: "/",
  }),
  robots: { index: true, follow: true },
  other: { "codex-preview": "development" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cleber Batista",
  jobTitle: "Analista de Processos, Automação e IA Aplicada",
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

const gaInlineScript = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-E706C4679K');`;

const clarityInlineScript = `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "y7ekj1iwif");`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E706C4679K"></script>
        <script dangerouslySetInnerHTML={{ __html: gaInlineScript }} />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: clarityInlineScript }} />
      </head>
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        {children}<SiteFooter/>
      </body>
    </html>
  );
}
