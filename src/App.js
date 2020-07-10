import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar fixed="top" sticky="top" bg="transparent" expand="lg" className="MainNav">
        <Navbar.Brand href="#home">Movie Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome</div>
          <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
        </div>
      </header>
    </div>
  );
}
export default App;
