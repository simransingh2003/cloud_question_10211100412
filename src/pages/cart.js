import Head from 'next/head';
import CustomLink from '../components/CustomLink';  // Import the CustomLink component
import Image from 'next/image'; // Import Image component for optimized images
import { useState, useEffect } from 'react';  // Import useState and useEffect from React
import Link from 'next/link'; // Import Link for navigation
import '../styles/Kripa.css';  // Make sure this is the correct path for your CSS file

export default function Cart() {
  // Cart state
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    // Fetch cart data from localStorage or API (example uses localStorage)
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
    calculateTotal(savedCartItems);
  }, []);

  // Calculate total price
  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setCartTotal(total.toFixed(2)); // Formatting the total to two decimal places
  };

  // Proceed to checkout (simulated)
  const handleCheckout = () => {
    alert('Proceeding to Checkout!');
  };

  return (
    <div>
      <Head>
        <title>Your Cart - Kripa Pharma Limited</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar */}
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <Image src="/images/output-onlinepngtools.png" alt="Kripa Pharma Limited Logo" className="logo" width={50} height={50} />
          </div>
          <nav className="navbar">
            <ul className="nav-menu">
              <li><CustomLink href="/"><a>Home</a></CustomLink></li>
              <li><CustomLink href="/about"><a>About Us</a></CustomLink></li>
              <li><CustomLink href="/suppliers"><a>Our Suppliers</a></CustomLink></li>
              <li><CustomLink href="/products"><a>Our Products</a></CustomLink></li>
              <li><CustomLink href="/contact"><a>Contact Us</a></CustomLink></li>
              <li><CustomLink href="/profile"><a>Profile</a></CustomLink></li>
            </ul>
          </nav>
          <div className="icons8-cart-50">
            <Link href="/cart">
              <a>
                <Image src="/images/icons8-cart-50.png" alt="Shopping Cart Icon" width={50} height={50} />
              </a>
            </Link>
          </div>
          <Link href="/order">
            <a className="cta">Place an Order</a>
          </Link>
        </div>
      </header>

      {/* Cart Section */}
      <main className="cart-container">
        <div className="cart-header">
          <h1>Your Cart</h1>
        </div>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <Image src={item.image} alt={item.name} width={100} height={100} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}

        {/* Cart Total */}
        <div className="cart-total">
          Total: ${cartTotal}
        </div>

        {/* Checkout Button */}
        <div className="cart-checkout">
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      </main>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Kripa Pharma Limited. All Rights Reserved</p>
      </footer>

      {/* Link to external JavaScript file (if needed) */}
      <script src="/assets/js/Kripa.js" defer></script> {/* Ensure correct path if this script is needed */}
    </div>
  );
}
