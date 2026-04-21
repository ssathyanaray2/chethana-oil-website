import Image from "next/image";

const trustPoints = [
  {
    icon: "verified",
    text: "Rich natural flavour — no artificial additives or preservatives",
  },
  {
    icon: "eco",
    text: "100% natural, single-ingredient — just the seed, nothing else",
  },
  {
    icon: "favorite",
    text: "Heart-healthy fats preserved through cold extraction",
  },
];

export default function FamilySection() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-8 bg-surface-container" id="story">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            <span className="material-symbols-outlined text-[16px]">favorite</span>
            Trusted by Families
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            The intelligent mother&apos;s choice for every kitchen
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            From tadkas to dosas, rotis to curries — Chetana cold press oils
            bring the flavour and nutrition your family deserves. No compromise
            on purity, ever.
          </p>
          <div className="space-y-3">
            {trustPoints.map((point) => (
              <div
                key={point.text}
                className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-2xl border border-outline"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">{point.icon}</span>
                </div>
                <p className="text-sm font-medium">{point.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[3rem] overflow-hidden border border-outline sun-shadow">
            <Image
              src="/images/family.png"
              alt="Families cooking with Chetana cold press oil"
              width={600}
              height={500}
              className="w-full object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-6 -left-6 bg-surface-container-lowest sun-shadow px-6 py-4 rounded-2xl border border-outline">
            <p className="text-2xl font-bold text-primary">10,000+</p>
            <p className="text-xs text-on-surface-variant">Happy families served</p>
          </div>
        </div>
      </div>
    </section>
  );
}
