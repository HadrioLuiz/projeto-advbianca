import Image from "next/image";
import BiancaPerfil from "../Img/BiancaPerfil.png";
import { Award, BookOpen, Landmark } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Award,
    title: "OAB 4419/AP",
    desc: "Atuação contenciosa e consultiva",
  },
  {
    icon: Landmark,
    title: "Procuradoria Estadual",
    desc: "Experiência na advocacia pública",
  },
  {
    icon: BookOpen,
    title: "Mestranda",
    desc: "Justiça e Direitos Humanos",
  },
];

const MyAbout = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-emerald-100/70 via-emerald-50/40 to-white border-b border-emerald-200/60">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Foto de Perfil com Moldura Prateada */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-slate-300 bg-emerald-900/5" />
              <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xl">
                <Image
                  src={BiancaPerfil}
                  alt="Dra. Bianca Santos de Souza"
                  width={450}
                  height={520}
                  className="w-full max-w-sm object-cover"
                />
              </div>
            </div>
          </div>

          {/* Biografia e Credenciais */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800">
              <span className="w-6 h-[1.5px] bg-slate-400" />
              Sobre a Profissional
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 mt-2 mb-6">
              Bianca Santos de Souza
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Sou advogada inscrita na <strong className="text-emerald-950">OAB 4419/AP</strong>, servidora da Procuradoria Estadual e mestranda em Justiça e Direitos Humanos.
              </p>
              <p>
                Divido minha rotina entre a prática jurídica e a pesquisa acadêmica — dois universos complementares nos quais me dedico com rigor técnico, seja na condução de projetos institucionais ou na redação de minutas processuais complexas.
              </p>
              <p>
                Possuo sólida experiência na elaboração de <strong className="text-emerald-950">recursos aos Tribunais Superiores</strong>, colocando minha expertise à disposição para colaborar com escritórios parceiros e clientes em demandas estratégicas.
              </p>
            </div>

            {/* Cards de Credenciais com Destaque Prata */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-4 rounded-xl bg-white/90 border border-emerald-900/10 hover:border-slate-300 shadow-sm transition"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-950 text-slate-200 flex items-center justify-center mb-3">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-bold text-emerald-950 text-sm">{title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAbout;