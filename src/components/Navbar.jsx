import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/cart">Cart</Link> |{" "}
      <Link to="/checkout">Checkout</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
}