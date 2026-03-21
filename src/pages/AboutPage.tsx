import { useEffect } from 'react';
import { TeamSection } from '../components/TeamSection';
import { GlobalPresence } from '../components/GlobalPresence';
import { CertificationsSection } from '../components/CertificationsSection';
import { CTABanner } from '../components/CTABanner';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  CalendarIcon,
  TargetIcon,
  EyeIcon,
  HeartIcon,
  TrendingUpIcon,
  GlobeIcon,
  FlaskConicalIcon,
  UsersIcon } from
'lucide-react';
const milestones = [
{
  year: '2005',
  title: 'Founded',
  description:
  'Simmerium Control Chemicals established in Houston, TX with a focus on corrosion inhibitors.'
},
{
  year: '2009',
  title: 'Middle East Expansion',
  description:
  'Opened first international office in Dubai, serving the growing Gulf energy market.'
},
{
  year: '2013',
  title: 'R&D Breakthrough',
  description:
  'Launched our proprietary EcoScale™ biodegradable scale inhibitor line.'
},
{
  year: '2016',
  title: 'Asia Pacific Entry',
  description:
  'Established operations in Singapore and Kuala Lumpur to serve the APAC region.'
},
{
  year: '2019',
  title: '500+ Products',
  description:
  'Portfolio expanded to over 500 formulations across all major oilfield chemistry categories.'
},
{
  year: '2022',
  title: 'Global Safety Award',
  description:
  'Achieved 5 million man-hours without a lost-time incident across all operations.'
},
{
  year: '2025',
  title: 'Jubail Facility',
  description:
  'State-of-the-art manufacturing and R&D center opened in Jubail, Saudi Arabia.'
}];

const values = [
{
  icon: TargetIcon,
  title: 'Excellence',
  description:
  'We pursue the highest standards in everything we do — from formulation to field delivery.'
},
{
  icon: FlaskConicalIcon,
  title: 'Innovation',
  description:
  'Continuous investment in R&D to develop next-generation chemistries for evolving challenges.'
},
{
  icon: HeartIcon,
  title: 'Integrity',
  description:
  'Transparent, ethical business practices that build lasting trust with our partners.'
},
{
  icon: UsersIcon,
  title: 'Collaboration',
  description:
  'Working closely with clients to co-create solutions tailored to their unique needs.'
}];

