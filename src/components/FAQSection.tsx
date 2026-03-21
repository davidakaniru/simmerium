import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
const faqs = [
{
  question: 'What industries does Simmerium serve?',
  answer:
  'We serve a wide range of energy and industrial sectors including Oil & Gas Upstream, Oil & Gas Downstream, Petrochemical, and Water Treatment. Our chemical solutions are tailored to meet the specific challenges of each industry, from deepwater production to refinery operations.'
},
{
  question:
  'How does Simmerium customize solutions for different field conditions?',
  answer:
  "Every engagement begins with a comprehensive field assessment and fluid analysis. Our R&D team then formulates bespoke chemical programs optimized for your specific reservoir conditions, water chemistry, temperature, and pressure profiles. We don't believe in one-size-fits-all solutions."
},
{
  question: 'What is your global delivery capability?',
  answer:
  'With operations spanning 30+ countries across the Middle East, Asia Pacific, Europe, and the Americas, we maintain strategic manufacturing facilities and distribution hubs to ensure rapid product availability. Our local teams provide on-the-ground technical support backed by global R&D resources.'
},
{
  question: 'Are Simmerium products environmentally compliant?',
  answer:
  'Absolutely. Environmental responsibility is core to our product development philosophy. We hold ISO 14001:2015 certification and are REACH compliant. Our growing portfolio of biodegradable and low-toxicity formulations meets or exceeds the strictest environmental regulations worldwide, including North Sea OSPAR standards.'
},
{
  question: 'How do you measure the performance of your chemical programs?',
  answer:
  'We implement rigorous KPI-driven monitoring programs that track corrosion rates, scale deposition, production efficiency, and chemical consumption in real time. Our field engineers provide regular performance reports with data-driven recommendations for continuous optimization.'
},
{
  question: 'What technical support do you provide after deployment?',
  answer:
  'Our commitment extends well beyond product delivery. We provide 24/7 technical support, dedicated field engineers, regular performance reviews, and proactive optimization recommendations. Our goal is to be a long-term strategic partner, not just a chemical supplier.'
}];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick





}: {question: string;answer: string;isOpen: boolean;onClick: () => void;}) {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-500 ${isOpen ? 'border-l-4 border-l-simmerium-gold border border-gray-100 shadow-md' : 'border border-gray-100 hover:border-simmerium-gold/30'}`}>
      
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-simmerium-gold/20"
        aria-expanded={isOpen}>
        
        <span className="text-lg font-semibold text-simmerium-heading pr-8">
          {question}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 text-simmerium-gold flex-shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
        
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        
        <div className="px-6 pb-6 pt-0">
          <div className="w-full h-px bg-gray-100 mb-4"></div>
          <p className="text-simmerium-body leading-relaxed text-[15px]">
            {answer}
          </p>
        </div>
      </div>
    </div>);

}
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
              FAQ
            </span>
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-simmerium-heading mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-simmerium-body max-w-2xl mx-auto">
            Find answers to common questions about our products, services, and
            global capabilities.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) =>
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)} />

          )}
        </div>

        <div className="text-center mt-12">
          <p className="text-simmerium-body mb-4">Still have questions?</p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 bg-simmerium-navy hover:bg-simmerium-charcoal text-white px-8 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:-translate-y-0.5">
            
            Contact Our Team
          </a>
        </div>
      </div>
    </section>);

}