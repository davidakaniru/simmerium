import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { PartnersBar } from "../components/PartnersBar";
import { ProductsSection } from "../components/ProductsSection";
import { ImpactBanner } from "../components/ImpactBanner";
import { IndustriesSection } from "../components/IndustriesSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { GlobalPresence } from "../components/GlobalPresence";
import { CTABanner } from "../components/CTABanner";
import { ContactSection } from "../components/ContactSection";
import { AnimatedSection } from "../components/AnimatedSection";
import { GlobalReach } from "../components/GlobalReach";
import { FAQSection } from "../components/FAQSection";
export function HomePage() {
  return (
    <>
      <HeroSection />
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <PartnersBar />
      <AnimatedSection>
        <GlobalReach />
        {/* <TeamSection /> */}
      </AnimatedSection>
      <AnimatedSection>
        <ProductsSection />
      </AnimatedSection>
      {/* <AnimatedSection>
        <ProcessSection />
      </AnimatedSection> */}
      <ImpactBanner />
      <AnimatedSection>
        <IndustriesSection />
      </AnimatedSection>
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection>
        <GlobalPresence />
      </AnimatedSection>
      {/* <AnimatedSection>
        <Sustainability />
      </AnimatedSection> */}
      {/* <AnimatedSection>
        <CertificationsSection />
      </AnimatedSection> */}
      {/* <AnimatedSection>
        <CareersSection />
      </AnimatedSection> */}
      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>
      {/* <AnimatedSection>
        <NewsSection />
      </AnimatedSection> */}
      <CTABanner />
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </>
  );
}
