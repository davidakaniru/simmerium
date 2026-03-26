import { MapPinIcon } from 'lucide-react';
export function GlobalPresence() {
  return (
    <section className="py-24 lg:py-32 bg-simmerium-cream relative overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=600&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-[0.06]"
          loading="lazy" />
        
      </div>

      {/* Animated Pin Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[35%] left-[25%] w-3 h-3 rounded-full bg-simmerium-gold/60 animate-pulse"></div>
        <div
          className="absolute top-[30%] left-[52%] w-3 h-3 rounded-full bg-simmerium-gold/60 animate-pulse"
          style={{
            animationDelay: '0.5s'
          }}>
        </div>
        <div
          className="absolute top-[40%] left-[70%] w-3 h-3 rounded-full bg-simmerium-gold/60 animate-pulse"
          style={{
            animationDelay: '1s'
          }}>
        </div>
        <div
          className="absolute top-[55%] left-[15%] w-3 h-3 rounded-full bg-simmerium-gold/60 animate-pulse"
          style={{
            animationDelay: '1.5s'
          }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
              Global Reach
            </span>
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-simmerium-heading mb-4">
            Our Global Footprint
          </h2>
          <p className="text-xl text-simmerium-navy font-medium max-w-2xl mx-auto">
            Delivering chemical solutions wherever energy flows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Houston, Texas */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-simmerium-gold/50 hover:shadow-lg transition-all duration-500 group">
            <div className="w-12 h-12 bg-simmerium-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-simmerium-gold transition-colors duration-500">
              <MapPinIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-simmerium-heading mb-2">
              Houston, Texas
            </h3>
            {/* <p className="text-sm text-simmerium-body font-medium">Key Hubs:</p> */}
            <p className="text-sm text-gray-500 mt-1">Corporate Headquarters</p>
          </div>

          {/* Port Harcourt, Rivers State */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-simmerium-gold/50 hover:shadow-lg transition-all duration-500 group">
            <div className="w-12 h-12 bg-simmerium-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-simmerium-gold transition-colors duration-500">
              <MapPinIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-simmerium-heading mb-2">
              Port Harcourt, Nigeria
            </h3>
            {/* <p className="text-sm text-simmerium-body font-medium">Key Hubs:</p> */}
            <p className="text-sm text-gray-500 mt-1">
              Regional Hub — West Africa
            </p>
          </div>

          {/* Abu Dhabi, United Arab Emirates */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-simmerium-gold/50 hover:shadow-lg transition-all duration-500 group">
            <div className="w-12 h-12 bg-simmerium-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-simmerium-gold transition-colors duration-500">
              <MapPinIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-simmerium-heading mb-2">
              Abu Dhabi, United Arab Emirates
            </h3>
            {/* <p className="text-sm text-simmerium-body font-medium">Key Hubs:</p> */}
            <p className="text-sm text-gray-500 mt-1">
              Regional Hub - Middle East.
            </p>
          </div>

          {/* West Africa Region */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-simmerium-gold/50 hover:shadow-lg transition-all duration-500 group">
            <div className="w-12 h-12 bg-simmerium-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-simmerium-gold transition-colors duration-500">
              <MapPinIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-simmerium-heading mb-2">
              West Africa Region
            </h3>
            <p className="text-sm text-simmerium-body font-medium">Key Hubs:</p>
            <p className="text-sm text-gray-500 mt-1">
              Ghana · Ivory Coast · Equatorial Guinea
            </p>
          </div>
        </div>
      </div>
    </section>);

}