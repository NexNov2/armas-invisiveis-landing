import apresentImg from "@/assets/apresent.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={apresentImg}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Video Embed */}
          <div className="mb-8 animate-fade-in">
            <div className="relative aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-gold border border-shogun-gold/30">
              <iframe
                src="https://www.youtube.com/embed/-rTRU8o0b0g"
                title="Armas Invisíveis - Apresentação por Juliano Silva"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Headline */}
          <h1
            id="hero-headline"
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 animate-fade-in-up"
          >
            As <span className="gold-text text-shadow-gold">Armas Invisíveis</span> que Multiplicam sua Influência, Liderança e Vendas em Apenas{" "}
            <span className="gold-text">20 Aulas Rápidas</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 animate-fade-in-up delay-100">
            Nenhum líder mediano usa isso. Os melhores usam em silêncio.
          </p>

          {/* Microcopy */}
          <p className="text-sm md:text-base text-shogun-gold mb-8 animate-fade-in-up delay-200">
            Acesso imediato. Formato micro-aulas. Garantia SHOGUN de 7 dias.
          </p>

          {/* CTA Button */}
          <div className="animate-scale-in delay-300">
            <a
              href="https://chk.eduzz.com/60EE3BYD03"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-lg px-10 py-5 inline-block"
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

export default Hero;
