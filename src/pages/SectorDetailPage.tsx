import React, { useEffect } from 'react';
import { industriesData } from '../data/industries';
import { CTABanner } from '../components/CTABanner';
import {
  AlertTriangleIcon,
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
export function SectorDetailPage({ slug }: {slug: string;}) {
  const sector = industriesData.find((s) => s.slug === slug);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!sector) {
    return <div className="py-40 text-center text-2xl">Sector not found</div>;
  }
  const Icon = iconMap[sector.icon] || ActivityIcon;
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section
        className={`py-32 pt-40 relative overflow-hidden bg-simmerium-navy`}>
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop"
            alt={sector.title}
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />
          
          <div
            className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-90`}>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,25,35,0.6)_100%)]"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <div
            className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-white/40 float-particle"
            style={{
              animationDelay: '0s'
            }}>
          </div>
          <div
            className="absolute top-[25%] left-[75%] w-2 h-2 rounded-full bg-white/30 float-particle"
            style={{
              animationDelay: '1.5s'
            }}>
          </div>
          <div
            className="absolute top-[60%] left-[20%] w-1 h-1 rounded-full bg-white/50 float-particle"
            style={{
              animationDelay: '3s'
            }}>
          </div>
          <div
            className="absolute top-[45%] left-[85%] w-1.5 h-1.5 rounded-full bg-white/35 float-particle"
            style={{
              animationDelay: '4.5s'
            }}>
          </div>
          <div
            className="absolute top-[70%] left-[55%] w-2 h-2 rounded-full bg-white/25 float-particle"
            style={{
              animationDelay: '2s'
            }}>
          </div>
          <div
            className="absolute top-[35%] left-[40%] w-1 h-1 rounded-full bg-white/40 float-particle"
            style={{
              animationDelay: '5s'
            }}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full glass-card text-white/90 text-sm font-semibold tracking-widest mb-8 animate-slide-up"
            style={{
              animationDelay: '0.2s'
            }}>
            
            <a href="#home" className="hover:text-white transition-colors">
              HOME
            </a>
            <span>/</span>
            <a href="#sectors" className="hover:text-white transition-colors">
              INDUSTRIES
            </a>
            <span>/</span>
            <span className="text-white font-bold uppercase">
              {sector.title}
            </span>
          </span>

          <div
            className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-slide-up"
            style={{
              animationDelay: '0.4s'
            }}>
            
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 flex-shrink-0 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {sector.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
                {sector.heroDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-simmerium-navy py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {sector.stats.map((stat, index) =>
            <div key={index} className="text-center py-4 md:py-0">
                <div className="text-4xl font-bold text-simmerium-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
              The Landscape
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-simmerium-heading mb-12">
            Industry Challenges
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sector.challenges.map((challenge, index) =>
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100">
              
                <AlertTriangleIcon className="w-6 h-6 text-simmerium-gold flex-shrink-0 mt-0.5" />
                <span className="text-lg text-simmerium-body font-medium">
                  {challenge}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-simmerium-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-simmerium-heading mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-simmerium-body max-w-2xl mx-auto">
              Tailored chemical programs designed to overcome complex challenges
              and drive operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sector.solutions.map((solution, index) =>
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              
                <h3 className="text-xl font-bold text-simmerium-heading mb-3 text-simmerium-navy">
                  {solution.title}
                </h3>
                <p className="text-simmerium-body leading-relaxed">
                  {solution.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-simmerium-heading mb-12">
            Related Sectors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sector.relatedIndustries.map((relatedSlug) => {
              const related = industriesData.find((s) => s.slug === relatedSlug);
              if (!related) return null;
              const RelIcon = iconMap[related.icon] || ActivityIcon;
              return (
                <a
                  key={related.slug}
                  href={`#sector/${related.slug}`}
                  className="group bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-simmerium-gold/50 hover:shadow-lg transition-all flex items-center gap-6">
                  
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-simmerium-gold transition-colors">
                    <RelIcon className="w-8 h-8 text-simmerium-navy group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-simmerium-heading mb-2 group-hover:text-simmerium-gold transition-colors">
                      {related.title}
                    </h3>
                    <span className="inline-flex items-center text-sm font-bold text-simmerium-navy group-hover:text-simmerium-gold transition-colors">
                      Explore Sector{' '}
                      <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </a>);

            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>);

}