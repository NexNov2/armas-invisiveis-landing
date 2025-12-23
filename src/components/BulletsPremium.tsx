const bullets = [
  {
    title: "A Arma da Presença Imediata",
    description: "como entrar em qualquer sala e assumir o comando sem dizer uma palavra.",
  },
  {
    title: "A Arma da Voz de Autoridade",
    description: "ritmo, pausa e intenção — as três chaves que fazem qualquer plateia silenciar e ouvir.",
  },
  {
    title: "A Arma da Clareza Executiva",
    description: "fale menos, diga mais, e torne suas mensagens impossíveis de ignorar.",
  },
  {
    title: "A Arma da Persuasão de Alto Nível",
    description: "ativadores mentais usados por líderes que influenciam agendas e decisões.",
  },
  {
    title: "A Arma da Venda Elegante",
    description: "técnicas que aumentam conversão sem parecer vendedor.",
  },
  {
    title: "A Arma da Reunião Estratégica",
    description: "conduza encontros com objetividade e respeito.",
  },
  {
    title: "A Arma do Pitch Imediato",
    description: "como explicar sua ideia, proposta ou solução em 30 segundos com impacto.",
  },
  {
    title: "A Arma do Controle Emocional na Fala",
    description: "segurança, calma e firmeza sob pressão.",
  },
  {
    title: "A Arma da Liderança Comunicacional",
    description: "como engajar, motivar e alinhar equipes sem apelos rasos.",
  },
  {
    title: "A Arma da Presença Digital",
    description: "como usar seus vídeos e reuniões online para aumentar respeito e relevância.",
  },
];

const BulletsPremium = () => {
  return (
    <section id="bullets" className="py-16 md:py-24 section-light" aria-labelledby="bullets-title">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            id="bullets-title"
            className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-4 text-secondary-foreground"
          >
            O que você vai desbloquear em <span className="text-shogun-gold-dark">20 aulas curtas e práticas</span>
          </h2>
          
          {/* Micro-frame de ancoragem */}
          <p className="text-lg md:text-xl text-center text-secondary-foreground/80 mb-12 font-medium">
            O que você <span className="font-bold text-shogun-gold-dark">DESTRAVA</span> quando ajusta sua comunicação no nível certo:
          </p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {bullets.map((bullet, index) => (
              <div
                key={index}
                className="bg-background/5 border border-shogun-gold-dark/20 rounded-xl p-5 hover:border-shogun-gold-dark/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl" role="img" aria-label="Espada">⚔️</span>
                  <div>
                    <h3 className="font-bold text-secondary-foreground mb-1">{bullet.title}</h3>
                    <p className="text-secondary-foreground/70 text-sm">{bullet.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-secondary-foreground/80 mb-8">
            E mais <strong>10 armas práticas</strong> — todas aplicáveis no mesmo dia.
          </p>

          <div className="text-center">
            <a
              href="https://chk.eduzz.com/60EE3BYD03"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-block"
              onClick={() => {
                if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'InitiateCheckout');
              }}
            >
              LIBERAR MINHA ARMA INVISÍVEL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletsPremium;
