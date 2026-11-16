import { BookOpen, Calendar, ArrowUpRight } from "lucide-react";

const PUBLICATIONS = [
  {
    category: "Direito Corporativo",
    title: "Navegando pelo Direito Societário e Governança",
    excerpt:
      "Um guia abrangente para compreender os cenários jurídicos corporativos e a prevenção de litígios empresariais.",
    date: "15 de Janeiro de 2024",
  },
  {
    category: "Direito Digital",
    title: "Direitos de Propriedade Intelectual na Era Digital",
    excerpt:
      "Estratégias essenciais para a proteção de ativos intangíveis, marcas e produção intelectual no ambiente contemporâneo.",
    date: "03 de Fevereiro de 2024",
  },
  {
    category: "Direito do Trabalho",
    title: "Perspectivas Atuais nas Relações de Trabalho",
    excerpt:
      "Atualizações críticas e tendências jurisprudenciais nos marcos regulatórios das relações laborais.",
    date: "22 de Março de 2024",
  },
];

const MyPublications = () => {
  return (
    <div className="py-24 bg-emerald-50/40">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Cabeçalho com Ornamento Geométrico Amapaense */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-widest mb-2">
            <BookOpen size={15} className="text-emerald-900" />
            Produção Acadêmica & Artigos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950">
            Minhas Publicações
          </h2>

          {/* Divisor inspirado nos traços indígenas Maracá */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-10 h-[1.5px] bg-slate-300" />
            <span className="w-2.5 h-2.5 rotate-45 border border-emerald-900 bg-slate-200" />
            <span className="w-10 h-[1.5px] bg-slate-300" />
          </div>
        </div>

        {/* Grid de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PUBLICATIONS.map((pub, index) => (
            <article
              key={index}
              className="group flex flex-col bg-white border border-emerald-900/10 hover:border-slate-400 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="inline-block self-start px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-950 text-xs font-semibold mb-4">
                {pub.category}
              </span>

              <h3 className="text-xl font-bold text-emerald-950 mb-3 group-hover:text-emerald-800 transition-colors">
                {pub.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                {pub.excerpt}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} className="text-slate-400" />
                  {pub.date}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-950 group-hover:translate-x-0.5 transition-transform">
                  Ler artigo
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPublications;