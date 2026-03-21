import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { PartnersBar } from "../components/PartnersBar";
import { ProductsSection } from "../components/ProductsSection";
import { ProcessSection } from "../components/ProcessSection";
import { ImpactBanner } from "../components/ImpactBanner";
import { IndustriesSection } from "../components/IndustriesSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { TeamSection } from "../components/TeamSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { GlobalPresence } from "../components/GlobalPresence";
import { Sustainability } from "../components/Sustainability";
import { CertificationsSection } from "../components/CertificationsSection";
import { CareersSection } from "../components/CareersSection";
import { FAQSection } from "../components/FAQSection";
import { NewsSection } from "../components/NewsSection";
import { CTABanner } from "../components/CTABanner";
import { ContactSection } from "../components/ContactSection";
import { AnimatedSection } from "../components/AnimatedSection";
export function HomePage() {
  return (
    <>
      <HeroSection />
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <PartnersBar />
      <AnimatedSection>
        <ProductsSection />
      </AnimatedSection>
      <AnimatedSection>
        <ProcessSection />
      </AnimatedSection>
      <ImpactBanner />
      <AnimatedSection>
        <IndustriesSection />
      </AnimatedSection>
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection>
        <TeamSection />
      </AnimatedSection>
      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection>
        <GlobalPresence />
      </AnimatedSection>
      <AnimatedSection>
        <Sustainability />
      </AnimatedSection>
      <AnimatedSection>
        <CertificationsSection />
      </AnimatedSection>
      <AnimatedSection>
        <CareersSection />
      </AnimatedSection>
      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>
      <AnimatedSection>
        <NewsSection />
      </AnimatedSection>
      <CTABanner />
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </>
  );
}
