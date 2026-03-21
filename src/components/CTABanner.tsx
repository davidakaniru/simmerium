import React from 'react';
export function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&h=600&fit=crop')`
        }}>
      </div>
      <div className="absolute inset-0 bg-simmerium-navy/85"></div>

      {/* Decorative accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-simmerium-gold/5 transform skew-x-12 translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Partner with Simmerium for world-class chemical solutions tailored
              to your specific field challenges and operational goals.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#contact-us"
              className="inline-block bg-simmerium-gold hover:bg-simmerium-light-gold text-white px-12 py-5 rounded-lg font-bold text-lg shadow-lg shadow-simmerium-gold/20 hover:shadow-simmerium-gold/40 transform hover:-translate-y-1 transition-all duration-500 gold-glow">
              
              Get in Touch Today
            </a>
          </div>
        </div>
      </div>
    </section>);

}