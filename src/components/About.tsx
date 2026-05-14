const badges = ["Based in Bali", "Creative Team", "Result Driven", "Affordable for UMKM"];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Tentang DigiBloom</span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
          Digital Partner untuk Bisnis <br className="hidden sm:block" />
          yang Ingin <span className="text-gradient">Tumbuh</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          DigiBloom hadir untuk membantu UMKM dan bisnis berkembang dengan solusi digital
          yang terjangkau, profesional, dan efektif.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-border bg-primary-soft/50 px-4 py-1.5 text-sm font-medium text-foreground"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
