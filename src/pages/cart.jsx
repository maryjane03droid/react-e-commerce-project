import { useStore } from '../context/StoreContext';

export default function Cart() {
  const { cart } = useStore();

  return (
    <div>
      <h1>Cart Page</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}