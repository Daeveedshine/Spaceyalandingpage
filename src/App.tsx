import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AppPreviewSection } from './components/AppPreviewSection';
import { BenefitsSection } from './components/BenefitsSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FaqSection } from './components/FaqSection';
import { BottomCtaSection } from './components/BottomCtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-200 selection:text-black">
      <Navigation />
      <HeroSection />
      <AppPreviewSection />
      <BenefitsSection />
      <SocialProofSection />
      <FaqSection />
      <BottomCtaSection />
      <Footer />
    </div>
  );
}

