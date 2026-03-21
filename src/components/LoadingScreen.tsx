import React, { useEffect, useState } from 'react';
export function LoadingScreen({ onComplete }: {onComplete: () => void;}) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'fadeout'>('loading');
  useEffect(() => {
    // Animate progress bar
    const duration = 2200;
    const interval = 20;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += interval;
      const t = elapsed / duration;
      // Ease-out cubic for smooth progress
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.min(eased * 100, 100));
      if (elapsed >= duration) {
        clearInterval(timer);
        setPhase('fadeout');
        setTimeout(onComplete, 600);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [onComplete]);
  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-simmerium-navy transition-opacity duration-600 ${phase === 'fadeout' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-simmerium-gold/5 rounded-full filter blur-[120px] loading-breathe"></div>
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-simmerium-gold/30 float-particle"
          style={{
            animationDelay: '0s'
          }}>
        </div>
        <div
          className="absolute top-[30%] left-[70%] w-1.5 h-1.5 rounded-full bg-simmerium-gold/25 float-particle"
          style={{
            animationDelay: '1s'
          }}>
        </div>
        <div
          className="absolute top-[65%] left-[25%] w-1 h-1 rounded-full bg-simmerium-light-gold/35 float-particle"
          style={{
            animationDelay: '2s'
          }}>
        </div>
        <div
          className="absolute top-[55%] left-[80%] w-1.5 h-1.5 rounded-full bg-simmerium-gold/20 float-particle"
          style={{
            animationDelay: '0.5s'
          }}>
        </div>
        <div
          className="absolute top-[75%] left-[50%] w-1 h-1 rounded-full bg-simmerium-light-gold/30 float-particle"
          style={{
            animationDelay: '1.5s'
          }}>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="loading-logo-enter mb-8">
          <div className="bg-white p-3 rounded-xl shadow-2xl shadow-simmerium-gold/20 loading-logo-glow">
            <img
              src="/Simmerium_Corporate_Logo.png"
              alt="Simmerium Control Chemicals"
              className="h-16 sm:h-20 w-auto object-contain" />
            
          </div>
        </div>

        {/* Company name */}
        <div className="loading-text-enter mb-2">
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-[0.25em] uppercase">
            Simmerium
          </h1>
        </div>
        <div className="loading-text-enter-delay">
          <p className="text-xs sm:text-sm text-simmerium-gold/80 tracking-[0.35em] uppercase font-medium">
            Control Chemicals
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-10 w-48 sm:w-64">
          <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-simmerium-gold via-simmerium-light-gold to-simmerium-gold rounded-full transition-all duration-100 ease-out"
              style={{
                width: `${progress}%`
              }}>
            </div>
          </div>
          <p className="text-center mt-3 text-[10px] text-white/30 tracking-[0.3em] uppercase font-medium loading-text-enter-delay">
            Engineering Excellence
          </p>
        </div>
      </div>
    </div>);

}