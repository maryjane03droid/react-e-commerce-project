import { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import Overview from '../components/Overview';
import Reviews from '../components/Reviews';
import Specs from '../components/Specs';

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
    return <h2>Loading product details...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <img src={product.image} alt={product.title} width="200" />
      <h2>{product.title}</h2>
      <p><strong>Price:</strong> KSh {(product.price * 130).toLocaleString()}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>

      <div style={{ marginTop: '20px' }}>
        <Link to="overview">Overview</Link> |{' '}
        <Link to="reviews">Reviews</Link> |{' '}
        <Link to="specs">Specs</Link>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Routes>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="specs" element={<Specs />} />
        </Routes>
      </div>
    </div>
  );
}