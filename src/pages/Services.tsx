import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { ServiceSchema } from '../components/JsonLd';
import { Home, Building2, Key, Landmark, TrendingUp, ShieldCheck, FileText, Handshake } from 'lucide-react';

const services = [
  { icon: Home, title: 'Residential Properties', desc: 'Expert guidance for buying, selling, and renting residential properties — 1BHK to 5BHK flats, builder floors, and villas across Noida, Greater Noida, and Delhi NCR.', color: 'from-amber-500 to-orange-500' },
  { icon: Building2, title: 'Commercial Properties', desc: 'Premium office spaces, retail shops, and commercial complexes in Noida\'s prime business districts with high ROI potential.', color: 'from-blue-500 to-indigo-500' },
  { icon: Key, title: 'Rental Services', desc: 'Complete rental solutions — find tenants, manage leases, background verification, and rent collection for NRI and local owners.', color: 'from-emerald-500 to-teal-500' },
  { icon: Landmark, title: 'Property Investment', desc: 'Strategic investment advisory for maximum ROI. We analyze market trends, future infrastructure, and appreciation potential.', color: 'from-purple-500 to-violet-500' },
  { icon: TrendingUp, title: 'Builder Floors & Plots', desc: 'Best deals on builder floors and residential plots across Sector 82, 93, 104, 137, and Noida Expressway.', color: 'from-rose-500 to-pink-500' },
  { icon: ShieldCheck, title: 'RERA Verification', desc: 'Every property is RERA-verified. We handle documentation, title deed verification, and legal compliance checks.', color: 'from-cyan-500 to-blue-500' },
  { icon: FileText, title: 'Home Loan Assistance', desc: 'Free home loan processing through partner banks — SBI, HDFC, ICICI, Axis, LIC HFL. Rates from 8.40% p.a.', color: 'from-yellow-500 to-amber-500' },
  { icon: Handshake, title: 'Property Management', desc: 'End-to-end property management — tenant screening, maintenance, legal compliance, rent collection, and annual inspections.', color: 'from-fuchsia-500 to-purple-500' },
];

export default function ServicesPage() {
  return (
    <>
      <SEO title="Real Estate Services in Noida — Buy, Sell, Rent, Invest" description="Lakshya Properties offers complete real estate services in Noida — residential & commercial sales, rentals, property investment, home loans, RERA verification & property management. Free consultation." keywords="real estate services noida, property dealer services, buy sell rent noida, home loan noida, property management noida" />
      {services.map(s => <ServiceSchema key={s.title} name={s.title} description={s.desc} area="Noida" />)}
      <Breadcrumbs items={[{ label: 'Services' }]} />
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our <span className="text-amber-600">Services</span></h1>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">Complete real estate solutions under one roof. From buying your first home to managing investment properties — we do it all.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all group">
                <div className={`w-12 h-12 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}><s.icon className="w-6 h-6 text-white" /></div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
