"use client";
import { useState } from "react";
import { MessageCircle, Send, MapPin, Scale } from "lucide-react";

const MyContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "5596999999999"; // Atualize com o WhatsApp real da Dra. Bianca
    const text = `Olá, Dra. Bianca! Meu nome é *${formData.name}* (${formData.email}).\n\n${formData.message}`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="py-24 bg-gradient-to-b from-emerald-100/60 via-emerald-50/30 to-white border-t border-emerald-200/60">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Informações de Contato */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800">
              <span className="w-6 h-[1.5px] bg-slate-400" />
              Atendimento & Parcerias
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 mt-2 mb-4">
              Entre em Contato
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Disponível para consultas jurídicas, parcerias com escritórios e atuação recursal nos Tribunais Superiores.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/90 border border-emerald-900/10 shadow-sm">
                <div className="p-2 rounded-lg bg-emerald-950 text-slate-200">
                  <Scale size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-emerald-950 text-sm">Inscrição Profissional</h3>
                  <p className="text-sm text-slate-600">OAB/AP nº 4419</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/90 border border-emerald-900/10 shadow-sm">
                <div className="p-2 rounded-lg bg-emerald-950 text-slate-200">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-emerald-950 text-sm">Atuação</h3>
                  <p className="text-sm text-slate-600">
                    Macapá - AP (Meio do Mundo) e Tribunais Superiores
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-7 bg-white border border-emerald-900/15 p-6 sm:p-10 rounded-2xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-emerald-950 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-emerald-50/30 border border-slate-300 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-emerald-950 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-emerald-50/30 border border-slate-300 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-emerald-950 mb-2">
                  Assunto / Mensagem
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-emerald-50/30 border border-slate-300 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition"
                  placeholder="Descreva brevemente sua demanda ou proposta de parceria..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-950 hover:bg-emerald-900 text-slate-100 border border-slate-400/30 font-semibold py-4 rounded-xl transition shadow-md cursor-pointer"
              >
                <MessageCircle size={18} className="text-slate-300" />
                Iniciar Atendimento via WhatsApp
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContact;