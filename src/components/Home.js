import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



class Home extends React.Component {




  render(){
    return(
      <div className="home">

        <div className="home_words">
          <h5> You are not alone.</h5>
          <br />
           <h4> We're all in this together...</h4>
        </div>

        <div className="home_image">
          <img id="na" src="../na-logo.png" />

        </div>

      </div>
    )
  }



} //class



export default Home;
