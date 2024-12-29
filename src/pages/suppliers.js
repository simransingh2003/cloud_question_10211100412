import '../styles/Kripa.css';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import CustomLink from '../components/CustomLink';

const suppliers = [
  { 
    id: 1, 
    name: "MYLAN LAB INTERNATIONAL", 
    range: "Female Reproductive Product Range", 
    products: ["Product A", "Product B", "Product C", "NSAIDs", "Anti-Ulcerants", "Anti-Diabetics"] 
  },
  { 
    id: 2, 
    name: "TORRENT INDIA", 
    range: "Psychotropic Range", 
    products: ["Product X", "Product Y", "Product Z", "Antispasmodics", "Vitamins and Minerals"] 
  },
  { 
    id: 3, 
    name: "KLM LABS – MUMBAI", 
    range: "Dermatological and Ophthalmology Range", 
    products: ["Skin Ointments", "Eye and Ear Preparations", "Cardio and Liver Products"] 
  },
  { 
    id: 4, 
    name: "TABLETS MEDOPHARMA – CHENNAI (TMPL)", 
    range: "Antibiotics and Amino Acid Infusion", 
    products: ["Product D", "Product E", "Product F", "Anti-Ulcerants"] 
  },
  { 
    id: 5, 
    name: "NABROS PHARMA – AHMEDABAD", 
    range: "Phospholipids Range", 
    products: ["Product P", "Product Q", "Product R", "Vitamins and Minerals"] 
  },
  { 
    id: 6, 
    name: "ASOJ LIMITED – VADODARA", 
    range: "Soft Gel Multivitamins", 
    products: ["Product G", "Product H", "Product I", "Skin Ointments"] 
  },
  { 
    id: 7, 
    name: "AXA PARENTERALS LIMITED – INDIA", 
    range: "Parenteral Solutions and Infusions", 
    products: ["Product J", "Product K", "Product L", "Eye and Ear Preparations"] 
  },
  { 
    id: 8, 
    name: "SFH INTERNATIONAL", 
    range: "Registration Agent and Distributor", 
    products: ["Service A", "Service B", "Service C", "Cardio and Liver Products"] 
  },
];

const Suppliers = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const toggleProducts = (id) => {
    setActiveProduct(activeProduct === id ? null : id);
  };

  return (
    <>
      <Head>
        <title>Our Suppliers - Kripa Pharma Limited</title>
        <meta name="description" content="Explore our trusted suppliers and their product ranges at Kripa Pharma Limited." />
      </Head>

      {/* Header Section */}
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <Image
              src="/images/output-onlinepngtools.png"
              alt="Kripa Pharma Limited Logo"
              className="logo"
              width={200}
              height={100}
            />
          </div>
          <nav className="navbar">
            <ul className="navMenu">
              <li><CustomLink href="/">Home</CustomLink></li>
              <li><CustomLink href="/about">About Us</CustomLink></li>
              <li><CustomLink href="/suppliers">Our Suppliers</CustomLink></li>
              <li><CustomLink href="/products">Our Products</CustomLink></li>
              <li><CustomLink href="/contact">Contact Us</CustomLink></li>
              <li><CustomLink href="/profile">Profile</CustomLink></li>
              <li><CustomLink href="/register">Register</CustomLink></li>
              <li><CustomLink href="/login">Login</CustomLink></li>
            </ul>
          </nav>
          <div className="cartIcon">
            <CustomLink href="/cart">
              <Image src="/images/icons8-cart-50.png" alt="Shopping Cart" width={50} height={50} />
            </CustomLink>
          </div>
          <CustomLink href="/order" className="cta">Place an Order</CustomLink>
        </div>
      </header>

      {/* Main Content */}
      <main className="mainContent">
        <section className="suppliersContainer">
          <h1>Our Suppliers</h1>
          {suppliers.map((supplier) => (
            <div key={supplier.id} className="supplierCard">
              <h2>{supplier.name}</h2>
              <p>{supplier.range}</p>
              <button className="showProductsBtn" onClick={() => toggleProducts(supplier.id)}>
                {activeProduct === supplier.id ? "Hide Products" : "View Products"}
              </button>
              {activeProduct === supplier.id && (
                <ul className="productsList">
                  {supplier.products.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Reach us at <a href="mailto:kripapharmagh@gmail.com">kripapharmagh@gmail.com</a>.</p>
        </div>
      </footer>
    </>
  );
};

export default Suppliers;
