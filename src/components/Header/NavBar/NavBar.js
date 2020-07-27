import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiMovie2Line } from 'react-icons/ri';
import { Button, Nav, Navbar } from 'react-bootstrap';

const NavBar = (props) => {

	return (
		<Navbar
			className="header__navBar"
			sticky="top"
			expand="md"
			bg="transparent"
			variant="dark">
			<NavLink className="navbar-brand" variant="danger" exact to="/">
				<span className="navbar-brand__logo"><RiMovie2Line /></span>
				{props.title}
			</NavLink>
			<button aria-controls="responsive-navbar-nav"
			        type="button"
			        aria-label="Toggle navigation"
			        className="navbar-toggler collapsed">
				<span className="navbar-toggler-icon"/>
			</button>
			<Navbar.Collapse>
				<Nav
					defaultActiveKey="/"
					activeKey="active"
					className="mr-auto">
					<NavLink
						activeClassName="active"
						className="nav-link"
						exact to="/">
						Home
					</NavLink>
					<NavLink
						activeClassName="active"
						className="nav-link"
						exact to="/now_playing">
						Now Playing Movies
					</NavLink>
					<NavLink
						activeClassName="active"
						className="nav-link"
						exact to="/popular">
						Popular Movies
					</NavLink>
					<NavLink
						activeClassName="active"
						className="nav-link"
						to="/upcoming">
						Upcoming Movies
					</NavLink>
				</Nav>
				{ props.noSearch ?
					<Button variant="danger" className="btnBack ripple" onClick={props.goBack}>❰❰ Back </Button>:
					null
				}
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;