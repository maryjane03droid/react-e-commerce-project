import { useStore } from '../context/StoreContext';

export default function Cart() {
  const { cart, removeFromCart } = useStore();

  return (
    <div className="page-container">
      <h1>Cart Page</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}