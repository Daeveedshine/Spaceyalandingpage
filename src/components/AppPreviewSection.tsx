import { motion } from 'motion/react';

function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-slate-800/80 rounded ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent z-10"
        animate={{ x: ['-100%', '200%'] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
          repeatDelay: 0.2
        }}
      />
    </div>
  );
}

export function AppPreviewSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative rounded-2xl md:rounded-[2rem] bg-black aspect-[16/9] md:aspect-[21/9] overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
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
            <Skeleton className="h-4 w-24 mb-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <Skeleton className="h-10 w-48 !rounded-lg" />
            <div className="flex gap-4">
              <div className="flex-1 h-28 bg-slate-800/30 border border-slate-700 rounded-xl relative overflow-hidden flex flex-col justify-between p-4">
                 <Skeleton className="h-4 w-20 !bg-slate-700/50" />
                 <Skeleton className="h-8 w-32 !bg-slate-700/50" />
              </div>
              <div className="flex-1 h-28 bg-slate-800/30 rounded-xl relative overflow-hidden flex flex-col justify-between p-4">
                 <Skeleton className="h-4 w-24 !bg-slate-800" />
                 <Skeleton className="h-8 w-20 !bg-slate-800" />
              </div>
              <div className="flex-1 h-28 bg-slate-800/30 rounded-xl relative overflow-hidden flex flex-col justify-between p-4 hidden md:flex">
                 <Skeleton className="h-4 w-16 !bg-slate-800" />
                 <Skeleton className="h-8 w-24 !bg-slate-800" />
              </div>
            </div>
            <div className="flex-1 bg-slate-800/20 rounded-xl border border-slate-800/50 p-6 flex flex-col gap-4">
              <Skeleton className="h-6 w-1/3 !bg-slate-800" />
              <Skeleton className="h-4 w-full !bg-slate-800/50" />
              <Skeleton className="h-4 w-full !bg-slate-800/50" />
              <Skeleton className="h-4 w-2/3 !bg-slate-800/50" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
