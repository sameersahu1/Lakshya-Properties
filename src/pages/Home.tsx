import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema, FAQSchema } from '../components/JsonLd';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import { Search, Building2, MapPin, ArrowRight, Star, Phone, MessageCircle } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { noidaProperties } from '../data/noidaProperties';
import { noidaSectors } from '../data/noidaProperties';

const homeFAQs = [
  { question: 'Why choose Lakshya Properties for real estate in Noida?', answer: 'With 18+ years of experience, 5000+ properties sold, and 8000+ happy clients, Lakshya Properties is Noida\'s most trusted real estate agent. We offer RERA-verified properties, free home loan assistance, legal support, and a 100% transparent process.' },
  { question: 'Which sectors in Noida have the best property appreciation?', answer: 'Sector 150 (luxury villas), Sector 104 (premium apartments), Sector 137 (metro-connected), and Noida Expressway (commercial belt) have shown the highest appreciation rates of 10-15% annually. Jewar Airport will further boost these areas.' },
  { question: 'Do you help with home loans?', answer: 'Yes! We provide FREE home loan assistance through partner banks — SBI, HDFC, ICICI, Axis, LIC HFL. Interest rates from 8.40% p.a. We handle the entire documentation process.' },
  { question: 'How can I schedule a site visit?', answer: 'Simply call us at +91 97170 60749 or WhatsApp us. We arrange free site visits at your convenience — including weekends. Our property expert will accompany you and answer all questions.' },
];

export default function HomePage() {
  const bestProps = noidaProperties.filter(p => p.featured).slice(0, 3);
  return (
    <>
      <SEO
        title="Lakshya Properties — Best Real Estate Agent in Noida | Flats, Villas, Plots"
        description="Lakshya Properties is Noida's #1 real estate agent. Buy, sell, rent RERA-verified flats, villas, builder floors & commercial properties in Sector 82-168, Noida Expressway. Free site visit. Call +91 97170 60749."
        keywords="real estate agent noida, property dealer noida, flats for sale noida, luxury apartments noida, best property dealer noida, noida property, sector 104 noida, noida expressway property"
      />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebsiteSchema />
      <FAQSchema faqs={homeFAQs} />

      <Hero />

      {/* Top Contact Form Section — Right below Hero */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get the <span className="text-amber-600">Best Deals</span> in Noida
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">Fill the form below — we'll get back to you on WhatsApp within 5 minutes!</p>
          </div>

          <form
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const fd = new FormData(form);
              const name = (fd.get('topName') as string) || '';
              const phone = (fd.get('topPhone') as string) || '';
              const email = (fd.get('topEmail') as string) || '';
              const interest = (fd.get('topInterest') as string) || '';
              const budget = (fd.get('topBudget') as string) || '';
              const msg = (fd.get('topMsg') as string) || '';

              const parts = ['Hi Lakshya Properties! 🏠'];
              parts.push(`*Name:* ${name}`);
              parts.push(`*Phone:* ${phone}`);
              if (email) parts.push(`*Email:* ${email}`);
              if (interest) parts.push(`*Looking for:* ${interest}`);
              if (budget) parts.push(`*Budget:* ${budget}`);
              if (msg) parts.push(`*Message:* ${msg}`);

              window.open(`https://wa.me/919717060749?text=${encodeURIComponent(parts.join('\n'))}`, '_blank');
              form.reset();
            }}
            className="space-y-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <input type="text" name="topName" required placeholder="Full Name *" className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm" />
              <input type="tel" name="topPhone" required placeholder="Phone Number *" className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm" />
              <input type="email" name="topEmail" placeholder="Email Address" className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm" />
              <select name="topInterest" className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm text-slate-700">
                <option value="">Property Type</option>
                <option>Apartment</option><option>Villa</option><option>Builder Floor</option>
                <option>Plot</option><option>Commercial</option><option>Rental</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <select name="topBudget" className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm text-slate-700">
                <option value="">Budget Range</option>
                <option>Under ₹30 Lakh</option><option>₹30-₹60 Lakh</option><option>₹60 L-₹1 Cr</option>
                <option>₹1-₹2 Cr</option><option>₹2-₹5 Cr</option><option>Above ₹5 Cr</option>
              </select>
              <input type="text" name="topMsg" placeholder="Preferred Sector or Message" className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm" />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/25 text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Send via WhatsApp
              </button>
            </div>
            <p className="text-center text-xs text-slate-400">Your enquiry will be sent to us on WhatsApp at +91 97170 60749</p>
          </form>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <div className="bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{ value: '18+', label: 'Years Experience' }, { value: '5000+', label: 'Properties Sold' }, { value: '8000+', label: 'Happy Clients' }, { value: '20+', label: 'Sectors Covered' }].map(s => (
            <div key={s.label}><div className="text-2xl md:text-3xl font-bold text-amber-500" style={{ fontFamily: "'Playfair Display', serif" }}>{s.value}</div><div className="text-slate-400 text-sm mt-1">{s.label}</div></div>
          ))}
        </div>
      </div>

      {/* Best Properties Preview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-bold mb-4">🏆 Best Picks</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Best Properties in <span className="text-amber-600">Noida</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Handpicked premium properties across Noida's most desirable sectors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {bestProps.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/best-properties" className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all shadow-lg">View All Best Properties <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-bold mb-4"><MapPin className="w-4 h-4 inline" /> Sectors</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Areas We <span className="text-amber-600">Serve</span> in Noida</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[...noidaSectors, 'Sector 62', 'Sector 76', 'Sector 44', 'Sector 50', 'Sector 128'].map(s => (
              <Link key={s} to={`/properties?sector=${encodeURIComponent(s)}`} className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:border-amber-300 hover:bg-amber-50 transition-all group">
                <Building2 className="w-5 h-5 text-amber-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-amber-600 transition-colors">{s}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />

      {/* FAQ Section on Home */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked <span className="text-amber-600">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {homeFAQs.map((f, i) => (
              <details key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6 cursor-pointer group">
                <summary className="font-semibold text-slate-900 group-open:text-amber-600 transition-colors">{f.question}</summary>
                <p className="mt-3 text-slate-600 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/faq" className="text-amber-600 font-semibold hover:underline">View all FAQs →</Link>
          </div>
        </div>
      </section>

      <CTA />

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Find Your Dream Property in Noida?</h2>
          <p className="text-slate-300 mb-8 text-lg">Call Lakshya Properties now for a free consultation and site visit.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/919717060749?text=Hi%20Lakshya%20Properties!%20I%20am%20interested%20in%20your%20properties." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-xl text-base sm:text-lg"><MessageCircle className="w-5 h-5" /> WhatsApp: +91 97170 60749</a>
            <a href="tel:+919717060749" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all shadow-xl text-base sm:text-lg"><Phone className="w-5 h-5" /> Call Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
