import { useStore } from '../context/StoreContext';

export default function Cart() {
  const { cart, removeFromCart } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price * 130, 0);

  return (
    <div className="page-container">
      <h1>Cart Page</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <h3>{item.title}</h3>
              <p>KSh {(item.price * 130).toLocaleString()}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}

          <div className="cart-item">
            <h2>Total: KSh {total.toLocaleString()}</h2>
          </div>
        </>
      )}
    </div>
  );
}