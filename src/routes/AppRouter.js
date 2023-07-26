import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from '../components/landingPage';
import Dashboard from '../components/dashboard';
import CreateAccount from '../components/createAccount';
import Login from '../components/login';

export default function AppRouter({ isAuthenticated }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={CreateAccount} />
        <Route exact path="/signin" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} />
        {/* <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" /> */}
      </Switch>
    </Router>
  );
}

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);