export function AboutPage() {
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
            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1920&h=1080&fit=crop"
            alt="Simmerium Laboratory"
            className="absolute inset-0 w-full h-full object-cover opacity-40" />
          
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

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-simmerium-gold/5 rounded-full filter blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span
            className="hidden md:inline-flex items-center gap-2 py-2 px-5 rounded-full glass-card text-simmerium-light-gold text-sm font-semibold tracking-widest mb-8 animate-slide-up"
            style={{
              animationDelay: '0.2s'
            }}>
            
            <a href="#home" className="hover:text-white transition-colors">
              HOME
            </a>
            <span>/</span>
            <span className="text-white">ABOUT US</span>
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl animate-slide-up"
            style={{
              animationDelay: '0.4s'
            }}>
            
            Pioneering Chemical{' '}
            <span className="text-gradient-gold">Innovation</span> Since 2005
          </h1>
          <p
            className="text-xl text-gray-300 max-w-3xl leading-relaxed animate-slide-up"
            style={{
              animationDelay: '0.6s'
            }}>
            
            A global leader in oilfield chemical solutions — delivering
            innovation, reliability, and performance to the energy sector across
            30+ countries.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-simmerium-gold"></div>
                <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-simmerium-heading mb-6 leading-tight">
                From Houston to the World
              </h2>
              <div className="space-y-6 text-lg text-simmerium-body">
                <p>
                  Simmerium Control Chemicals was founded in 2005 with a clear
                  vision: to develop superior oilfield chemical solutions that
                  protect assets, optimize production, and respect the
                  environment. What began as a small team of passionate chemists
                  in Houston has grown into a global enterprise operating across
                  30+ countries.
                </p>
                <p>
                  Our commitment to research and development allows us to tackle
                  the most complex challenges in the energy sector. From
                  upstream extraction to downstream processing, our tailored
                  formulations deliver measurable value and operational
                  excellence to our partners worldwide.
                </p>
                <p>
                  Today, with over 500 products, 2,000+ clients, and a team of
                  world-class scientists and engineers, we continue to push the
                  boundaries of what's possible in oilfield chemistry.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-simmerium-cream rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-simmerium-gold rounded-full flex items-center justify-center">
                    <TargetIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-simmerium-heading">
                    Our Mission
                  </h3>
                </div>
                <p className="text-simmerium-body leading-relaxed">
                  To deliver the best chemistry, backed by the best people, to
                  solve the world's toughest energy challenges — safely,
                  sustainably, and with measurable impact.
                </p>
              </div>

              <div className="bg-simmerium-cream rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-simmerium-navy rounded-full flex items-center justify-center">
                    <EyeIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-simmerium-heading">
                    Our Vision
                  </h3>
                </div>
                <p className="text-simmerium-body leading-relaxed">
                  To be the world's most trusted partner in oilfield chemistry —
                  recognized for innovation, sustainability, and an unwavering
                  commitment to our clients' success.
                </p>
              </div>

              {/* CEO Quote */}
              <div className="pl-6 border-l-4 border-simmerium-gold">
                <p className="text-lg italic text-simmerium-heading font-medium mb-4 leading-relaxed">
                  "Our mission is simple: deliver the best chemistry, backed by
                  the best people, to solve the world's toughest energy
                  challenges."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                    alt="Dr. Ahmad Al-Rashid"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                  
                  <div>
                    <h4 className="font-bold text-simmerium-heading text-sm">
                      Dr. Ahmad Al-Rashid
                    </h4>
                    <p className="text-xs text-simmerium-gold font-semibold uppercase tracking-wider">
                      Chief Executive Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-simmerium-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-simmerium-navy via-simmerium-charcoal to-simmerium-navy"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              value: '30+',
              label: 'Countries',
              icon: GlobeIcon
            },
            {
              value: '500+',
              label: 'Products',
              icon: FlaskConicalIcon
            },
            {
              value: '2,000+',
              label: 'Clients',
              icon: UsersIcon
            },
            {
              value: '20+',
              label: 'Years',
              icon: TrendingUpIcon
            }].
            map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <StatIcon className="w-8 h-8 text-simmerium-gold mx-auto mb-3" />
                  <div className="text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-simmerium-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-simmerium-gold"></div>
              <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                Our Foundation
              </span>
              <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-simmerium-heading mb-6">
              Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
                  
                  <div className="w-16 h-16 bg-simmerium-cream rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-simmerium-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-simmerium-heading mb-3">
                    {value.title}
                  </h3>
                  <p className="text-simmerium-body text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-simmerium-gold"></div>
              <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                Our Journey
              </span>
              <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-simmerium-heading mb-6">
              Key Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-simmerium-gold/20"></div>
            <div className="space-y-10">
              {milestones.map((milestone, index) =>
              <div
                key={index}
                className="relative flex items-start gap-8 pl-4">
                
                  <div className="flex-shrink-0 w-8 h-8 bg-simmerium-gold rounded-full flex items-center justify-center z-10 shadow-md">
                    <CalendarIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex-grow hover:border-simmerium-gold/30 transition-colors">
                    <span className="text-sm font-bold text-simmerium-gold uppercase tracking-wider">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-bold text-simmerium-heading mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-simmerium-body text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <AnimatedSection>
        <TeamSection />
      </AnimatedSection>

      {/* Global Presence */}
      <AnimatedSection>
        <GlobalPresence />
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection>
        <CertificationsSection />
      </AnimatedSection>

      <CTABanner />
    </div>);

}