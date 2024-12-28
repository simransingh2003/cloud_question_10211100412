import Head from 'next/head';
import CustomLink from '../components/CustomLink'; // Import the CustomLink component
import Image from 'next/image'; // Import Image component for optimized images
import '../styles/Kripa.css'; // Import CSS file

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kripa Pharma Limited</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header Section */}
      <header className="header">
        <div className="container">
          {/* Logo */}
          <div className="logo-container">
            <Image
              src="/images/output-onlinepngtools.png" // Image is inside public/images
              alt="Kripa Pharma Limited Logo"
              className="logo"
              width={200} // Define appropriate width
              height={100} // Define appropriate height
            />
          </div>

          {/* Main Navigation Menu */}
          <nav className="navbar">
            <ul className="nav-menu">
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

          {/* Cart Icon */}
          <div className="icons8-cart-50">
            <CustomLink href="/cart">
              <Image
                src="/images/icons8-cart-50.png" // Image is inside public/images
                alt="Shopping Cart Icon"
                width={50} // Define width
                height={50} // Define height
              />
            </CustomLink>
          </div>

          {/* Call to Action Button */}
          <div className="cta-container">
            <CustomLink href="/order">
              <span className="cta">Place an Order</span>
            </CustomLink>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>KRIPA PHARMA LIMITED</h1>
          <h2>Delivering Quality Pharmaceuticals Since 1998</h2>
          <p>Local Manufacturing, Global Standards</p>
          <div className="hero-buttons">
            <CustomLink href="#products" className="btn-primary">Explore Our Products</CustomLink>
            <CustomLink href="#contact" className="btn-secondary">Get in Touch</CustomLink>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="about-us">
        <div className="about-us-container">
          <div className="about-us-text">
            <h2>About Us</h2>
            <p>
              <strong>Established in 1998</strong>, Kripa Pharma Limited is a leader in pharmaceutical solutions. 
              We ensure <strong>high-quality and affordable products</strong>.
            </p>
            <p>
              We collaborate with <strong>renowned suppliers</strong> and local manufacturers to offer a wide range 
              of products across various therapeutic segments.
            </p>
            <CustomLink href="#more-about-us" className="learn-more-btn">Learn More About Us</CustomLink>
          </div>
          <div className="about-us-image">
            <Image
              src="/images/aboutus.jpg" // Image is inside public/images
              alt="Kripa Pharma Limited"
              width={500} // Define width
              height={300} // Define height
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <h2>Product Categories</h2>
          <p>We provide a diverse range of pharmaceutical products:</p>
          <div className="product-categories">
            <div className="product-item">NSAIDs</div>
            <div className="product-item">Anti-Ulcerants</div>
            <div className="product-item">Anti-Diabetics</div>
            <div className="product-item">Antispasmodics</div>
            <div className="product-item">Vitamins and Minerals</div>
            <div className="product-item">Cardio and Liver Products</div>
            <div className="product-item">Eye and Ear Preparations</div>
            <div className="product-item">Skin Ointments</div>
          </div>
        </div>
      </section>

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
                P.O.BOX 15305, Accra, Ghana.<br />
                Phone: +233-26-40-00000 or +233-302-236489<br />
                Email: <a href="mailto:kripapharmagh@gmail.com">kripapharmagh@gmail.com</a>
              </p>
              <a href="https://wa.me/233264000000" target="_blank">
                <Image
                  src="/images/whatsapp_icon.png"
                  alt="Send WhatsApp Message"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
