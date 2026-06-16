import { Home, Users, Wallet, Wrench, BarChart3, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function BenefitsSection() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">Everything you need to manage your portfolio</h2>
          <p className="text-base sm:text-lg text-slate-600 px-2 sm:px-0">Replace spreadsheets and endless WhatsApp threads with a single, reliable system of record.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-slate-300 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-200 rounded-xl flex items-center justify-center mb-5 sm:mb-6 shrink-0">
                {feature.icon}
              </div>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-slate-900 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
