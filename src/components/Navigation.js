import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl';
// import axios from 'axios';
// import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";


const Navigation = (props) => {

  const doLogOut = () =>{
    props.handleLogout();
    props.history.push('/');
  }


  return(
  <div className="header">

  <Navbar className="header" bg="dark" variant="dark">
    <Navbar.Brand href="/">Never Alone</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/#">Home</Nav.Link>
    {
      props.user !== undefined
      ?
      (
        <>
        <Nav.Link href="#my_profile">My Profile</Nav.Link>
        <Nav.Link href="#Posts">Posts</Nav.Link>
        <Nav.Link href="#Inbox">Inbox</Nav.Link>
        <Nav.Link onClick={doLogOut}>Logout</Nav.Link>
        </>
      )
      :
      (
        <>
        <Nav.Link href='#login'>Login</Nav.Link>
        <Nav.Link href="#SignUp">SignUp</Nav.Link>
        </>
      )
    }








    </Nav>

  </Navbar>

  </div>

  )
}



export default Navigation;


// <Form inline>
//   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//   <Button variant="outline-light">Search</Button>
// </Form>



// {
//   props.user !== undefined
//   ?
//   (
//     Welcome {props.user.name}
//   )
//   :
//   (
//   <Nav.Link href="#Login">Login</Nav.Link>
//   )
// }


// {
//   props.user !== undefined
//   ?
//   (
//     <ul>
//       Welcome {props.user.name} |
//       <Link to='/my_profile'>My Profile</Link>
//       <Nav.Link href="#my_profile">Profile</Nav.Link>
//       <Link onClick={props.handleLogout} to='/'>Logout</Link>
//     </ul>
//   )
//   :
//   (
//     <ul>
//       <li><Link to='/login'>Login</Link></li>
//     </ul>
//   )
//
// }
