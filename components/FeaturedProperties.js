import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedProperties({ properties = [] }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={property.images[0] || '/placeholder.jpg'}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-2xl font-bold text-blue-600">${property.price.toLocaleString()}</p>
                <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                  <span>{property.bedrooms} beds</span>
                  <span>{property.bathrooms} baths</span>
                  <span>{property.area} sqft</span>
                </div>
                <Link
                  href={`/properties/${property._id}`}
                  className="mt-4 block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 