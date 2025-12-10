import julianoImg from "@/assets/juliano.webp";

const Authority = () => {
  return (
    <section id="autoridade" className="py-16 md:py-24 section-light" aria-labelledby="authority-title">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <img
                  src={julianoImg}
                  alt="Juliano Silva - Especialista em Comunicação de Alta Performance"
                  className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-50">
                  <img
                    src="/logo_juliano.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <h2
                id="authority-title"
                className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-secondary-foreground"
              >
                Sobre <span className="text-shogun-gold-dark">Juliano Silva</span>
              </h2>

              <div className="space-y-4 text-secondary-foreground/80">
                <p>
                  Juliano Silva é Especialista em Comunicação de Alta Performance para líderes e empresários. Há 18 anos treina profissionais que ocupam posições de decisão, lideram equipes e precisam se comunicar com clareza, autoridade e influência.
                </p>
                <p>
                  Sua abordagem une estratégia, neurocomunicação, oratória avançada, liderança de impacto e persuasão aplicada ao ambiente corporativo.
                </p>
                <p>
                  Formado em Educação, pós-graduado pela UTFPR e com especializações executivas em Comunicação e Negócios pela FGV e FEBRACIS, Juliano se tornou referência pela capacidade de traduzir teoria complexa em transformação prática e imediata.
                </p>
                <p className="font-semibold text-secondary-foreground">
                  Sua missão é transformar líderes comuns em vozes de autoridade, respeito e influência real.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="https://chk.eduzz.com/60EE3BYD03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta inline-block"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'InitiateCheckout');
                  }}
                >
                  QUERO APRENDER COM O JULIANO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
