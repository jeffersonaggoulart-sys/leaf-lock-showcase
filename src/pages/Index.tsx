import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProtectionFeatures from "@/components/ProtectionFeatures";
import BenefitsSection from "@/components/BenefitsSection";
import WarrantySection from "@/components/WarrantySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProtectionFeatures />
        <BenefitsSection />
        <WarrantySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
