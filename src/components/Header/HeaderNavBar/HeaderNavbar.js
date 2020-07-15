import React from 'react';
//import { NavLink, useLocation } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import {RiMovie2Line} from 'react-icons/ri'

const HeaderNavBar = (props) => {
	return (
		<Navbar
			className="HeaderNavBar"
			sticky="top"
			expand="lg"
			bg="transparent"
			variant="dark">
			<Navbar.Brand href="#home"><RiMovie2Line />{props.title}</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#popularMovies">Popular Movies</Nav.Link>
					<Nav.Link href="#upcomingMovies">Upcoming Movies</Nav.Link>
					<Nav.Link className="active" href="#searchMovies">Search Movies</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default HeaderNavBar;