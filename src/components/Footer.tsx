import { Building2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center text-white">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">Spaceya</span>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Spaceya. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
