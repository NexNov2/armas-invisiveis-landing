const Promise = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 gold-border-top bg-muted" aria-labelledby="promise-title">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Activation Text */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 animate-fade-in-up">
            <span className="gold-text">Isso não é para assistir.</span><br />
            <span className="gold-text">É para ativar.</span>
          </p>
          
          <p
            id="promise-title"
            className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed mb-6 animate-fade-in-up"
          >
            Em menos de 2 horas, você passa por <span className="text-shogun-gold-dark">20 ativações práticas</span> que ajustam sua comunicação, presença e influência, com aplicação imediata no mesmo dia.
          </p>
          
          <div className="space-y-2 text-lg text-secondary-foreground/80">
            <p>Sem teoria desnecessária.</p>
            <p>Sem motivação vazia.</p>
            <p>Sem conteúdo para inflar ego.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promise;
