import { FC } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Microcontrollers',
    description: 'High-performance microcontrollers for embedded applications',
    imageSrc: '/api/placeholder/300/200',
    category: 'Embedded',
  },
  {
    id: 2,
    name: 'Memory ICs',
    description: 'DRAM, SRAM, and Flash memory solutions for various applications',
    imageSrc: '/api/placeholder/300/200',
    category: 'Memory',
  },
  {
    id: 3,
    name: 'Power Management ICs',
    description: 'Efficient power management solutions for electronic devices',
    imageSrc: '/api/placeholder/300/200',
    category: 'Power',
  },
  {
    id: 4,
    name: 'Analog ICs',
    description: 'High-precision analog integrated circuits for signal processing',
    imageSrc: '/api/placeholder/300/200',
    category: 'Analog',
  },
  {
    id: 5,
    name: 'RF Components',
    description: 'Radio frequency components for wireless communication',
    imageSrc: '/api/placeholder/300/200',
    category: 'RF',
  },
  {
    id: 6,
    name: 'Sensors',
    description: 'Advanced sensors for various industrial and consumer applications',
    imageSrc: '/api/placeholder/300/200',
    category: 'Sensors',
  },
];

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.imageSrc} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mb-2">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <button className="text-blue-500 hover:text-blue-400 text-sm font-medium flex items-center">
          Learn More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

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
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;