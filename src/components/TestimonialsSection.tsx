import React, { lazy } from 'react';
import { QuoteIcon, StarIcon } from 'lucide-react';
export function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop')`
        }}>
      </div>
      <div className="absolute inset-0 bg-simmerium-navy/90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
              Testimonials
            </span>
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the partners who rely on
            our chemical solutions every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="glass-card rounded-2xl p-8 relative flex flex-col h-full hover:bg-white/12 transition-all duration-500">
            <QuoteIcon className="w-12 h-12 text-simmerium-gold/30 absolute top-6 right-6" />
            <div className="flex gap-1 mb-6">
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
            </div>
            <p className="text-gray-200 italic text-lg leading-relaxed mb-8 flex-grow relative z-10">
              "Simmerium's corrosion inhibitors reduced our maintenance costs by
              40% in the first year. Their technical support team is exceptional
              — they truly understand our operational challenges."
            </p>
            <div className="w-full h-px bg-white/10 mb-6"></div>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Robert Chen"
                className="w-14 h-14 rounded-full object-cover border-2 border-simmerium-gold/40 shadow-lg"
                loading="lazy" />
              
              <div>
                <h4 className="font-bold text-white text-sm">Robert Chen</h4>
                <p className="text-xs text-gray-400 font-medium">
                  VP of Operations
                </p>
                <p className="text-xs text-simmerium-gold font-semibold">
                  PetroGulf Energy
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="glass-card rounded-2xl p-8 relative flex flex-col h-full hover:bg-white/12 transition-all duration-500">
            <QuoteIcon className="w-12 h-12 text-simmerium-gold/30 absolute top-6 right-6" />
            <div className="flex gap-1 mb-6">
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
            </div>
            <p className="text-gray-200 italic text-lg leading-relaxed mb-8 flex-grow relative z-10">
              "We've partnered with Simmerium across three continents. Their
              consistency in product quality and their ability to customize
              solutions for local conditions is unmatched in the industry."
            </p>
            <div className="w-full h-px bg-white/10 mb-6"></div>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
                alt="Fatima Al-Zahra"
                className="w-14 h-14 rounded-full object-cover border-2 border-simmerium-gold/40 shadow-lg"
                loading="lazy" />
              
              <div>
                <h4 className="font-bold text-white text-sm">
                  Fatima Al-Zahra
                </h4>
                <p className="text-xs text-gray-400 font-medium">
                  Head of Procurement
                </p>
                <p className="text-xs text-simmerium-gold font-semibold">
                  Arabian Drilling Co.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="glass-card rounded-2xl p-8 relative flex flex-col h-full hover:bg-white/12 transition-all duration-500">
            <QuoteIcon className="w-12 h-12 text-simmerium-gold/30 absolute top-6 right-6" />
            <div className="flex gap-1 mb-6">
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
              <StarIcon className="w-5 h-5 fill-simmerium-gold text-simmerium-gold" />
            </div>
            <p className="text-gray-200 italic text-lg leading-relaxed mb-8 flex-grow relative z-10">
              "The transition to Simmerium's biodegradable product line helped
              us meet our sustainability targets while actually improving well
              performance. A rare win-win."
            </p>
            <div className="w-full h-px bg-white/10 mb-6"></div>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face"
                alt="Marcus Thompson"
                className="w-14 h-14 rounded-full object-cover border-2 border-simmerium-gold/40 shadow-lg"
                loading="lazy" />
              
              <div>
                <h4 className="font-bold text-white text-sm">
                  Marcus Thompson
                </h4>
                <p className="text-xs text-gray-400 font-medium">
                  HSE Director
                </p>
                <p className="text-xs text-simmerium-gold font-semibold">
                  Nordic Energy Partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}