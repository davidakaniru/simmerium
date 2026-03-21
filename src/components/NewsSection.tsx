import React, { lazy } from 'react';
import { ArrowRightIcon, CalendarIcon } from 'lucide-react';
export function NewsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-simmerium-gold"></div>
              <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                Insights
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-simmerium-heading">
              Latest News & Updates
            </h2>
          </div>
          <a
            href="#contact"
            className="text-simmerium-navy font-bold hover:text-simmerium-gold transition-colors duration-300 flex items-center gap-2">
            
            View All News <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News 1: Innovation */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 border border-gray-100 flex flex-col h-full group transform hover:-translate-y-2">
            <div className="h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=300&fit=crop"
                alt="Biodegradable Scale Inhibitor"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy" />
              
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-simmerium-gold bg-simmerium-gold/10 px-3 py-1 rounded-full">
                  Innovation
                </span>
                <div className="flex items-center text-gray-400 text-sm">
                  <CalendarIcon className="w-4 h-4 mr-1.5" />
                  March 15, 2026
                </div>
              </div>
              <h3 className="text-xl font-bold text-simmerium-heading mb-3 line-clamp-2 group-hover:text-simmerium-gold transition-colors duration-300">
                Simmerium Launches Next-Gen Biodegradable Scale Inhibitor
              </h3>
              <p className="text-simmerium-body mb-6 flex-1 text-sm leading-relaxed">
                Our new EcoScale™ line offers unprecedented protection while
                meeting the strictest environmental regulations in the North
                Sea.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-simmerium-navy group-hover:text-simmerium-gold transition-colors duration-300 mt-auto">
                Read Full Story
                <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </article>

          {/* News 2: Expansion */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 border border-gray-100 flex flex-col h-full group transform hover:-translate-y-2">
            <div className="h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=300&fit=crop"
                alt="Jubail Manufacturing Facility"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy" />
              
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-simmerium-gold bg-simmerium-gold/10 px-3 py-1 rounded-full">
                  Expansion
                </span>
                <div className="flex items-center text-gray-400 text-sm">
                  <CalendarIcon className="w-4 h-4 mr-1.5" />
                  February 28, 2026
                </div>
              </div>
              <h3 className="text-xl font-bold text-simmerium-heading mb-3 line-clamp-2 group-hover:text-simmerium-gold transition-colors duration-300">
                New Manufacturing Facility Opens in Jubail, Saudi Arabia
              </h3>
              <p className="text-simmerium-body mb-6 flex-1 text-sm leading-relaxed">
                Strengthening our commitment to the Middle East market with a
                state-of-the-art production and R&D center.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-simmerium-navy group-hover:text-simmerium-gold transition-colors duration-300 mt-auto">
                Read Full Story
                <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </article>

          {/* News 3: Corporate */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 border border-gray-100 flex flex-col h-full group transform hover:-translate-y-2">
            <div className="h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=300&fit=crop"
                alt="HSE Performance"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy" />
              
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-simmerium-gold bg-simmerium-gold/10 px-3 py-1 rounded-full">
                  Corporate
                </span>
                <div className="flex items-center text-gray-400 text-sm">
                  <CalendarIcon className="w-4 h-4 mr-1.5" />
                  January 10, 2026
                </div>
              </div>
              <h3 className="text-xl font-bold text-simmerium-heading mb-3 line-clamp-2 group-hover:text-simmerium-gold transition-colors duration-300">
                Simmerium Recognized for Excellence in HSE Performance
              </h3>
              <p className="text-simmerium-body mb-6 flex-1 text-sm leading-relaxed">
                Awarded the Global Safety Standard Gold Tier for achieving five
                million man-hours without a lost-time incident.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-simmerium-navy group-hover:text-simmerium-gold transition-colors duration-300 mt-auto">
                Read Full Story
                <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>);

}