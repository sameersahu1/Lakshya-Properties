import { Star, Quote, MessageSquare } from 'lucide-react';
import { testimonials } from '../data/properties';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            <MessageSquare className="w-4 h-4" />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our <span className="text-amber-600">Clients Say</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Real stories from real families who found their dream home with Lakshya Properties.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-6 w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500/20"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-amber-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
