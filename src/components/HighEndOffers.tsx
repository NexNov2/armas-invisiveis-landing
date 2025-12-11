const highEndOffers = [
  {
    name: "A LÂMINA DA AUTORIDADE",
    price: "R$ 1.497,00",
    description: "Treinamento Digital de 49 aulas + Exercícios estratégicos + Bônus exclusivos",
    cta: "Solicitar esse nível",
  },
  {
    name: "ARSENAL DE INFLUÊNCIA",
    price: "R$ 6.000,00",
    description: "Mentoria Híbrida — Treinamento digital + 8 encontros ao vivo",
    cta: "Falar com a equipe",
  },
  {
    name: "SHOGUN IMPERATOR",
    price: "R$ 18.000,00",
    description: "Mentoria Master one-to-one, diagnóstico, estratégia e posicionamento",
    cta: "Solicitar diagnóstico exclusivo",
  },
];

const HighEndOffers = () => {
  return (
    <section id="formacoes" className="py-16 md:py-24 section-dark" aria-labelledby="highend-title">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="highend-title"
              className="text-2xl md:text-3xl lg:text-4xl font-black mb-4"
            >
              Formações avançadas para líderes <span className="gold-text">experientes</span>
            </h2>
            <p className="text-muted-foreground">
              Se o que você busca é transformação profunda, existem caminhos maiores. Escolha o nível que combina com sua ambição.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {highEndOffers.map((offer, index) => (
              <article
                key={index}
                className="card-premium text-center"
              >
                <h3 className="text-lg font-bold gold-text mb-2">{offer.name}</h3>
                <p className="text-3xl font-black mb-4">{offer.price}</p>
                <p className="text-sm text-muted-foreground mb-6">{offer.description}</p>
                <a
                  href="https://wa.me/message/LEZJK4MOGH2NM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold text-sm w-full block"
                >
                  {offer.cta}
                </a>
              </article>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/message/LEZJK4MOGH2NM1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-shogun-gold hover:underline text-sm"
            >
              Solicitar proposta premium →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighEndOffers;
