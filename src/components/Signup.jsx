import React from 'react';
    import { useNavigate, Link } from 'react-router-dom';

    const Signup = () => {
      const navigate = useNavigate();

      const handleSignup = (e) => {
        e.preventDefault();
        const role = e.target.role.value;
        localStorage.setItem('role', role);
        navigate(`/${role}-dashboard`);
      };

      return (
        <div className="auth-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <select name="role" required>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="business-owner">Business Owner</option>
              <option value="internet-provider">Internet Provider</option>
              <option value="customer">Customer</option>
            </select>
            <button type="submit">Sign Up</button>
          </form>
          <Link to="/login">Already have an account? Login</Link>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      );
    };

    export default Signup;
