import React from 'react';
// import axios from 'axios';
import Button from 'react-bootstrap/Button'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
// const BASE_URL = 'http://localhost:3000'

class MyProfile extends React.Component{

  //not neccessary
  // state = {
  //   currentUser: {
  //     name: '',
  //     email: '',
  //     about:'',
  //     user_type:''
  //   }
  // }
  //
  // componentDidMount(){
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
  //not neccessary






  render(){
    console.log("user", this.props);
    if(this.props.user===undefined){
      return <p>loading data...</p>
    }

    return(


      <div className="profile">
        <h1>Hello, {this.props.user.name}</h1>
        <h4>Your email is: </h4>
        <h6>{this.props.user.email}</h6>
        <h4>About you: </h4>
        <h6>{this.props.user.about}</h6>
        <h4>Type of User: </h4>
        <h6>{this.props.user.user_type}</h6>



        <br />
        <Button variant="primary" href="#/posts">See latests posts!</Button>

      </div>
    );
  }//render

}//class MyProfile


export default MyProfile
// {this.props.user.image}
