import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load product details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 className="page-container">Loading product details...</h2>;
  }

  if (error) {
    return <h2 className="page-container">{error}</h2>;
  }

  return (
    <div className="page-container">
      <div className="details-card">
        <h1>Product Details</h1>
        <img src={product.image} alt={product.title} width="200" />
        <h2>{product.title}</h2>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}