import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Advokátní kancelář Mgr. Petr Balabán | Praha",
  description:
    "Advokátní kancelář Mgr. Petra Balabána poskytuje právní služby fyzickým i právnickým osobám na celém území České republiky od roku 2006. Závazkové právo, nemovitosti, rodinné právo, trestní právo a další.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Advokátní kancelář Mgr. Petr Balabán",
  description:
    "Advokátní kancelář poskytující komplexní právní služby fyzickým i právnickým osobám na celém území České republiky od roku 2006.",
  telephone: "+420728479010",
  email: "email@akbalaban.cz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Táborská 411/34",
    addressLocality: "Praha 4",
    postalCode: "140 00",
    addressCountry: "CZ",
  },
  founder: {
    "@type": "Person",
    name: "Mgr. Petr Balabán",
    jobTitle: "Advokát",
  },
  foundingDate: "2006",
  areaServed: {
    "@type": "Country",
    name: "Česká republika",
  },
  knowsLanguage: ["cs", "en"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  );
}
