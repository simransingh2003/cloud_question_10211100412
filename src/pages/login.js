import { useState } from 'react';
import { useRouter } from 'next/router';
import  '../styles/login_register.css'; 

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminMode, setIsAdminMode] = useState(false);

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (isAdminMode) {
      if (adminPassword === 'admin@pharma2024') {
        router.push('/admin');
      } else {
        alert('Invalid admin password!');
      }
    } else {
      // Handle normal user login logic
      alert(`Logged in as user: ${username}`);
      router.push('/');
    }
  };

  return (

    
    <div className="form-container">
      <form className="form" onSubmit={handleLogin}>
        <h2>{isAdminMode ? 'Admin Login' : 'User Login'}</h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {isAdminMode && (
          <>
            <label htmlFor="adminPassword">Admin Password</label>
            <input
              type="password"
              id="adminPassword"
              placeholder="Enter admin password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              required
            />
          </>
        )}

        <button type="submit">Log In</button>
        <p
          onClick={() => setIsAdminMode(!isAdminMode)}
          style={{ marginTop: '15px', color: 'blue', cursor: 'pointer' }}
        >
          {isAdminMode ? 'Log in as User' : 'Log in as Admin'}
        </p>
      </form>
    </div>
  );
}
