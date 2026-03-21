import React, { lazy } from 'react';
import { ShieldCheckIcon, SproutIcon, UsersIcon } from 'lucide-react';
export function Sustainability() {
  return (
    <section
      id="sustainability"
      className="py-24 lg:py-32 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-simmerium-gold"></div>
              <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                ESG Focus
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-simmerium-heading mb-6 leading-tight">
              Committed to a Sustainable Future
            </h2>
            <div className="space-y-6 text-lg text-simmerium-body mb-8">
              <p>
                At Simmerium, sustainability is not just a corporate
                initiative—it is embedded in our DNA. We recognize our
                responsibility to protect the environment while meeting the
                world's growing energy demands.
              </p>
              <p>
                Our Health, Safety, and Environment (HSE) standards exceed
                regulatory requirements. We continuously innovate to create
                greener chemistries, optimize supply chains to reduce emissions,
                and foster a culture where safety is the ultimate priority.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              {/* Zero Harm */}
              <div className="flex gap-6 p-5 rounded-xl hover:bg-green-50/50 transition-colors duration-500 border border-transparent hover:border-green-100 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center group-hover:bg-simmerium-gold transition-colors duration-500">
                    <ShieldCheckIcon className="w-7 h-7 text-simmerium-navy group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-simmerium-heading mb-2">
                    Zero Harm Philosophy
                  </h3>
                  <p className="text-simmerium-body leading-relaxed">
                    Uncompromising dedication to the health and safety of our
                    employees, partners, and the communities where we operate.
                  </p>
                </div>
              </div>

              {/* Environmental Stewardship */}
              <div className="flex gap-6 p-5 rounded-xl hover:bg-green-50/50 transition-colors duration-500 border border-transparent hover:border-green-100 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center group-hover:bg-simmerium-gold transition-colors duration-500">
                    <SproutIcon className="w-7 h-7 text-simmerium-navy group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-simmerium-heading mb-2">
                    Environmental Stewardship
                  </h3>
                  <p className="text-simmerium-body leading-relaxed">
                    Developing biodegradable, low-toxicity formulations that
                    minimize ecological footprint without sacrificing
                    performance.
                  </p>
                </div>
              </div>

              {/* Community Investment */}
              <div className="flex gap-6 p-5 rounded-xl hover:bg-green-50/50 transition-colors duration-500 border border-transparent hover:border-green-100 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center group-hover:bg-simmerium-gold transition-colors duration-500">
                    <UsersIcon className="w-7 h-7 text-simmerium-navy group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-simmerium-heading mb-2">
                    Community Investment
                  </h3>
                  <p className="text-simmerium-body leading-relaxed">
                    Actively supporting local education, infrastructure, and
                    social programs to create lasting positive impact.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="bg-simmerium-navy hover:bg-simmerium-charcoal text-white px-8 py-3 rounded-lg font-semibold transition-all duration-500 inline-block transform hover:-translate-y-0.5">
              
              Read Our ESG Report
            </a>
          </div>

          {/* Right: Nature Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
                alt="Environmental sustainability"
                className="w-full h-[400px] lg:h-[550px] object-cover"
                loading="lazy" />
              
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-green-200/40"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-100/30 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>);

}