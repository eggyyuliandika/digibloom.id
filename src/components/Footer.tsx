import { Instagram, Mail, MessageCircle } from "lucide-react";
import { WA_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span>
              Digi<span className="text-gradient">Bloom</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Based in Bali, Indonesia. Digital partner untuk UMKM & bisnis berkembang.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Hubungi</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/digibloom.id/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Instagram size={14} /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://mailto:digibloom.official@gmail.com"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Mail size={14} /> digibloom.official@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Layanan</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Social Media Management</li>
            <li>Advertising</li>
            <li>Creative Production</li>
            <li>E-commerce Live Streaming Service</li>
            <li>Website Development</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DigiBloom. All rights reserved.
      </div>
    </footer>
  );
}
