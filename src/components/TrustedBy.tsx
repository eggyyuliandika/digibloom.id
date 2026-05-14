const clients = ["Balimoon", "NWTC", "TPFX Bali", "Kalimutu Fitness"];

export function TrustedBy() {
  return (
    <section className="py-14 border-y border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-center text-sm text-muted-foreground">
          Dipercaya berbagai bisnis lokal di Bali
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {clients.map((c) => (
            <div
              key={c}
              className="rounded-xl border border-border bg-gradient-card py-5 text-center font-display font-semibold text-foreground/80 hover:text-foreground hover:border-primary/40 transition"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
