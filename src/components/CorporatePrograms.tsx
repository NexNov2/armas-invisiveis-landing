import { Building2, Users, Target, MessageSquare } from "lucide-react";

const CorporatePrograms = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-shogun-black via-shogun-black to-shogun-gold/20 relative overflow-hidden" aria-labelledby="corporate-title">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-shogun-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-shogun-gold rounded-full blur-3xl" />
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Tag de destaque */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-shogun-gold/20 border border-shogun-gold/40 text-shogun-gold px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              Exclusivo para Empresas
            </span>
          </div>
          
          <h2
            id="corporate-title"
            className="text-2xl md:text-4xl lg:text-5xl font-black mb-6 text-center text-white"
          >
            Programas de <span className="gold-text">Liderança Samurai</span>
          </h2>
          
          <p className="text-lg md:text-xl text-shogun-silver text-center mb-10 max-w-2xl mx-auto">
            Comunicação que <strong className="text-white">Multiplica Resultados</strong>. Projetos personalizados para transformar a comunicação da sua empresa.
          </p>
          
          {/* Cards de benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-shogun-gold/50 transition-all duration-300">
              <Users className="w-10 h-10 text-shogun-gold mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Equipes de Liderança</h3>
              <p className="text-shogun-silver text-sm">Treinamentos para gestores e C-Level</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-shogun-gold/50 transition-all duration-300">
              <Target className="w-10 h-10 text-shogun-gold mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Times de Vendas</h3>
              <p className="text-shogun-silver text-sm">Comunicação persuasiva e conversão</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-shogun-gold/50 transition-all duration-300">
              <MessageSquare className="w-10 h-10 text-shogun-gold mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Comunicação Interna</h3>
              <p className="text-shogun-silver text-sm">Alinhamento e cultura organizacional</p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <a
              href="https://wa.me/message/LEZJK4MOGH2NM1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-shogun-gold hover:bg-shogun-gold-dark text-shogun-black font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg shadow-shogun-gold/30 hover:shadow-shogun-gold/50"
            >
              SOLICITAR PROPOSTA CORPORATIVA
            </a>
            <p className="text-shogun-silver/60 text-sm mt-4">
              Orçamento personalizado via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporatePrograms;
