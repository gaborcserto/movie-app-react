import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { RiMovie2Line } from "react-icons/ri";
import { useScrollHandler } from '../../hooks/ScrollCheck';

const Header = (props) => {
	let detailsStyle = '';
	let scrolledStye = ''
	let backButton = false;

	const detailPages = /((movie_details)|(person_details)|(series_details)|(season_details))/;

	if (detailPages.test(document.URL)) {
		detailsStyle = ' details';
		backButton = true;
	}

	const goBack = () => {
		window.history.back();
	}

	const scroll = useScrollHandler(100);
	if(scroll) {
		scrolledStye = ' scrolled';
	}

	return (
		<header className={`header${detailsStyle}${scrolledStye}`}>
			<SearchBar className="header__search" search={props.search}/>
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
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
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
					{ backButton ?
						<Button variant="danger" className="btnBack ripple" onClick={goBack}>❰❰ Back </Button>:
						null
					}
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}

export default withRouter(Header);