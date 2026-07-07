import { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import PropertyCard from '../components/PropertyCard';
import { noidaProperties } from '../data/noidaProperties';
import { Search, Phone, MessageCircle } from 'lucide-react';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  const [search, setSearch] = useState(query);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    }
  };

  const results = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase().trim();
    return noidaProperties.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q) ||
      p.price.toLowerCase().includes(q) ||
      p.area.toLowerCase().includes(q) ||
      p.tag?.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <SEO title={`Search: ${query || 'Properties'} — Lakshya Properties Noida`} description={`Search results for "${query}" — find the best properties in Noida matching your criteria.`} />
      <Breadcrumbs items={[{ label: 'Search' }]} />
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by sector, area, apartment, villa, price..."
                className="flex-1 px-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm sm:text-base"
              />
              <button type="submit" className="px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl transition-all flex-shrink-0">
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Results */}
          {query && (
            <>
              <p className="text-slate-500 mb-8 text-center text-sm sm:text-base">
                Found <strong>{results.length}</strong> result{results.length !== 1 ? 's' : ''} for "<strong>{query}</strong>"
              </p>

              {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map(p => <PropertyCard key={p.id} property={p} />)}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-slate-500 text-lg mb-4">No properties found matching your search.</p>
                  <p className="text-slate-400 mb-6">Try different keywords or contact us directly:</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a href="tel:+919717060749" className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all text-sm">
                      <Phone className="w-4 h-4" /> +91 97170 60749
                    </a>
                    <a href="https://wa.me/919717060749?text=Hi!%20I%20searched%20for%20properties%20but%20couldn't%20find%20what%20I%20need." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all text-sm">
                      <MessageCircle className="w-4 h-4" /> WhatsApp Us
                    </a>
                  </div>
                </div>
              )}
            </>
          )}

          {/* No query yet — show prompt */}
          {!query && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">Enter a search term above to find properties.</p>
              <p className="text-slate-400 text-sm mt-2">Try: "Sector 104", "3BHK", "Villa", "₹1 Cr", "Noida Expressway"</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
