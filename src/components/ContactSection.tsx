import React, { useState } from 'react';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  CheckCircleIcon } from
'lucide-react';
export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'General Inquiry',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 5000);
  };
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <section id="contact-form" className="py-24 lg:py-32 bg-simmerium-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-simmerium-gold"></div>
              <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                Connect With Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-simmerium-heading mb-6 leading-tight">
              Get in Touch
            </h2>
            <p className="text-lg text-simmerium-body mb-10">
              Ready to discuss how Simmerium can optimize your operations? Our
              team of experts is here to help you find the right chemical
              solutions.
            </p>

            {/* Map Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-10 h-48">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=300&fit=crop"
                alt="Global locations"
                className="w-full h-full object-cover"
                loading="lazy" />
              
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <PhoneIcon className="w-5 h-5 text-simmerium-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-simmerium-heading mb-1">
                    Phone
                  </h4>
                  <p className="text-simmerium-body">+1 (281) 256-5334</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <MailIcon className="w-5 h-5 text-simmerium-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-simmerium-heading mb-1">
                    Email
                  </h4>
                  <p className="text-simmerium-body">Info@simmerium.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <MapPinIcon className="w-5 h-5 text-simmerium-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-simmerium-heading mb-1">
                    Global Headquarters
                  </h4>
                  <p className="text-simmerium-body">
                    8911 Orchid Valley Way,
                    <br />
                    Cypress. Texas. TX 77433
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="flex gap-4">
              <a
                href="#linkedin"
                className="w-11 h-11 bg-simmerium-navy text-white rounded-xl flex items-center justify-center hover:bg-simmerium-gold transition-colors duration-500 shadow-sm">
                
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="w-11 h-11 bg-simmerium-navy text-white rounded-xl flex items-center justify-center hover:bg-simmerium-gold transition-colors duration-500 shadow-sm">
                
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Right Side: Form */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-xl border border-white/60">
            {isSubmitted ?
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircleIcon className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-simmerium-heading mb-2">
                  Thank You!
                </h3>
                <p className="text-simmerium-body">
                  Your message has been received. We'll be in touch within 24
                  hours.
                </p>
              </div> :

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-simmerium-heading mb-2">
                    
                      Full Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white rounded-xl border border-gray-200 focus:border-simmerium-gold focus:ring-2 focus:ring-simmerium-gold/20 px-4 py-3.5 outline-none transition-all duration-300 text-simmerium-body"
                    placeholder="John Doe" />
                  
                  </div>
                  <div>
                    <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-simmerium-heading mb-2">
                    
                      Email Address
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white rounded-xl border border-gray-200 focus:border-simmerium-gold focus:ring-2 focus:ring-simmerium-gold/20 px-4 py-3.5 outline-none transition-all duration-300 text-simmerium-body"
                    placeholder="john@company.com" />
                  
                  </div>
                </div>

                <div>
                  <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-simmerium-heading mb-2">
                  
                    Company
                  </label>
                  <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white rounded-xl border border-gray-200 focus:border-simmerium-gold focus:ring-2 focus:ring-simmerium-gold/20 px-4 py-3.5 outline-none transition-all duration-300 text-simmerium-body"
                  placeholder="Your Company Ltd." />
                
                </div>

                <div>
                  <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-simmerium-heading mb-2">
                  
                    Subject
                  </label>
                  <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white rounded-xl border border-gray-200 focus:border-simmerium-gold focus:ring-2 focus:ring-simmerium-gold/20 px-4 py-3.5 outline-none transition-all duration-300 text-simmerium-body appearance-none">
                  
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Information">
                      Product Information
                    </option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-simmerium-heading mb-2">
                  
                    Message
                  </label>
                  <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white rounded-xl border border-gray-200 focus:border-simmerium-gold focus:ring-2 focus:ring-simmerium-gold/20 px-4 py-3.5 outline-none transition-all duration-300 text-simmerium-body resize-none"
                  placeholder="How can we help you?">
                </textarea>
                </div>

                <button
                type="submit"
                className="w-full bg-simmerium-gold hover:bg-simmerium-light-gold text-white font-bold py-4 rounded-xl shadow-lg shadow-simmerium-gold/20 hover:shadow-simmerium-gold/40 transition-all duration-500 transform hover:-translate-y-0.5">
                
                  Send Message
                </button>
              </form>
            }
          </div>
        </div>
      </div>
    </section>);

}