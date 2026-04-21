import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.defaultTitle,
    template: site.seo.titleTemplate,
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  description: site.description,
  keywords: site.seo.keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    locale: "en_IN",
    siteName: site.name,
    title: site.seo.defaultTitle,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.defaultTitle,
    description: site.description,
  },
  verification: {
    google: "1gMf0XRZU7qmuotkzomJCsToLUO_VdHwA0o7dZcPPrk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-on-surface">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
