import { Property } from './properties';

export const noidaProperties: Property[] = [
  {
    id: 1, title: 'Luxury 3BHK Apartment', location: 'Sector 104, Noida', price: '₹1.25 Cr', type: 'Apartment',
    bedrooms: 3, bathrooms: 2, area: '1,850 sq.ft',
    image: 'https://images.pexels.com/photos/33234792/pexels-photo-33234792.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    featured: true, tag: 'Hot Deal',
  },
  {
    id: 2, title: 'Premium Builder Floor', location: 'Sector 93A, Noida', price: '₹95 Lakh', type: 'Builder Floor',
    bedrooms: 3, bathrooms: 3, area: '1,500 sq.ft',
    image: 'https://images.pexels.com/photos/8134845/pexels-photo-8134845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    featured: true, tag: 'New Launch',
  },
  {
    id: 3, title: '4BHK Luxury Villa', location: 'Sector 150, Noida', price: '₹3.50 Cr', type: 'Villa',
    bedrooms: 4, bathrooms: 4, area: '4,200 sq.ft',
    image: 'https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    featured: true, tag: 'Premium',
  },
  {
    id: 4, title: '2BHK Affordable Flat', location: 'Sector 168, Noida', price: '₹45 Lakh', type: 'Apartment',
    bedrooms: 2, bathrooms: 2, area: '950 sq.ft',
    image: 'https://images.pexels.com/photos/24259313/pexels-photo-24259313.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    featured: false,
  },
  {
    id: 5, title: 'Commercial Office Space', location: 'Sector 137, Noida', price: '₹2.10 Cr', type: 'Commercial',
    bedrooms: 0, bathrooms: 2, area: '2,800 sq.ft',
    image: 'https://images.pexels.com/photos/37224965/pexels-photo-37224965.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    featured: true, tag: 'Best Seller',
  },
  {
    id: 6, title: '3BHK on Expressway', location: 'Noida Expressway', price: '₹1.80 Cr', type: 'Apartment',
    bedrooms: 3, bathrooms: 3, area: '2,100 sq.ft',
    image: 'https://images.pexels.com/photos/18126506/pexels-photo-18126506.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    featured: true,
  },
  {
    id: 7, title: 'Plot for Sale', location: 'Sector 82, Noida', price: '₹60 Lakh', type: 'Plot',
    bedrooms: 0, bathrooms: 0, area: '120 sq.yds',
    image: 'https://images.pexels.com/photos/8134820/pexels-photo-8134820.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    featured: false,
  },
  {
    id: 8, title: '5BHK Ultra Luxury', location: 'Sector 143, Noida', price: '₹5.75 Cr', type: 'Villa',
    bedrooms: 5, bathrooms: 5, area: '5,500 sq.ft',
    image: 'https://images.pexels.com/photos/7587470/pexels-photo-7587470.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    featured: true, tag: 'Ultra Luxury',
  },
  {
    id: 9, title: 'Studio Apartment', location: 'Sector 105, Noida', price: '₹28 Lakh', type: 'Apartment',
    bedrooms: 1, bathrooms: 1, area: '450 sq.ft',
    image: 'https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    featured: false,
  },
];

export const noidaSectors = [
  'Sector 82', 'Sector 93', 'Sector 93A', 'Sector 93B', 'Sector 104',
  'Sector 105', 'Sector 107', 'Sector 108', 'Sector 137', 'Sector 143',
  'Sector 150', 'Sector 168', 'Noida Expressway',
];

export const noidaFAQs = [
  { question: 'Which are the best sectors to buy property in Noida?', answer: 'Sector 150, Sector 104, Sector 137, Sector 143, and Noida Expressway are among the best sectors for investment due to great connectivity, metro access, and developed infrastructure. Sector 150 is known for luxury villas, while Sector 104 and 137 offer premium apartments.' },
  { question: 'What is the average property price in Noida?', answer: 'Property prices in Noida vary by sector and type. 2BHK flats range from ₹25 Lakh to ₹80 Lakh, 3BHK from ₹60 Lakh to ₹2 Cr, villas from ₹1.5 Cr to ₹6 Cr, and plots from ₹30 Lakh per 100 sq.yds depending on location.' },
  { question: 'Is Noida a good place for real estate investment?', answer: 'Yes! Noida is one of India\'s top real estate investment destinations due to the upcoming Jewar Airport, expanding metro network, excellent road connectivity (Noida-Greater Noida Expressway), and proximity to Delhi. ROI has been 8-12% annually.' },
  { question: 'Which sectors have the best metro connectivity in Noida?', answer: 'Sectors along the Aqua Line (Sector 51 to Depot) and Blue Line have excellent metro connectivity. Key sectors include Sector 52, 61, 62, 76, 101, and 137. The upcoming metro extensions will connect more sectors.' },
  { question: 'What is the RERA status of Noida properties?', answer: 'All properties listed by Lakshya Properties are RERA-registered. We only deal with UP RERA-approved projects. You can verify any property at https://www.up-rera.in/ using the RERA registration number we provide.' },
  { question: 'How do I get a home loan for property in Noida?', answer: 'We assist with home loans through partner banks like SBI, HDFC, ICICI, and others. Interest rates start from 8.40% p.a. You need KYC documents, income proof (ITR/salary slips), and property documents. We handle the entire process for free.' },
];
