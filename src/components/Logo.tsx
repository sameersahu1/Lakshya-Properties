import { Home } from 'lucide-react';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/25">
        <Home className="w-5 h-5 text-white" strokeWidth={2.5} />
        <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-white border-2 border-amber-500 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-amber-500" />
        </div>
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`text-xl font-bold tracking-tight ${light ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
          Lakshya
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${light ? 'text-amber-400' : 'text-amber-600'}`}>
          Properties
        </span>
      </div>
    </div>
  );
}
