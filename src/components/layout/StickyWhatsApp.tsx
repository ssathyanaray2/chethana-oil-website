import { site } from "@/data/site";
import { getTranslations } from "next-intl/server";

export default async function StickyWhatsApp() {
  const t = await getTranslations("sticky");
  const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t("message"))}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-background/95 backdrop-blur-md border-t border-outline px-4 py-3 flex items-center justify-between">
        <p className="text-xs font-semibold text-on-surface-variant">{t("tagline")}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-on-surface text-on-primary flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm"
        >
          <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
          {t("button")}
        </a>
      </div>
    </div>
  );
}
