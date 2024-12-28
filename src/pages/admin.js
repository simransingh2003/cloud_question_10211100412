export default function AdminPage() {
    const products = ['Product A', 'Product B', 'Product C'];
    const users = ['User 1', 'User 2', 'User 3'];
  
    return (
      <div className="admin-container">
        <h1>Admin Dashboard</h1>
  
        <section>
          <h2>Products List</h2>
          <ul>
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </section>
  
        <section>
          <h2>Users List</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
  