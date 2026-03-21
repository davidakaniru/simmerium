import React from 'react';
import {
  ShieldCheckIcon,
  BadgeCheckIcon,
  CheckCircleIcon,
  AwardIcon } from
'lucide-react';
export function CertificationsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
              Recognition
            </span>
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-simmerium-heading mb-6">
            Certifications & Accreditations
          </h2>
          <p className="text-lg text-simmerium-body max-w-2xl mx-auto">
            Our commitment to quality, safety, and environmental responsibility
            is validated by the world's leading standards organizations.
          </p>
        </div>

        {/* Certifications Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* ISO 9001 */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-simmerium-gold/30 transition-all duration-500 group text-center hover:shadow-lg">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-shadow duration-500 shimmer-effect">
              <ShieldCheckIcon className="w-8 h-8 text-simmerium-navy group-hover:text-simmerium-gold transition-colors duration-500" />
            </div>
            <h3 className="font-bold text-simmerium-heading mb-1 text-lg">
              ISO 9001:2015
            </h3>
            <p className="text-sm text-simmerium-body">
              Quality Management Systems
            </p>
          </div>

          {/* ISO 14001 */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-simmerium-gold/30 transition-all duration-500 group text-center hover:shadow-lg">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-shadow duration-500 shimmer-effect">
              <BadgeCheckIcon className="w-8 h-8 text-simmerium-navy group-hover:text-simmerium-gold transition-colors duration-500" />
            </div>
            <h3 className="font-bold text-simmerium-heading mb-1 text-lg">
              ISO 14001:2015
            </h3>
            <p className="text-sm text-simmerium-body">
              Environmental Management
            </p>
          </div>

          {/* ISO 45001 */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-simmerium-gold/30 transition-all duration-500 group text-center hover:shadow-lg">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-shadow duration-500 shimmer-effect">
              <CheckCircleIcon className="w-8 h-8 text-simmerium-navy group-hover:text-simmerium-gold transition-colors duration-500" />
            </div>
            <h3 className="font-bold text-simmerium-heading mb-1 text-lg">
              ISO 45001:2018
            </h3>
            <p className="text-sm text-simmerium-body">
              Occupational Health & Safety
            </p>
          </div>

          {/* REACH */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-simmerium-gold/30 transition-all duration-500 group text-center hover:shadow-lg">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-shadow duration-500 shimmer-effect">
              <ShieldCheckIcon className="w-8 h-8 text-simmerium-navy group-hover:text-simmerium-gold transition-colors duration-500" />
            </div>
            <h3 className="font-bold text-simmerium-heading mb-1 text-lg">
              REACH Compliant
            </h3>
            <p className="text-sm text-simmerium-body">
              EU Chemical Safety Standards
            </p>
          </div>
        </div>

        {/* Awards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Award 1 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-simmerium-gold/30 transition-all duration-500 group flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-simmerium-cream flex items-center justify-center flex-shrink-0 group-hover:bg-simmerium-gold transition-colors duration-500">
              <AwardIcon className="w-7 h-7 text-simmerium-gold group-hover:text-white transition-colors duration-500" />
            </div>
            <div>
              <h3 className="font-bold text-simmerium-heading text-sm mb-1">
                Global Safety Excellence Award
              </h3>
              <p className="text-xs font-semibold text-simmerium-gold uppercase tracking-wider">
                2025
              </p>
            </div>
          </div>

          {/* Award 2 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-simmerium-gold/30 transition-all duration-500 group flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-simmerium-cream flex items-center justify-center flex-shrink-0 group-hover:bg-simmerium-gold transition-colors duration-500">
              <AwardIcon className="w-7 h-7 text-simmerium-gold group-hover:text-white transition-colors duration-500" />
            </div>
            <div>
              <h3 className="font-bold text-simmerium-heading text-sm mb-1">
                Innovation in Green Chemistry
              </h3>
              <p className="text-xs font-semibold text-simmerium-gold uppercase tracking-wider">
                2024
              </p>
            </div>
          </div>

          {/* Award 3 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-simmerium-gold/30 transition-all duration-500 group flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-simmerium-cream flex items-center justify-center flex-shrink-0 group-hover:bg-simmerium-gold transition-colors duration-500">
              <AwardIcon className="w-7 h-7 text-simmerium-gold group-hover:text-white transition-colors duration-500" />
            </div>
            <div>
              <h3 className="font-bold text-simmerium-heading text-sm mb-1">
                Best Chemical Supplier — MEA Region
              </h3>
              <p className="text-xs font-semibold text-simmerium-gold uppercase tracking-wider">
                2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}