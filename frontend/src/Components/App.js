import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Pages import
import Account from '../Pages/account'
import ActivityPage from '../Pages/activityPage'

import './App.css';
// Component imports
import Layout from './Layout';
import Courses from './Courses';
import Login from './Login';
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    // Router used to link pages on the webpage
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Login} exact={true}/>
          <Route path="/home" component={Courses} />
          <Route path="/account" component={Account} />
          <Route path="/activity" component={ActivityPage} />
        </Switch>
      </Layout>
    </Router>

  );
}

export default App;
