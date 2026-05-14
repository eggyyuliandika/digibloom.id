import { useEffect, useState } from "react";
import digibloomLogo from "@/assets/digibloom.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portofolio" },
  { href: "#about", label: "Tentang" },
  { href: "#why", label: "Kenapa Kami" },
];

const WA_URL =
  "https://wa.me/6285925571471?text=Halo%20DigiBloom%2C%20saya%20ingin%20konsultasi%20gratis";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <img
            src={digibloomLogo}
            width={100}
            height={100}
            loading="lazy"
            className="w-20 h-20 object-contain"
          />
          <span>
            Digi<span className="text-gradient">Bloom</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={WA_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Konsultasi Gratis
        </a>
      </nav>
    </header>
  );
}
