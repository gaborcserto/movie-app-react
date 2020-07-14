import React from "react";
//import { NavLink, useLocation } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';

const Header = (props) => {
	return (
		<Navbar
			sticky="top"
			expand="lg"
			bg="dark"
			variant="dark">
			<Navbar.Brand href="#home">{props.title}</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#popularMovies">Popular Movies</Nav.Link>
					<Nav.Link href="#upcomingMovies">Upcoming Movies</Nav.Link>
					<Nav.Link href="#searchMovies">Search Movies</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;