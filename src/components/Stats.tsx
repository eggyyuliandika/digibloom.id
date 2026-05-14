const stats = [
  { value: "4+", label: "Clients Served" },
  { value: "5", label: "Services Ready" },
  { value: "Bali", label: "Based Agency" },
  { value: "∞", label: "Growing Brands Together" },
];

export function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-10 lg:p-14 shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl lg:text-5xl font-bold">{s.value}</div>
                <div className="mt-2 text-sm text-primary-foreground/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
