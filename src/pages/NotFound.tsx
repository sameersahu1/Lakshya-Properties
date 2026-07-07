import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Home, Search, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found" description="The page you are looking for does not exist. Browse Lakshya Properties for the best real estate deals in Noida." />
      <section className="min-h-[80vh] flex items-center justify-center bg-slate-50">
        <div className="text-center px-4">
          <h1 className="text-8xl lg:text-9xl font-bold text-amber-500 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>404</h1>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Page Not Found</h2>
          <p className="text-slate-600 max-w-md mx-auto mb-8">The page you're looking for doesn't exist or has been moved. Let us help you find your dream property instead!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all"><Home className="w-4 h-4" /> Go Home</Link>
            <Link to="/properties" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all"><Search className="w-4 h-4" /> Browse Properties</Link>
            <a href="tel:+919717060749" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"><Phone className="w-4 h-4" /> Call Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
