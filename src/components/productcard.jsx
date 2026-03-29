export default function ProductCard({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.title} width="120" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
       <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}