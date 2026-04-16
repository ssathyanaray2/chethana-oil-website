import Image from "next/image";
import Link from "next/link";
import { oils } from "@/data/oils";

export default function ProductsSection() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-8 max-w-7xl mx-auto" id="oils">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Our current harvest
          </h2>
          <p className="text-on-surface-variant mt-2">
            Freshly pressed. Ordered via WhatsApp.
          </p>
        </div>
        <Link
          href="/oils"
          className="text-sm font-bold text-primary flex items-center gap-1 hover:underline shrink-0"
        >
          View all oils
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {oils.map((oil) => (
          <Link
            key={oil.slug}
            href={`/oils/${oil.slug}`}
            className="group bg-surface-container rounded-[2.5rem] overflow-hidden sun-shadow transition-transform hover:-translate-y-2 border border-outline"
          >
            <div className="h-56 bg-background relative overflow-hidden">
              <Image
                src={oil.image}
                alt={`Chetana Cold Pressed ${oil.name}`}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                {oil.emoji} {oil.badge}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-1">{oil.name}</h3>
              <p className="text-sm text-on-surface-variant mb-5 line-clamp-2">
                {oil.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary">
                  ₹{oil.price}{" "}
                  <span className="text-xs text-on-surface-variant font-normal">
                    / {oil.unit}
                  </span>
                </span>
                <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
