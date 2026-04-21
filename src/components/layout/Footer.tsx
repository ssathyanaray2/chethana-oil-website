import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="bg-on-surface w-full pt-12 md:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-white/60 text-sm">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Chetana logo" width={32} height={32} className="object-contain opacity-90" />
            <span className="text-xl font-bold text-white font-headline">{t("brand")}</span>
          </Link>
          <p className="leading-relaxed">
            {t("tagline", { founded: site.founded, years: site.yearsOfExpertise })}
          </p>
          <p className="text-white/40 text-xs">{site.location}</p>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs">{t("sections.explore")}</h4>
          <ul className="space-y-2">
            {[
              { key: "whyColdPress", href: "/#why" },
              { key: "ourProcess", href: "/#journey" },
              { key: "faq", href: "/#faq" },
            ].map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {t(`links.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs">{t("sections.contact")}</h4>
          <ul className="space-y-3">
            {site.contacts.map((c) => (
              <li key={c.phone}>
                <p className="text-white/90 text-xs font-semibold">{c.name}</p>
                <a href={`tel:${c.phone}`} className="hover:text-primary transition-colors">
                  {c.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs">{t("sections.order")}</h4>
          <ul className="space-y-2">
            <li>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                {t("links.whatsapp")}
              </a>
            </li>
            <li>
              <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                {t("links.gayus")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-white/30 text-xs">
        <p>{t("copyright", { year: new Date().getFullYear(), name: site.name })}</p>
        <p>{t("madeWith")}</p>
      </div>
    </footer>
  );
}
