import { WA_URL } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Saatnya Bisnis Anda Tumbuh <br />
          Bersama <span className="text-gradient">DigiBloom</span>
        </h2>
        <p className="mt-5 text-muted-foreground text-lg">
          Konsultasi gratis tanpa komitmen. Mari diskusikan strategi terbaik untuk bisnis Anda.
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-hero text-primary-foreground px-8 py-4 font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
        >
          Hubungi Kami Sekarang
        </a>
      </div>
    </section>
  );
}
