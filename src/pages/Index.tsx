import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Promise from "@/components/Promise";
import BulletsPremium from "@/components/BulletsPremium";
import ProductDescription from "@/components/ProductDescription";
import VideoTestimonials from "@/components/VideoTestimonials";
import WrittenTestimonials from "@/components/WrittenTestimonials";
import Authority from "@/components/Authority";
import HighEndOffers from "@/components/HighEndOffers";
import CorporatePrograms from "@/components/CorporatePrograms";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Promise />
      <BulletsPremium />
      <ProductDescription />
      <VideoTestimonials />
      <WrittenTestimonials />
      <Authority />
      <HighEndOffers />
      <CorporatePrograms />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
