import { useEffect, useState, useRef } from 'react';
function useCountUp(end: number, duration = 2000) {
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
        threshold: 0.3
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);
  return {
    count,
    ref
  };
}
export function ImpactBanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&h=600&fit=crop')`
        }}>
      </div>
      <div className="absolute inset-0 bg-simmerium-navy/85"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <StatMetric value={98} suffix="%" label="Client Retention Rate" />
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-simmerium-gold/50 to-transparent"></div>
          </div>
          <StatMetric value={40} suffix="%" label="Avg. Cost Reduction" />
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-simmerium-gold/50 to-transparent"></div>
          </div>
          <StatMetric value={12} suffix="M+" label="Barrels Protected Daily" />
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-simmerium-gold/50 to-transparent"></div>
          </div>
          <StatMetric value={5} suffix="M" label="Safe Man-Hours" />
        </div>
      </div>
    </section>);

}
function StatMetric({
  value,
  suffix,
  label




}: {value: number;suffix: string;label: string;}) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-white mb-2">
        {count}
        <span className="text-simmerium-gold">{suffix}</span>
      </div>
      <div className="text-sm font-medium text-gray-300 uppercase tracking-wider">
        {label}
      </div>
    </div>);

}