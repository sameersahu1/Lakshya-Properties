export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  featured: boolean;
  tag?: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Elegant Brick Villa",
    location: "Whitefield, Bangalore",
    price: "₹1.85 Cr",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200 sq.ft",
    image: "https://images.pexels.com/photos/7587470/pexels-photo-7587470.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true,
    tag: "Premium",
  },
  {
    id: 2,
    title: "Contemporary Luxury Home",
    location: "Jubilee Hills, Hyderabad",
    price: "₹2.45 Cr",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,100 sq.ft",
    image: "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true,
    tag: "New Launch",
  },
  {
    id: 3,
    title: "Modern Glass Villa",
    location: "Koregaon Park, Pune",
    price: "₹3.10 Cr",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 4,
    area: "3,800 sq.ft",
    image: "https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true,
    tag: "Best Seller",
  },
  {
    id: 4,
    title: "Forest Edge Residence",
    location: "Lonavala, Maharashtra",
    price: "₹1.95 Cr",
    type: "Villa",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,900 sq.ft",
    image: "https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
  },
  {
    id: 5,
    title: "Suburban Dream Home",
    location: "Banjara Hills, Hyderabad",
    price: "₹2.75 Cr",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 5,
    area: "4,500 sq.ft",
    image: "https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
  },
  {
    id: 6,
    title: "Minimalist Modern House",
    location: "Sector 42, Gurgaon",
    price: "₹1.65 Cr",
    type: "Villa",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,400 sq.ft",
    image: "https://images.pexels.com/photos/8134845/pexels-photo-8134845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
  },
  {
    id: 7,
    title: "Skyline Tower Apartment",
    location: "Bandra West, Mumbai",
    price: "₹4.20 Cr",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,100 sq.ft",
    image: "https://images.pexels.com/photos/18126506/pexels-photo-18126506.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true,
    tag: "Hot Deal",
  },
  {
    id: 8,
    title: "Urban Heights Residence",
    location: "Andheri East, Mumbai",
    price: "₹1.35 Cr",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sq.ft",
    image: "https://images.pexels.com/photos/33234792/pexels-photo-33234792.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
  },
  {
    id: 9,
    title: "Green View Apartments",
    location: "Indiranagar, Bangalore",
    price: "₹98 Lakh",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,050 sq.ft",
    image: "https://images.pexels.com/photos/24259313/pexels-photo-24259313.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Homeowner",
    image: "https://images.pexels.com/photos/8470805/pexels-photo-8470805.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    text: "Lakshya Properties helped us find our dream home in Bangalore. Their team was incredibly professional and guided us through every step of the process.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Investor",
    image: "https://images.pexels.com/photos/8730048/pexels-photo-8730048.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    text: "I've invested in multiple properties through Lakshya, and every experience has been exceptional. They truly understand the market and deliver value.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit & Neha Gupta",
    role: "Happy Family",
    image: "https://images.pexels.com/photos/8730055/pexels-photo-8730055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    text: "From property search to key handover, Lakshya Properties made our home-buying journey smooth and stress-free. Highly recommended!",
    rating: 5,
  },
];
