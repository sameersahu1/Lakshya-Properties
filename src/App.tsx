import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Properties from './pages/Properties';
import BestProperties from './pages/BestProperties';
import PropertyDetailPage from './pages/PropertyDetail';
import ServicesPage from './pages/Services';
import AreasWeServe from './pages/AreasWeServe';
import ContactPage from './pages/Contact';
import FAQPage from './pages/FAQ';
import BlogPage from './pages/Blog';
import BlogPostPage from './pages/BlogPost';
import TestimonialsPage from './pages/Testimonials';
import SearchPage from './pages/Search';
import PrivacyPage from './pages/Privacy';
import TermsPage from './pages/Terms';
import SitemapPage from './pages/Sitemap';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="properties" element={<Properties />} />
        <Route path="properties/:id" element={<PropertyDetailPage />} />
        <Route path="best-properties" element={<BestProperties />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="areas" element={<AreasWeServe />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="sitemap" element={<SitemapPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
