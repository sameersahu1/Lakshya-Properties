import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  { slug: 'best-areas-to-buy-flat-in-noida', title: 'Best Areas to Buy a Flat in Noida in 2026 — Complete Buyer\'s Guide', date: '2026-07-07', author: 'Lakshya Properties', excerpt: 'Complete guide covering the best residential sectors in Noida — Sector 93A, 93B, 82, 137, 104. Compare connectivity, investment potential, rental demand & buying tips.', image: 'https://images.pexels.com/photos/33234792/pexels-photo-33234792.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200' },
  { slug: 'best-sectors-invest-noida-2026', title: 'Best Sectors to Invest in Noida — 2026 Guide', date: '2026-01-15', author: 'Lakshya Properties', excerpt: 'Discover the top 10 sectors in Noida for real estate investment in 2026. From Sector 150 luxury villas to affordable flats in Sector 168.', image: 'https://images.pexels.com/photos/8148350/pexels-photo-8148350.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200' },
  { slug: 'jewar-airport-impact-noida-real-estate', title: 'How Jewar Airport Will Transform Noida Real Estate', date: '2026-01-10', author: 'Lakshya Properties', excerpt: 'The upcoming Jewar International Airport is set to revolutionize Noida property prices. Learn which sectors will benefit the most.', image: 'https://images.pexels.com/photos/33234792/pexels-photo-33234792.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200' },
  { slug: 'nri-property-buying-guide-noida', title: 'Complete NRI Guide to Buying Property in Noida', date: '2026-01-05', author: 'Lakshya Properties', excerpt: 'Everything NRIs need to know about buying property in Noida — legal requirements, documentation, taxation, and repatriation rules.', image: 'https://images.pexels.com/photos/8470805/pexels-photo-8470805.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200' },
  { slug: 'stamp-duty-registration-noida-2026', title: 'Stamp Duty & Registration Charges in Noida — Complete Guide', date: '2025-12-28', author: 'Lakshya Properties', excerpt: 'Updated stamp duty rates, registration fees, and calculation examples for buying property in Noida, Uttar Pradesh.', image: 'https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200' },
  { slug: 'metro-connectivity-noida-property-prices', title: 'How Metro Connectivity Boosts Noida Property Prices', date: '2025-12-20', author: 'Lakshya Properties', excerpt: 'Analysis of how the Aqua Line and Blue Line metro corridors have driven property price appreciation in connected sectors.', image: 'https://images.pexels.com/photos/18126506/pexels-photo-18126506.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200' },
  { slug: 'top-5-luxury-sectors-noida', title: 'Top 5 Luxury Sectors in Noida for Premium Living', date: '2025-12-15', author: 'Lakshya Properties', excerpt: 'Explore Noida\'s most luxurious sectors — Sector 150, 143, 44, 104, and Expressway. Premium villas, golf course views, and world-class amenities.', image: 'https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200' },
];

export default function BlogPage() {
  return (
    <>
      <SEO title="Real Estate Blog — Noida Property Guides, Tips & News" description="Read Lakshya Properties blog for expert real estate guides, investment tips, Noida market updates, NRI buying guides, stamp duty info & more. Updated weekly." keywords="noida real estate blog, property investment tips, nri property guide, noida market news, best sectors noida" />
      <Breadcrumbs items={[{ label: 'Blog' }]} />
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Lakshya <span className="text-amber-600">Blog</span></h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Expert real estate guides, tips, and market insights for Noida property buyers and investors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(p => (
              <article key={p.slug} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 group">
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {p.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {p.author}</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">{p.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.excerpt}</p>
                  <Link to={`/blog/${p.slug}`} className="inline-flex items-center gap-1 text-amber-600 font-semibold text-sm hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
