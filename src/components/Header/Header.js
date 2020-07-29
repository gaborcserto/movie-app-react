import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Nav, Navbar, Button } from "react-bootstrap";
import { NavLink, withRouter } from 'react-router-dom';
import { RiMovie2Line } from "react-icons/ri";

const Header = (props) => {
	let detailsStyle = '';
	let noSearch = false;

	if ((/movie_details/).test(document.URL)) {
		detailsStyle = ' details';
		noSearch = true;
	}

	if ((/person_details/).test(document.URL)) {
		detailsStyle = ' details';
		noSearch = true;
	}

	if ((/series_details/).test(document.URL)) {
		detailsStyle = ' details';
		noSearch = true;
	}

	if ((/season_details/).test(document.URL)) {
		detailsStyle = ' details';
		noSearch = true;
	}

	const goBack = () => {
		window.history.back();
	}

	return (
		<header className={`header${detailsStyle}`}>
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
					{ noSearch ?
						<Button variant="danger" className="btnBack ripple" onClick={goBack}>❰❰ Back </Button>:
						null
					}
				</Navbar.Collapse>
			</Navbar>
			{ noSearch ?
				null :
				<SearchBar className="header__search" search={props.search}/>
			}
		</header>
	);
}

export default withRouter(Header);