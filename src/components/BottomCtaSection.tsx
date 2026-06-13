import { WaitlistForm } from './WaitlistForm';

export function BottomCtaSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden flex flex-col justify-center min-h-[500px]">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Ready to professionalize your portfolio?</h2>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Join leading landlords and property managers upgrading to Spaceya. Secure your spot on our waitlist today.</p>
        
        <div className="max-w-md mx-auto">
          <WaitlistForm variant="dark" />
        </div>
      </div>
    </section>
  );
}
