import React, { useEffect, useState, useRef } from 'react';
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  stagger?: boolean;
}
export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  stagger = false
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  const directionStyles: Record<string, string> = {
    up: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16',
    down: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16',
    left: isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16',
    right: isVisible ?
    'opacity-100 translate-x-0' :
    'opacity-0 -translate-x-16'
  };
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${directionStyles[direction]} ${className}`}>
      
      {children}
    </div>);

}