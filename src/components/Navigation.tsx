import { Logo } from './Logo';

export function Navigation() {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
            <Logo className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900">Spaceya</span>
        </div>
        <a href="#join" className="text-sm font-medium text-black hover:text-slate-600 transition-colors">
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
