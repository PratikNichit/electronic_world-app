import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  category: string;
  price: number;
}

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      <Link to={`/product/${product.id}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={product.imageSrc} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="p-6">
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mb-2">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-white font-bold">${product.price.toFixed(2)}</span>
          <Link 
            to={`/product/${product.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;