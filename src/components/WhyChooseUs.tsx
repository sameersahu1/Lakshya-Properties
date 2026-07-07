import { Shield, Clock, Trophy, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: '100% Verified Properties',
    description: 'Every property is thoroughly verified for legal compliance, documentation, and quality standards.',
    stat: '500+',
    statLabel: 'Verified Listings',
  },
  {
    icon: Clock,
    title: 'Quick & Easy Process',
    description: 'From property search to key handover, we ensure a swift and hassle-free experience.',
    stat: '48hrs',
    statLabel: 'Avg. Response Time',
  },
  {
    icon: Trophy,
    title: 'Award-Winning Service',
    description: 'Recognized as one of India\'s top real estate consultancies for customer satisfaction.',
    stat: '15+',
    statLabel: 'Industry Awards',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description: 'Personal relationship manager assigned to guide you through every step of the journey.',
    stat: '24/7',
    statLabel: 'Customer Support',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            <Trophy className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why <span className="text-amber-600">Lakshya Properties?</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We go above and beyond to ensure your real estate experience is nothing short of exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-300 hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                <reason.icon className="w-8 h-8 text-white" />
              </div>

              <div className="text-3xl font-bold text-amber-600 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                {reason.stat}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-4">
                {reason.statLabel}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
