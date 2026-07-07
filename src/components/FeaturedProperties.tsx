import { useState } from 'react';
import { Link } from 'react-router-dom';
import { noidaProperties } from '../data/noidaProperties';
import PropertyCard from './PropertyCard';
import { SlidersHorizontal } from 'lucide-react';

const filters = ['All', 'Apartment', 'Villa', 'Builder Floor', 'Commercial', 'Plot'];

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? noidaProperties
    : noidaProperties.filter((p) => p.type === activeFilter);

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            <SlidersHorizontal className="w-4 h-4" />
            Noida Properties
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Featured <span className="text-amber-600">Properties</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Explore our handpicked selection of premium properties across Noida, Greater Noida, and Delhi NCR.
          </p>
        </div>
        <div className="flex justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
                  : 'bg-white text-slate-600 hover:bg-amber-50 hover:text-amber-600 border border-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/properties" className="inline-block px-10 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl text-sm uppercase tracking-wide">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
