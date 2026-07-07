import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { OrganizationSchema } from '../components/JsonLd';
import { Target, Award, Users, Building2, MapPin, Phone } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <SEO title="About Lakshya Properties — Trusted Real Estate Agent in Noida" description="Lakshya Properties — Noida's trusted real estate agent with 18+ years of experience. Specializing in residential, commercial & luxury properties across Noida, Greater Noida & Delhi NCR. RERA verified." keywords="about lakshya properties, real estate agent noida, property dealer noida, best property dealer noida" />
      <OrganizationSchema />
      <Breadcrumbs items={[{ label: 'About Us' }]} />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-bold mb-4">About Us</span>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Noida's Most <span className="text-amber-600">Trusted</span> Real Estate Partner
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Lakshya Properties has been the <strong>leading real estate agent in Noida</strong> for over 18 years. "Lakshya" means <strong>Goal</strong> — and our goal is to make every client's property dream a reality.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We specialize in <strong>residential, commercial, and luxury properties</strong> across Noida, Greater Noida, and Delhi NCR. Every property is RERA-verified and handpicked by our experts.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{ icon: Award, label: '18+ Years Experience' }, { icon: Building2, label: '5000+ Properties Sold' }, { icon: Users, label: '8000+ Happy Clients' }, { icon: Target, label: '100% RERA Verified' }].map(s => (
                  <div key={s.label} className="flex items-center gap-3 bg-amber-50 rounded-xl p-4"><s.icon className="w-6 h-6 text-amber-600" /><span className="text-sm font-semibold text-slate-800">{s.label}</span></div>
                ))}
              </div>
              <a href="tel:+919717060749" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-xl"><Phone className="w-5 h-5" /> Call +91 97170 60749</a>
            </div>
            <div className="relative">
              <img src="https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Lakshya Properties Noida Office" className="rounded-2xl shadow-2xl w-full h-[500px] object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-amber-500" /><span className="font-semibold text-slate-900">Shramik Kunj 1, Sector 93, Noida</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
