import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from './ScrollToTop';
import QuickEnquiry from './QuickEnquiry';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <QuickEnquiry />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
