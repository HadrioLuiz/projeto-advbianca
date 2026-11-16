"use client";
import { useState } from "react";
import { Scale, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#publications", label: "Publicações" }
];

const MyNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-emerald-950/95 backdrop-blur-md border-b border-slate-400/20 z-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex justify-between items-center h-20">
          {/* Identidade com Detalhe Prateado */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="p-2.5 rounded-xl bg-emerald-900 text-slate-200 border border-slate-300/30 shadow-sm group-hover:bg-emerald-800 transition">
              <Scale size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-tight tracking-tight">
                Bianca Santos
              </span>
              <span className="text-[11px] uppercase tracking-widest text-slate-300 font-semibold">
                Advocacia • OAB/AP 4419
              </span>
            </div>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-emerald-100/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 hover:from-white hover:to-slate-200 text-emerald-950 text-sm font-bold transition shadow-sm"
            >
              Agendar Consulta
            </a>
          </nav>

          {/* Botão Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="md:hidden p-2 rounded-lg text-slate-200 hover:bg-emerald-900 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-800/80 flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-2 py-2 text-emerald-100 hover:text-white font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-lg bg-gradient-to-r from-slate-100 to-slate-300 text-emerald-950 font-bold"
            >
              Agendar Consulta
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default MyNav;