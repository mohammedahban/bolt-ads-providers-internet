import React from 'react';
    import { useNavigate, Link } from 'react-router-dom';

    const Login = () => {
      const navigate = useNavigate();

      const handleLogin = (e) => {
        e.preventDefault();
        const role = e.target.role.value;
        localStorage.setItem('role', role);
        navigate(`/${role}-dashboard`);
      };

      return (
        <div className="auth-container">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <select name="role" required>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="business-owner">Business Owner</option>
              <option value="internet-provider">Internet Provider</option>
              <option value="customer">Customer</option>
            </select>
            <button type="submit">Login</button>
          </form>
          <Link to="/signup">Sign Up</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      );
    };

    export default Login;
