const Footer = () => {
  return (
    <footer className="py-8 section-dark border-t border-border" role="contentinfo">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo_juliano.png"
              alt="Juliano Mentor Logo"
              className="h-12 w-auto"
            />
            <div>
              <p className="font-bold">Comunicação Shogun</p>
              <p className="text-sm text-muted-foreground">Armas Invisíveis</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground" aria-label="Links do rodapé">
            <a href="#beneficios" className="hover:text-shogun-gold transition-colors">Benefícios</a>
            <a href="#oferta" className="hover:text-shogun-gold transition-colors">Oferta</a>
            <a href="#faq" className="hover:text-shogun-gold transition-colors">FAQ</a>
            <a
              href="https://wa.me/message/LEZJK4MOGH2NM1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-shogun-gold transition-colors"
            >
              Contato
            </a>
          </nav>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© 2025 Comunicação Shogun — Armas Invisíveis.</p>
            <p>Todos os direitos reservados.</p>
            <p className="text-xs mt-1">Site desenvolvido por <a href="https://nexnov.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-shogun-gold transition-colors">NexNov</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
