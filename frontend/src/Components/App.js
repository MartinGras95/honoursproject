import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';

// Pages import
import Account from '../Pages/account'
import ActivityPage from '../Pages/activityPage'

// import './App.css';
// Component imports
import Layout from './Layout';
import Courses from './Courses';
import Login from './Login';

class App extends React.Component {

  constructor(props){
    // Assigning props to constructor which can be used in the class
    super(props);
    // State to hold data from db
    this.state = {
      activities: [],
    }
  }

  componentDidMount() {
    // url to activities list
    const url = 'http://localhost:4000/activities';

    // call api and set activities in the state to the response data
    axios.get(url)
      .then((Response) => {
        this.setState({
          activities: Response.data
        })
      })
      .catch((error)=>{
        console.log(error);
      })
  };

  render () {
    return (
      // Router used to link pages on the webpage
      <Router>
        <Layout>
          <Switch>
            <Route path="/" component={Login} exact={true}/>
            <Route path="/home" render={() => <Courses activities={this.state.activities} />} />
            <Route path="/account" component={Account} />
            <Route path="/activity" component={ActivityPage} />
          </Switch>
        </Layout>
      </Router>

    );
  }
}

export default App;
