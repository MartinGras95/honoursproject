import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Pages import
import Account from '../Pages/account'
import Activity1 from '../Pages/activity1Page'
import Activity2 from '../Pages/activity2Page'

import './App.css';
// Component imports
import Layout from './Layout';
import Courses from './Courses';
import Jumbo from './Jumbo';



function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Jumbo,Courses} exact="true"/>
          <Route path="/account" component={Account} />
          <Route path="/activity1" component={Activity1} />
          <Route path="/activity2" component={Activity2} />
        </Switch>
      </Layout>
    </Router>

  );
}

export default App;
