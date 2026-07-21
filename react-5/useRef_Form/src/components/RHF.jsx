import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="w-80 bg-white shadow-lg rounded-xl">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex flex-col gap-4 p-6"
      >
        {/* Product Name */}
        <input
          {...register("productName")}
          type="text"
          placeholder="Product Name"
          className="p-3 border border-red-200 rounded"
        />

        {/* Price */}
        <input
          {...register("price")}
          type="number"
          placeholder="Price"
          className="p-3 border border-red-200 rounded"
        />

        {/* Category */}
        <span>Select a Category:</span>

        <select
          {...register("category")}
          className="p-3 border border-red-200 rounded"
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>

        {/* Image URL */}
        <input
          {...register("image")}
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
    </div>
  );
};

export default RHF;