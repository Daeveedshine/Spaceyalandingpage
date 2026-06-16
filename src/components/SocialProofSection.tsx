import { motion } from 'motion/react';

export function SocialProofSection() {
  return (
    <section id="testimonials" className="py-24 bg-black text-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Trusted by property professionals</h2>
        <div className="grid sm:grid-cols-3 gap-8 py-8 border-y border-slate-800">
          <div className="space-y-2">
            <div className="text-4xl font-display font-bold text-white">0%</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide font-medium">Lost Data</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-display font-bold text-white">100%</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide font-medium">Clarity On Rent</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-display font-bold text-white">1</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide font-medium">Source of Truth</div>
          </div>
        </div>
        <p className="mt-8 text-lg text-slate-300 max-w-2xl mx-auto">
          "We are building Spaceya because the Nigerian real estate market deserves software that matches the ambition of its landlords and agencies."
        </p>
      </motion.div>
    </section>
  );
}
