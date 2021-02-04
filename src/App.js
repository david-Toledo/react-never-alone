// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import axios from 'axios';
import { Link, Route, HashRouter as Router } from 'react-router-dom';
import Login from './components/Login'
import MyProfile from './components/MyProfile'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// import Search from './components/Search';
import Button from 'react-bootstrap/Button';
import Posts from './components/Posts';
import ShowPost from './components/ShowPost';


const BASE_URL = 'http://localhost:3000'

class App extends React.Component {

  //App state
  state = {
    currentUser: undefined
  }

  //function to run on component mounting
  componentDidMount(){
    this.setCurrentUser();
  }

  //function to set the state to the current logged in user
  // setCurrentUser = () => {
  //   let token = "Bearer " + localStorage.getItem("jwt");
  //   axios.get(`${BASE_URL}/users/current`, {
  //     headers: {
  //       'Authorization': token
  //     }
  //   })
  //   .then(res => {
  //     this.setState({currentUser: res.data})
  //   })
  //   .catch(err => console.warn(err))
  // }

  // Luke's version
  setCurrentUser = () => {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios.defaults.headers.common['Authorization'] = token;
    axios.get(`${BASE_URL}/users/current`)
    .then(res => {
      this.setState({currentUser: res.data})
    })
    .catch(err => console.warn(err))
  }



  //function to log the user out.
  handleLogout = () => {
    this.setState({currentUser: undefined})
    localStorage.removeItem("jwt");
    axios.defaults.headers.common['Authorization'] = undefined;
  }

  render(){
    return (
      <div>

        <Router>


          <Route render={(props) => <Navigation user={this.state.currentUser} handleLogout={this.handleLogout} {...props} />} />

          <div className="container">

          <Route exact path='/my_profile'
          render={(props) => <MyProfile user={this.state.currentUser} {...props} />}
          />
          <Route
            exact path='/login'
            render={(props) => <Login setCurrentUser={this.setCurrentUser} {...props}/>}
            />

          <Route exact path="/" component={ Home } />

          <Route exact path="/Posts"
            render={(props) => <Posts user={this.state.currentUser}
            {...props} />}
             />

           <Route exact path="/showpost/:id"
             render={(props) => <ShowPost user={this.state.currentUser}
             {...props} />}
              />

          </div>


          <Footer />
        </Router>

      </div>
    );
  }

} // class App

export default App;


// <header>
//   <nav>
//     {/* Show one of two nav bars depending on if the user is logged in */}
//
//   </nav>
//   <hr/>
// </header>
