import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Products & Solutions',
    href: '#products'
  },
  {
    name: 'Industries',
    href: '#sectors'
  },
  {
    name: 'Sustainability',
    href: '#sustainability'
  }];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-simmerium-navy/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="bg-white p-1 rounded shadow-sm transition-transform group-hover:scale-105">
                <img
                  src="/Simmerium_Corporate_Logo.png"
                  alt="Simmerium Control Chemicals"
                  className="h-10 w-auto object-contain" />
                
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-simmerium-gold text-sm font-medium transition-colors">
              
                {link.name}
              </a>
            )}
            <a
              href="#contact-us"
              className="bg-simmerium-gold hover:bg-simmerium-light-gold text-white px-6 py-2.5 rounded text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-simmerium-gold focus:outline-none"
              aria-label="Toggle menu">
              
              {isMobileMenuOpen ?
              <XIcon className="h-6 w-6" /> :

              <MenuIcon className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-simmerium-navy shadow-xl transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'} overflow-hidden`}>
        
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-3 text-base font-medium text-white hover:text-simmerium-gold hover:bg-white/5 rounded-md transition-colors">
            
              {link.name}
            </a>
          )}
          <a
            href="#contact-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center mt-4 bg-simmerium-gold hover:bg-simmerium-light-gold text-white px-6 py-3 rounded text-base font-semibold transition-colors">
            
            Contact Us
          </a>
        </div>
      </div>
    </nav>);

}