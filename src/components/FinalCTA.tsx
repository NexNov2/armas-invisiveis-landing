const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-gold-black" aria-labelledby="final-cta-title">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="final-cta-title"
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-4"
          >
            Últimas vagas — <span className="gold-text">Destrave sua autoridade agora</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            Líderes decidem. Líderes agem. Líderes evoluem rápido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chk.eduzz.com/60EE3BYD03"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-lg px-10 py-5"
              onClick={() => {
                if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'InitiateCheckout');
              }}
            >
              DESTRAVAR MINHA AUTORIDADE AGORA
            </a>
            <a
              href="https://wa.me/message/LEZJK4MOGH2NM1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
