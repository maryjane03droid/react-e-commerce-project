import { Link } from 'react-router-dom';

export default function ProductCard({ product, addToCart }) {
  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} width="120" />
        <h3>{product.title}</h3>
      </Link>

      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}