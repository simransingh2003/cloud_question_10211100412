import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/Kripa.css';
import { useSession, signIn, signOut } from "next-auth/react"; // Import NextAuth functions

export default function Home() {
  const { data: session } = useSession(); // Get session data

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
              src="/images/output-onlinepngtools.png"
              alt="Kripa Pharma Limited Logo"
              className="logo"
              width={200}
              height={100}
            />
          </div>
          {/* Main Navigation Menu */}
          <nav className="navbar">
            <ul className="nav-menu">
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/about"><a>About Us</a></Link></li>
              <li><Link href="/suppliers"><a>Our Suppliers</a></Link></li>
              <li><Link href="/products"><a>Our Products</a></Link></li>
              <li><Link href="/contact"><a>Contact Us</a></Link></li>
              <li><Link href="/profile"><a>Profile</a></Link></li>
            </ul>

            {/* Authentication Button */}
            <div className="auth-button">
              {!session ? (
                <button className="login-btn" onClick={() => signIn('google')}>Login</button>
              ) : (
                <div className="user-info">
                  <span>Welcome, {session.user.name}</span>
                  <button className="logout-btn" onClick={() => signOut()}>Logout</button>
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <div className="icons8-cart-50">
              <Link href="/cart">
                <a>
                  <Image
                    src="/images/icons8-cart-50.png"
                    alt="Shopping Cart Icon"
                    width={50}
                    height={50}
                  />
                </a>
              </Link>
            </div>
          </nav>

          {/* Call to Action Button */}
          <Link href="/order">
            <a className="cta">Place an Order</a>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>KRIPA PHARMA LIMITED</h1>
          <h1>Delivering Quality Pharmaceuticals Since 1998</h1>
          <p>Local Manufacturing, Global Standards</p>
          <div className="hero-buttons">
            <a href="#products" className="btn-primary">Explore Our Products</a>
            <a href="#contact" className="btn-secondary">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}
