import { Home, Users, Wallet, Wrench, BarChart3, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: <Home className="w-6 h-6 text-black" />,
    title: "Manage Properties",
    description: "Keep a centralized registry of all your units, leases, and property documents in one secure cloud workspace."
  },
  {
    icon: <Users className="w-6 h-6 text-black" />,
    title: "Tenant Management",
    description: "Onboard tenants, store contact details securely, and maintain a clear history of all communications."
  },
  {
    icon: <Wallet className="w-6 h-6 text-black" />,
    title: "Track Rent Payments",
    description: "Monitor expected payments, record receipts, and automatically identify overdue accounts instantly."
  },
  {
    icon: <Wrench className="w-6 h-6 text-black" />,
    title: "Maintenance Requests",
    description: "Standardize how tenants report issues. Track repairs from request to resolution efficiently."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-black" />,
    title: "Monitor Performance",
    description: "Get clear insights on occupancy rates, revenue collected, and maintenance expenditure."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-black" />,
    title: "Professional & Secure",
    description: "Built with bank-grade security to ensure your data and your tenants' information remains private."
  }
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to manage your portfolio</h2>
          <p className="text-lg text-slate-600">Replace spreadsheets and endless WhatsApp threads with a single, reliable system of record.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-slate-300">
              <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-display font-semibold text-xl text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
