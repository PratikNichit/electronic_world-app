import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  category: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Microcontrollers',
    description: 'High-performance microcontrollers for embedded applications',
    imageSrc: '/api/placeholder/300/200',
    category: 'Embedded',
    price: 9.99
  },
  {
    id: 2,
    name: 'Memory ICs',
    description: 'DRAM, SRAM, and Flash memory solutions for various applications',
    imageSrc: '/api/placeholder/300/200',
    category: 'Memory',
    price: 8.49
  },
  {
    id: 3,
    name: 'Power Management ICs',
    description: 'Efficient power management solutions for electronic devices',
    imageSrc: '/api/placeholder/300/200',
    category: 'Power',
    price: 7.99
  },
  {
    id: 4,
    name: 'Analog ICs',
    description: 'High-precision analog integrated circuits for signal processing',
    imageSrc: '/api/placeholder/300/200',
    category: 'Analog',
    price: 12.99
  },
  {
    id: 5,
    name: 'RF Components',
    description: 'Radio frequency components for wireless communication',
    imageSrc: '/api/placeholder/300/200',
    category: 'RF',
    price: 15.99
  },
  {
    id: 6,
    name: 'Sensors',
    description: 'Advanced sensors for various industrial and consumer applications',
    imageSrc: '/api/placeholder/300/200',
    category: 'Sensors',
    price: 6.99
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Featured Products
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our wide range of semiconductor products designed to meet the needs of various industries
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;  