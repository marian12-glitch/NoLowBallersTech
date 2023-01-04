import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Signin = () => {
    return (
        <>


            <div className='container mt-3 '  >
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#Name">SwiftSend</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="signup">Sign Up</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <section className='d-flex justify-content-between'>

                    <div className='left-data mt-5' style={{ width: '100%' }}>
                        <div style={{ width: '50%', marginLeft: '80px' }}>
                            <h3 className='text-center col-lg-6'> Sign In</h3>
                            <Form>
                                <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-12 " controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant='light' type="submit" className='col-lg-12 mb-2 ' style={{ backgroundColor: "#b6d9ce" }}>
                                    Submit
                                </Button>
                                {/* <div>
                                    <p>This is Home</p>
                                    <Link to="/signup">Go to signup</Link>
                                </div> */}
                            </Form>
                        </div>

                    </div>

                    <div className='right-data mt-5'>
                        <div className='sign_img'>
                            <img src='./img.png' style={{ maxWidth: 300 }} alt='#'></img>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );

}

export default Signin;