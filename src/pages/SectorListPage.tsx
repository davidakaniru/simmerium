import React, { useEffect } from 'react';
import { industriesData } from '../data/industries';
import { CTABanner } from '../components/CTABanner';
import {
  ArrowRightIcon,
  ActivityIcon,
  FuelIcon,
  FactoryIcon,
  DropletsIcon } from
'lucide-react';
const iconMap: Record<string, React.ElementType> = {
  ActivityIcon,
  FuelIcon,
  FactoryIcon,
  DropletsIcon
};
export function SectorListPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-simmerium-navy py-32 pt-40 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop"
            alt="Industrial Sectors"
            className="absolute inset-0 w-full h-full object-cover opacity-30" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-simmerium-navy/90 via-simmerium-navy/70 to-simmerium-navy/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,25,35,0.6)_100%)]"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <div
            className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-simmerium-gold/40 float-particle"
            style={{
              animationDelay: '0s'
            }}>
          </div>
          <div
            className="absolute top-[25%] left-[75%] w-2 h-2 rounded-full bg-simmerium-gold/30 float-particle"
            style={{
              animationDelay: '1.5s'
            }}>
          </div>
          <div
            className="absolute top-[60%] left-[20%] w-1 h-1 rounded-full bg-simmerium-light-gold/50 float-particle"
            style={{
              animationDelay: '3s'
            }}>
          </div>
          <div
            className="absolute top-[45%] left-[85%] w-1.5 h-1.5 rounded-full bg-simmerium-gold/35 float-particle"
            style={{
              animationDelay: '4.5s'
            }}>
          </div>
          <div
            className="absolute top-[70%] left-[55%] w-2 h-2 rounded-full bg-simmerium-light-gold/25 float-particle"
            style={{
              animationDelay: '2s'
            }}>
          </div>
          <div
            className="absolute top-[35%] left-[40%] w-1 h-1 rounded-full bg-simmerium-gold/40 float-particle"
            style={{
              animationDelay: '5s'
            }}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <span
              className="inline-flex items-center gap-2 py-2 px-5 rounded-full glass-card text-simmerium-light-gold text-sm font-semibold tracking-widest animate-slide-up"
              style={{
                animationDelay: '0.2s'
              }}>
              
              <a href="#home" className="hover:text-white transition-colors">
                HOME
              </a>
              <span>/</span>
              <span className="text-white">INDUSTRIES</span>
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up"
            style={{
              animationDelay: '0.4s'
            }}>
            
            Industries We <span className="text-gradient-gold">Serve</span>
          </h1>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{
              animationDelay: '0.6s'
            }}>
            
            Delivering specialized chemical expertise across critical industrial
            sectors to maximize efficiency and minimize environmental impact.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industriesData.map((industry) => {
              const Icon = iconMap[industry.icon] || ActivityIcon;
              return (
                <div
                  key={industry.slug}
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}>
                  </div>

                  <div className="relative z-10 p-10 flex flex-col h-full min-h-[400px]">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-8 border border-white/20 group-hover:bg-simmerium-gold group-hover:border-simmerium-gold transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4">
                      {industry.title}
                    </h2>
                    <p className="text-gray-200 text-lg mb-8 flex-grow leading-relaxed">
                      {industry.heroDescription}
                    </p>

                    <a
                      href={`#sector/${industry.slug}`}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-simmerium-gold text-white px-6 py-3 rounded font-semibold transition-all w-fit backdrop-blur-sm border border-white/20 hover:border-simmerium-gold">
                      
                      Explore Sector
                      <ArrowRightIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>);

            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>);

}