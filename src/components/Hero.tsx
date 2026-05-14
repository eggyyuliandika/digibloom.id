import balimoon from "@/assets/portofolio-balimoon.png";
import nwtc from "@/assets/portofolio-nwtc.png";
import tpfx from "@/assets/portofolio-tpfx.png";
import kalimutu from "@/assets/portofolio-kalimutu.png";
import { WA_URL } from "@/lib/site";

const items = [
  { img: balimoon, title: "Balimoon", tag: "Website Development" },
  { img: nwtc, title: "NWTC", tag: "Social Media Management" },
  { img: tpfx, title: "TPFX Bali", tag: "Social Media Management" },
  { img: kalimutu, title: "Kalimutu Fitness", tag: "Advertising" },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-soft" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl -z-10" />
      <div className="absolute top-40 -left-32 w-[400px] h-[400px] rounded-full bg-primary-glow/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Digital Agency • Bali, Indonesia
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Grow Your Business <br />
            Digitally with <span className="text-gradient">DigiBloom</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Kami membantu bisnis berkembang melalui strategi digital yang efektif, konten kreatif,
            dan iklan yang menghasilkan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-hero text-primary-foreground px-6 py-3 font-medium shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 font-medium hover:border-primary/40 hover:bg-primary-soft transition"
            >
              Lihat Portofolio
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div>
              <span className="text-foreground font-semibold">4+</span> Klien
            </div>
            <div className="w-px h-4 bg-border" />
            <div>
              <span className="text-foreground font-semibold">5</span> Layanan
            </div>
            <div className="w-px h-4 bg-border" />
            <div>
              Based in <span className="text-foreground font-semibold">Bali</span>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="grid grid-cols-2 gap-4">
            {items.map((it, i) => (
              <div
                key={it.title}
                className={`group relative rounded-2xl overflow-hidden bg-gradient-card border border-border shadow-elegant ${
                  i % 2 === 0 ? "translate-y-0" : "translate-y-8"
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={it.img}
                    alt={`${it.title} — ${it.tag}`}
                    width={800}
                    height={1000}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="text-[11px] uppercase tracking-wider text-white/70">{it.tag}</div>
                  <div className="text-sm font-semibold text-white">{it.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-gradient-hero opacity-30 blur-2xl -z-10 animate-float" />
        </div>
      </div>
    </section>
  );
}
