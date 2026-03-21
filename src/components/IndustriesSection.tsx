import { FactoryIcon, FuelIcon, ActivityIcon, DropletsIcon } from 'lucide-react';
export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-24 lg:py-32 bg-simmerium-navy relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-simmerium-gold"></div>
              <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                Sectors
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-400">
              Delivering specialized chemical expertise across critical
              industrial sectors to maximize efficiency and minimize
              environmental impact.
            </p>
          </div>
          <a
            href="#sectors"
            className="inline-flex items-center justify-center px-6 py-3 border border-simmerium-gold text-simmerium-gold hover:bg-simmerium-gold hover:text-white rounded-lg font-semibold transition-all duration-500 whitespace-nowrap">
            
            View All Sectors
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Oil & Gas Upstream */}
          <a
            href="#sector/oil-gas-upstream"
            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer block">
            
            <img
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=600&fit=crop"
              alt="Oil & Gas Upstream"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
              loading="lazy" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-simmerium-navy via-simmerium-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-700 group-hover:-translate-y-2">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border border-white/20 group-hover:bg-simmerium-gold group-hover:border-simmerium-gold transition-all duration-500">
                <ActivityIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Oil & Gas Upstream
              </h3>
              <p className="text-gray-300 text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-700 overflow-hidden">
                Enhancing recovery, protecting assets, and optimizing flow from
                reservoir to surface facility.
              </p>
            </div>
          </a>

          {/* Oil & Gas Downstream */}
          <a
            href="#sector/oil-gas-downstream"
            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer block">
            
            <img
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop"
              alt="Oil & Gas Downstream"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
              loading="lazy" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-simmerium-navy via-simmerium-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-700 group-hover:-translate-y-2">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border border-white/20 group-hover:bg-simmerium-gold group-hover:border-simmerium-gold transition-all duration-500">
                <FuelIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Oil & Gas Downstream
              </h3>
              <p className="text-gray-300 text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-700 overflow-hidden">
                Improving refining margins, ensuring product quality, and
                extending equipment life.
              </p>
            </div>
          </a>

          {/* Petrochemical */}
          <a
            href="#sector/petrochemical"
            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer block">
            
            <img
              src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop"
              alt="Petrochemical"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
              loading="lazy" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-simmerium-navy via-simmerium-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-700 group-hover:-translate-y-2">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border border-white/20 group-hover:bg-simmerium-gold group-hover:border-simmerium-gold transition-all duration-500">
                <FactoryIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Petrochemical
              </h3>
              <p className="text-gray-300 text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-700 overflow-hidden">
                Specialty additives and process chemicals for efficient
                petrochemical manufacturing.
              </p>
            </div>
          </a>

          {/* Water Treatment */}
          <a
            href="#sector/water-treatment"
            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer block">
            
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop"
              alt="Water Treatment"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
              loading="lazy" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-simmerium-navy via-simmerium-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-700 group-hover:-translate-y-2">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border border-white/20 group-hover:bg-simmerium-gold group-hover:border-simmerium-gold transition-all duration-500">
                <DropletsIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Water Treatment
              </h3>
              <p className="text-gray-300 text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-700 overflow-hidden">
                Sustainable solutions for produced water management and
                industrial water systems.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>);

}