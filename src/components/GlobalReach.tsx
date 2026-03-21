import { GlobeIcon } from 'lucide-react';

export function GlobalReach() {
  return (
    <section className="py-24 lg:py-32 bg-simmerium-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: Content */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-simmerium-gold"></div>
              <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                Global Reach
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-simmerium-heading mb-6 leading-tight">
              Two Hemispheres.
              <br />
              One <span className="text-gradient-gold">Unified Vision.</span>
            </h2>

            <p className="text-lg text-simmerium-body mb-8 leading-relaxed">
              With corporate headquarters in Houston, Texas and operations deeply
              embedded in Nigeria's Niger Delta — the heart of West Africa's oil
              production — Simmerium Control Chemicals is uniquely positioned to serve
              both international and regional markets with equal excellence.
            </p>

            <p className="text-lg text-simmerium-body mb-12 leading-relaxed">
              Our expansion roadmap targets key oil-producing markets across West Africa,
              including Ghana, Ivory Coast, Equatorial Guinea and Cameroon — bringing
              SCC's proven chemistry solutions to more operators across the region.
            </p>

            {/* Vincent Technologies Alliance Card */}
            <div className="bg-simmerium-heading rounded-2xl p-8 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-simmerium-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-simmerium-gold"></div>
                  <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-xs">
                    Strategic Technical Alliance
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Vincent Technologies — UAE
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  A fast-growing Oil & Gas Angel investor Company based in the UAE, Vincent
                  Technologies brings European oilfield expertise, global supply chain access and
                  world-class R&D capabilities to every SCC project — ensuring clients always benefit
                  from the latest in production chemistry innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Location Cards */}
          <div className="space-y-6 animate-slide-up-delay-2">
            {/* US Headquarters */}
            <div className="bg-simmerium-heading rounded-2xl p-8 group hover:bg-opacity-95 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-white text-2xl font-bold">
                    US
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Houston, Texas
                  </h3>
                  <p className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                    Corporate Headquarters
                  </p>
                </div>
              </div>
            </div>

            {/* Nigeria Operations Hub */}
            <div className="bg-simmerium-heading rounded-2xl p-8 group hover:bg-opacity-95 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-white text-2xl font-bold">
                    NG
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Port Harcourt, Rivers State
                  </h3>
                  <p className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                    Operations Hub — West Africa
                  </p>
                </div>
              </div>
            </div>

            {/* UAE Technical Partner */}
            <div className="bg-simmerium-heading rounded-2xl p-8 group hover:bg-opacity-95 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-white text-2xl font-bold">
                    AE
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    United Arab Emirates
                  </h3>
                  <p className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                    Vincent Technologies — Technical Partner
                  </p>
                </div>
              </div>
            </div>

            {/* West Africa Expansion */}
            <div className="bg-simmerium-heading rounded-2xl p-8 group hover:bg-opacity-95 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                    <GlobeIcon className="w-8 h-8 text-simmerium-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    West Africa Region
                  </h3>
                  <p className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                    Ghana · Ivory Coast · Equatorial Guinea
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}