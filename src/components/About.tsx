import { Target, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    'RERA Registered Properties',
    'Transparent Pricing',
    'Legal Documentation Support',
    'Home Loan Assistance',
    'After-Sales Service',
    'Virtual Property Tours',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Modern luxury villa"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 sm:right-6 bg-white rounded-2xl shadow-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">18+</div>
                  <div className="text-sm text-slate-500">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-900/10 rounded-xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              <Target className="w-4 h-4" />
              About Us
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Trusted Partner in{' '}
              <span className="text-amber-600">Real Estate</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              At Lakshya Properties, we believe everyone deserves a home that matches their dreams. 
              With 18+ years of experience in the Noida real estate market, we've helped 
              thousands of families find their perfect property.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              Our name "Lakshya" means "Goal" – and our goal is simple: to make your property 
              journey seamless, transparent, and rewarding. From premium villas to affordable 
              apartments, we curate the finest properties across Noida, Greater Noida, and Delhi NCR.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
