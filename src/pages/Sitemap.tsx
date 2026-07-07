import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const links = {
  'Main Pages': [
    { label: 'Home', to: '/' }, { label: 'About Us', to: '/about' }, { label: 'Properties', to: '/properties' },
    { label: 'Best Properties', to: '/best-properties' }, { label: 'Services', to: '/services' },
    { label: 'Areas We Serve', to: '/areas' }, { label: 'Contact Us', to: '/contact' },
    { label: 'FAQ', to: '/faq' }, { label: 'Blog', to: '/blog' }, { label: 'Testimonials', to: '/testimonials' },
  ],
  'Legal': [{ label: 'Privacy Policy', to: '/privacy' }, { label: 'Terms & Conditions', to: '/terms' }],
  'Other': [{ label: 'Sitemap', to: '/sitemap' }],
};

export default function SitemapPage() {
  return (
    <>
      <SEO title="Sitemap — Lakshya Properties" description="Complete sitemap of Lakshya Properties website. Find all pages including properties, services, blog, FAQ, contact, privacy policy & more." />
      <Breadcrumbs items={[{ label: 'Sitemap' }]} />
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Sitemap</h1>
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="mb-10">
              <h2 className="text-xl font-bold text-amber-600 mb-4">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {items.map(l => (
                  <Link key={l.to} to={l.to} className="text-slate-700 hover:text-amber-600 transition-colors py-2 border-b border-slate-100">{l.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
