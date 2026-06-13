import { motion } from 'motion/react';

export function AppPreviewSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative rounded-2xl md:rounded-[2rem] bg-slate-900 aspect-[16/9] md:aspect-[21/9] overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
      >
        {/* Mock Header */}
        <div className="h-12 border-b border-slate-800 flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          </div>
        </div>
        {/* Mock Content area */}
        <div className="flex-1 p-6 sm:p-10 flex gap-6">
          <div className="hidden sm:flex flex-col gap-4 w-48 border-r border-slate-800 pr-6">
            <div className="h-4 w-24 bg-slate-800 rounded"></div>
            <div className="h-4 w-full bg-slate-800 rounded mt-4"></div>
            <div className="h-4 w-3/4 bg-slate-800 rounded"></div>
            <div className="h-4 w-5/6 bg-slate-800 rounded"></div>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div className="h-8 w-48 bg-slate-800 rounded"></div>
            <div className="flex gap-4">
              <div className="flex-1 h-24 bg-emerald-900/30 border border-emerald-800/50 rounded-xl relative overflow-hidden">
                 <div className="absolute top-4 left-4 h-4 w-20 bg-emerald-800/50 rounded"></div>
                 <div className="absolute bottom-4 left-4 h-8 w-32 bg-emerald-500/20 rounded"></div>
              </div>
              <div className="flex-1 h-24 bg-slate-800/50 rounded-xl"></div>
              <div className="flex-1 h-24 bg-slate-800/50 rounded-xl"></div>
            </div>
            <div className="flex-1 bg-slate-800/30 rounded-xl border border-slate-800"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
