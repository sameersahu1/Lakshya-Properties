import { Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8148350/pexels-photo-8148350.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          alt="Noida neighborhood"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Find Your <span className="text-amber-400">Dream Property?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
            Take the first step towards your new home. Our expert team with 18+ years of experience is ready to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919717060749?text=Hi%20Lakshya%20Properties!%20I%20want%20to%20schedule%20a%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-green-500/30 hover:shadow-green-500/50 text-sm sm:text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-xl shadow-amber-500/30 text-sm sm:text-lg"
            >
              Schedule a Visit
            </Link>
            <a
              href="tel:+919717060749"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20 text-sm sm:text-lg"
            >
              <Phone className="w-5 h-5" />
              +91 97170 60749
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
