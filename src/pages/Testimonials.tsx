import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Rajesh Sharma', role: 'Homeowner, Sector 104', text: 'Excellent service! Lakshya Properties helped me find a beautiful 3BHK in Sector 104. The team handled all documentation and made the process smooth. Highly recommended!', rating: 5 },
  { name: 'Priya Patel', role: 'Investor, NRI — Dubai', text: 'As an NRI, I was worried about managing property in India. Lakshya Properties made it effortless. They found great rental tenants and manage everything perfectly.', rating: 5 },
  { name: 'Amit & Neha Gupta', role: 'First-time Home Buyers', text: 'We were nervous about our first home purchase. Lakshya Properties guided us through every step — from property selection to home loan to registration. Life-changing service!', rating: 5 },
  { name: 'Vikram Singh', role: 'Commercial Investor', text: 'Invested in a commercial space in Sector 137 through Lakshya Properties. The ROI has been fantastic. Professional team, transparent dealings. My go-to for all real estate needs.', rating: 5 },
  { name: 'Sunita Agarwal', role: 'Retired, Sector 93A', text: 'After retirement, we wanted a peaceful home. Lakshya found us a perfect builder floor in Sector 93A. They negotiated a great price. Thank you for making our retirement beautiful!', rating: 5 },
  { name: 'Mohammed Khan', role: 'Business Owner, Sector 143', text: 'Bought a luxury villa through Lakshya Properties. Their knowledge of Noida real estate is unmatched. They showed us properties that perfectly matched our requirements.', rating: 5 },
];

export default function TestimonialsPage() {
  return (
    <>
      <SEO title="Customer Testimonials — What Our Clients Say" description="Read genuine reviews from Lakshya Properties clients. Homeowners, investors, NRIs & first-time buyers share their experience. Rated 5 stars. Serving Noida for 10+ years." keywords="lakshya properties reviews, noida property dealer reviews, real estate agent testimonials noida" />
      <Breadcrumbs items={[{ label: 'Testimonials' }]} />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>What Our <span className="text-amber-600">Clients Say</span></h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">5000+ happy clients trust Lakshya Properties. Here are some of their stories.</p>
            <div className="flex items-center gap-2 justify-center mt-4">
              <span className="text-2xl font-bold text-slate-900">4.9</span>
              <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}</div>
              <span className="text-slate-500 text-sm">(500+ Google Reviews)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-amber-300 hover:shadow-xl transition-all relative group">
                <div className="absolute -top-4 right-6 w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center"><Quote className="w-5 h-5 text-white" /></div>
                <div className="flex gap-1 mb-4">{Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="pt-4 border-t border-slate-100"><h4 className="font-bold text-slate-900">{r.name}</h4><p className="text-sm text-amber-600">{r.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
