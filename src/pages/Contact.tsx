import { useState, useRef } from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919717060749';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const fullName = (formData.get('fullName') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const email = (formData.get('email') as string) || '';
    const propertyInterest = (formData.get('propertyInterest') as string) || '';
    const budget = (formData.get('budget') as string) || '';
    const message = (formData.get('message') as string) || '';

    // Build WhatsApp message with all form data
    const parts = [`Hi Lakshya Properties! 👋`];
    parts.push(`*Name:* ${fullName}`);
    parts.push(`*Phone:* ${phone}`);
    if (email) parts.push(`*Email:* ${email}`);
    if (propertyInterest) parts.push(`*Property Interest:* ${propertyInterest}`);
    if (budget) parts.push(`*Budget:* ${budget}`);
    if (message) parts.push(`*Message:* ${message}`);

    const whatsappMsg = encodeURIComponent(parts.join('\n'));
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

    setSubmitted(true);
    form.reset();

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: MapPin, title: 'Office', text: 'Shramik Kunj 1, Sector 93, Noida, Uttar Pradesh 201304' },
    { icon: Phone, title: 'Phone', text: '+91 97170 60749' },
    { icon: Mail, title: 'Email', text: 'kamleshk798@gmail.com' },
    { icon: Clock, title: 'Hours', text: 'Mon-Sat: 9AM-7PM | Sun: By Appt' },
  ];

  return (
    <>
      <SEO title="Contact Lakshya Properties — Get in Touch" description="Contact Lakshya Properties in Noida for the best real estate deals. Call +91 97170 60749, WhatsApp us, or visit our office. Free property consultation & site visit." keywords="contact lakshya properties, property dealer noida contact, real estate agent noida phone" />
      <Breadcrumbs items={[{ label: 'Contact' }]} />
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              <MessageCircle className="w-4 h-4" /> Contact Us
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Get In <span className="text-amber-600">Touch</span></h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">Have a question or want to schedule a site visit? Fill the form below — we respond instantly on WhatsApp.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-5">Contact Info</h3>
                <div className="space-y-4">
                  {contactInfo.map(c => (
                    <div key={c.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <c.icon className="w-4 h-4 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm">{c.title}</h4>
                        <p className="text-slate-400 text-xs sm:text-sm mt-0.5">{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20need%20help%20with%20property%20in%20Noida.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all text-sm"
                  >
                    <MessageCircle className="w-5 h-5" /> Chat Directly on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form ref={formRef} onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  Send Message via WhatsApp
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input type="text" name="fullName" required placeholder="Your full name" className="w-full px-3 py-2.5 sm:py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Phone *</label>
                    <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" className="w-full px-3 py-2.5 sm:py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input type="email" name="email" placeholder="your@email.com" className="w-full px-3 py-2.5 sm:py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Property Interest</label>
                    <select name="propertyInterest" className="w-full px-3 py-2.5 sm:py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm">
                      <option value="">Select Type</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>Builder Floor</option>
                      <option>Plot</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Budget Range</label>
                  <select name="budget" className="w-full px-3 py-2.5 sm:py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm">
                    <option value="">Select Budget</option>
                    <option>Under ₹30 Lakh</option>
                    <option>₹30-₹60 Lakh</option>
                    <option>₹60 L-₹1 Cr</option>
                    <option>₹1-₹2 Cr</option>
                    <option>₹2-₹5 Cr</option>
                    <option>Above ₹5 Cr</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea name="message" rows={3} placeholder="Tell us your requirements..." className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 text-white font-bold rounded-xl transition-all shadow-lg text-sm sm:text-base ${
                    submitted
                      ? 'bg-emerald-500'
                      : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-green-500/25'
                  } disabled:opacity-80`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send via WhatsApp
                    </>
                  )}
                </button>
                <p className="text-xs text-slate-400 text-center mt-3">
                  Your message will be sent directly to us on WhatsApp at +91 97170 60749
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
