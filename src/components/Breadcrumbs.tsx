import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; to?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-1.5 text-sm flex-wrap">
          <li>
            <Link to="/" className="text-slate-500 hover:text-amber-600 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              {item.to ? (
                <Link to={item.to} className="text-slate-500 hover:text-amber-600 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-900 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
