import React, { lazy } from "react";
import {
  ShieldIcon,
  DropletIcon,
  LayersIcon,
  BugIcon,
  WindIcon,
  FlaskConicalIcon,
  ArrowRightIcon,
} from "lucide-react";
export function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
              Our Portfolio
            </span>
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-simmerium-heading mb-6">
            Products & Solutions
          </h2>
          <p className="text-lg text-simmerium-body">
            Comprehensive chemical technologies engineered to solve complex
            challenges across the entire oil and gas value chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Corrosion Inhibitors */}
          <a
            href="#product/corrosion-inhibitors"
            className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 relative overflow-hidden block"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-simmerium-gold transition-colors duration-500"></div>
            <div className="h-48 overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1661913813641-e153b32f22ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Corrosion Inhibitors"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-simmerium-cream rounded-xl flex items-center justify-center mb-5 group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                <ShieldIcon className="w-6 h-6 text-simmerium-gold" />
              </div>
              <h3 className="text-xl font-bold text-simmerium-heading mb-3 group-hover:text-simmerium-gold transition-colors duration-300">
                Corrosion Inhibitors
              </h3>
              <p className="text-simmerium-body mb-6 leading-relaxed text-sm">
                Advanced formulations designed to protect critical
                infrastructure from harsh environments, extending asset
                lifecycle and reducing maintenance costs.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-simmerium-navy group-hover:text-simmerium-gold transition-colors duration-300">
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </a>

          {/* Scale Inhibitors */}
          <a
            href="#product/scale-inhibitors"
            className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 relative overflow-hidden block"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-simmerium-gold transition-colors duration-500"></div>
            <div className="h-48 overflow-hidden">
              <img
                src="https://www.calicometal.net/img/255-pipe.jpg"
                alt="Scale Inhibitors"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-simmerium-cream rounded-xl flex items-center justify-center mb-5 group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                <LayersIcon className="w-6 h-6 text-simmerium-gold" />
              </div>
              <h3 className="text-xl font-bold text-simmerium-heading mb-3 group-hover:text-simmerium-gold transition-colors duration-300">
                Scale Inhibitors
              </h3>
              <p className="text-simmerium-body mb-6 leading-relaxed text-sm">
                High-performance chemicals that prevent mineral deposition,
                ensuring optimal flow rates and protecting vital production
                equipment.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-simmerium-navy group-hover:text-simmerium-gold transition-colors duration-300">
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </a>

          {/* Demulsifiers */}
          <a
            href="#product/demulsifiers"
            className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 relative overflow-hidden block"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-simmerium-gold transition-colors duration-500"></div>
            <div className="h-48 overflow-hidden">
              <img
                src="/demulsifiers.png"
                alt="Demulsifiers"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-simmerium-cream rounded-xl flex items-center justify-center mb-5 group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                <DropletIcon className="w-6 h-6 text-simmerium-gold" />
              </div>
              <h3 className="text-xl font-bold text-simmerium-heading mb-3 group-hover:text-simmerium-gold transition-colors duration-300">
                Demulsifiers
              </h3>
              <p className="text-simmerium-body mb-6 leading-relaxed text-sm">
                Tailored solutions for rapid and efficient separation of water
                from crude oil, maximizing oil quality and process efficiency.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-simmerium-navy group-hover:text-simmerium-gold transition-colors duration-300">
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </a>

          {/* Biocides */}
          <a
            href="#product/biocides"
            className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 relative overflow-hidden block"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-simmerium-gold transition-colors duration-500"></div>
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop"
                alt="Biocides"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-simmerium-cream rounded-xl flex items-center justify-center mb-5 group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                <BugIcon className="w-6 h-6 text-simmerium-gold" />
              </div>
              <h3 className="text-xl font-bold text-simmerium-heading mb-3 group-hover:text-simmerium-gold transition-colors duration-300">
                Biocides
              </h3>
              <p className="text-simmerium-body mb-6 leading-relaxed text-sm">
                Broad-spectrum microbial control agents that prevent souring,
                microbiologically influenced corrosion (MIC), and biofouling.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-simmerium-navy group-hover:text-simmerium-gold transition-colors duration-300">
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </a>

          {/* H2S Scavengers */}
          <a
            href="#product/h2s-scavengers"
            className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 relative overflow-hidden block"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-simmerium-gold transition-colors duration-500"></div>
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop"
                alt="H2S Scavengers"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-simmerium-cream rounded-xl flex items-center justify-center mb-5 group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                <WindIcon className="w-6 h-6 text-simmerium-gold" />
              </div>
              <h3 className="text-xl font-bold text-simmerium-heading mb-3 group-hover:text-simmerium-gold transition-colors duration-300">
                H2S Scavengers
              </h3>
              <p className="text-simmerium-body mb-6 leading-relaxed text-sm">
                Fast-acting treatments to safely and effectively remove hydrogen
                sulfide, ensuring personnel safety and meeting pipeline
                specifications.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-simmerium-navy group-hover:text-simmerium-gold transition-colors duration-300">
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </a>

          {/* Production Chemicals */}
          <a
            href="#product/production-chemicals"
            className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 relative overflow-hidden block"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-simmerium-gold transition-colors duration-500"></div>
            <div className="h-48 overflow-hidden">
              <img
                src="/chemicals.png"
                alt="Production Chemicals"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-simmerium-cream rounded-xl flex items-center justify-center mb-5 group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                <FlaskConicalIcon className="w-6 h-6 text-simmerium-gold" />
              </div>
              <h3 className="text-xl font-bold text-simmerium-heading mb-3 group-hover:text-simmerium-gold transition-colors duration-300">
                Production Chemicals
              </h3>
              <p className="text-simmerium-body mb-6 leading-relaxed text-sm">
                A comprehensive suite of specialty chemicals including
                defoamers, pour point depressants, and asphaltene inhibitors.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-simmerium-navy group-hover:text-simmerium-gold transition-colors duration-300">
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
