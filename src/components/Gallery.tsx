import { Camera } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Luxury Villa Exterior',
    category: 'Villa',
  },
  {
    src: 'https://images.pexels.com/photos/7174113/pexels-photo-7174113.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Modern Living Room',
    category: 'Interior',
  },
  {
    src: 'https://images.pexels.com/photos/8134845/pexels-photo-8134845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Garden Estate',
    category: 'Villa',
  },
  {
    src: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Open Plan Kitchen',
    category: 'Interior',
  },
  {
    src: 'https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Suburban Dream Home',
    category: 'Villa',
  },
  {
    src: 'https://images.pexels.com/photos/8092191/pexels-photo-8092191.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Classic Interior',
    category: 'Interior',
  },
];

export default function Gallery() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            <Camera className="w-4 h-4" />
            Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Property <span className="text-amber-600">Gallery</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Take a visual tour of our stunning properties and interiors.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 || index === 5 ? 'sm:row-span-2 h-64 sm:h-full' : 'h-64'
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">{img.category}</span>
                <h3 className="text-white text-lg font-bold mt-1">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
