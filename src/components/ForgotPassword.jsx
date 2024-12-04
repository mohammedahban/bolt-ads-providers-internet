import React from 'react';
    import { Link } from 'react-router-dom';

    const ForgotPassword = () => {
      return (
        <div className="auth-container">
          <h1>Forgot Password</h1>
          <form>
            <input type="email" placeholder="Email" required />
            <button type="submit">Reset Password</button>
          </form>
          <Link to="/login">Back to Login</Link>
        </div>
      );
    };

    export default ForgotPassword;
