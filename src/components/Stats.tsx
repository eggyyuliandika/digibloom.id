"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Briefcase, Star, TrendingUp } from "lucide-react";

const stats = [
  { value: 4, suffix: "+", label: "Clients Served", icon: Users },
  { value: 5, suffix: "", label: "Services Ready", icon: Briefcase },
  { value: 5, suffix: "", label: "Profesional Team", icon: Star },
  { value: null, suffix: "∞", label: "Growing Brands Together", icon: TrendingUp },
];

function AnimatedNumber({ target, suffix }: { target: number | null; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          if (target === null) return; // untuk ∞
          let start = 0;
          const duration = 1500;
          const step = Math.ceil(duration / target);
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) clearInterval(timer);
          }, step);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-4xl lg:text-5xl font-bold text-center">
      {target === null ? suffix : `${count}${suffix}`}
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-10 lg:p-14 shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-0">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className={`group flex flex-col items-center px-8 py-4 transition-all duration-300 hover:scale-105 ${
                    i < stats.length - 1 ? "border-r border-white/20" : ""
                  }`}
                >
                  {/* Ikon */}
                  <div className="mb-3 p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white/80" />
                  </div>

                  {/* Angka animasi */}
                  <AnimatedNumber target={s.value} suffix={s.suffix} />

                  {/* Label */}
                  <div className="mt-2 text-sm text-primary-foreground/80 text-center">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
