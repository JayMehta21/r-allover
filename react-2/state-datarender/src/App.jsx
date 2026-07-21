import React, { useState } from "react";
import ProductCard from "./ProductCard";

const App = () => {
  const [productsData, setProductsData] = useState([
    {
      id: 1,
      title: "Classic White T-Shirt",
      price: 19.99,
      description: "Soft cotton crew neck t-shirt perfect for everyday wear.",
      category: "men's clothing",
      image: "https://picsum.photos/300?random=1",
      rating: {
        rate: 4.5,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Women's Denim Jacket",
      price: 49.99,
      description: "Stylish denim jacket with a comfortable regular fit.",
      category: "women's clothing",
      image: "https://picsum.photos/300?random=2",
      rating: {
        rate: 4.8,
        count: 95,
      },
    },
    {
      id: 3,
      title: "Wireless Bluetooth Headphones",
      price: 79.99,
      description: "Premium over-ear headphones with active noise cancellation.",
      category: "electronics",
      image: "https://picsum.photos/300?random=3",
      rating: {
        rate: 4.7,
        count: 320,
      },
    },
    {
      id: 4,
      title: "Smart Fitness Watch",
      price: 129.99,
      description: "Track your workouts, heart rate, and sleep with ease.",
      category: "electronics",
      image: "https://picsum.photos/300?random=4",
      rating: {
        rate: 4.4,
        count: 210,
      },
    },
    {
      id: 5,
      title: "Leather Wallet",
      price: 34.99,
      description: "Slim genuine leather wallet with RFID protection.",
      category: "accessories",
      image: "https://picsum.photos/300?random=5",
      rating: {
        rate: 4.6,
        count: 150,
      },
    },
  ]);

  // Delete a product
  const deleteProduct = (id) => {
    const updatedProducts = productsData.filter(
      (product) => product.id !== id
    );

    setProductsData(updatedProducts);
  };

  // Add multiple products
  const addProducts = () => {
    const newProducts = [
      {
        id: 6,
        title: "Running Shoes",
        price: 89.99,
        description: "Lightweight running shoes designed for maximum comfort.",
        category: "footwear",
        image: "https://picsum.photos/300?random=6",
        rating: {
          rate: 4.9,
          count: 430,
        },
      },
      {
        id: 7,
        title: "Gaming Mechanical Keyboard",
        price: 69.99,
        description: "RGB backlit mechanical keyboard with blue switches.",
        category: "electronics",
        image: "https://picsum.photos/300?random=7",
        rating: {
          rate: 4.8,
          count: 280,
        },
      },
      {
        id: 8,
        title: "Ceramic Coffee Mug",
        price: 14.99,
        description: "350ml ceramic mug suitable for hot and cold beverages.",
        category: "home",
        image: "https://picsum.photos/300?random=8",
        rating: {
          rate: 4.3,
          count: 60,
        },
      },
      {
        id: 9,
        title: "Travel Backpack",
        price: 59.99,
        description: "Water-resistant backpack with multiple storage compartments.",
        category: "bags",
        image: "https://picsum.photos/300?random=9",
        rating: {
          rate: 4.7,
          count: 185,
        },
      },
      {
        id: 10,
        title: "Polarized Sunglasses",
        price: 24.99,
        description: "UV400 polarized sunglasses for outdoor activities.",
        category: "accessories",
        image: "https://picsum.photos/300?random=10",
        rating: {
          rate: 4.5,
          count: 140,
        },
      },
    ];

    setProductsData((prevProducts) => [...prevProducts, ...newProducts]);
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Product List</h1>

      <button
        onClick={addProducts}
        className="bg-green-600 text-white px-4 py-2 rounded mb-5"
      >
        Add Products
      </button>

      <div className="flex flex-wrap gap-5">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default App;