const testimonials = [
  {
    name: "Salete Cipra",
    role: "Empresária e Terapeuta Comportamental",
    text: "A mentoria com Juliano fortaleceu minha confiança e posicionamento frente a clientes de Alto Ticket. Aumentou o valor percebido dos meus serviços e atendimentos. Agora consigo agenda sempre lotada com clientes Classe A. Juliano é um dos melhores mentores que conheci. Ele transformou minha vida.",
  },
  {
    name: "Marcos Czar",
    role: "Empresário",
    text: "A mentoria com Juliano ajudou eu e meu sócio a alavancar os negócios e comunicar maior valor sobre nossos serviços. Juliano trouxe transformação e nos guiou com precisão sobre como aprimorar nosso discurso e fortalecer nossa imagem profissional. As apresentações, vendas e relacionamentos comerciais se tornaram muito mais poderosos e lucrativos.",
  },
  {
    name: "Érica de Luca",
    role: "Veterinária e Terapeuta",
    text: "A mentoria com Juliano me ajudou a montar uma palestra profissional, ganhei confiança e muito mais autoridade. Após a mentoria já publiquei e lancei um livro na Bienal do Livro em São Paulo e fiz várias palestras em eventos importantes.",
  },
  {
    name: "Rodrigo",
    role: "Sócio VAE Saúde",
    text: "A mentoria com Juliano transformou o atendimento em Padrão de Excelência. Nossos Profissionais estão muito mais confiantes, estratégicos e altamente qualificados. Foi uma transformação real e consistente.",
  },
];

const WrittenTestimonials = () => {
  return (
    <section className="py-16 md:py-24 section-dark" aria-labelledby="written-testimonials-title">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            id="written-testimonials-title"
            className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-12"
          >
            O que dizem os <span className="gold-text">líderes transformados</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="card-testimonial"
                aria-label={`Depoimento de ${testimonial.name}`}
              >
                <blockquote className="text-foreground/90 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                <footer>
                  <p className="font-bold gold-text">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </footer>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://chk.eduzz.com/60EE3BYD03"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block"
              onClick={() => {
                if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'InitiateCheckout');
              }}
            >
              QUERO ME TORNAR REFERÊNCIA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WrittenTestimonials;
