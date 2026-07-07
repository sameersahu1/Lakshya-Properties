import { useState } from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import PropertyCard from '../components/PropertyCard';
import { noidaProperties, noidaSectors } from '../data/noidaProperties';

export default function Properties() {
  const [typeFilter, setTypeFilter] = useState('All');
  const [sectorFilter, setSectorFilter] = useState('All');
  const types = ['All', 'Apartment', 'Villa', 'Builder Floor', 'Commercial', 'Plot'];
  const filtered = noidaProperties.filter(p =>
    (typeFilter === 'All' || p.type === typeFilter) &&
    (sectorFilter === 'All' || p.location.includes(sectorFilter))
  );

  return (
    <>
      <SEO
        title="Properties in Noida — Flats, Villas, Plots, Commercial"
        description="Browse verified properties in Noida — 1/2/3/4/5 BHK flats, luxury villas, builder floors, commercial spaces & plots in Sector 82, 93, 104, 137, 143, 150, 168. RERA approved. Free site visit."
        keywords="properties in noida, flats for sale noida, villas noida, commercial property noida, plots noida, builder floor noida"
      />
      <Breadcrumbs items={[{ label: 'Properties' }]} />
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Properties in <span className="text-amber-600">Noida</span>
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">Explore our extensive portfolio of verified, RERA-approved properties across Noida's best sectors.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {types.map(t => (
              <button key={t} onClick={() => setTypeFilter(t)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${typeFilter === t ? 'bg-amber-500 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-amber-50 border'}`}>{t}</button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button onClick={() => setSectorFilter('All')} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${sectorFilter === 'All' ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 hover:bg-slate-100 border'}`}>All Sectors</button>
            {noidaSectors.slice(0, 8).map(s => (
              <button key={s} onClick={() => setSectorFilter(s)} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${sectorFilter === s ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 hover:bg-slate-100 border'}`}>{s}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
          {filtered.length === 0 && <p className="text-center text-slate-500 py-20">No properties match your filters. <button onClick={() => { setTypeFilter('All'); setSectorFilter('All'); }} className="text-amber-600 underline">Clear filters</button></p>}
        </div>
      </section>
    </>
  );
}
