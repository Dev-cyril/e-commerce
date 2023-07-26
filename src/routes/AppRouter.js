import React from 'react'
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
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={CreateAccount} />
        <Route exact path="/signin" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} />
        <Route path="/not-found" component={Redirect} />
        <Navigate to="/not-found" />
      </Routes>
    </Router>
  );
}

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Navigate to="/" />
    }
  />
);