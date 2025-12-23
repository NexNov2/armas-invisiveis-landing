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
                src="https://www.youtube.com/embed/Bkq3xPm3qoY"
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
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 animate-fade-in-up"
          >
            As <span className="gold-text text-shadow-gold">Armas Invisíveis</span> da Comunicação de Alta Performance!
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-up gold-text">
            Nenhum líder mediano conhece. Vencedores usam em silêncio.
          </p>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 animate-fade-in-up delay-100">
            Para líderes e profissionais que sabem que falar bem não é suficiente, é preciso ser percebido com peso, direção e influência.
          </p>

          {/* CTA Button - No price */}
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
