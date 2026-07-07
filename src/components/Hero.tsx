import { Search, MapPin, Home, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [searchType, setSearchType] = useState<'buy' | 'rent'>('buy');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Luxury neighborhood"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <Home className="w-4 h-4" />
            <span>Noida, Greater Noida & Delhi NCR</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Find Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Dream Home
            </span>{' '}
            With Lakshya
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Discover premium properties across Noida, Greater Noida, and Delhi NCR. From luxury villas to modern apartments, we help you find the perfect place to call home.
          </p>

          {/* Search Box */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20 max-w-2xl">
            {/* Tabs */}
            <div className="flex gap-1 mb-2">
              <button
                onClick={() => setSearchType('buy')}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                  searchType === 'buy'
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setSearchType('rent')}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                  searchType === 'rent'
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                Rent
              </button>
            </div>

            {/* Search Input */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search sector, property type, or keywords..."
                  className="w-full outline-none text-slate-800 placeholder-slate-400 text-sm bg-transparent"
                />
              </div>
              <button type="submit" className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 whitespace-nowrap">
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </form>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { value: '5000+', label: 'Properties Sold' },
              { value: '8000+', label: 'Happy Families' },
              { value: '3+', label: 'Regions Covered' },
              { value: '18+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <ArrowRight className="w-4 h-4 rotate-90" />
      </div>
    </section>
  );
}
