import { videos } from "@/data/videos";

export default function GayusGlitz() {
  const featured = videos.find((v) => v.featured);
  const side = videos.filter((v) => !v.featured).slice(0, 2);
  const bottom = videos.filter((v) => !v.featured).slice(2, 4);

  return (
    <section className="py-12 md:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
              <span className="material-symbols-outlined text-[16px]">play_circle</span>
              As Featured On
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Gayu&apos;s Glitz loves <br />
              Chetana Cold Press
            </h2>
            <p className="text-on-surface-variant mt-3 max-w-md">
              Gayithri, Karnataka&apos;s trusted organic lifestyle YouTuber, has
              visited our mill and shared her honest experience with over 383,000
              subscribers.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@gayithri.t"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-surface-container border border-outline px-6 py-4 rounded-2xl hover:border-primary transition-colors shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm">Gayu&apos;s Glitz</p>
              <p className="text-xs text-on-surface-variant">383K subscribers · 85M+ views</p>
            </div>
          </a>
        </div>

        {/* Featured + side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {featured && (
            <div className="lg:col-span-2 rounded-[2rem] overflow-hidden border border-outline sun-shadow bg-surface-container">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-t-[2rem]"
                  src={`https://www.youtube.com/embed/${featured.youtubeId}`}
                  title={featured.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  Gayu&apos;s Glitz · {featured.category}
                </span>
                <p className="font-bold mt-1">{featured.title}</p>
                {featured.description && (
                  <p className="text-sm text-on-surface-variant mt-1">
                    {featured.description}
                  </p>
                )}
              </div>
            </div>
          )}
          <div className="flex flex-col gap-5">
            {side.map((v) => (
              <div
                key={v.id}
                className="rounded-[2rem] overflow-hidden border border-outline sun-shadow bg-surface-container"
              >
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {v.category}
                  </span>
                  <p className="font-bold text-sm mt-1">{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {bottom.map((v) => (
            <div
              key={v.id}
              className="rounded-[2rem] overflow-hidden border border-outline sun-shadow bg-surface-container"
            >
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${v.youtubeId}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  {v.category}
                </span>
                <p className="font-bold mt-1">{v.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
