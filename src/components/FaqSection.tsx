import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Who is Spaceya built for?",
    answer: "Spaceya is designed specifically for Nigerian landlords, property managers, estate management companies, and real estate agencies looking to streamline their operations."
  },
  {
    question: "How does the rent tracking work?",
    answer: "Our platform automates rent collection tracking, sends automated reminders to tenants before due dates, and provides clear visibility into paid, pending, and overdue rents."
  },
  {
    question: "Can I manage multiple properties?",
    answer: "Yes, Spaceya supports portfolio management. Whether you manage a single duplex or hundreds of units across different states, you can track everything from a single dashboard."
  },
  {
    question: "When will Spaceya be available?",
    answer: "We are currently in private beta and will be rolling out access to our waitlist soon. Join the waitlist to be among the first to get access and priority onboarding."
  }
];

export function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition-colors hover:border-slate-300">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-medium text-slate-900">{faq.question}</span>
                {activeFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-slate-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
