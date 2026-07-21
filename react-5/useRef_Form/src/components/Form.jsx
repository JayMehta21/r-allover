import React, { useRef } from "react";
import { useState } from "react";

const Form = () => {
  // One ref for the entire form
  const formRef = useRef();
  const[products,setProducts] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;

    const product = {
      id: Date.now(),
      productName: form.productName.value,
      price: form.price.value,
      category: form.category.value,
      image: form.image.value,
    };

    console.log(product);

    // Reset all form fields
    form.reset();

    setProducts(product)
  };

  return (
    <div className="w-80 bg-white shadow-lg rounded-xl">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6"
      >
        {/* Product Name */}
        <input
          name="productName"
          type="text"
          placeholder="Product Name"
          className="p-3 border border-red-200 rounded"
          required
        />

        {/* Price */}
        <input
          name="price"
          type="number"
          placeholder="Price"
          className="p-3 border border-red-200 rounded"
          required
        />

        {/* Category */}
        <span>Select a Category:</span>

        <select
          name="category"
          className="p-3 border border-red-200 rounded"
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>

        {/* Image URL */}
        <input
          name="image"
          type="text"
          placeholder="Image URL"
          className="p-3 border border-red-200 rounded"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="p-3 bg-blue-700 text-white rounded-xl"
        >
          Create
        </button>
      </form>

      <h1>{products.productName}</h1>
      <h1>{products.price}</h1>
      <h1>{products.category}</h1>
      <h1>{products.image}</h1>
     
    </div>
  );
};

export default Form;