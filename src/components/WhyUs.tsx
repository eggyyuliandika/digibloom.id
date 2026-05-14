import { Check } from "lucide-react";

const reasons = [
  "Cocok untuk UMKM & bisnis baru",
  "Harga ramah bisnis berkembang",
  "Tim kreatif & update trend",
  "Fokus pada hasil",
  "Komunikasi cepat & jelas",
];

export function WhyUs() {
  return (
    <section id="why" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Kenapa DigiBloom</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Alasan Bisnis Memilih <span className="text-gradient">Kami</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Kami bukan agency yang hanya posting konten. Kami partner pertumbuhan
            yang memahami tantangan UMKM di Bali.
          </p>
        </div>
        <ul className="space-y-3">
          {reasons.map((r) => (
            <li
              key={r}
              className="flex items-start gap-4 rounded-xl border border-border bg-gradient-card p-4 hover:border-primary/40 transition"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center text-primary-foreground">
                <Check size={16} />
              </span>
              <span className="font-medium">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
