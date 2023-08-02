import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../components/landingPage';
import Dashboard from '../components/dashboard';
import CreateAccount from '../components/createAccount';
import Login from '../components/login';
import Redirect from '../components/Redirect';

export default function AppRouter({ isAuthenticated }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/not-found" element={<Redirect />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Router>
  );
}
