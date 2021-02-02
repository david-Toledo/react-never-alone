import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl';
// import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";


const Navigation = (props) => {

  return(
  <div className="">

  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Never Alone</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#Profile">Profile</Nav.Link>
      <Nav.Link href="#Posts">Posts</Nav.Link>
      <Nav.Link href="#Inbox">Inbox</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

  </div>

  )
}



export default Navigation;
