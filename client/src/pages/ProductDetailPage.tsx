import { useState } from 'react';
import { useParams } from 'react-router-dom';

// Interface for product type
interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

interface ProductVariant {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
}

interface ProductSpecification {
  name: string;
  value: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  summary: string;
  category: string;
  price: number;
  discountedPrice?: number;
  images: ProductImage[];
  variants: ProductVariant[];
  inStock: boolean;
  specifications: ProductSpecification[];
  relatedProducts: number[];
}

// Mock product data (in a real app, this would come from an API)
const productData: Product = {
  id: 1,
  name: "High-Performance Microcontroller XYZ-328",
  description: "The XYZ-328 is a high-performance, low-power 8-bit microcontroller based on advanced RISC architecture. Optimized for code efficiency and processing speed, it features 32KB of In-System Programmable Flash, 2KB SRAM, and 1KB EEPROM. Perfect for complex embedded applications requiring reliable control and connectivity.",
  summary: "High-performance 8-bit microcontroller with advanced features for embedded systems",
  category: "Microcontrollers",
  price: 12.99,
  discountedPrice: 9.99,
  images: [
    { id: 1, src: "/api/placeholder/500/500", alt: "Microcontroller front view" },
    { id: 2, src: "/api/placeholder/500/500", alt: "Microcontroller side view" },
    { id: 3, src: "/api/placeholder/500/500", alt: "Microcontroller pinout diagram" },
    { id: 4, src: "/api/placeholder/500/500", alt: "Microcontroller in use example" }
  ],
  variants: [
    { id: 1, name: "Standard Package", price: 9.99, isAvailable: true },
    { id: 2, name: "Development Kit", price: 24.99, isAvailable: true },
    { id: 3, name: "Bulk Pack (50 units)", price: 399.99, isAvailable: false }
  ],
  inStock: true,
  specifications: [
    { name: "Processor", value: "8-bit AVR RISC-based" },
    { name: "Clock Speed", value: "16 MHz" },
    { name: "Flash Memory", value: "32 KB" },
    { name: "SRAM", value: "2 KB" },
    { name: "EEPROM", value: "1 KB" },
    { name: "GPIO Pins", value: "23" },
    { name: "ADC Channels", value: "8" },
    { name: "PWM Channels", value: "6" },
    { name: "Operating Voltage", value: "3.3V - 5V" },
    { name: "Temperature Range", value: "-40°C to 85°C" }
  ],
  relatedProducts: [2, 3, 4, 5]
};

// Mock data for related products
const relatedProductsData = [
  {
    id: 2,
    name: "Memory IC 512KB SRAM",
    price: 8.99,
    imageSrc: "/api/placeholder/300/200",
    category: "Memory"
  },
  {
    id: 3,
    name: "Power Management IC PM-4520",
    price: 5.99,
    imageSrc: "/api/placeholder/300/200",
    category: "Power"
  },
  {
    id: 4,
    name: "Analog-to-Digital Converter AD-890",
    price: 7.49,
    imageSrc: "/api/placeholder/300/200",
    category: "Analog"
  },
  {
    id: 5,
    name: "Temperature Sensor TS-100",
    price: 3.99,
    imageSrc: "/api/placeholder/300/200",
    category: "Sensors"
  }
];

