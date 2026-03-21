import React, { lazy } from 'react';
import { LinkedinIcon } from 'lucide-react';
export function TeamSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
              Our Leadership
            </span>
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-simmerium-heading mb-6">
            The People Behind Our Success
          </h2>
          <p className="text-lg text-simmerium-body max-w-2xl mx-auto">
            A diverse team of industry veterans, visionary scientists, and
            operational experts dedicated to solving the world's toughest energy
            challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dr. Ahmad Al-Rashid */}
          <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 bg-white border border-gray-100">
            <div className="relative h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                alt="Dr. Ahmad Al-Rashid"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-simmerium-navy/90 via-simmerium-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-sm leading-relaxed">
                  With over 25 years in specialty chemicals, Dr. Al-Rashid has
                  led Simmerium's transformation into a global leader in
                  oilfield chemistry.
                </p>
              </div>
              <a
                href="#linkedin"
                className="absolute top-4 right-4 bg-white/90 text-simmerium-navy p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-simmerium-gold hover:text-white shadow-lg transform translate-y-2 group-hover:translate-y-0"
                aria-label="Dr. Ahmad Al-Rashid's LinkedIn profile">
                
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-simmerium-heading mb-1">
                Dr. Ahmad Al-Rashid
              </h3>
              <p className="text-xs font-semibold text-simmerium-gold uppercase tracking-wider">
                Chief Executive Officer
              </p>
            </div>
          </div>

          {/* Sarah Mitchell */}
          <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 bg-white border border-gray-100">
            <div className="relative h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
                alt="Sarah Mitchell"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-simmerium-navy/90 via-simmerium-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-sm leading-relaxed">
                  A pioneer in green chemistry, Sarah drives our R&D strategy
                  and has led the development of 50+ patented formulations.
                </p>
              </div>
              <a
                href="#linkedin"
                className="absolute top-4 right-4 bg-white/90 text-simmerium-navy p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-simmerium-gold hover:text-white shadow-lg transform translate-y-2 group-hover:translate-y-0"
                aria-label="Sarah Mitchell's LinkedIn profile">
                
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-simmerium-heading mb-1">
                Sarah Mitchell
              </h3>
              <p className="text-xs font-semibold text-simmerium-gold uppercase tracking-wider">
                Chief Technology Officer
              </p>
            </div>
          </div>

          {/* James Okonkwo */}
          <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 bg-white border border-gray-100">
            <div className="relative h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                alt="James Okonkwo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-simmerium-navy/90 via-simmerium-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-sm leading-relaxed">
                  James oversees global operations across 30+ countries,
                  ensuring seamless delivery and operational excellence.
                </p>
              </div>
              <a
                href="#linkedin"
                className="absolute top-4 right-4 bg-white/90 text-simmerium-navy p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-simmerium-gold hover:text-white shadow-lg transform translate-y-2 group-hover:translate-y-0"
                aria-label="James Okonkwo's LinkedIn profile">
                
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-simmerium-heading mb-1">
                James Okonkwo
              </h3>
              <p className="text-xs font-semibold text-simmerium-gold uppercase tracking-wider">
                Chief Operating Officer
              </p>
            </div>
          </div>

          {/* Dr. Priya Sharma */}
          <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 bg-white border border-gray-100">
            <div className="relative h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
                alt="Dr. Priya Sharma"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-simmerium-navy/90 via-simmerium-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-sm leading-relaxed">
                  Leading our innovation labs, Dr. Sharma specializes in
                  next-generation corrosion and scale inhibitor technologies.
                </p>
              </div>
              <a
                href="#linkedin"
                className="absolute top-4 right-4 bg-white/90 text-simmerium-navy p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-simmerium-gold hover:text-white shadow-lg transform translate-y-2 group-hover:translate-y-0"
                aria-label="Dr. Priya Sharma's LinkedIn profile">
                
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-simmerium-heading mb-1">
                Dr. Priya Sharma
              </h3>
              <p className="text-xs font-semibold text-simmerium-gold uppercase tracking-wider">
                VP of Research & Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}