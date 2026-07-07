import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function TermsPage() {
  return (
    <>
      <SEO title="Terms & Conditions" description="Terms and conditions for using Lakshya Properties website and real estate services in Noida. Read our terms before using our services." />
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-slate-600 mb-4"><strong>Last Updated:</strong> January 2026</p>
          <p className="text-slate-600 mb-6">By using the Lakshya Properties website and services, you agree to these terms. If you disagree, please do not use our website.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">1. Services</h2>
          <p className="text-slate-600 mb-4">Lakshya Properties is a real estate agent based in Noida, Uttar Pradesh. We facilitate property transactions between buyers, sellers, landlords, and tenants. We do not guarantee property availability or pricing — all listings are subject to change.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">2. Property Information</h2>
          <p className="text-slate-600 mb-4">Property details, prices, and availability on this website are for informational purposes. Actual prices may vary. We recommend independent verification before making any purchase decision.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">3. Limitation of Liability</h2>
          <p className="text-slate-600 mb-4">Lakshya Properties is not liable for any direct or indirect damages arising from the use of our website or services. All transactions are subject to verification and applicable laws.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">4. Contact</h2>
          <p className="text-slate-600">For questions about these terms, email <a href="mailto:kamleshk798@gmail.com" className="text-amber-600">kamleshk798@gmail.com</a>.</p>
        </div>
      </section>
    </>
  );
}
