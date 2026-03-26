import { useEffect, useState, useRef } from "react";
function useAnimatedCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);
  return {
    count,
    ref,
  };
}
function StatItem({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useAnimatedCounter(end);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-1">
        {count}
        <span className="text-simmerium-gold">{suffix}</span>
      </div>
      <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
export function AboutSection() {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / window.innerHeight;
        setOffset(scrollProgress * 30);
      }
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section
        ref={sectionRef}
        id="about"
        className="py-24 lg:py-32 bg-simmerium-cream overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-simmerium-gold"></div>
                <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-simmerium-heading mb-6 leading-tight">
                Pioneering Chemical Innovation Since 2005
              </h2>
              <div className="space-y-6 text-lg text-simmerium-body">
                <p>
                  Simmerium Control Chemicals stands at the forefront of global
                  oilfield chemistry. We specialize in developing,
                  manufacturing, and deploying high-performance chemical
                  solutions that optimize production, protect assets, and ensure
                  environmental compliance.
                </p>
                <p>
                  Our commitment to research and development allows us to tackle
                  the most complex challenges in the energy sector. From
                  upstream extraction to downstream processing, our tailored
                  formulations deliver measurable value and operational
                  excellence to our partners worldwide.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 text-simmerium-navy font-bold hover:text-simmerium-gold transition-colors duration-300 group"
                >
                  Learn more about our heritage
                  <span className="block transform group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>

              {/* CEO Quote Block */}
              <div className="mt-12 pl-6 border-l-4 border-simmerium-gold">
                <p className="text-lg italic text-simmerium-heading font-medium mb-4 leading-relaxed">
                  "Our mission is simple: deliver the best chemistry, backed by
                  the best people, to solve the world's toughest energy
                  challenges."
                </p>
                <div className="flex items-center gap-4">
                  {/* <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                    alt="Dr. Ahmad Al-Rashid"
                    className="w-14 h-14 rounded-full object-cover border-2 border-simmerium-gold/30 shadow-lg"
                    loading="lazy" /> */}

                  <div>
                    <h4 className="font-bold text-simmerium-heading text-sm">
                      Vincent Gomina
                    </h4>
                    <p className="text-xs text-simmerium-gold font-semibold uppercase tracking-wider">
                      Chief Executive Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image Composition */}
            <div className="relative">
              {/* Main Image */}
              <div
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  transform: `translateY(${offset * 0.3}px)`,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop"
                  alt="Simmerium R&D laboratory"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-simmerium-navy/30 to-transparent"></div>
              </div>

              {/* Overlapping Secondary Image */}
              <div
                className="absolute -bottom-8 -left-8 z-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-simmerium-cream w-48 h-36 md:w-64 md:h-48"
                style={{
                  transform: `translateY(${offset * -0.2}px)`,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop"
                  alt="Industrial facility"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Stat Card */}
              <div
                className="absolute -top-6 -right-4 md:right-4 z-30 bg-white rounded-xl shadow-xl p-5 border border-gray-100"
                style={{
                  transform: `translateY(${offset * -0.4}px)`,
                }}
              >
                <div className="text-3xl font-bold text-simmerium-navy">
                  12+
                </div>
                <div className="text-xs font-semibold text-simmerium-gold uppercase tracking-wider">
                  Countries
                </div>
                <div className="w-full h-1 bg-simmerium-gold/20 rounded-full mt-2">
                  <div className="w-3/4 h-full bg-simmerium-gold rounded-full"></div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full rounded-2xl border-2 border-simmerium-gold/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-16 bg-simmerium-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-simmerium-navy via-simmerium-charcoal to-simmerium-navy"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-simmerium-gold/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-simmerium-light-gold/5 rounded-full filter blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <StatItem
              end={85}
              suffix="+"
              label="Years of Combined
Leadership Experience"
            />
            <StatItem
              end={15}
              suffix="+"
              label="Specialty Chemical
Product Lines"
            />
            <StatItem
              end={4}
              suffix="+"
              label="Continents of
Operational Reach"
            />
            <StatItem
              end={100}
              suffix="%"
              label=" Science-Backed
Formulations"
            />
          </div>
        </div>
      </section>
    </>
  );
}
