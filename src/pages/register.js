export default function Register() {
    const handleRegister = (e) => {
      e.preventDefault();
      alert('Registration submitted!');
    };
  
    return (
      <div className="form-container">
        <form className="form" onSubmit={handleRegister}>
          <h2>Register</h2>
  
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" placeholder="Enter your full name" required />
  
          <label htmlFor="dropdown">Who are you shopping for?</label>
          <select id="dropdown" required>
            <option value="" hidden>
              Select an option
            </option>
            <option value="organization">Organization</option>
            <option value="supplier">Supplier</option>
            <option value="retailer">Retailer</option>
            <option value="individual">Individual</option>
          </select>
  
          <label htmlFor="shop-name">Name of Organization/Supplier/Retailer/Individual</label>
          <input type="text" id="shop-name" placeholder="Enter name" required />
  
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
  
          <label htmlFor="password">Create Password</label>
          <input type="password" id="password" placeholder="Enter password" required />
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  