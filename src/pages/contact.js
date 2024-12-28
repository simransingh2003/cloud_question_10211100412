import React from 'react';
import Head from 'next/head';
import CustomLink from '../components/CustomLink';  // Import the CustomLink component
import Image from 'next/image';

import '../styles/Kripa.css';

const Contact = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kripa Pharma Limited - Contact Us</title>
      </Head>

      <header className="header">
        <div className="container">
          {/* Logo */}
          <div className="logo-container">
            <Image
              src="/images/output-onlinepngtools.png"
              alt="Kripa Pharma Limited Logo"
              className="logo"
              width={100}
              height={100}
            />
          </div>

          {/* Main Navigation Menu */}
          <nav className="navbar">
            <ul className="nav-menu">
              <li><CustomLink href="/KripaIndex"><a>Home</a></CustomLink></li>
              <li><CustomLink href="/about"><a>About Us</a></CustomLink></li>
              <li><CustomLink href="/suppliers"><a>Our Suppliers</a></CustomLink></li>
              <li><CustomLink href="/products"><a>Our Products</a></CustomLink></li>
              <li><CustomLink href="/contact"><a>Contact Us</a></CustomLink></li>
              <li><CustomLink href="/profile"><a>Profile</a></CustomLink></li>
            </ul>

            {/* Cart Icon */}
            <div className="icons8-cart-50">
              <CustomLink href="/cart">
                <a>
                  <Image
                    src="/images/icons8-cart-50.png"
                    alt="Shopping Cart Icon"
                    width={50}
                    height={50}
                  />
                </a>
              </CustomLink>
            </div>
          </nav>

          {/* Call to Action Button */}
          <CustomLink href="/order">
            <a className="cta">Place an Order</a>
          </CustomLink>
        </div>
      </header>

      {/* Contact Us Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>For inquiries, reach us at:</p>
          <div className="contact-details">
            <div className="contact-item">
              <p><strong>Office Address:</strong></p>
              <p>
                KRIPA PHARMA LTD,<br />
                P.O.BOX 15305, Accra. Ghana.<br />
                Phone: +233-26-40-00000 or +233-302-236489<br />
                Email: <a href="mailto:kripapharmagh@gmail.com">kripapharmagh@gmail.com</a>
              </p>
              <p>
                <a
                  href="https://wa.me/233264000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/whatsapp_icon.png"
                    alt="Send WhatsApp Message"
                    width={40}
                    height={40}
                  />
                </a>
              </p>
            </div>

            <div className="contact-item">
              <p><strong>Contact Person:</strong> Mr. Rishikesh Mahatma (Director)</p>
              <p>
                Phone: 0561-555000 or 0561-777000<br />
                Email: <a href="mailto:rishikeshmahatma@gmail.com">rishikeshmahatma@gmail.com</a>
              </p>
              <p>
                <a
                  href="https://wa.me/233561555000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/whatsapp_icon.png"
                    alt="Send WhatsApp Message"
                    width={40}
                    height={40}
                  />
                </a>
              </p>
            </div>

            <div className="contact-item">
              <p><strong>General Inquiries:</strong></p>
              <p>Email: <a href="mailto:kripapharmagh@gmail.com">kripapharmagh@gmail.com</a></p>
              <p>
                <a
                  href="https://wa.me/233264000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/whatsapp_icon.png"
                    alt="Send WhatsApp Message"
                    width={40}
                    height={40}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="container">
          <p>&copy; 2024 Kripa Pharma Limited. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
