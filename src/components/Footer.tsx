import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-simmerium-navy pt-20 pb-10 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="bg-white inline-block p-2 rounded">
              <img
                src="/Simmerium_Corporate_Logo.png"
                alt="Simmerium Control Chemicals"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Global leader in advanced oilfield chemical solutions, delivering
              innovation, reliability, and performance to the energy sector
              worldwide.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-simmerium-gold transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-simmerium-gold transition-colors"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                {
                  name: "About Us",
                  href: "#about",
                },
                {
                  name: "Products & Solutions",
                  href: "#products",
                },
                {
                  name: "Industries",
                  href: "#sectors",
                },
                {
                  name: "Sustainability",
                  href: "#sustainability",
                },
                // {
                //   name: "News & Insights",
                //   href: "#home",
                // },
                // {
                //   name: "Careers",
                //   href: "#home",
                // },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-simmerium-gold transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-simmerium-gold mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Key Solutions</h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Corrosion Inhibitors",
                  href: "#product/corrosion-inhibitors",
                },
                {
                  name: "Scale Inhibitors",
                  href: "#product/scale-inhibitors",
                },
                {
                  name: "Demulsifiers",
                  href: "#product/demulsifiers",
                },
                {
                  name: "Biocides",
                  href: "#product/biocides",
                },
                {
                  name: "H2S Scavengers",
                  href: "#product/h2s-scavengers",
                },
                {
                  name: "Production Chemicals",
                  href: "#product/production-chemicals",
                },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-simmerium-gold transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-simmerium-gold mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 text-sm">
                <MapPinIcon className="w-5 h-5 text-simmerium-gold mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Simmerium Control Chemicals,
                  <br />
                  8911 Orchid Valley Way,
                  <br />
                  Cypress. Texas. TX 77433
                </span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <PhoneIcon className="w-5 h-5 text-simmerium-gold mr-3 flex-shrink-0" />
                <a href="tel:+1281256-5334">+1 (281) 256-5334</a>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <MailIcon className="w-5 h-5 text-simmerium-gold mr-3 flex-shrink-0" />
                <a href="mailto:info@simmerium.com">Info@simmerium.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Simmerium Control Chemicals. All
            rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
