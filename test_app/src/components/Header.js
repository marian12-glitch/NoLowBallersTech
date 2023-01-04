import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header =() =>{
    return(
        <> 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#Name">SwiftSend</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>     
        </>
    );

}

export default Header ;