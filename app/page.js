import Link from 'next/link';
import FeaturedProperties from '@/components/FeaturedProperties';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Find Your Dream Property
          </h1>
          <p className="text-xl text-center mb-8">
            Discover the perfect home that matches your lifestyle
          </p>
          <div className="max-w-3xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <FeaturedProperties properties={[]} /> {/* Pass empty array for now */}

      {/* Call to Action */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your New Home?</h2>
          <p className="text-gray-600 mb-8">
            Browse our extensive collection of properties or list your own.
          </p>
          <Link 
            href="/properties" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Properties
          </Link>
        </div>
      </section>
    </div>
  );
}