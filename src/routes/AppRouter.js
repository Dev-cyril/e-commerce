import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/landingPage';
import Dashboard from '../pages/dashboard';
import CreateAccount from '../pages/createAccount';
import Login from '../pages/login';
import Redirect from '../pages/Redirect';

export const UserInfoContext = createContext();

export default function AppRouter() {
  const [userInfo, setUserInfo] = useState({})
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <UserInfoContext.Provider value={{userInfo, setUserInfo, activeIndex, setActiveIndex}}>
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
    </UserInfoContext.Provider>
  );
}
