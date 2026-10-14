import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", weight: ["500", "700"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Bonatto Refrigeração | Câmaras Frigoríficas e Climatização em Concórdia - SC",
  description:
    "Engenharia térmica de precisão: montagem e manutenção de câmaras frigoríficas, túneis de congelamento, climatização central e oficina especializada em Concórdia - SC. Solicite cotação no WhatsApp.",
  openGraph: {
    title: "Bonatto Refrigeração | Câmaras Frigoríficas em Concórdia - SC",
    description: "Engenharia térmica de precisão para quem não pode parar. Cotação técnica pelo WhatsApp.",
    images: ["/images/hero-desktop.png"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#08090A" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Bonatto Refrigeração",
  telephone: "+55-49-3442-0993",
  image: "/images/hero-desktop.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Calábria, 21 - Colinas",
    addressLocality: "Concórdia",
    addressRegion: "SC",
    postalCode: "89700-480",
    addressCountry: "BR",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", bestRating: "5" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
  },
  sameAs: ["https://www.instagram.com/bonattorefrigeracao/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
