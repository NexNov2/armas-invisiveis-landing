import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "O que você vai aprender", href: "#bullets" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Autoridade", href: "#autoridade" },
  { label: "Oferta", href: "#oferta" },
  { label: "Outras Formações", href: "#formacoes" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="Voltar ao início">
            <img
              src="/logo_juliano.png"
              alt="Juliano Mentor Logo"
              className="h-10 lg:h-12 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Menu principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-shogun-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://chk.eduzz.com/60EE3BYD03"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-sm"
              onClick={() => {
                if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'InitiateCheckout');
              }}
            >
              QUERO A TRANSFORMAÇÃO
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            className="xl:hidden py-4 border-t border-border animate-fade-in"
            aria-label="Menu mobile"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-foreground/80 hover:text-shogun-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://chk.eduzz.com/60EE3BYD03"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta block text-center mt-4"
            >
              QUERO A TRANSFORMAÇÃO
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
