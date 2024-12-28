import styles from '../styles/kripa.css';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import CustomLink from '../components/CustomLink';  // Import CustomLink component


const suppliers = [
  { id: 1, name: "MYLAN LAB INTERNATIONAL", range: "Female Reproductive Product Range", products: ["Product A", "Product B", "Product C"] },
  { id: 2, name: "TORRENT INDIA", range: "Psychotropic Range", products: ["Product X", "Product Y", "Product Z"] },
  { id: 3, name: "KLM LABS – MUMBAI", range: "Dermatological and Ophthalmology Range", products: ["Product M", "Product N", "Product O"] },
  { id: 4, name: "TABLETS MEDOPHARMA – CHENNAI (TMPL)", range: "Antibiotics and Amino Acid Infusion", products: ["Product D", "Product E", "Product F"] },
  { id: 5, name: "NABROS PHARMA – AHMEDABAD", range: "Phospholipids Range", products: ["Product P", "Product Q", "Product R"] },
  { id: 6, name: "ASOJ LIMITED – VADODARA", range: "Soft Gel Multivitamins", products: ["Product G", "Product H", "Product I"] },
  { id: 7, name: "AXA PARENTERALS LIMITED – INDIA", range: "Parenteral Solutions and Infusions", products: ["Product J", "Product K", "Product L"] },
  { id: 8, name: "SFH INTERNATIONAL", range: "Registration Agent and Distributor", products: ["Service A", "Service B", "Service C"] },
];

const Suppliers = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const toggleProducts = (id) => {
    setActiveProduct(activeProduct === id ? null : id);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Suppliers</title>
      </Head>

      {/* Navbar */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Image src="/images/output-onlinepngtools.png" alt="Kripa Pharma Limited Logo" width={100} height={100} />
          </div>
          <nav className={styles.navbar}>
            <ul className={styles.navMenu}>
              <li><CustomLink href="/home"><a>Home</a></CustomLink></li>
              <li><CustomLink href="/about"><a>About Us</a></CustomLink></li>
              <li><CustomLink href="/suppliers"><a>Our Suppliers</a></CustomLink></li>
              <li><CustomLink href="/products"><a>Our Products</a></CustomLink></li>
              <li><CustomLink href="/contact"><a>Contact Us</a></CustomLink></li>
              <li><CustomLink href="/profile"><a>Profile</a></CustomLink></li>
            </ul>
          </nav>
          <div className={styles.cartIcon}>
            <CustomLink href="/cart">
              <Image src="/images/icons8-cart-50.png" alt="Shopping Cart Icon" width={50} height={50} />
            </CustomLink>
          </div>
          <CustomLink href="/order" className={styles.cta}>Place an Order</CustomLink>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section className={styles.suppliersContainer}>
          {suppliers.map(supplier => (
            <div key={supplier.id} className={styles.supplierCard}>
              <div className={styles.supplierInfo}>
                <h2>{supplier.name}</h2>
                <p>{supplier.range}</p>
                <button className={styles.showProductsBtn} onClick={() => toggleProducts(supplier.id)}>
                  View Products
                </button>
              </div>
              {activeProduct === supplier.id && (
                <div className={styles.productsList}>
                  <ul>
                    {supplier.products.map((product, index) => (
                      <li key={index}>{product}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </section>
      </main>

      {/* Footer (Contact Us Section) */}
      <section className={styles.contact}>
        <div className={styles.container}>
          <h2>Contact Us</h2>
          <p>For inquiries, reach us at:</p>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <p><strong>Office Address:</strong></p>
              <p>KRIPA PHARMA LTD,<br /> P.O.BOX 15305, Accra. Ghana.<br />
                Phone: +233-26-40-00000 or +233-302-236489<br />
                Email: <a href="mailto:kripapharmagh@gmail.com">kripapharmagh@gmail.com</a>
              </p>
              <p>
                <CustomLink href="https://wa.me/233264000000" target="_blank">
                  <Image src="/images/whatsapp_icon.png" alt="Send WhatsApp Message" width={30} height={30} />
                </CustomLink>
              </p>
            </div>
            <div className={styles.contactItem}>
              <p><strong>Contact Person:</strong> Mr. Rishikesh Mahatma (Director)</p>
              <p>Phone: 0561-555000 or 0561-777000<br />
                Email: <a href="mailto:rishikeshmahatma@gmail.com">rishikeshmahatma@gmail.com</a>
              </p>
              <p>
                <CustomLink href="https://wa.me/233561555000" target="_blank">
                  <Image src="/images/whatsapp_icon.png" alt="Send WhatsApp Message" width={30} height={30} />
                </CustomLink>
              </p>
            </div>
            <div className={styles.contactItem}>
              <p><strong>General Inquiries:</strong></p>
              <p>Email: <a href="mailto:kripapharmagh@gmail.com">kripapharmagh@gmail.com</a></p>
              <p>
                <CustomLink href="https://wa.me/233264000000" target="_blank">
                  <Image src="/images/whatsapp_icon.png" alt="Send WhatsApp Message" width={30} height={30} />
                </CustomLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Suppliers;
