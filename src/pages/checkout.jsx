import { useState } from 'react';
import { useStore } from '../context/StoreContext';

export default function Checkout() {
  const { cart } = useStore();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [message, setMessage] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price * 130, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      setMessage('Please fill in all checkout fields.');
      return;
    }

    if (cart.length === 0) {
      setMessage('Your cart is empty.');
      return;
    }

    setMessage(`Order placed successfully for ${formData.fullName}.`);
  };

  return (
    <div className="page-container">
      <h1>Checkout Page</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. Add products before checkout.</p>
      ) : (
        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Billing Details</h2>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
            />

            <button type="submit">Place Order</button>

            {message && <p className="checkout-message">{message}</p>}
          </form>

          <div className="checkout-summary">
            <h2>Order Summary</h2>

            {cart.map((item, index) => (
              <div key={index} className="summary-item">
                <p>{item.title}</p>
                <p>KSh {(item.price * 130).toLocaleString()}</p>
              </div>
            ))}

            <hr />

            <h3>Total: KSh {total.toLocaleString()}</h3>
          </div>
        </div>
      )}
    </div>
  );
}