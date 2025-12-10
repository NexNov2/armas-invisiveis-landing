const VideoTestimonials = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 section-gold" aria-labelledby="video-testimonials-title">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="video-testimonials-title" className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 text-black">
            Depoimentos de Líderes Transformados
          </h2>

          {/* Vimeo Embed - Vertical Video */}
          <div className="relative max-w-sm mx-auto mb-8">
            <div className="aspect-[9/16] rounded-xl overflow-hidden shadow-2xl border-4 border-black/20">
              <iframe
                src="https://player.vimeo.com/video/1133995540?badge=0&autopause=0&player_id=0&app_id=58479"
                title="Depoimentos reais de líderes que aplicaram as Armas Invisíveis"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <p className="text-black/80 mb-8">
            Depoimentos reais de líderes que aplicaram as Armas Invisíveis.
          </p>

          <a
            href="https://chk.eduzz.com/60EE3BYD03"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-black/80 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 inline-block"
            onClick={() => {
              if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'InitiateCheckout');
            }}
          >
            DESTRAVAR MINHA AUTORIDADE AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
