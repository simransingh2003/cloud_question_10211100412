import Head from 'next/head';
import CustomLink from '../components/CustomLink';  // Import CustomLink component
import Image from 'next/image'; // Import Image component for optimized images

import '../styles/about.css' // Ensure the CSS path is correct

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us - Kripa Pharma Limited</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header Section */}
      <header className="header">
        <div className="container">
          {/* Logo */}
          <div className="logo-container">
            <Image
              src="/images/output-onlinepngtools.png"
              alt="Kripa Pharma Limited Logo"
              className="logo"
              width={200} // Define appropriate width
              height={100} // Define appropriate height
            />
          </div>

          {/* Main Navigation Menu */}
          <nav className="navbar">
            <ul className="nav-menu">
              <li><CustomLink href="/"><a>Home</a></CustomLink></li>
              <li><CustomLink href="/about"><a>About Us</a></CustomLink></li>
              <li><CustomLink href="/suppliers"><a>Our Suppliers</a></CustomLink></li>
              <li><CustomLink href="/products"><a>Our Products</a></CustomLink></li>
              <li><CustomLink href="/contact"><a>Contact Us</a></CustomLink></li>
              <li><CustomLink href="/profile"><a>Profile</a></CustomLink></li>
              <li><CustomLink href="http://localhost:27017/index"><a>Login</a></CustomLink></li>
            </ul>

            {/* Cart Icon */}
            <div className="icons8-cart-50">
              <CustomLink href="/cart">
                <a>
                  <Image
                    src="/images/icons8-cart-50.png"
                    alt="Shopping Cart Icon"
                    width={50} // Define appropriate width
                    height={50} // Define appropriate height
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

      {/* About Us Section */}
      <section id="about-us" className="about-us">
        <div className="about-us-container">
          <div className="about-us-text">
            <h2>About Us</h2>
            <p><strong>Established in 1998</strong>, Kripa Pharma Limited is a leader in pharmaceutical solutions. We ensure <strong>high-quality and affordable products</strong>.</p>
            <p>We collaborate with <strong>renowned suppliers</strong> and local manufacturers to offer a wide range of products across various therapeutic segments.</p>
            <CustomLink href="#more-about-us">
              <a className="learn-more-btn">Learn More About Us</a>
            </CustomLink>
          </div>

          <div className="about-us-image">
            <Image
              src="/images/aboutus.jpg"
              alt="Kripa Pharma Limited"
              width={500} // Define appropriate width
              height={300} // Define appropriate height
            />
          </div>
        </div>
      </section>

      {/* Link to external JavaScript file (if needed) */}
      <script src="/assets/js/Kripa.js" defer></script> {/* Corrected path */}
    </div>
  );
}
