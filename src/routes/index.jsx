import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// Layouts
import DefaultLayout from '../layouts/DefaultLayout';
// Public
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
// Protected

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        {/* Public routes */}
        <DefaultLayout>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </DefaultLayout>
        {/* Protected routes (after successful login) */}

        {/* Catch missing routes... Return a 404 error page/message */}
        {/* <Route path="/" render={() => <div>404 Error: Page not found</div>} /> */}
      </Router>
    );
  }
}
