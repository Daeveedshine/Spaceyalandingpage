import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
              <Logo className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">Spaceya</span>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Spaceya. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
