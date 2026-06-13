import { WaitlistForm } from './WaitlistForm';

export function BottomCtaSection() {
  return (
    <section className="py-24 bg-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Ready to professionalize your portfolio?</h2>
        <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">Join leading landlords and property managers upgrading to Spaceya. Secure your spot on our waitlist today.</p>
        
        <div className="max-w-md mx-auto">
          <WaitlistForm variant="dark" />
        </div>
      </div>
    </section>
  );
}
