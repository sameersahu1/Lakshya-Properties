import { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919717060749';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const fullName = (formData.get('fullName') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const email = (formData.get('email') as string) || '';
    const propertyInterest = (formData.get('propertyInterest') as string) || '';
    const budget = (formData.get('budget') as string) || '';
    const message = (formData.get('message') as string) || '';

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
    window.open(whatsappUrl, '_blank');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            <Mail className="w-4 h-4" />
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get In <span className="text-amber-600">Touch</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Have a question or want to schedule a property visit? Reach out to us and we'll get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Office Address</h4>
                    <p className="text-slate-400 text-sm mt-0.5">
                      Shramik Kunj 1, Sector 93<br />
                      Noida, Uttar Pradesh 201304
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Phone</h4>
                    <p className="text-slate-400 text-sm mt-0.5">
                      +91 97170 60749
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Email</h4>
                    <p className="text-slate-400 text-sm mt-0.5">
                      kamleshk798@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Business Hours</h4>
                    <p className="text-slate-400 text-sm mt-0.5">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-slate-400 mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-white/10 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <span className="text-xs font-bold uppercase text-white">
                        {social[0].toUpperCase()}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send us a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Property Interest</label>
                  <select name="propertyInterest" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-slate-700">
                    <option value="">Select Type</option>
                    <option value="Villa">Villa</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Plot">Plot</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Budget Range</label>
<select name="budget" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-slate-700">
                    <option value="">Select Budget</option>
                    <option value="Under ₹50 Lakh">Under ₹50 Lakh</option>
                    <option value="₹50 Lakh - ₹1 Cr">₹50 Lakh - ₹1 Cr</option>
                    <option value="₹1 Cr - ₹2 Cr">₹1 Cr - ₹2 Cr</option>
                    <option value="₹2 Cr - ₹5 Cr">₹2 Cr - ₹5 Cr</option>
                    <option value="Above ₹5 Cr">Above ₹5 Cr</option>
                  </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm resize-none"
                />
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitted}
                className={`w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-3.5 text-white font-bold rounded-xl transition-all shadow-lg ${
                  submitted
                    ? 'bg-emerald-500 shadow-emerald-500/25'
                    : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-green-500/25'
                }`}
              >
                <Send className="w-4 h-4" />
                Send via WhatsApp
              </button>
              <p className="text-xs text-slate-400 mt-2">Opens WhatsApp at +91 97170 60749</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
