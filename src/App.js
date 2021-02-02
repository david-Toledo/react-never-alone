import logo from './logo.svg';
// import './App.css';
import Home from './components/Home'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Search from './components/Search';
import Button from 'react-bootstrap/Button';
import { Link, Route, HashRouter as Router } from 'react-router-dom';

class App extends React.Component {

  render(){
    return (
      <div>

        <Router>
          <Navigation />
          <Search />
          <Route exact path="/" component={ Home } />

          <Footer />
        </Router>

      </div>
    );
  }

} // class App

export default App;
