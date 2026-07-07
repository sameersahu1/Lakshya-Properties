import { Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Maximize, Heart } from 'lucide-react';
import { Property } from '../data/properties';
import { useState } from 'react';

export default function PropertyCard({ property }: { property: Property }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200 hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden h-56 sm:h-64">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Tag */}
        {property.tag && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-lg">
            {property.tag}
          </div>
        )}

        {/* Like Button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        >
          <Heart className={`w-4 h-4 transition-colors ${liked ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
        </button>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            {property.price}
          </div>
        </div>

        {/* Type Badge */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
          {property.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          {property.title}
        </h3>

        <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
          <MapPin className="w-4 h-4 text-amber-500" />
          <span>{property.location}</span>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            <BedDouble className="w-4 h-4 text-slate-400" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            <Bath className="w-4 h-4 text-slate-400" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            <Maximize className="w-4 h-4 text-slate-400" />
            <span>{property.area}</span>
          </div>
        </div>

        <Link to={`/properties/${property.id}`} className="block w-full mt-4 py-2.5 bg-slate-900 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all duration-300 text-sm text-center">
          View Details
        </Link>
      </div>
    </div>
  );
}
