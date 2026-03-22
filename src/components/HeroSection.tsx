import { ArrowRightIcon} from "lucide-react";
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-simmerium-navy pt-20"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&h=1080&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/3191572/3191572-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-simmerium-navy/80 via-simmerium-navy/50 to-simmerium-navy/80"></div>
        {/* Extra cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,25,35,0.6)_100%)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div
          className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-simmerium-gold/40 float-particle"
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
          className="absolute top-[60%] left-[20%] w-1 h-1 rounded-full bg-simmerium-light-gold/50 float-particle"
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
          className="absolute top-[70%] left-[55%] w-2 h-2 rounded-full bg-simmerium-light-gold/25 float-particle"
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
        <div
          className="absolute top-[80%] left-[30%] w-1.5 h-1.5 rounded-full bg-simmerium-gold/30 float-particle"
          style={{
            animationDelay: "1s",
          }}
        ></div>
        <div
          className="absolute top-[20%] left-[60%] w-1 h-1 rounded-full bg-simmerium-light-gold/45 float-particle"
          style={{
            animationDelay: "3.5s",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className="inline-block py-2 px-5 rounded-full glass-card text-simmerium-light-gold text-sm font-semibold tracking-widest mb-8 animate-slide-up"
          style={{
            animationDelay: "0.2s",
          }}
        >
          ADVANCED OILFIELD CHEMISTRY
        </span>

        <h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight mb-8 max-w-5xl mx-auto leading-[1.05] animate-slide-up"
          style={{
            animationDelay: "0.5s",
          }}
        >
          Engineering Chemical Excellence for a{" "}
          <span className="text-gradient-gold">Sustainable Future</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed animate-slide-up"
          style={{
            animationDelay: "0.8s",
          }}
        >
          Global leader in oilfield chemical solutions — delivering innovation,
          reliability, and performance across 30+ countries.
        </p>

        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-slide-up"
          style={{
            animationDelay: "1.1s",
          }}
        >
          <a
            href="#products"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-simmerium-gold hover:bg-simmerium-light-gold text-white px-10 py-4 rounded-lg font-semibold transition-all duration-500 shadow-lg shadow-simmerium-gold/20 hover:shadow-simmerium-gold/40 transform hover:-translate-y-1"
          >
            Explore Our Solutions
            <ArrowRightIcon className="w-5 h-5" />
          </a>
          <a
            href="#contact-us"
            className="w-full sm:w-auto flex items-center justify-center gap-3 glass-card text-white hover:bg-white/15 px-10 py-4 rounded-lg font-semibold transition-all duration-500 transform hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <span
          className="text-white/40 text-xs uppercase tracking-[0.3em] mb-3 animate-slide-up"
          style={{
            animationDelay: '1.5s'
          }}>
          
          Scroll to explore
        </span>
        <div
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5 animate-slide-up"
          style={{
            animationDelay: '1.7s'
          }}>
          
          <div className="w-1.5 h-3 rounded-full bg-simmerium-gold animate-bounce"></div>
        </div>
      </div> */}
    </section>
  );
}
