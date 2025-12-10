const CorporatePrograms = () => {
  return (
    <section className="py-12 md:py-16 bg-shogun-silver-dark" aria-labelledby="corporate-title">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="corporate-title"
            className="text-xl md:text-2xl font-bold mb-4 text-secondary-foreground"
          >
            Programas de Liderança Samurai
          </h2>
          <p className="text-secondary-foreground/80 mb-6">
            Comunicação que Multiplica Resultados. Projetos personalizados para líderes, equipes de vendas e comunicação interna. Contato via WhatsApp para orçamento.
          </p>
          <a
            href="https://wa.me/message/LEZJK4MOGH2NM1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold border-shogun-gold-dark text-shogun-gold-dark hover:bg-shogun-gold-dark hover:text-white inline-block"
          >
            SOLICITAR PROPOSTA CORPORATIVA
          </a>
        </div>
      </div>
    </section>
  );
};

export default CorporatePrograms;
