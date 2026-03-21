import React, { lazy } from 'react';
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  UsersIcon,
  HeartIcon,
  GraduationCapIcon } from
'lucide-react';
export function CareersSection() {
  return (
    <section id="careers" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Workplace Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-16 h-64 md:h-80">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop"
            alt="Simmerium workplace"
            className="w-full h-full object-cover"
            loading="lazy" />
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Why Join Us */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-simmerium-gold"></div>
              <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                Careers
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-simmerium-heading mb-6 leading-tight">
              Build Your Future With Us
            </h2>
            <p className="text-lg text-simmerium-body mb-10">
              Join a team of passionate innovators shaping the future of
              oilfield chemistry. At Simmerium, you'll tackle meaningful
              challenges, grow your expertise, and make a global impact.
            </p>

            <div className="space-y-6 mb-10">
              {/* Collaborative Culture */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-simmerium-cream rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                  <UsersIcon className="w-6 h-6 text-simmerium-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-simmerium-heading mb-1">
                    Collaborative Culture
                  </h4>
                  <p className="text-sm text-simmerium-body">
                    Work alongside world-class scientists and engineers
                  </p>
                </div>
              </div>

              {/* Continuous Learning */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-simmerium-cream rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                  <GraduationCapIcon className="w-6 h-6 text-simmerium-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-simmerium-heading mb-1">
                    Continuous Learning
                  </h4>
                  <p className="text-sm text-simmerium-body">
                    Funded certifications, conferences, and advanced degrees
                  </p>
                </div>
              </div>

              {/* Comprehensive Benefits */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-simmerium-cream rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                  <HeartIcon className="w-6 h-6 text-simmerium-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-simmerium-heading mb-1">
                    Comprehensive Benefits
                  </h4>
                  <p className="text-sm text-simmerium-body">
                    Health, wellness, retirement, and family support programs
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-simmerium-gold hover:bg-simmerium-light-gold text-white px-8 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:-translate-y-0.5 shadow-md">
              
              View All Openings
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Right: Open Positions */}
          <div>
            <h3 className="text-xl font-bold text-simmerium-heading mb-6">
              Featured Openings
            </h3>
            <div className="space-y-4">
              {/* Position 1 */}
              <a
                href="#contact-form"
                className="block bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-simmerium-gold/30 hover:shadow-lg transition-all duration-500 group transform hover:-translate-y-1">
                
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-simmerium-heading group-hover:text-simmerium-gold transition-colors duration-300 mb-2">
                      Senior Corrosion Engineer
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-simmerium-body">
                      <span className="flex items-center gap-1.5">
                        <MapPinIcon className="w-4 h-4 text-gray-400" />
                        Houston, TX
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ClockIcon className="w-4 h-4 text-gray-400" />
                        Full-time
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BriefcaseIcon className="w-4 h-4 text-gray-400" />
                        Technical Services
                      </span>
                    </div>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-gray-300 group-hover:text-simmerium-gold transition-colors duration-300 flex-shrink-0 mt-1" />
                </div>
              </a>

              {/* Position 2 */}
              <a
                href="#contact-form"
                className="block bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-simmerium-gold/30 hover:shadow-lg transition-all duration-500 group transform hover:-translate-y-1">
                
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-simmerium-heading group-hover:text-simmerium-gold transition-colors duration-300 mb-2">
                      R&D Chemist — Scale Inhibitors
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-simmerium-body">
                      <span className="flex items-center gap-1.5">
                        <MapPinIcon className="w-4 h-4 text-gray-400" />
                        Aberdeen, UK
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ClockIcon className="w-4 h-4 text-gray-400" />
                        Full-time
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BriefcaseIcon className="w-4 h-4 text-gray-400" />
                        Research & Development
                      </span>
                    </div>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-gray-300 group-hover:text-simmerium-gold transition-colors duration-300 flex-shrink-0 mt-1" />
                </div>
              </a>

              {/* Position 3 */}
              <a
                href="#contact-form"
                className="block bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-simmerium-gold/30 hover:shadow-lg transition-all duration-500 group transform hover:-translate-y-1">
                
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-simmerium-heading group-hover:text-simmerium-gold transition-colors duration-300 mb-2">
                      Field Operations Manager
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-simmerium-body">
                      <span className="flex items-center gap-1.5">
                        <MapPinIcon className="w-4 h-4 text-gray-400" />
                        Dubai, UAE
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ClockIcon className="w-4 h-4 text-gray-400" />
                        Full-time
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BriefcaseIcon className="w-4 h-4 text-gray-400" />
                        Operations
                      </span>
                    </div>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-gray-300 group-hover:text-simmerium-gold transition-colors duration-300 flex-shrink-0 mt-1" />
                </div>
              </a>

              {/* Position 4 */}
              <a
                href="#contact-form"
                className="block bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-simmerium-gold/30 hover:shadow-lg transition-all duration-500 group transform hover:-translate-y-1">
                
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-simmerium-heading group-hover:text-simmerium-gold transition-colors duration-300 mb-2">
                      Business Development Director — APAC
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-simmerium-body">
                      <span className="flex items-center gap-1.5">
                        <MapPinIcon className="w-4 h-4 text-gray-400" />
                        Singapore
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ClockIcon className="w-4 h-4 text-gray-400" />
                        Full-time
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BriefcaseIcon className="w-4 h-4 text-gray-400" />
                        Commercial
                      </span>
                    </div>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-gray-300 group-hover:text-simmerium-gold transition-colors duration-300 flex-shrink-0 mt-1" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}