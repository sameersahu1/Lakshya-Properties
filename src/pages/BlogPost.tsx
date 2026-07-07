import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { ArticleSchema } from '../components/JsonLd';
import { Calendar, User, ArrowLeft, Phone } from 'lucide-react';

type ContentBlock = { type: 'p' | 'h2' | 'h3' | 'ul'; text?: string; items?: string[] };

type Post = { title: string; date: string; author: string; excerpt: string; content: ContentBlock[] };

const posts: Record<string, Post> = {
  'best-areas-to-buy-flat-in-noida': {
    title: "Best Areas to Buy a Flat in Noida in 2026 — Complete Buyer's Guide",
    date: '2026-07-07', author: 'Lakshya Properties',
    excerpt: 'Complete guide covering the best residential sectors in Noida — Sector 93A, 93B, 82, 137, 104. Compare connectivity, investment potential, rental demand & buying tips.',
    content: [
      { type: 'p', text: "Noida has become one of India's fastest-growing real estate destinations. Excellent connectivity, modern infrastructure, IT hubs, metro expansion, reputed schools, hospitals, and commercial development continue to attract homebuyers and investors." },
      { type: 'p', text: "Whether you're purchasing your first home, upgrading to a larger apartment, or investing for rental income, choosing the right location is one of the most important decisions you'll make." },
      { type: 'h2', text: 'Why Invest in Noida?' },
      { type: 'ul', items: ['Excellent road connectivity (Noida-Greater Noida Expressway, Yamuna Expressway, DND Flyway).', 'Multiple metro stations for daily commuting.', 'Strong demand from IT professionals.', 'Growing commercial and retail developments.', 'Better planned infrastructure than many NCR cities.', 'Consistent demand for rental properties.'] },
      { type: 'h2', text: '1. Sector 93A — Premium Residential Living' },
      { type: 'p', text: 'Sector 93A is one of the most established residential sectors in Noida. Wide roads, green surroundings, premium apartment societies, and proximity to the Noida Expressway make it ideal for families, working professionals, and long-term investors.' },
      { type: 'h2', text: '2. Sector 93B' },
      { type: 'p', text: 'Sector 93B is another premium location with gated communities, high security, nearby shopping complexes, schools, and hospitals. Rental demand remains strong due to its location near major employment hubs.' },
      { type: 'h2', text: '3. Sector 82' },
      { type: 'p', text: 'Sector 82 offers a balance between affordability and infrastructure. It has an established residential community, metro connectivity, schools, daily shopping markets, and parks. This sector is ideal for first-time buyers.' },
      { type: 'h2', text: '4. Sector 137' },
      { type: 'p', text: 'Sector 137 is popular among IT professionals. With a metro station, office hubs, affordable apartments, and modern societies, rental occupancy remains high. Investors favor this area for steady returns.' },
      { type: 'h2', text: '5. Sector 104' },
      { type: 'p', text: 'Sector 104 has become increasingly popular due to premium residential developments, restaurants, cafés, luxury apartments, wide roads, and a green environment.' },
      { type: 'h2', text: 'Property Price Trends' },
      { type: 'p', text: 'Property prices depend on society, floor, view, size, amenities, builder reputation, and market demand. Premium sectors generally have higher prices but also stronger long-term appreciation and rental demand.' },
      { type: 'h2', text: 'Which Area Is Best for Families?' },
      { type: 'p', text: 'Families prioritize nearby schools, hospitals, parks, safe gated communities, markets, and public transportation. Sectors 82, 93A, 93B, and 104 are often preferred.' },
      { type: 'h2', text: 'Which Area Is Best for Investment?' },
      { type: 'p', text: 'Investors look for rental demand, infrastructure growth, metro connectivity, future appreciation, and commercial development. Locations along the Noida Expressway continue to attract investment.' },
      { type: 'h2', text: 'Tips Before Buying Property' },
      { type: 'ul', items: ['Verify ownership documents.', 'Check approvals and permissions.', "Review the builder's reputation.", 'Understand maintenance charges.', 'Compare prices in nearby societies.', 'Visit the property in person.', 'Evaluate connectivity and surrounding infrastructure.', 'Consider future development plans.'] },
      { type: 'h2', text: 'Why Choose Lakshya Properties?' },
      { type: 'p', text: 'Lakshya Properties helps buyers and investors make informed decisions by providing verified property options, local market guidance, site visits, price negotiation support, and end-to-end assistance. With 18+ years of experience, we serve Noida, Greater Noida, and Delhi NCR.' },
      { type: 'h2', text: 'Frequently Asked Questions' },
      { type: 'h3', text: 'Which is the best sector to buy property in Noida?' },
      { type: 'p', text: 'It depends on your budget and goals. Sectors 93A, 93B, and 104 appeal to families, while Sector 137 attracts professionals near employment hubs.' },
      { type: 'h3', text: 'Is Noida a good place for property investment?' },
      { type: 'p', text: 'Yes. Noida benefits from infrastructure development, metro expansion, commercial growth, and sustained housing demand.' },
      { type: 'h3', text: 'Should I buy ready-to-move or under-construction?' },
      { type: 'p', text: 'Ready-to-move properties provide immediate possession and lower risk. Under-construction projects may offer lower prices but involve waiting time.' },
      { type: 'h2', text: 'Conclusion' },
      { type: 'p', text: "Choosing the right property involves more than comparing prices. Location, connectivity, infrastructure, future growth, and lifestyle all play a significant role. If you're planning to buy, sell, rent, or invest in Noida, seek expert guidance — call Lakshya Properties at +91 97170 60749." },
    ],
  },
  'best-sectors-invest-noida-2026': {
    title: 'Best Sectors to Invest in Noida — 2026 Guide',
    date: '2026-01-15', author: 'Lakshya Properties',
    excerpt: 'Discover the top 10 sectors in Noida for real estate investment in 2026.',
    content: [
      { type: 'p', text: "Noida continues to be one of India's most promising real estate markets. With the upcoming Jewar International Airport, expanding metro network, and new commercial developments, certain sectors are poised for exceptional growth." },
      { type: 'p', text: 'Sector 150 stands out as the crown jewel of Noida real estate. Known for its luxury villas, wide roads, and green surroundings, it has shown 12-15% annual appreciation. Properties here range from ₹2 Cr to ₹8 Cr.' },
      { type: 'p', text: 'Sector 104 and 137 are the best choices for premium apartments. With metro connectivity, nearby schools, hospitals, and shopping malls, these sectors are ideal for families. 3BHK apartments range from ₹80 Lakh to ₹2 Cr.' },
      { type: 'p', text: 'Noida Expressway remains the top commercial belt. Office spaces here command premium rentals, and with the Film City and airport projects, demand is only going up.' },
      { type: 'p', text: 'At Lakshya Properties, we recommend investing in RERA-approved projects. Contact us at +91 97170 60749 for personalized investment advice.' },
    ],
  },
};

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case 'h2': return <h2 key={idx} className="text-2xl font-bold text-slate-900 mt-10 mb-4">{block.text}</h2>;
    case 'h3': return <h3 key={idx} className="text-xl font-bold text-slate-800 mt-8 mb-3">{block.text}</h3>;
    case 'ul': return <ul key={idx} className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">{block.items?.map((item, i) => <li key={i}>{item}</li>)}</ul>;
    default: return <p key={idx} className="text-slate-700 leading-relaxed mb-6 text-lg">{block.text}</p>;
  }
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts[slug || ''];

  if (!post) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
        <Link to="/blog" className="text-amber-600 underline mt-4 inline-block">Back to Blog</Link>
      </section>
    );
  }

  return (
    <>
      <SEO title={post.title} description={post.excerpt} ogType="article" keywords="noida real estate blog, best areas noida, buy flat noida, property dealer noida, noida sector guide" />
      <ArticleSchema title={post.title} description={post.excerpt} datePublished={post.date} author={post.author} />
      <Breadcrumbs items={[{ label: 'Blog', to: '/blog' }, { label: post.title }]} />
      <article className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-1 text-amber-600 font-semibold mb-6 hover:gap-2 transition-all"><ArrowLeft className="w-4 h-4" /> Back to Blog</Link>
          <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
          </div>
          <div className="max-w-none space-y-1">
            {post.content.map((block, idx) => renderBlock(block, idx))}
          </div>
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Need Help Finding the Right Property?</h3>
            <p className="text-slate-600 mb-6">Call Lakshya Properties for a free consultation.</p>
            <a href="tel:+919717060749" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all"><Phone className="w-5 h-5" /> +91 97170 60749</a>
          </div>
        </div>
      </article>
    </>
  );
}
