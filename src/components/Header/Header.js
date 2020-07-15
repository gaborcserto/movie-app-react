import React from "react";
import HeaderNavBar from "./HeaderNavBar/HeaderNavbar";
import SearchBar from "./SearchBar/SearchBar";
import './Header.scss';

const Header = (props) => {
	return (
		<header className="header">
			<HeaderNavBar className="header__nav" title={props.title} />
			<SearchBar className="header__search" search={props.search} />
		</header>
	);
}

export default Header;