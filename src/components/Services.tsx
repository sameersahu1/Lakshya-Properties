import { Home, Building2, Key, FileText, Landmark, ShieldCheck, TrendingUp, Handshake } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Sales',
    description: 'Find your dream home from our curated collection of villas, apartments, and independent houses.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Building2,
    title: 'Commercial Properties',
    description: 'Premium office spaces, retail outlets, and commercial complexes for your business needs.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Key,
    title: 'Property Management',
    description: 'Complete property management services including tenant management and maintenance.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: FileText,
    title: 'Legal Assistance',
    description: 'Expert legal support for documentation, RERA compliance, and property registration.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Landmark,
    title: 'Home Loans',
    description: 'We partner with leading banks to get you the best home loan rates and quick approvals.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description: 'Strategic real estate investment advice to maximize your returns and build wealth.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: ShieldCheck,
    title: 'Property Verification',
    description: 'Thorough verification of property documents, title deeds, and legal standing.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Handshake,
    title: 'Interior Design',
    description: 'Transform your new property with our partner interior designers and architects.',
    color: 'from-fuchsia-500 to-purple-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-sm font-semibold mb-4">
            <Handshake className="w-4 h-4" />
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive real estate services to guide you through every step of your property journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
