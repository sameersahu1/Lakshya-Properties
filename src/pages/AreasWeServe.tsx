import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { noidaSectors } from '../data/noidaProperties';
import { MapPin, Building2, Train, School, Hospital } from 'lucide-react';

const sectorDesc: Record<string, string> = {
  'Sector 82': 'Premium residential sector with excellent connectivity to Noida City Centre metro.',
  'Sector 93': 'Well-planned sector with mix of apartments and builder floors near Sector 93 metro.',
  'Sector 93A': 'High-demand residential area with modern builder floors and wide roads.',
  'Sector 93B': 'Upcoming residential hub with affordable housing options and metro proximity.',
  'Sector 104': 'One of Noida\'s best residential sectors with premium apartments, close to metro.',
  'Sector 105': 'Peaceful residential area with high-rise apartments and lush green parks.',
  'Sector 107': 'Prime location with luxury apartments near Sector 107 metro station.',
  'Sector 108': 'Well-developed sector with excellent road connectivity and schools nearby.',
  'Sector 137': 'Modern residential sector with metro access, near Paras Tierea and Advant Navis.',
  'Sector 143': 'Premium sector with luxury villas and apartments, close to Noida Expressway.',
  'Sector 150': 'Most luxurious sector in Noida — premium villas, golf course, green surroundings.',
  'Sector 168': 'Upcoming affordable housing hub with great future appreciation potential.',
  'Noida Expressway': 'Premium commercial and residential belt with best connectivity in NCR.',
};

export default function AreasWeServe() {
  return (
    <>
      <SEO title="Areas We Serve in Noida — Sector 82 to 168, Expressway" description="Lakshya Properties serves all major sectors of Noida — Sector 82, 93, 93A, 104, 105, 107, 108, 137, 143, 150, 168 & Noida Expressway. Find your dream property in your preferred location." keywords="noida sectors, sector 104 noida, sector 137 noida, sector 150 noida, noida expressway property" />
      <Breadcrumbs items={[{ label: 'Areas We Serve' }]} />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Areas We <span className="text-amber-600">Serve</span>
            </h1>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">Lakshya Properties covers all premium sectors of Noida. Find properties in your preferred location with expert local guidance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noidaSectors.map(s => (
              <div key={s} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-amber-300 hover:shadow-xl transition-all group">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div><h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{s}</h3></div>
                </div>
                <p className="text-slate-600 text-sm mb-4">{sectorDesc[s] || 'Premium location with excellent amenities and connectivity.'}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-full"><Building2 className="w-3 h-3" /> Properties Available</span>
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-full"><Train className="w-3 h-3" /> Metro Nearby</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
