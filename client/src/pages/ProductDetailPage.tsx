import { useState } from 'react';
import { useParams } from 'react-router-dom';

// Simple product interface with essential fields
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageSrc: string;
  inStock: boolean;
}

// Mock data - would come from API in a real app
const mockProducts: Record<string, Product> = {
  "1": {
    id: 1,
    name: "High-Performance Microcontroller XYZ-328",
    description: "The XYZ-328 is a high-performance, low-power 8-bit microcontroller based on advanced RISC architecture. Perfect for embedded applications requiring reliable control and connectivity.",
    price: 9.99,
    category: "Microcontrollers",
    imageSrc: "/api/placeholder/500/400",
    inStock: true
  },
  "2": {
    id: 2,
    name: "Memory IC 512KB SRAM",
    description: "High-speed SRAM memory IC ideal for cache and buffer applications where speed is critical.",
    price: 8.49,
    category: "Memory",
    imageSrc: "/api/placeholder/500/400",
    inStock: true
  }
  // Add more mock products as needed
};

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState<number>(1);
  
  // In a real app, this would be an API call using the ID
  const product = id ? mockProducts[id] : null;

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-white">Product not found</h1>
        <p className="text-gray-400 mt-4">The product you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const addToCart = () => {
    // In a real app, this would dispatch an action to add the item to cart
    alert(`Added ${quantity} ${product.name} to cart`);
  };

  return (
    <main className="bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-400 mb-6">
          <a href="/" className="hover:text-blue-400">Home</a> / 
          <span className="ml-2 text-gray-300">{product.name}</span>
        </div>

        {/* Product Detail Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Product Image */}
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <img 
              src={product.imageSrc} 
              alt={product.name} 
              className="w-full h-full object-contain p-4"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                {product.category}
              </span>
              <span className={`text-sm font-semibold ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <p className="text-gray-300 mb-6">{product.description}</p>

            {/* Pricing */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">${product.price.toFixed(2)}</span>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-white text-lg font-semibold mb-2">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={decreaseQuantity}
                  className="bg-slate-700 text-white w-10 h-10 flex items-center justify-center rounded-l-md hover:bg-slate-600"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 h-10 text-center bg-slate-800 text-white border-none"
                />
                <button 
                  onClick={increaseQuantity}
                  className="bg-slate-700 text-white w-10 h-10 flex items-center justify-center rounded-r-md hover:bg-slate-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mb-8">
              <button 
                onClick={addToCart}
                disabled={!product.inStock}
                className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 ${
                  product.inStock 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
            </div>

            {/* Shipping Info */}
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <div>
                  <h4 className="text-white font-semibold">Free Shipping</h4>
                  <p className="text-sm text-gray-400">Orders over $100 qualify for free shipping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;