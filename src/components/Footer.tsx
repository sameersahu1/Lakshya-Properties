import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp, Heart } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'Best Properties', href: '/best-properties' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Areas', href: '/areas' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const propertyTypes = [
    'Luxury Villas',
    'Premium Apartments',
    'Independent Houses',
    'Commercial Spaces',
    'Plots & Land',
    'Farm Houses',
  ];

  const cities = [
    'Noida',
    'Greater Noida',
    'Delhi NCR',
    'Sector 93',
    'Sector 104',
    'Noida Expressway',
  ];

  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo light />
            <p className="text-slate-400 mt-4 leading-relaxed text-sm">
              Lakshya Properties is your trusted partner in finding the perfect property. 
              With 18+ years of experience, we've helped over 5000 families find their dream homes across Noida, Greater Noida, and Delhi NCR.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { label: 'F', name: 'Facebook' },
                { label: 'I', name: 'Instagram' },
                { label: 'T', name: 'Twitter' },
                { label: 'L', name: 'LinkedIn' },
                { label: 'Y', name: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  title={social.name}
                  className="w-9 h-9 bg-white/10 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-all duration-300 text-xs font-bold"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white hover:pl-1 transition-all duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-5">Property Types</h3>
            <ul className="space-y-3">
              {propertyTypes.map((type) => (
                <li key={type}>
                  <Link to="/properties" className="text-slate-400 hover:text-white hover:pl-1 transition-all duration-300 text-sm">
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-5">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  Shramik Kunj 1, Sector 93<br />Noida, Uttar Pradesh 201304
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="tel:+919717060749" className="text-slate-400 hover:text-white transition-colors text-sm">
                  +91 97170 60749
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="mailto:kamleshk798@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                  kamleshk798@gmail.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-amber-500 placeholder-slate-500"
                />
                <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors text-sm font-semibold">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cities Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-amber-400 font-semibold mr-2">We Serve:</span>
            {cities.map((city, i) => (
              <span key={city} className="text-slate-400">
                {city}{i < cities.length - 1 && <span className="mx-2 text-slate-600">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © 2026 Lakshya Properties. All rights reserved. Made with{' '}
              <Heart className="w-3.5 h-3.5 inline text-red-500 fill-red-500" /> in India
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-xl shadow-amber-500/30 flex items-center justify-center transition-all hover:-translate-y-1 z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