const ProductDetailPage = () => {
  // In a real app, you would use the ID from the URL to fetch the product
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedVariant, setSelectedVariant] = useState<number>(0);

  // Functions to handle user interactions
  const handleImageSelect = (index: number) => {
    setSelectedImage(index);
  };

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

  const handleVariantSelect = (index: number) => {
    setSelectedVariant(index);
  };

  const addToCart = () => {
    // In a real app, this would dispatch an action to add the item to cart
    alert(`Added ${quantity} ${productData.name} to cart`);
  };

  return (
    <main className="bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-400 mb-6">
          <a href="/" className="hover:text-blue-400">Home</a> / 
          <a href="/products" className="mx-2 hover:text-blue-400">Products</a> / 
          <a href={`/products/${productData.category.toLowerCase()}`} className="hover:text-blue-400">{productData.category}</a> / 
          <span className="ml-2 text-gray-300">{productData.name}</span>
        </div>

        {/* Product Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-slate-800 rounded-lg overflow-hidden h-96">
              <img 
                src={productData.images[selectedImage].src} 
                alt={productData.images[selectedImage].alt} 
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productData.images.map((image, index) => (
                <div 
                  key={image.id} 
                  className={`cursor-pointer rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-blue-500' : 'border-transparent'}`}
                  onClick={() => handleImageSelect(index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{productData.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                {productData.category}
              </span>
              <span className={`text-sm font-semibold ${productData.inStock ? 'text-green-400' : 'text-red-400'}`}>
                {productData.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <p className="text-gray-300 mb-6">{productData.summary}</p>

            {/* Pricing */}
            <div className="mb-6">
              {productData.discountedPrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-white">${productData.discountedPrice.toFixed(2)}</span>
                  <span className="text-xl text-gray-400 line-through">${productData.price.toFixed(2)}</span>
                  <span className="text-sm bg-green-600 text-white px-2 py-1 rounded">
                    {Math.round((1 - productData.discountedPrice / productData.price) * 100)}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-white">${productData.price.toFixed(2)}</span>
              )}
            </div>

            {/* Variants */}
            <div className="mb-6">
              <h3 className="text-white text-lg font-semibold mb-2">Product Options</h3>
              <div className="flex flex-wrap gap-2">
                {productData.variants.map((variant, index) => (
                  <button
                    key={variant.id}
                    onClick={() => handleVariantSelect(index)}
                    disabled={!variant.isAvailable}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      selectedVariant === index 
                        ? 'bg-blue-600 text-white' 
                        : variant.isAvailable 
                          ? 'bg-slate-700 text-white hover:bg-slate-600' 
                          : 'bg-slate-800 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {variant.name}
                    {!variant.isAvailable && ' (Out of Stock)'}
                  </button>
                ))}
              </div>
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

            {/* Add to Cart & Wishlist */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={addToCart}
                disabled={!productData.inStock}
                className={`flex-1 py-3 rounded-lg font-bold flex items-center justify-center gap-2 ${
                  productData.inStock 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
              <button className="sm:w-12 h-12 rounded-lg bg-slate-800 text-white hover:bg-slate-700 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Shipping Info */}
            <div className="bg-slate-800 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2 mb-2">
                <svg className="w-5 h-5 text-blue-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <div>
                  <h4 className="text-white font-semibold">Free Shipping</h4>
                  <p className="text-sm text-gray-400">Orders over $100 qualify for free shipping</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-white font-semibold">Fast Delivery</h4>
                  <p className="text-sm text-gray-400">Ships within 1-2 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description and Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Product Description</h2>
            <div className="bg-slate-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">{productData.description}</p>
              <p className="text-gray-300">
                Advanced features include multiple power-saving modes, watchdog timers with separate oscillator, and brown-out detection. The XYZ-328 can achieve throughputs approaching 1 MIPS per MHz, balancing power consumption and processing speed.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>High-performance, low-power 8-bit microcontroller</li>
                  <li>Advanced RISC architecture</li>
                  <li>32KB In-System Programmable Flash</li>
                  <li>2KB SRAM and 1KB EEPROM</li>
                  <li>23 general purpose I/O lines</li>
                  <li>32 general purpose working registers</li>
                  <li>Real-time counter with separate oscillator</li>
                  <li>Six PWM channels</li>
                  <li>Programmable serial USART</li>
                  <li>SPI serial interface</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white mb-3">Applications</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Industrial control systems</li>
                  <li>Home automation</li>
                  <li>IoT devices</li>
                  <li>Consumer electronics</li>
                  <li>Robotics</li>
                  <li>Medical devices</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Specifications</h2>
            <div className="bg-slate-800 rounded-lg p-6">
              <table className="w-full">
                <tbody>
                  {productData.specifications.map((spec, index) => (
                    <tr key={index} className={index !== productData.specifications.length - 1 ? "border-b border-slate-700" : ""}>
                      <td className="py-3 text-gray-400">{spec.name}</td>
                      <td className="py-3 text-white text-right">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Downloads */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-white mb-4">Downloads</h3>
              <div className="bg-slate-800 rounded-lg p-6 space-y-4">
                <a href="#" className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="text-white font-medium">Datasheet</h4>
                      <p className="text-xs text-gray-400">PDF, 2.4 MB</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                    <div>
                      <h4 className="text-white font-medium">Programming Guide</h4>
                      <p className="text-xs text-gray-400">PDF, 3.8 MB</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <div>
                      <h4 className="text-white font-medium">Example Code</h4>
                      <p className="text-xs text-gray-400">ZIP, 1.2 MB</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProductsData.map(product => (
              <div key={product.id} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.imageSrc} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">${product.price.toFixed(2)}</span>
                    <a href={`/product/${product.id}`} className="text-blue-500 hover:text-blue-400 text-sm font-medium flex items-center">
                      View
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;