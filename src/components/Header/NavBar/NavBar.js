import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMovie2Line } from 'react-icons/ri';
import { Button, Nav, Navbar } from 'react-bootstrap';

const NavBar = (props) => {
	const [animate, setAnimate] = useState(false);

	const handleClick = () => setAnimate(!animate);

	return (
		<React.Fragment>
			<Navbar
				className="header__navBar"
				sticky="top"
				expand="md"
				bg="transparent"
				variant="dark">
				<NavLink className="navbar-brand"
				         variant="danger"
				         exact to="/">
					<span className="navbar-brand__logo"><RiMovie2Line /></span>
					{props.title}
				</NavLink>
				<button
						onClick={handleClick}
				        type="button"
				        aria-label="Toggle navigation"
				        className={animate ? 'navbar-toggler collapsed open' : 'navbar-toggler collapsed'}>
					<div />
				</button>
				<Navbar.Collapse id="responsive-navbar-nav" className={animate ? 'open' : null}>
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
				</Navbar.Collapse>
				{ props.backButton ?
					<Button variant="danger" className="btnBack ripple" onClick={props.goBack}>❰❰<span> Back</span></Button>:
					null
				}
			</Navbar>
			{animate ? <div className="overlay"/> : null}
		</React.Fragment>
	);
}

export default NavBar;