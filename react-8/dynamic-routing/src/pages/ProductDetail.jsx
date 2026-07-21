import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getSingleData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      console.log(res.data);

      setProduct(res.data);
    } catch (error) {
      console.log("Error is", error);
    }
  };

  useEffect(() => {
    getSingleData();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="grid lg:grid-cols-2 gap-10 p-10">

          {/* Product Image */}
          <div className="flex justify-center items-center bg-gray-50 rounded-2xl p-10">
            <img
              src={product.image}
              alt={product.title}
              className="h-[450px] object-contain hover:scale-105 transition duration-300"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">

            <div>

              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold capitalize mb-4">
                {product.category}
              </span>

              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                {product.title}
              </h1>

              <div className="flex items-center gap-4 mt-5">
                <div className="flex items-center gap-1 text-yellow-500 text-lg">
                  ⭐ {product.rating.rate}
                </div>

                <span className="text-gray-500">
                  ({product.rating.count} Reviews)
                </span>
              </div>

              <h2 className="text-5xl font-bold text-green-600 mt-8">
                ₹ {(product.price * 87).toFixed(0)}
              </h2>

              <p className="text-gray-500 mt-1">
                <span className="line-through text-lg mr-2">
                  ₹ {(product.price * 87 * 1.3).toFixed(0)}
                </span>

                <span className="text-green-600 font-semibold">
                  30% OFF
                </span>
              </p>

              <p className="text-gray-600 leading-8 mt-8">
                {product.description}
              </p>

            </div>

            {/* Buttons */}

            <div className="flex gap-5 mt-10">
              <button className="flex-1 bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition">
                Add To Cart
              </button>

              <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
                Buy Now
              </button>
            </div>

            {/* Extra Info */}

            <div className="grid grid-cols-3 gap-5 mt-10">

              <div className="border rounded-xl p-4 text-center">
                🚚
                <p className="font-semibold mt-2">Free Delivery</p>
              </div>

              <div className="border rounded-xl p-4 text-center">
                🔄
                <p className="font-semibold mt-2">7 Days Return</p>
              </div>

              <div className="border rounded-xl p-4 text-center">
                🔒
                <p className="font-semibold mt-2">Secure Payment</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetail;