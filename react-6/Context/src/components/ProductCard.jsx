import React from "react";

const ProductCard = ({ product , setCartItems }) => {
  if (!product) return null;

  const {
    title,
    image,
    price,
    category,
    rating,
  } = product;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group">

      {/* Image */}

      <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 object-contain group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}

      <div className="p-5">

        <span className="text-xs uppercase text-blue-500 font-semibold">
          {category}
        </span>

        <h2 className="text-lg font-bold mt-2 line-clamp-2 h-14">
          {title}
        </h2>

        <div className="flex items-center justify-between mt-4">

          <div>
            <p className="text-2xl font-bold">
              ${price}
            </p>
          </div>

          <div className="text-right">
            <p className="text-yellow-500 font-semibold">
              ⭐ {rating?.rate ?? "N/A"}
            </p>

            <p className="text-gray-500 text-sm">
              {rating?.count ?? 0} Reviews
            </p>
          </div>

        </div>

        <button onClick={()=>setCartItems(prev => [...prev,product])} className="w-full mt-5 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default ProductCard;