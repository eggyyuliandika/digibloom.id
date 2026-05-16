import { Megaphone, Sparkles, Video, Globe, Share2 } from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Strategi konten, posting konsisten, dan engagement growth untuk brand Anda.",
  },
  {
    icon: Megaphone,
    title: "Advertising",
    desc: "Kampanye iklan Meta & Google yang fokus pada konversi dan ROI nyata.",
  },
  {
    icon: Sparkles,
    title: "Creative Production",
    desc: "Foto, video, dan desain yang menonjol dan sesuai identitas brand.",
  },
  {
    icon: Video,
    title: "E-commerce Live Streaming Service",
    desc: "Live e-commerce profesional untuk audiens lebih luas.",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Website modern, cepat, dan SEO-friendly untuk meningkatkan kredibilitas.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Layanan Kami</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Solusi Digital <span className="text-gradient">Lengkap</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Semua yang bisnis Anda butuhkan untuk hadir, tumbuh, dan menjual secara online.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative rounded-2xl border border-border bg-gradient-card p-7 hover:border-primary/40 hover:shadow-elegant transition-all hover:-translate-y-1 ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center text-primary-foreground shadow-glow">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
