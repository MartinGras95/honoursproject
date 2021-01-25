import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Pages import
import Account from '../Pages/account'
import ActivityPage from '../Pages/activityPage'

import './App.css';
// Component imports
import Layout from './Layout';
import Courses from './Courses';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Courses} exact="true"/>
          <Route path="/account" component={Account} />
          <Route path="/activity" component={ActivityPage} />
        </Switch>
      </Layout>
    </Router>

  );
}

export default App;
