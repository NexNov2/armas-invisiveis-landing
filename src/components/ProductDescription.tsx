const ProductDescription = () => {
  const deliverables = [
    "20 aulas curtas e práticas",
    "Cortes de mentorias e sessões reais",
    "Material em PDF e checklists Shogun",
    "Sessão Executiva Shogun ao vivo (apenas para os 100 primeiros inscritos)",
    "Acesso via plataforma responsiva",
  ];

  const bonuses = [
    { name: "Checklist Shogun de Comunicação Executiva", value: "R$97" },
    { name: 'Whitepaper Premium "A Lâmina Infalível da Comunicação Samurai"', value: "R$197" },
    { name: "Sessão Executiva Shogun no Zoom (ao vivo)", value: "R$297" },
  ];

  return (
    <section id="oferta" className="py-16 md:py-24 section-dark gold-border-top" aria-labelledby="product-title">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            id="product-title"
            className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-4"
          >
            <span className="gold-text">ARMAS INVISÍVEIS</span>
          </h2>
          <p className="text-lg md:text-xl text-center text-muted-foreground mb-12">
            O CÓDIGO DOS LÍDERES QUE NÃO ACEITAM MEDIOCRIDADE
          </p>

          {/* Description */}
          <div className="space-y-6 mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-foreground/90">
              ARMAS INVISÍVEIS é um treinamento compacto, estratégico e audiovisual criado para empresários, gestores e líderes que querem elevar sua comunicação, presença, influência e capacidade de conduzir equipes, negociações e vendas com autoridade real.
            </p>
            <p className="text-lg text-foreground/90">
              Nada de teoria. Nada de enrolação. Nada de "fale assim, fale assado". É poder aplicado. Imediato. Prático. <span className="gold-text">Direto como um Samurai.</span>
            </p>
            <p className="text-lg text-foreground/90">
              Você terá acesso a cortes selecionados das minhas mentorias, treinamentos e consultorias, além de novos vídeos práticos, em formato de micro-treinamentos que cabem na rotina corrida de qualquer líder.
            </p>
          </div>

          {/* Deliverables */}
          <div className="card-premium mb-8">
            <h3 className="text-xl font-bold mb-4 gold-text">O que está incluso:</h3>
            <ul className="space-y-3">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-shogun-gold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bonuses */}
          <div className="card-premium border-shogun-gold/50 mb-8">
            <h3 className="text-xl font-bold mb-4 gold-text">🎁 BÔNUS EXCLUSIVOS</h3>
            <ul className="space-y-4">
              {bonuses.map((bonus, index) => (
                <li key={index} className="flex items-start justify-between gap-4 pb-3 border-b border-border last:border-0 last:pb-0">
                  <span>Bônus {index + 1} — {bonus.name}</span>
                  <span className="text-shogun-gold font-bold whitespace-nowrap">Valor {bonus.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-center text-lg">
              Valor total dos bônus: <span className="gold-text font-bold">R$591,00</span> — <strong>Incluídos gratuitamente</strong> no treinamento.
            </p>
          </div>

          {/* Guarantee */}
          <div className="bg-muted rounded-xl p-6 text-center mb-10">
            <p className="text-lg font-bold mb-2">🛡️ Garantia SHOGUN de 7 dias</p>
            <p className="text-muted-foreground">
              Sem perguntas. Se não sentir a diferença, devolvemos 100% do valor.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://chk.eduzz.com/60EE3BYD03"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-xl px-12 py-5 inline-block"
              onClick={() => {
                if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'InitiateCheckout');
              }}
            >
              QUERO A TRANSFORMAÇÃO — R$ 49,90
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
