import balimoon from "@/assets/portofolio-balimoon.png";
import nwtc from "@/assets/portofolio-nwtc.png";
import tpfx from "@/assets/portofolio-tpfx.png";
import kalimutu from "@/assets/portofolio-kalimutu.png";

const items = [
  {
    img: balimoon,
    title: "Balimoon Art & Space",
    tag: "Website Development",
    desc: "Website modern untuk meningkatkan trust dan penjualan online.",
  },
  {
    img: nwtc,
    title: "NWTC",
    tag: "Advertising",
    desc: "Advertising campaign untuk new student member.",
  },
  {
    img: tpfx,
    title: "TPFX Bali",
    tag: "Social Media Management",
    desc: "Konten & management untuk engagement audiens.",
  },
  {
    img: kalimutu,
    title: "Kalimutu Fitness",
    tag: "Advertising",
    desc: "Advertising campaign untuk member acquisition.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Portofolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Client <span className="text-gradient">Kami</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={it.img}
                  alt={`${it.title} — ${it.tag}`}
                  width={800}
                  height={500}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-primary font-semibold">
                  {it.tag}
                </div>
                <h3 className="mt-2 text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
