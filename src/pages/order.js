import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import orderStyles from "../styles/Order.module.css";
import "../styles/global.css";

const OrderPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("NSAIDs");
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/order/submit-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, product, quantity, address }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Order placed successfully!");
        setName("");
        setEmail("");
        setProduct("NSAIDs");
        setQuantity("");
        setAddress("");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Order submission failed:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Place an Order - Kripa Pharma Limited</title>
      </Head>

      <header className={orderStyles.header}>
        <div className={orderStyles.container}>
          <div className={orderStyles.logoContainer}>
            <Image
              src="/images/output-onlinepngtools.png"
              alt="Kripa Pharma Limited Logo"
              className={orderStyles.logo}
              width={200}
              height={50}
            />
          </div>
          <nav className={orderStyles.navbar}>
            <ul className={orderStyles.navMenu}>
              <li><Link href="/KripaIndex">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/suppliers">Our Suppliers</Link></li>
              <li className={orderStyles.dropdown}>
                <Link href="/products">Our Products</Link>
                <ul className={orderStyles.dropdownMenu}>
                  <li><Link href="/products#NSAIDs">NSAIDs</Link></li>
                  <li><Link href="/products#AntiUlcerants">Anti-Ulcerants</Link></li>
                  <li><Link href="/products#AntiDiabetics">Anti-Diabetics</Link></li>
                  <li><Link href="/products#Antispasmodics">Antispasmodics</Link></li>
                  <li><Link href="/products#VitaminsMinerals">Vitamins and Minerals</Link></li>
                  <li><Link href="/products#CardioLiver">Cardio and Liver Products</Link></li>
                  <li><Link href="/products#EyeEarPreparations">Eye and Ear Preparations</Link></li>
                  <li><Link href="/products#SkinOintments">Skin Ointments</Link></li>
                </ul>
              </li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </nav>
          <Link href="#order-popup" className={orderStyles.cta}>
            Place an Order
          </Link>
        </div>
      </header>

      <main className={orderStyles.mainContent}>
        <div className={orderStyles.orderContainer}>
          <h1 className={orderStyles.orderHeader}>Place an Order</h1>
          <form onSubmit={handleSubmit} className={orderStyles.orderForm}>
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
            />

            <button type="submit">Place Order</button>
          </form>
        </div>
      </main>

      <footer className={orderStyles.footer}>
        <p>© 2024 Kripa Pharma Limited. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default OrderPage;
