const Promise = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 gold-border-top bg-muted" aria-labelledby="promise-title">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p
            id="promise-title"
            className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed mb-6 animate-fade-in-up"
          >
            Em menos de <span className="gold-text">2 horas de conteúdo direto ao ponto</span>, você domina as armas invisíveis que transformam qualquer líder comum em um comunicador{" "}
            <span className="gold-text">respeitado, influente e impossível de ser ignorado</span>.
          </p>
          <p className="text-lg text-muted-foreground">
            20 micro-aulas. Aplicáveis no mesmo dia. Sem teorias desnecessárias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Promise;
