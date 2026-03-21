import { useEffect } from "react";
import { CertificationsSection } from "../components/CertificationsSection";
import { CTABanner } from "../components/CTABanner";
import { AnimatedSection } from "../components/AnimatedSection";
import {
  LeafIcon,
  ShieldCheckIcon,
  SproutIcon,
  UsersIcon,
  RecycleIcon,
  DropletIcon,
  BarChart3Icon,
  HeartIcon,
  GlobeIcon,
  ZapIcon,
  ArrowRightIcon,
} from "lucide-react";
const pillars = [
  {
    icon: LeafIcon,
    title: "Environmental Responsibility",
    description:
      "Developing biodegradable, low-toxicity formulations that minimize ecological footprint. Our growing portfolio of green chemistries meets or exceeds OSPAR, REACH, and regional environmental standards.",
    stats: "70% of new products are biodegradable",
  },
  {
    icon: ShieldCheckIcon,
    title: "Health & Safety Excellence",
    description:
      "Uncompromising dedication to the health and safety of our employees, partners, and communities. Our Zero Harm philosophy drives every decision we make.",
    stats: "5M+ safe man-hours achieved",
  },
  {
    icon: UsersIcon,
    title: "Social Impact",
    description:
      "Actively supporting local education, infrastructure, and social programs in every community where we operate. We believe in creating lasting positive impact beyond our business.",
    stats: "15+ community programs active",
  },
  {
    icon: RecycleIcon,
    title: "Circular Economy",
    description:
      "Optimizing supply chains to reduce waste, minimize emissions, and promote the reuse and recycling of materials throughout our operations.",
    stats: "30% reduction in waste since 2020",
  },
];

const initiatives = [
  {
    icon: DropletIcon,
    title: "Water Stewardship",
    description:
      "Our produced water treatment solutions enable up to 95% water recovery and reuse, reducing freshwater consumption in oilfield operations.",
  },
  {
    icon: ZapIcon,
    title: "Carbon Reduction",
    description:
      "Optimized logistics and local manufacturing reduce transportation emissions. Our chemical programs also help clients reduce flaring and energy consumption.",
  },
  {
    icon: SproutIcon,
    title: "Green Chemistry R&D",
    description:
      "Dedicated research programs focused on developing next-generation biodegradable formulations that perform as well or better than conventional alternatives.",
  },
  {
    icon: GlobeIcon,
    title: "Responsible Sourcing",
    description:
      "Rigorous supplier audits and ethical sourcing practices ensure our entire supply chain meets our high environmental and social standards.",
  },
  {
    icon: HeartIcon,
    title: "Employee Wellbeing",
    description:
      "Comprehensive health, wellness, and mental health programs for all employees, along with industry-leading safety training and equipment.",
  },
  {
    icon: BarChart3Icon,
    title: "Transparent Reporting",
    description:
      "Annual ESG reports with independently verified data, aligned with GRI Standards and SASB frameworks for full stakeholder transparency.",
  },
];

const esgGoals = [
  {
    target: "100%",
    description: "Biodegradable product portfolio by 2030",
  },
  {
    target: "Net Zero",
    description: "Scope 1 & 2 emissions by 2035",
  },
  {
    target: "50%",
    description: "Reduction in water intensity by 2028",
  },
  {
    target: "Zero",
    description: "Lost-time incidents — every year",
  },
];

export function SustainabilityPage() {
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
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1920&h=1080&fit=crop"
            alt="Sustainable Environment"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-simmerium-navy/90 via-simmerium-navy/70 to-simmerium-navy/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,25,35,0.6)_100%)]"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <div
            className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-green-400/40 float-particle"
            style={{
              animationDelay: "0s",
            }}
          ></div>
          <div
            className="absolute top-[25%] left-[75%] w-2 h-2 rounded-full bg-simmerium-gold/30 float-particle"
            style={{
              animationDelay: "1.5s",
            }}
          ></div>
          <div
            className="absolute top-[60%] left-[20%] w-1 h-1 rounded-full bg-green-300/50 float-particle"
            style={{
              animationDelay: "3s",
            }}
          ></div>
          <div
            className="absolute top-[45%] left-[85%] w-1.5 h-1.5 rounded-full bg-simmerium-gold/35 float-particle"
            style={{
              animationDelay: "4.5s",
            }}
          ></div>
          <div
            className="absolute top-[70%] left-[55%] w-2 h-2 rounded-full bg-green-400/25 float-particle"
            style={{
              animationDelay: "2s",
            }}
          ></div>
          <div
            className="absolute top-[35%] left-[40%] w-1 h-1 rounded-full bg-simmerium-gold/40 float-particle"
            style={{
              animationDelay: "5s",
            }}
          ></div>
        </div>

        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-green-900/10 rounded-full filter blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span
            className="hidden md:inline-flex items-center gap-2 py-2 px-5 rounded-full glass-card text-green-400 text-sm font-semibold tracking-widest mb-8 animate-slide-up"
            style={{
              animationDelay: "0.2s",
            }}
          >
            <a href="#home" className="hover:text-white transition-colors">
              HOME
            </a>
            <span>/</span>
            <span className="text-white">SUSTAINABILITY</span>
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl animate-slide-up"
            style={{
              animationDelay: "0.4s",
            }}
          >
            Committed to a{" "}
            <span className="text-gradient-gold">Sustainable</span> Future
          </h1>
          <p
            className="text-xl text-gray-300 max-w-3xl leading-relaxed animate-slide-up"
            style={{
              animationDelay: "0.6s",
            }}
          >
            At Simmerium, sustainability is not just a corporate initiative — it
            is embedded in our DNA. We recognize our responsibility to protect
            the environment while meeting the world's growing energy demands.
          </p>
        </div>
      </section>

      {/* ESG Goals Bar */}
      <section className="bg-simmerium-navy py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {esgGoals.map((goal, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-simmerium-gold mb-2">
                  {goal.target}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {goal.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-simmerium-gold"></div>
              <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                ESG Framework
              </span>
              <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-simmerium-heading mb-6">
              Our Four Pillars
            </h2>
            <p className="text-lg text-simmerium-body max-w-2xl mx-auto">
              A comprehensive approach to environmental, social, and governance
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-simmerium-gold/30 transition-colors group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-simmerium-gold transition-colors">
                      <Icon className="w-8 h-8 text-simmerium-gold group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-simmerium-heading mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-simmerium-body leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                      <span className="inline-block bg-simmerium-gold/10 text-simmerium-gold text-sm font-semibold px-4 py-1.5 rounded-full">
                        {pillar.stats}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-24 bg-simmerium-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-simmerium-gold"></div>
              <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                In Action
              </span>
              <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-simmerium-heading mb-6">
              Key Initiatives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-simmerium-cream rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-simmerium-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-simmerium-heading mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-simmerium-body text-sm leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ESG Report CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-simmerium-heading mb-6">
            Read Our Latest ESG Report
          </h2>
          <p className="text-lg text-simmerium-body mb-10 max-w-2xl mx-auto">
            Our annual Environmental, Social, and Governance report provides
            full transparency on our progress, challenges, and commitments.
            Independently verified and aligned with GRI Standards.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-simmerium-gold hover:bg-simmerium-light-gold text-white px-8 py-4 rounded font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Download ESG Report 2025
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-simmerium-navy text-simmerium-navy hover:bg-simmerium-navy hover:text-white px-8 py-4 rounded font-semibold transition-all"
            >
              Contact Our ESG Team
            </a>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <AnimatedSection>
        <CertificationsSection />
      </AnimatedSection>

      <CTABanner />
    </div>
  );
}
