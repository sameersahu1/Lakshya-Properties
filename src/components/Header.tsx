import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'Best Properties', href: '/best-properties' },
    { label: 'Areas', href: '/areas' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919717060749" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91 97170 60749
            </a>
            <a href="mailto:kamleshk798@gmail.com" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Mail className="w-3.5 h-3.5" /> kamleshk798@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex-shrink-0"><Logo /></Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-sm rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
              >
                Book a Visit
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t mt-3">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg"
                >
                  Book a Visit
                </Link>
              </div>
              <div className="pt-3 space-y-2 text-sm text-slate-500">
                <a href="tel:+919717060749" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +91 97170 60749
                </a>
                <a href="mailto:kamleshk798@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> kamleshk798@gmail.com
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
