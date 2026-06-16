import { motion } from 'motion/react';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';

export function BottomCtaSection() {
  return (
    <section id="join" className="py-24 bg-black relative overflow-hidden flex flex-col justify-center min-h-[500px]">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Ready to professionalize your portfolio?</h2>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Join leading landlords and property managers upgrading to Spaceya. Secure your spot on our waitlist today.</p>
        
        <div className="max-w-md mx-auto mb-10">
          <WaitlistForm variant="dark" />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 pt-8">
          <p className="text-slate-400 text-sm font-medium">Follow us</p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/spaceya.app?igsh=MWF0dWZpemozdTVpNQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/spaceya_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/spaceya1?mibextid=ZbWKwL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
