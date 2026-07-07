export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Lakshya Properties',
    url: 'https://lakshyaproperties.com',
    logo: 'https://lakshyaproperties.com/images/logo.png',
    image: 'https://lakshyaproperties.com/images/hero-bg.jpg',
    description:
      'Lakshya Properties is Noida\'s trusted real estate agent specializing in residential, commercial, and luxury properties across Sector 82, 93, 104, 107, 137, 143, 150, 168 and Noida Expressway.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shramik Kunj 1, Sector 93',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201304',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.5355',
      longitude: '77.3910',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-97170-60749',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    sameAs: [
      'https://www.facebook.com/lakshyaproperties',
      'https://www.instagram.com/lakshyaproperties',
      'https://wa.me/919717060749',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    priceRange: '₹20L - ₹10Cr',
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Lakshya Properties',
    '@id': 'https://lakshyaproperties.com/#localbusiness',
    url: 'https://lakshyaproperties.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201304',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '28.5355', longitude: '77.3910' },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lakshya Properties',
    url: 'https://lakshyaproperties.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: 'https://lakshyaproperties.com/search?q={search_term_string}' },
      'query-input': 'required name=search_term_string',
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://lakshyaproperties.com${item.url}`,
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function ServiceSchema({ name, description, area }: { name: string; description: string; area: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@type': 'RealEstateAgent', name: 'Lakshya Properties' },
    areaServed: { '@type': 'City', name: area || 'Noida' },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function ArticleSchema({ title, description, datePublished, author }: {
  title: string; description: string; datePublished: string; author: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    author: { '@type': 'Person', name: author },
    publisher: { '@type': 'Organization', name: 'Lakshya Properties' },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function PropertySchema({ property }: {
  property: { title: string; location: string; price: string; type: string; bedrooms: number; bathrooms: number; area: string; image: string; };
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name: property.title,
    description: `${property.type} - ${property.bedrooms} BHK in ${property.location}, ${property.area}`,
    image: property.image,
    address: { '@type': 'PostalAddress', addressLocality: property.location.split(',')[0]?.trim() || 'Noida', addressRegion: 'Uttar Pradesh' },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
