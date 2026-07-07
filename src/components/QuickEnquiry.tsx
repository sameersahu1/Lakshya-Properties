import { useState, useRef } from 'react';
import { MessageCircle, Send, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const WHATSAPP_NUMBER = '919717060749';

export default function QuickEnquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const fd = new FormData(form);
    const name = (fd.get('qName') as string) || '';
    const phone = (fd.get('qPhone') as string) || '';
    const interest = (fd.get('qInterest') as string) || '';
    const budget = (fd.get('qBudget') as string) || '';

    const parts = ['Hi Lakshya Properties! 🏠'];
    parts.push(`*Name:* ${name}`);
    parts.push(`*Phone:* ${phone}`);
    if (interest) parts.push(`*Looking for:* ${interest}`);
    if (budget) parts.push(`*Budget:* ${budget}`);

    setSubmitted(true);
    form.reset();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(parts.join('\n'))}`, '_blank');
    setTimeout(() => { setSubmitted(false); setExpanded(false); }, 3000);
  };

  return (
    <div className="bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg z-40">
      {/* Collapsed Bar — always visible */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-2.5 gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <span className="text-white text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-1">
              <span className="hidden sm:inline">🏠</span> Quick Enquiry
            </span>
            <span className="text-amber-100 text-[10px] sm:text-xs hidden sm:block truncate">
              Get the best deals in Noida — reply within 5 minutes!
            </span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20want%20to%20know%20about%20properties%20in%20Noida.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-[10px] sm:text-sm transition-all shadow-md whitespace-nowrap"
            >
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">+91 97170 60749</span>
              <span className="xs:hidden">WhatsApp</span>
            </a>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-0.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg text-[10px] sm:text-sm transition-all whitespace-nowrap"
            >
              {expanded ? (
                <><ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" /><span className="hidden sm:inline">Close</span></>
              ) : (
                <><ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" /><span className="hidden sm:inline">Enquire Now</span></>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Form */}
      {expanded && (
        <div className="border-t border-amber-400/30 bg-white/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-2 items-end">
                <div className="flex-1 w-full">
                  <label className="block text-[10px] sm:text-xs font-semibold text-slate-600 mb-0.5">Full Name *</label>
                  <input type="text" name="qName" required placeholder="Your name" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
                </div>
                <div className="flex-1 w-full">
                  <label className="block text-[10px] sm:text-xs font-semibold text-slate-600 mb-0.5">Phone Number *</label>
                  <input type="tel" name="qPhone" required placeholder="+91 XXXXX XXXXX" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
                </div>
                <div className="w-full sm:w-36">
                  <label className="block text-[10px] sm:text-xs font-semibold text-slate-600 mb-0.5">Looking For</label>
                  <select name="qInterest" className="w-full px-2 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm text-slate-700">
                    <option value="">Any</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Builder Floor</option>
                    <option>Plot</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div className="w-full sm:w-36">
                  <label className="block text-[10px] sm:text-xs font-semibold text-slate-600 mb-0.5">Budget</label>
                  <select name="qBudget" className="w-full px-2 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm text-slate-700">
                    <option value="">Any</option>
                    <option>Under ₹30 Lakh</option>
                    <option>₹30-₹60 Lakh</option>
                    <option>₹60 L-₹1 Cr</option>
                    <option>₹1-₹2 Cr</option>
                    <option>₹2-₹5 Cr</option>
                    <option>Above ₹5 Cr</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full sm:w-auto flex items-center justify-center gap-1.5 px-5 py-2 text-white font-bold rounded-lg transition-all shadow-md text-xs sm:text-sm whitespace-nowrap flex-shrink-0 ${
                    submitted ? 'bg-emerald-500' : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  {submitted ? (
                    <><CheckCircle className="w-3.5 h-3.5" /> Opening...</>
                  ) : (
                    <><Send className="w-3.5 h-3.5" /> Send to WhatsApp</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
