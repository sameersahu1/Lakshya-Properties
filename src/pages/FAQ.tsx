import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { FAQSchema } from '../components/JsonLd';
import { Phone } from 'lucide-react';

const faqs = [
  { question: 'How do I start buying a property in Noida?', answer: 'Start by deciding your budget, preferred sector, and property type. Contact Lakshya Properties at +91 97170 60749 for free consultation. We\'ll show you RERA-verified properties matching your criteria and handle all paperwork.' },
  { question: 'What is the best time to invest in Noida real estate?', answer: 'Now! With the upcoming Jewar International Airport (operational by 2025), expanding metro network, and new commercial developments, Noida property prices are expected to rise 15-20% in the next 2-3 years. Early investment yields maximum returns.' },
  { question: 'Are Noida properties RERA registered?', answer: 'Yes. All properties listed by Lakshya Properties are UP RERA registered. You can verify any project\'s RERA status at up-rera.in. We provide RERA numbers for every property.' },
  { question: 'What documents are needed to buy property in Noida?', answer: 'You need: PAN Card, Aadhaar Card, passport-size photos, income proof (ITR/salary slips), bank statements (6 months), and address proof. For home loans, additional documents may be required. We assist with complete documentation.' },
  { question: 'How much is stamp duty and registration in Noida?', answer: 'Stamp duty in UP is 7% of the property value (6% for women). Registration fee is 1%. So total is approximately 7-8% of the property cost. These are government charges and are mandatory.' },
  { question: 'Can NRIs buy property in Noida?', answer: 'Yes! NRIs can buy residential and commercial property in India under FEMA regulations. No special permission is needed. You need an NRI/NRE bank account, PAN card, and passport. We specialize in NRI property investments.' },
  { question: 'How do I get a home loan in Noida?', answer: 'Lakshya Properties provides FREE home loan assistance. We work with SBI, HDFC, ICICI, Axis Bank, and LIC HFL. Interest rates start from 8.40% p.a. We handle the entire application process — from documentation to disbursement.' },
  { question: 'What are the best schools near Sector 104, Noida?', answer: 'Top schools near Sector 104 include: Delhi Public School (Sector 30), Amity International (Sector 44), Apeejay School (Sector 16A), and Lotus Valley International (Sector 126). All are within 15-20 minutes by car.' },
  { question: 'Is there metro connectivity in Noida sectors?', answer: 'Yes! The Aqua Line connects Sector 51 to Depot. The Blue Line connects Noida Sector 15 to Delhi. Key metro-connected sectors: 52, 61, 62, 76, 101, 137. Most sectors we serve have metro access within 2 km.' },
  { question: 'What is the future of Noida real estate?', answer: 'Noida real estate has a bright future driven by: Jewar Airport, Film City, metro expansion, Delhi-Mumbai Industrial Corridor, new IT parks, and planned infrastructure worth ₹50,000+ crores. Property prices expected to grow 10-15% CAGR.' },
];

export default function FAQPage() {
  return (
    <>
      <SEO title="FAQ — Frequently Asked Questions About Noida Real Estate" description="Find answers to all your Noida real estate questions — property buying process, RERA, stamp duty, home loans for NRIs, best sectors, metro connectivity, future growth & more. Call +91 97170 60749." keywords="noida real estate FAQ, property buying process noida, rera noida, home loan noida FAQ, nri property noida" />
      <FAQSchema faqs={faqs} />
      <Breadcrumbs items={[{ label: 'FAQ' }]} />
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked <span className="text-amber-600">Questions</span></h1>
            <p className="text-slate-600 text-lg">Everything you need to know about buying property in Noida.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-slate-200 rounded-xl p-6 group cursor-pointer hover:border-amber-300 transition-colors">
                <summary className="font-semibold text-slate-900 group-open:text-amber-600 transition-colors">{f.question}</summary>
                <p className="mt-3 text-slate-600 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center bg-slate-900 rounded-2xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
            <p className="text-slate-400 mb-6">Call Lakshya Properties for a free consultation.</p>
            <a href="tel:+919717060749" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all shadow-xl"><Phone className="w-5 h-5" /> +91 97170 60749</a>
          </div>
        </div>
      </section>
    </>
  );
}
