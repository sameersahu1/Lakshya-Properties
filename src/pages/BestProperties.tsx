import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import PropertyCard from '../components/PropertyCard';
import { noidaProperties } from '../data/noidaProperties';
import { FAQSchema } from '../components/JsonLd';
import { Phone, MessageCircle } from 'lucide-react';

const faqs = [
  { question: 'What is the best property to invest in Noida?', answer: '3BHK apartments in Sector 104, 137, and 150 offer the best ROI. Luxury villas in Sector 150 and plots along the Expressway are ideal for long-term appreciation. Commercial spaces in Sector 137 and 143 show 10%+ annual returns.' },
  { question: 'How to choose the best property in Noida?', answer: 'Consider location (metro connectivity, expressway access), builder reputation, RERA approval, amenities, price appreciation history, and future infrastructure projects. Our experts provide free consultation — call +91 97170 60749.' },
  { question: 'Which sector is best for families in Noida?', answer: 'Sector 104, 93A, 82, and 150 are ideal for families due to proximity to schools, hospitals, parks, and metro stations. These sectors have low crime rates, green surroundings, and excellent community living.' },
  { question: 'What documents should I check before buying?', answer: 'Always verify: RERA registration, title deed, encumbrance certificate, building plan approval, occupancy certificate, and NOC from relevant authorities. Lakshya Properties provides free document verification for all clients.' },
];

export default function BestProperties() {
  const bestProps = noidaProperties.filter(p => p.featured);
  return (
    <>
      <SEO
        title="Best Properties in Noida — Top Flats, Villas & Plots 2026"
        description="Discover the best properties in Noida — luxury 3BHK/4BHK flats, builder floors, premium villas & plots in Sector 104, 137, 150, 168 & Noida Expressway. Best deals from Lakshya Properties. Call +91 97170 60749."
        keywords="best properties noida, top flats noida, luxury apartments noida, best villas noida, property deals noida, best sectors noida"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumbs items={[{ label: 'Best Properties' }]} />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-bold mb-4">🏆 Handpicked</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Best Properties in <span className="text-amber-600">Noida</span>
            </h1>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Lakshya Properties presents the finest selection of premium properties across Noida's most sought-after sectors. Every property is RERA-verified and handpicked by our experts.
            </p>
            <div className="flex gap-4 justify-center mt-6">
              <a href="tel:+919717060749" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg">
                <Phone className="w-4 h-4" /> Call for Best Deal
              </a>
              <a href="https://wa.me/919717060749?text=Hi!%20I%20want%20to%20know%20about%20the%20best%20properties%20in%20Noida." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all shadow-lg">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {bestProps.map((p) => <PropertyCard key={p.id} property={p} />)}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white border border-slate-200 rounded-xl p-6 group cursor-pointer">
                  <summary className="font-semibold text-slate-900 group-open:text-amber-600 transition-colors">{faq.question}</summary>
                  <p className="mt-3 text-slate-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-10 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Find Your Dream Property?</h2>
            <p className="text-white/90 mb-6">Call Lakshya Properties now for the best deals in Noida. Free site visit & consultation.</p>
            <a href="tel:+919717060749" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-xl text-lg">
              <Phone className="w-5 h-5" /> +91 97170 60749
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
