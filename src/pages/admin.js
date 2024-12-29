import { useState, useEffect } from 'react';
import CustomLink from '../components/CustomLink';
import '../styles/admin.css';

export default function AdminPage() {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        description: '',
        supplier: '',
        image: ''
    });
    const [products, setProducts] = useState([]);

    // Fetch products from localStorage on client side
    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(savedProducts);
    }, []);

    // Handle adding a new product
    const addProduct = () => {
        if (newProduct.name.trim()) {
            const updatedProducts = [...products, newProduct];
            setProducts(updatedProducts);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
            setNewProduct({ name: '', price: '', description: '', supplier: '', image: '' });
        }
    };

    // Handle deleting a product
    const deleteProduct = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    // Handle editing a product
    const editProduct = (index) => {
        const productToEdit = products[index];
        setNewProduct(productToEdit);
        deleteProduct(index);
    };

    return (
        <div className="admin-container">
            <h1>Admin Dashboard</h1>

            <section>
                <h2>Manage Products</h2>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <textarea
                    placeholder="Description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Supplier Name"
                    value={newProduct.supplier}
                    onChange={(e) => setNewProduct({ ...newProduct, supplier: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Image Filename (e.g., product.jpg)"
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                />
                <button className="btn" onClick={addProduct}>Add Product</button>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>
                                    <button className="btn" onClick={() => editProduct(index)}>Edit</button>
                                    <button className="btn delete-btn" onClick={() => deleteProduct(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <CustomLink href="/products" className="link-btn">
                View Products
            </CustomLink>
        </div>
    );
}
