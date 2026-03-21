import { useEffect } from 'react';
import { ContactSection } from '../components/ContactSection';
import { GlobalPresence } from '../components/GlobalPresence';
import { FAQSection } from '../components/FAQSection';
import { AnimatedSection } from '../components/AnimatedSection';
export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-simmerium-navy py-32 pt-40 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
            alt="Modern Office"
            className="absolute inset-0 w-full h-full object-cover opacity-30" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-simmerium-navy/90 via-simmerium-navy/70 to-simmerium-navy/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,25,35,0.6)_100%)]"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <div
            className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-simmerium-gold/40 float-particle"
            style={{
              animationDelay: '0s'
            }}>
          </div>
          <div
            className="absolute top-[25%] left-[75%] w-2 h-2 rounded-full bg-simmerium-gold/30 float-particle"
            style={{
              animationDelay: '1.5s'
            }}>
          </div>
          <div
            className="absolute top-[60%] left-[20%] w-1 h-1 rounded-full bg-simmerium-light-gold/50 float-particle"
            style={{
              animationDelay: '3s'
            }}>
          </div>
          <div
            className="absolute top-[45%] left-[85%] w-1.5 h-1.5 rounded-full bg-simmerium-gold/35 float-particle"
            style={{
              animationDelay: '4.5s'
            }}>
          </div>
          <div
            className="absolute top-[70%] left-[55%] w-2 h-2 rounded-full bg-simmerium-light-gold/25 float-particle"
            style={{
              animationDelay: '2s'
            }}>
          </div>
          <div
            className="absolute top-[35%] left-[40%] w-1 h-1 rounded-full bg-simmerium-gold/40 float-particle"
            style={{
              animationDelay: '5s'
            }}>
          </div>
        </div>

        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-simmerium-gold/5 rounded-full filter blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span
            className="hidden md:inline-flex items-center gap-2 py-2 px-5 rounded-full glass-card text-simmerium-light-gold text-sm font-semibold tracking-widest mb-8 animate-slide-up"
            style={{
              animationDelay: '0.2s'
            }}>
            
            <a href="#home" className="hover:text-white transition-colors">
              HOME
            </a>
            <span>/</span>
            <span className="text-white">CONTACT US</span>
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl animate-slide-up"
            style={{
              animationDelay: '0.4s'
            }}>
            
            Let's Build the <span className="text-gradient-gold">Future</span>{' '}
            of Energy Together
          </h1>
          <p
            className="text-xl text-gray-300 max-w-3xl leading-relaxed animate-slide-up"
            style={{
              animationDelay: '0.6s'
            }}>
            
            Whether you need technical support, product information, or want to
            discuss a strategic partnership, our global team of experts is ready
            to assist you.
          </p>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>

      {/* Global Locations */}
      <AnimatedSection>
        <GlobalPresence />
      </AnimatedSection>

      {/* FAQs */}
      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>
    </div>);

}