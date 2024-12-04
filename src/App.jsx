import React, { useEffect } from 'react';
    import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
    import AdminDashboard from './components/AdminDashboard';
    import BusinessOwnerDashboard from './components/BusinessOwnerDashboard';
    import InternetProviderDashboard from './components/InternetProviderDashboard';
    import CustomerDashboard from './components/CustomerDashboard';
    import Login from './components/Login';
    import Signup from './components/Signup';
    import ForgotPassword from './components/ForgotPassword';

    const App = () => {
      const navigate = useNavigate();

      useEffect(() => {
        const role = localStorage.getItem('role');
        if (role) {
          navigate(`/${role}-dashboard`);
        } else {
          navigate('/login');
        }
      }, [navigate]);

      return (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/business-owner-dashboard" element={<BusinessOwnerDashboard />} />
          <Route path="/internet-provider-dashboard" element={<InternetProviderDashboard />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      );
    };

    export default App;
