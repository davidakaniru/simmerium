import {
  GlobeIcon,
  LightbulbIcon,
  TrendingUpIcon,
  LeafIcon } from
'lucide-react';
export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://www.sgs.com/-/media/sgscorp/images/temporary/sgs-oil-and-gas-laboratory-saint-petersburg-russia-3.cdn.en-NG.1.jpg"
                alt="Simmerium laboratory and innovation"
                className="w-full h-[400px] lg:h-[550px] object-cover"
                loading="lazy" />
              
            </div>
            {/* Decorative frame */}
            <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-2xl border-2 border-simmerium-gold/20"></div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-simmerium-gold/10 rounded-2xl -z-10"></div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-simmerium-gold"></div>
              <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                Why Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-simmerium-heading mb-6 leading-tight">
              Why Simmerium?
            </h2>
            <p className="text-lg text-simmerium-body mb-12">
              We don't just supply chemicals; we engineer comprehensive
              solutions that drive your business forward.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Global Expertise */}
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-simmerium-cream flex items-center justify-center mb-4 relative group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                  <div className="absolute inset-0 rounded-2xl border-2 border-simmerium-gold/0 group-hover:border-simmerium-gold/30 scale-110 group-hover:scale-100 transition-all duration-500"></div>
                  <GlobeIcon className="w-7 h-7 text-simmerium-gold" />
                </div>
                <h3 className="text-lg font-bold text-simmerium-heading mb-2">
                  Global Expertise
                </h3>
                <p className="text-simmerium-body text-sm leading-relaxed">
                  Local presence backed by global resources, ensuring rapid
                  response and tailored solutions anywhere in the world.
                </p>
              </div>

              {/* Innovation-Driven */}
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-simmerium-cream flex items-center justify-center mb-4 relative group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                  <div className="absolute inset-0 rounded-2xl border-2 border-simmerium-gold/0 group-hover:border-simmerium-gold/30 scale-110 group-hover:scale-100 transition-all duration-500"></div>
                  <LightbulbIcon className="w-7 h-7 text-simmerium-gold" />
                </div>
                <h3 className="text-lg font-bold text-simmerium-heading mb-2">
                  Innovation-Driven
                </h3>
                <p className="text-simmerium-body text-sm leading-relaxed">
                  State-of-the-art R&D facilities continuously developing
                  next-generation chemistries for evolving industry challenges.
                </p>
              </div>

              {/* Proven Results */}
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-simmerium-cream flex items-center justify-center mb-4 relative group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                  <div className="absolute inset-0 rounded-2xl border-2 border-simmerium-gold/0 group-hover:border-simmerium-gold/30 scale-110 group-hover:scale-100 transition-all duration-500"></div>
                  <TrendingUpIcon className="w-7 h-7 text-simmerium-gold" />
                </div>
                <h3 className="text-lg font-bold text-simmerium-heading mb-2">
                  Proven Results
                </h3>
                <p className="text-simmerium-body text-sm leading-relaxed">
                  Decades of field-proven performance demonstrating measurable
                  ROI and operational improvements for our partners.
                </p>
              </div>

              {/* Sustainable Practices */}
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-simmerium-cream flex items-center justify-center mb-4 relative group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                  <div className="absolute inset-0 rounded-2xl border-2 border-simmerium-gold/0 group-hover:border-simmerium-gold/30 scale-110 group-hover:scale-100 transition-all duration-500"></div>
                  <LeafIcon className="w-7 h-7 text-simmerium-gold" />
                </div>
                <h3 className="text-lg font-bold text-simmerium-heading mb-2">
                  Sustainable Practices
                </h3>
                <p className="text-simmerium-body text-sm leading-relaxed">
                  Commitment to environmentally responsible formulations that
                  meet or exceed stringent global regulatory standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}