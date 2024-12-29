import { useState } from 'react';
import Head from 'next/head'; // Import Head component from next/head
import Image from 'next/image';
import CustomLink from '../components/CustomLink';  // Import the CustomLink component
import styles from '../styles/Order.css' 



const Order = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('NSAIDs');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/order/submit-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, product, quantity, address }),
      });
      const data = await response.json();

      if (response.ok) {
        alert('Order placed successfully');
        setName('');
        setEmail('');
        setProduct('NSAIDs');
        setQuantity('');
        setAddress('');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Place an Order - Kripa Pharma Limited</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/output-onlinepngtools.png"
              alt="Kripa Pharma Limited Logo"
              className={styles.logo}
              width={200}
              height={50}
            />
          </div>
          <nav className={styles.navbar}>
            <ul className={styles.navMenu}>
              <li>
                <CustomLink href="/KripaIndex"><a>Home</a></CustomLink>
              </li>
              <li>
                <CustomLink href="/about"><a>About Us</a></CustomLink>
              </li>
              <li>
                <CustomLink href="/suppliers"><a>Our Suppliers</a></CustomLink>
              </li>
              <li className={styles.dropdown}>
                <CustomLink href="/products"><a>Our Products</a></CustomLink>
                <ul className={styles.dropdownMenu}>
                  <li><CustomLink href="/products#NSAIDs"><a>NSAIDs</a></CustomLink></li>
                  <li><CustomLink href="/products#AntiUlcerants"><a>Anti-Ulcerants</a></CustomLink></li>
                  <li><CustomLink href="/products#AntiDiabetics"><a>Anti-Diabetics</a></CustomLink></li>
                  <li><CustomLink href="/products#Antispasmodics"><a>Antispasmodics</a></CustomLink></li>
                  <li><CustomLink href="/products#VitaminsMinerals"><a>Vitamins and Minerals</a></CustomLink></li>
                  <li><CustomLink href="/products#CardioLiver"><a>Cardio and Liver Products</a></CustomLink></li>
                  <li><CustomLink href="/products#EyeEarPreparations"><a>Eye and Ear Preparations</a></CustomLink></li>
                  <li><CustomLink href="/products#SkinOintments"><a>Skin Ointments</a></CustomLink></li>
                </ul>
              </li>
              <li>
                <CustomLink href="/contact"><a>Contact Us</a></CustomLink>
              </li>
            </ul>
          </nav>
          <CustomLink href="#order-popup" className={styles.cta}>
            Place an Order
          </CustomLink>
        </div>
      </header>

      <div className={styles.mainContent}>
        <div className={styles.orderContainer}>
          <div className={styles.orderHeader}>
            <h1>Place an Order</h1>
          </div>
          <form onSubmit={handleSubmit} className={styles.orderForm}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="product">Product:</label>
            <select
              id="product"
              name="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              required
            >
              <option value="NSAIDs">NSAIDs</option>
              <option value="AntiUlcerants">Anti-Ulcerants</option>
              <option value="AntiDiabetics">Anti-Diabetics</option>
              <option value="Antispasmodics">Antispasmodics</option>
              <option value="VitaminsMinerals">Vitamins and Minerals</option>
              <option value="CardioLiver">Cardio and Liver Products</option>
              <option value="EyeEarPreparations">Eye and Ear Preparations</option>
              <option value="SkinOintments">Skin Ointments</option>
            </select>

            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />

            <label htmlFor="address">Shipping Address:</label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>

            <button type="submit">Place Order</button>
          </form>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Kripa Pharma Limited. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Order;
