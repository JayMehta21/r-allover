import React from "react";

const Cart = ({ CartItems }) => {
  // Total Price
  const totalPrice = CartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">
            Shopping Cart
          </h1>

          <span className="bg-black text-white px-5 py-2 rounded-full">
            {CartItems.length} Items
          </span>
        </div>

        {CartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-16 text-center">
            <h2 className="text-3xl font-semibold text-gray-600">
              🛒 Your cart is empty
            </h2>

            <p className="text-gray-500 mt-3">
              Add some products to get started.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left Side */}

            <div className="lg:col-span-2 space-y-5">

              {CartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-5 flex gap-6 items-center"
                >
                  {/* Image */}

                  <div className="w-36 h-36 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-28 object-contain"
                    />
                  </div>

                  {/* Info */}

                  <div className="flex-1">

                    <h2 className="text-xl font-semibold line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 mt-2 capitalize">
                      {item.category}
                    </p>

                    <div className="mt-4 flex items-center justify-between">

                      <p className="text-2xl font-bold">
                        ${item.price}
                      </p>

                      <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">
                        Remove
                      </button>

                    </div>

                  </div>
                </div>
              ))}

            </div>

            {/* Right Side */}

            <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-6">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Items</span>
                  <span>{CartItems.length}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

              </div>

              <button className="w-full mt-8 bg-black text-white py-4 rounded-xl text-lg hover:bg-gray-800 transition">
                Checkout
              </button>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;