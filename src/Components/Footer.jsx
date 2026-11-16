// Components/Footer.jsx
import { Scale } from "lucide-react";

const MyFooter = () => {
  return (
    <footer className="relative bg-emerald-950 text-slate-300 py-12 border-t border-slate-400/20 overflow-hidden">
      {/* Linha simbólica do Paralelo 00°00'00" */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-300/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2.5 text-white font-semibold">
          <Scale size={18} className="text-slate-300" />
          <span>Bianca Santos de Souza • OAB/AP 4419</span>
        </div>

        <p className="text-slate-400 text-center sm:text-right">
          Macapá - AP • © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default MyFooter;