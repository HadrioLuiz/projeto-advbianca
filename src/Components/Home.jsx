import Image from "next/image";
import PeopleJustice from "../Img/peopleJustice.png";
import { ArrowRight, Compass } from "lucide-react";

const MyHome = () => {
  return (
    <div className="relative bg-emerald-950 text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Padrão Geométrico Inspirado na Cerâmica Maracá-Cunani (Amapá) */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="maraca-pattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0 L80 40 L40 80 L0 40 Z M40 16 L64 40 L40 64 L16 40 Z M28 40 L52 40 M40 28 L40 52"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#maraca-pattern)" />
      </svg>

      {/* Linha Sutil do Paralelo 00°00'00" (Marco Zero do Equador) */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-full border-t border-dashed border-slate-300/15" />

      {/* Reflexos Prateados Suaves */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-slate-300/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-emerald-700/20 blur-3xl" />

      <div className="relative container mx-auto px-4 md:px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Coluna de Texto */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/90 border border-slate-300/25 text-slate-200 text-xs font-semibold tracking-wider uppercase mb-6">
            <Compass size={14} className="text-slate-300" />
            OAB/AP 4419 • Macapá • Tribunais Superiores
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] tracking-tight text-white mb-6">
            Atuação Jurídica Estratégica com{" "}
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Rigor Técnico e Excelência
            </span>
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
            Assessoria especializada na elaboração de peças processuais, consultoria acadêmico-jurídica e atuação recursal perante os Tribunais Superiores.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 hover:from-white hover:to-slate-200 text-emerald-950 px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-black/25"
            >
              Fale Comigo
              <ArrowRight size={18} />
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-slate-200 border border-slate-400/30 hover:bg-emerald-900/60 transition"
            >
              Conhecer Trajetória
            </a>
          </div>
        </div>

        {/* Coluna da Imagem com Moldura Prateada */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative p-4 rounded-3xl bg-emerald-900/50 border border-slate-300/25 shadow-2xl backdrop-blur-sm">
            <Image
              src={PeopleJustice}
              alt="Ilustração Justiça e Direito"
              width={420}
              height={420}
              priority
              className="w-full max-w-[340px] sm:max-w-[380px] h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHome;