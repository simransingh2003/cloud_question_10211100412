import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Using Next.js Image component
import CustomLink from '../components/CustomLink'; // Adjust path as needed
import '../styles/products.css';

// Define initial products
const initialProducts = [
    {
        name: 'Product 1',
        image: 'image1.png',
        description: 'Description of Product 1',
        supplier: 'Supplier 1',
        price: 10.00
    },
    {
        name: 'Product 2',
        image: 'image2.jpg',
        description: 'Description of Product 2',
        supplier: 'Supplier 2',
        price: 20.00
    }
    // Add more products as needed
];

// Product Component
const Product = ({ name, image, description, supplier, price, index }) => {
    return (
        <div className="product-card">
            <Image
                src={`/products/${image}`}
                alt={name}
                width={300}
                height={200}
                className="product-image"
            />
            <h2>{name}</h2>
            <p>{description}</p>
            <p><strong>Supplier:</strong> {supplier}</p>
            <p><strong>Price:</strong> ${price}</p>
            <CustomLink href={`/product/${index}`} className="details-link">
                View Details
            </CustomLink>
        </div>
    );
};

// Products Component
const Products = () => {
    const [products, setProducts] = useState([]);

    // Fetch products from local storage or API
    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem('products')) || initialProducts;
        setProducts(savedProducts);
    }, []);

    return (
        <div className="product-container">
            <h1>Available Products</h1>
            <div className="product-grid">
                {products.map((product, index) => (
                    <Product key={index} index={index} {...product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
