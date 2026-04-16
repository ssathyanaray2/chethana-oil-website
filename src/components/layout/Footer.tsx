import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-on-surface w-full pt-12 md:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-white/60 text-sm">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Chetana logo" width={32} height={32} className="object-contain opacity-90" />
            <span className="text-xl font-bold text-white font-headline">Chetana</span>
          </Link>
          <p className="leading-relaxed">
            Crafting artisanal cold-pressed oils since {site.founded} with a heritage of
            over {site.yearsOfExpertise} years in traditional oil extraction.
          </p>
          <p className="text-white/40 text-xs">{site.location}</p>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs">Oils</h4>
          <ul className="space-y-2">
            {["Groundnut Oil", "Sesame Oil", "Coconut Oil", "Mustard Oil"].map((name) => (
              <li key={name}>
                <Link href={`/oils/${name.split(" ")[0].toLowerCase()}`} className="hover:text-primary transition-colors">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs">Learn</h4>
          <ul className="space-y-2">
            {[
              { label: "Why Cold Press?", href: "/why-cold-press" },
              { label: "Our Process", href: "/#journey" },
              { label: "Our Story", href: "/#story" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs">Order</h4>
          <ul className="space-y-2">
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                WhatsApp Us
              </a>
            </li>
            <li>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Gayu&apos;s Glitz
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-white/30 text-xs">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>Made with care in Challakere, Karnataka 🇮🇳</p>
      </div>
    </footer>
  );
}
