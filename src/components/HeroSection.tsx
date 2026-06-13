import { motion } from 'motion/react';
import { WaitlistForm } from './WaitlistForm';

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export function HeroSection() {
  return (
    <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-8"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-900 text-sm font-medium border border-slate-200">
          <span className="flex h-2 w-2 rounded-full bg-black"></span>
          Built for Nigerian Real Estate
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          Modern property management, <span className="text-slate-500">simplified.</span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          A comprehensive platform designed for landlords and property managers to track rent, handle maintenance, and manage tenants securely in one workspace.
        </motion.p>

        <motion.div variants={fadeInUp} className="max-w-md mx-auto mt-10" id="join">
          <WaitlistForm />
          <p className="text-sm text-slate-500 mt-4">
            Secure your spot for priority early access.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
