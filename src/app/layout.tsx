import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Epilogue, Be_Vietnam_Pro } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-epilogue",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
});

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
    <html lang="en" className={`scroll-smooth ${epilogue.variable} ${beVietnamPro.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="antialiased bg-background text-on-surface">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
