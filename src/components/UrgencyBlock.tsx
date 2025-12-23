import CountdownTimer from "./CountdownTimer";

const UrgencyBlock = () => {
  // Target date: 15/01/2026 às 23:59
  const targetDate = new Date("2026-01-15T23:59:00");

  return (
    <section className="py-16 md:py-24 section-dark gold-border-top" aria-labelledby="urgency-title">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Ativação com Prazo */}
          <div className="card-premium border-shogun-gold/50 mb-10 text-center">
            <h3 className="text-xl md:text-2xl font-black mb-4 gold-text">
              ⚔️ ATIVAÇÃO COM PRAZO — LEIA COM ATENÇÃO
            </h3>
            <p className="text-lg text-foreground/90 mb-2">
              Este não é um curso aberto e eterno.
            </p>
            <p className="text-lg text-foreground/90 mb-2">
              O ARMAS INVISÍVEIS funciona em ciclos de ativação.
            </p>
            <p className="text-lg text-foreground/90">
              E os bônus abaixo não permanecem disponíveis após o encerramento deste ciclo.
            </p>
          </div>

          {/* Escassez de Bônus */}
          <div className="bg-gradient-to-b from-shogun-gold/20 to-transparent rounded-2xl p-8 mb-10">
            <h3 id="urgency-title" className="text-xl md:text-2xl font-bold text-center mb-4">
              <span className="gold-text">Todos temporários até 15/01/2025</span>
            </h3>
            <p className="text-center text-lg mb-6">
              ⏳ BÔNUS DISPONÍVEIS ATÉ: <span className="gold-text font-bold">15/01/2025 às 23:59</span>
            </p>
            <CountdownTimer targetDate={targetDate} />
          </div>

          {/* Preço */}
          <div className="text-center mb-10">
            <p className="text-xl md:text-2xl font-bold mb-2">
              Acesso à oferta de lançamento por apenas
            </p>
            <p className="text-5xl md:text-6xl font-black gold-text mb-4">
              R$ 49,90
            </p>
            <p className="text-muted-foreground mb-6">
              <br />
              <span className="text-foreground">Esse valor é de validação. Depois volta para R$ 97,00.</span>
            </p>
            <a
              href="https://chk.eduzz.com/60EE3BYD03"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-xl px-12 py-5 inline-block"
              onClick={() => {
                if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'InitiateCheckout');
              }}
            >
              ATIVAR MINHA AUTORIDADE AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencyBlock;
