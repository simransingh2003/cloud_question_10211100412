import Image from 'next/image';

<Image
  src={`/products/${product.image}`}
  alt={product.name}
  width={500} // specify width
  height={500} // specify height
/>
import { useEffect, useState } from 'react';
import Image from 'next/image';  // Import Image component from next/image
import './product.css';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

  // Fetch products from local storage or API (simulated here with localStorage)
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="product-container">
      <h1>Available Products</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <Image
              src={`/products/${product.image}`}
              alt={product.name}
              width={500} // specify width
              height={500} // specify height
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
