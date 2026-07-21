import React from "react";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({ product }) => {

    let navigate = useNavigate();

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
      {/* Image */}
      <div onClick={()=>navigate(`/detail/${product.id}`)}  className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden p-6">
        <img 
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Category */}
        <span className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2 h-14">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            ⭐
            <span className="font-medium">{product.rating.rate}</span>
            <span className="text-gray-500 text-sm">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-green-600 font-bold text-xl">
            ${product.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-3">
          {product.description}
        </p>

        {/* Button */}
        <button className="mt-3 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;