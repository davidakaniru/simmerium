import React, { lazy } from 'react';
import {
  ClipboardCheckIcon,
  PenToolIcon,
  RocketIcon,
  BarChart3Icon } from
'lucide-react';
export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-simmerium-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
              Our Approach
            </span>
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-simmerium-heading mb-6">
            How We Deliver Results
          </h2>
          <p className="text-lg text-simmerium-body max-w-2xl mx-auto">
            A proven, systematic methodology that transforms complex chemical
            challenges into measurable operational success.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[72px] left-[12%] right-[12%] h-0.5 z-0">
            <div className="w-full h-full bg-gradient-to-r from-simmerium-gold/20 via-simmerium-gold/60 to-simmerium-gold/20"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {/* Step 01: Assess */}
            <div className="relative flex flex-col items-center text-center group">
              {/* Image Circle */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-simmerium-cream shadow-lg mb-4 group-hover:border-simmerium-gold/30 transition-colors duration-500">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=200&h=200&fit=crop"
                  alt="Assess"
                  className="w-full h-full object-cover"
                  loading="lazy" />
                
              </div>
              {/* Step Number */}
              <div className="w-10 h-10 rounded-full bg-simmerium-gold text-white font-bold flex items-center justify-center text-sm mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300 gold-glow">
                01
              </div>
              {/* Card */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100/80 w-full h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lg">
                <div className="w-14 h-14 mx-auto bg-simmerium-cream rounded-xl flex items-center justify-center mb-5 group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                  <ClipboardCheckIcon className="w-7 h-7 text-simmerium-gold" />
                </div>
                <h3 className="text-xl font-bold text-simmerium-heading mb-3">
                  Assess
                </h3>
                <p className="text-simmerium-body text-sm leading-relaxed">
                  We conduct thorough field assessments and fluid analysis to
                  understand your unique operational challenges.
                </p>
              </div>
            </div>

            {/* Step 02: Design */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-simmerium-cream shadow-lg mb-4 group-hover:border-simmerium-gold/30 transition-colors duration-500">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=200&h=200&fit=crop"
                  alt="Design"
                  className="w-full h-full object-cover"
                  loading="lazy" />
                
              </div>
              <div className="w-10 h-10 rounded-full bg-simmerium-gold text-white font-bold flex items-center justify-center text-sm mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300 gold-glow">
                02
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100/80 w-full h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lg">
                <div className="w-14 h-14 mx-auto bg-simmerium-cream rounded-xl flex items-center justify-center mb-5 group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                  <PenToolIcon className="w-7 h-7 text-simmerium-gold" />
                </div>
                <h3 className="text-xl font-bold text-simmerium-heading mb-3">
                  Design
                </h3>
                <p className="text-simmerium-body text-sm leading-relaxed">
                  Our R&D team formulates customized chemical solutions
                  optimized for your specific conditions.
                </p>
              </div>
            </div>

            {/* Step 03: Deploy */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-simmerium-cream shadow-lg mb-4 group-hover:border-simmerium-gold/30 transition-colors duration-500">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=200&fit=crop"
                  alt="Deploy"
                  className="w-full h-full object-cover"
                  loading="lazy" />
                
              </div>
              <div className="w-10 h-10 rounded-full bg-simmerium-gold text-white font-bold flex items-center justify-center text-sm mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300 gold-glow">
                03
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100/80 w-full h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lg">
                <div className="w-14 h-14 mx-auto bg-simmerium-cream rounded-xl flex items-center justify-center mb-5 group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                  <RocketIcon className="w-7 h-7 text-simmerium-gold" />
                </div>
                <h3 className="text-xl font-bold text-simmerium-heading mb-3">
                  Deploy
                </h3>
                <p className="text-simmerium-body text-sm leading-relaxed">
                  Expert field engineers implement solutions with full technical
                  support and real-time monitoring.
                </p>
              </div>
            </div>

            {/* Step 04: Optimize */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-simmerium-cream shadow-lg mb-4 group-hover:border-simmerium-gold/30 transition-colors duration-500">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop"
                  alt="Optimize"
                  className="w-full h-full object-cover"
                  loading="lazy" />
                
              </div>
              <div className="w-10 h-10 rounded-full bg-simmerium-gold text-white font-bold flex items-center justify-center text-sm mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300 gold-glow">
                04
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100/80 w-full h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lg">
                <div className="w-14 h-14 mx-auto bg-simmerium-cream rounded-xl flex items-center justify-center mb-5 group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                  <BarChart3Icon className="w-7 h-7 text-simmerium-gold" />
                </div>
                <h3 className="text-xl font-bold text-simmerium-heading mb-3">
                  Optimize
                </h3>
                <p className="text-simmerium-body text-sm leading-relaxed">
                  Continuous performance tracking and iterative improvements
                  ensure maximum ROI and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}