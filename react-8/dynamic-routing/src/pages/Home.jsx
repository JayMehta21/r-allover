import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MyStore } from "../context/MyContext";
import ProductsCard from "../components/ProductsCard";

const Home = () => {
  const { productsData, setproductsData } = useContext(MyStore);

  const getProductsData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setproductsData(res.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      <h1>Home</h1>

      <div className="grid grid-cols-4 gap-5 p-5">
        {productsData.map((product) => (
          <ProductsCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;