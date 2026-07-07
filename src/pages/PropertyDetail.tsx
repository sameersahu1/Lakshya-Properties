import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { PropertySchema } from '../components/JsonLd';
import { noidaProperties } from '../data/noidaProperties';
import { MapPin, BedDouble, Bath, Maximize, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const property = noidaProperties.find(p => p.id === Number(id));

  if (!property) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Property Not Found</h1>
        <Link to="/properties" className="text-amber-600 underline mt-4 inline-block">Browse all properties</Link>
      </section>
    );
  }

  const whatsappMsg = encodeURIComponent(`Hi Lakshya Properties! I'm interested in ${property.title} (${property.type}) in ${property.location}, priced at ${property.price}. Please share more details.`);

  return (
    <>
      <SEO title={`${property.title} in ${property.location} — ${property.price}`} description={`${property.bedrooms > 0 ? property.bedrooms + ' BHK ' : ''}${property.type} in ${property.location}, ${property.area}. Price: ${property.price}. RERA verified. Contact Lakshya Properties at +91 97170 60749.`} keywords={`${property.title.toLowerCase()}, ${property.location.toLowerCase()} property, ${property.type.toLowerCase()} noida`} />
      <PropertySchema property={property} />
      <Breadcrumbs items={[{ label: 'Properties', to: '/properties' }, { label: property.title }]} />
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <img src={property.image} alt={property.title} className="w-full h-[400px] object-cover rounded-2xl shadow-xl" />
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-2"><span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">{property.type}</span>{property.tag && <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">{property.tag}</span>}</div>
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{property.title}</h1>
                <div className="flex items-center gap-1.5 text-slate-500 mb-6"><MapPin className="w-4 h-4 text-amber-500" /> {property.location}</div>
                <div className="flex flex-wrap gap-6 p-6 bg-slate-50 rounded-2xl mb-8">
                  <div className="text-center"><div className="text-2xl font-bold text-slate-900">{property.price}</div><div className="text-xs text-slate-500">Price</div></div>
                  {property.bedrooms > 0 && <div className="text-center"><div className="text-2xl font-bold text-slate-900">{property.bedrooms}</div><div className="text-xs text-slate-500">Bedrooms</div></div>}
                  {property.bathrooms > 0 && <div className="text-center"><div className="text-2xl font-bold text-slate-900">{property.bathrooms}</div><div className="text-xs text-slate-500">Bathrooms</div></div>}
                  <div className="text-center"><div className="text-2xl font-bold text-slate-900">{property.area}</div><div className="text-xs text-slate-500">Area</div></div>
                </div>
                <div className="space-y-3">
                  {['RERA Verified Property', 'Free Site Visit', 'Home Loan Assistance', 'Legal Documentation Support', 'Best Price Guaranteed', 'Immediate Possession Available'].map(f => (
                    <div key={f} className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" />{f}</div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="sticky top-24 bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-amber-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{property.price}</div>
                <p className="text-slate-500 text-sm mb-6">Interested in this property? Contact us now for a free site visit.</p>
                <a href={`https://wa.me/919717060749?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all mb-3"><MessageCircle className="w-5 h-5" /> WhatsApp Enquiry</a>
                <a href="tel:+919717060749" className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all mb-3"><Phone className="w-5 h-5" /> Call Now</a>
                <Link to="/contact" className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-slate-900 hover:bg-amber-600 text-white font-bold rounded-xl transition-all">Schedule Site Visit</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
