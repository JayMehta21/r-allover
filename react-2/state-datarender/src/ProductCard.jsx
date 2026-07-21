const ProductCard = ({ product, deleteProduct }) => {
  return (
    <div className="border p-4 rounded mb-4">
      <img src={product.image} alt={product.title} width={150} />

      <h2>{product.title}</h2>
      <p>${product.price}</p>

      <button
        onClick={() => deleteProduct(product.id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default ProductCard;