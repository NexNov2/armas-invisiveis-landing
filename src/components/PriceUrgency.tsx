import { useState, useEffect } from "react";

const PriceUrgency = () => {
  const targetDate = new Date("2025-01-15T23:59:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-16 md:py-24 section-dark gold-border-top" aria-labelledby="price-urgency-title">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Price Block */}
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl font-bold mb-2 text-foreground">
              Acesso à oferta de lançamento por apenas
            </p>
            <p className="text-5xl md:text-6xl lg:text-7xl font-black gold-text mb-4">
              R$ 49,90
            </p>
            <p className="text-muted-foreground">
              Acesso imediato • Garantia SHOGUN de 7 dias
            </p>
          </div>

          {/* Urgency Block */}
          <div className="bg-gradient-to-r from-shogun-gold/20 via-shogun-gold/30 to-shogun-gold/20 border border-shogun-gold/50 rounded-2xl p-6 md:p-8 mb-10">
            <h3 
              id="price-urgency-title"
              className="text-xl md:text-2xl font-bold text-center mb-2 text-foreground"
            >
              ⏳ BÔNUS DISPONÍVEIS ATÉ: <span className="gold-text">15/01/2025 às 23:59</span>
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Todos os bônus são temporários e serão removidos após essa data.
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-lg mx-auto">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center border border-shogun-gold/30">
                <span className="text-2xl md:text-4xl font-black gold-text block">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  Dias
                </span>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center border border-shogun-gold/30">
                <span className="text-2xl md:text-4xl font-black gold-text block">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  Horas
                </span>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center border border-shogun-gold/30">
                <span className="text-2xl md:text-4xl font-black gold-text block">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  Min
                </span>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center border border-shogun-gold/30">
                <span className="text-2xl md:text-4xl font-black gold-text block">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  Seg
                </span>
              </div>
            </div>
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
              ATIVAR MINHA AUTORIDADE AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceUrgency;
