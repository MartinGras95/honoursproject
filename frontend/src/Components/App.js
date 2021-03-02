import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import axios from 'axios';

// Pages import
import Account from '../Pages/account'
import Activity from '../Pages/Activity'
import Dashboard from '../Pages/dashboard'

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
      isStaff: false,
      user:{}
    }
    // binding functions
    this.changeUserToStudent = this.changeUserToStudent.bind(this);
    this.changeUserToStaff = this.changeUserToStaff.bind(this);
  }

  // Functions to switch from student to staff and vice versa
  changeUserToStudent (){
    this.setState({isStaff:false})

    // Also update the logged in user in the state
    axios.get(`http://localhost:4000/user/false`)
    .then((Response) => {
      this.setState({user: Response.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // Change to staff member
  changeUserToStaff (){
    this.setState({isStaff:true})

    // Also update the logged in user in the state
    axios.get(`http://localhost:4000/user/true`)
    .then((Response) => {
      this.setState({user: Response.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  // run after render
  componentDidMount() {

    // url to activities and tasks
    const url = 'http://localhost:4000/activities';
    const url2 = 'http://localhost:4000/tasks';



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
        <Layout isStaff={this.state.isStaff} >
          <Switch>
            <Route path="/" exact={true} render={() => <Login changeUserToStudent={this.changeUserToStudent} changeUserToStaff={this.changeUserToStaff}  />}/>
            <Route path="/home" render={() => <Courses activities={this.state.activities} tasks={this.state.tasks} user={this.state.user} />} />
            <Route path="/account" render={() => <Account user={this.state.user} />} />
            <Route path="/activity" component={Activity} user={this.state.user} />
            <Route path="/dashboard" component={Dashboard} user={this.state.user} />
            </Switch>
        </Layout>
      </Router>
    );
  }
}
export default App;
