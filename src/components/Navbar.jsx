import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function Navbar() {
  const { cart } = useStore();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}