const partners = [
  "TotalEnergies",
  "ChevronTexaco",
  "AGIP — ENI",
  "Seplat Energy",
  "NNPC / NPDC",
  "Addax Petroleum",
  "Moni-Pulo",
  "SPDC — Shell",
  "ExxonMobil"
];

export function PartnersBar() {
  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
          Trusted by Leading Energy Companies Worldwide
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative marquee-fade-left">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set */}
          {partners.map((partner, index) => (
            <div
              key={`a-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <span className="font-bold text-xl text-gray-300 hover:text-simmerium-gold transition-colors duration-500 uppercase tracking-wider cursor-default whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`b-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <span className="font-bold text-xl text-gray-300 hover:text-simmerium-gold transition-colors duration-500 uppercase tracking-wider cursor-default whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
