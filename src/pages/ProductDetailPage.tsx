import React, { useEffect } from 'react';
import { productsData } from '../data/products';
import { CTABanner } from '../components/CTABanner';
import {
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldIcon,
  LayersIcon,
  DropletIcon,
  BugIcon,
  WindIcon,
  FlaskConicalIcon } from
'lucide-react';
const iconMap: Record<string, React.ElementType> = {
  ShieldIcon,
  LayersIcon,
  DropletIcon,
  BugIcon,
  WindIcon,
  FlaskConicalIcon
};
export function ProductDetailPage({ slug }: {slug: string;}) {
  const product = productsData.find((p) => p.slug === slug);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!product) {
    return <div className="py-40 text-center text-2xl">Product not found</div>;
  }
  const Icon = iconMap[product.icon] || ShieldIcon;
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-simmerium-navy py-32 pt-40 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&h=1080&fit=crop"
            alt={product.title}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full glass-card text-simmerium-light-gold text-sm font-semibold tracking-widest mb-8 animate-slide-up"
            style={{
              animationDelay: '0.2s'
            }}>
            
            <a href="#home" className="hover:text-white transition-colors">
              HOME
            </a>
            <span>/</span>
            <a href="#products" className="hover:text-white transition-colors">
              PRODUCTS & SOLUTIONS
            </a>
            <span>/</span>
            <span className="text-white uppercase">{product.title}</span>
          </span>

          <div
            className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-slide-up"
            style={{
              animationDelay: '0.4s'
            }}>
            
            <div className="w-20 h-20 bg-simmerium-gold/20 backdrop-blur-md rounded-full flex items-center justify-center border border-simmerium-gold/30 flex-shrink-0 shadow-[0_0_30px_rgba(198,138,46,0.3)]">
              <Icon className="w-10 h-10 text-simmerium-gold" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                {product.heroDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
              Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-simmerium-heading mb-12">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feature, index) =>
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-simmerium-gold/30 transition-colors">
              
                <CheckCircleIcon className="w-6 h-6 text-simmerium-gold flex-shrink-0 mt-0.5" />
                <span className="text-lg text-simmerium-body font-medium">
                  {feature}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-simmerium-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
              Use Cases
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-simmerium-heading mb-12">
            Applications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.applications.map((app, index) =>
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              
                <div className="w-2 h-2 rounded-full bg-simmerium-gold"></div>
                <span className="text-simmerium-body font-medium">{app}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-simmerium-heading mb-4">
              Why Choose Our {product.title}
            </h2>
            <p className="text-lg text-simmerium-body max-w-2xl mx-auto">
              Delivering measurable ROI and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.benefits.map((benefit, index) =>
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-simmerium-gold hover:shadow-md transition-shadow">
              
                <h3 className="text-xl font-bold text-simmerium-heading mb-3">
                  {benefit.title}
                </h3>
                <p className="text-simmerium-body leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-simmerium-heading mb-12">
            Related Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.relatedProducts.map((relatedSlug) => {
              const related = productsData.find((p) => p.slug === relatedSlug);
              if (!related) return null;
              const RelIcon = iconMap[related.icon] || ShieldIcon;
              return (
                <a
                  key={related.slug}
                  href={`#product/${related.slug}`}
                  className="group bg-white rounded-xl p-8 border border-gray-100 hover:border-simmerium-gold/50 hover:shadow-lg transition-all">
                  
                  <div className="w-12 h-12 bg-simmerium-cream rounded-lg flex items-center justify-center mb-6 group-hover:bg-simmerium-gold/10 transition-colors">
                    <RelIcon className="w-6 h-6 text-simmerium-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-simmerium-heading mb-2 group-hover:text-simmerium-gold transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-simmerium-body mb-4 line-clamp-2">
                    {related.shortDescription}
                  </p>
                  <span className="inline-flex items-center text-sm font-bold text-simmerium-navy group-hover:text-simmerium-gold transition-colors">
                    View Details{' '}
                    <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>);

            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>);

}