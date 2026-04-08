import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-text">
          <p className="hero-tag">Modern Style. Everyday Value.</p>
          <h1>Discover Quality Products for Your Lifestyle</h1>
          <p className="hero-subtext">
            Shop fashion, electronics, jewellery, and more in one place.
            Clean design, smooth shopping, and prices shown in KSh.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="hero-btn primary-btn">
              Shop Now
            </Link>
            <Link to="/cart" className="hero-btn secondary-btn">
              View Cart
            </Link>
          </div>
        </div>

        <div className="hero-image-card">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
            alt="Shopping display"
          />
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>Wide Product Range</h3>
          <p>
            Browse multiple categories and discover items that match your taste
            and budget.
          </p>
        </div>

        <div className="feature-card">
          <h3>Every thing for everyone</h3>
          <p>
            Explore our variety of clothes and jewellery shop and enjoy good quality 
          </p>
        </div>

        <div className="feature-card">
          <h3>Fast and simple</h3>
          <p>
            Search, add to cart, and view product details through a smooth React
            shopping flow.
          </p>
        </div>
      </section>
    </div>
  );
}