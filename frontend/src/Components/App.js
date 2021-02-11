import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';

// Pages import
import Account from '../Pages/account'
import Activity from '../Pages/Activity'

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
      tasks: [],
    }
  }
  
  // run after render
  componentDidMount() {
    // url to activities list
    const url = 'http://localhost:4000/activities';
    const url2 = 'http://localhost:4000/tasks/jsbact01'

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

    // call api and set tasks in the state to the response data
    axios.get(url2)
    .then((Response) => {
      this.setState({
        tasks: Response.data
      })
    })
    .catch((error)=>{
      console.log(error);
    })
  };
  



  render () {
    return (
      // Router used to link pages on the webpage
      // Sending activities to courses component to display all activities
      // Sending tasks to courses component to pass them onto each activity
      <Router>
        <Layout>
          <Switch>
            <Route path="/" component={Login} exact={true}/>
            <Route path="/home" render={() => <Courses activities={this.state.activities} tasks={this.state.tasks} />} />
            <Route path="/account" component={Account} />
            <Route path="/activity" component={Activity} />
          </Switch>
        </Layout>
      </Router>

    );
  }
}
//tasks={this.state.tasks}
export default App;
