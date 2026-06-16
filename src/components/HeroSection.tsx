import { motion } from 'motion/react';

function TypewriterText({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={`char-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05, delay: delay + index * 0.04 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

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
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          <TypewriterText text="Modern property management, " delay={0.3} />
          <TypewriterText text="simplified." delay={0.3 + ("Modern property management, ".length * 0.04)} className="text-slate-500" />
        </h1>
        
        <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          A comprehensive platform designed for landlords and property managers to track rent, handle maintenance, and manage tenants securely in one workspace.
        </motion.p>


      </motion.div>
    </section>
  );
}
