import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import NavBar from './NavBar/NavBar';
import { useScrollHandler } from '../../hooks/ScrollCheck';

const Header = (props) => {
	let detailsStyle = '';
	let scrolledStyle = ''
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
		scrolledStyle = ' scrolled';
	}

	return (
		<header className={`header${detailsStyle}${scrolledStyle}`}>
			<SearchBar className="header__search" search={props.search}/>
			<NavBar
				title={props.title}
			    backButton={backButton}
				goBack={goBack}/>
		</header>
	);
}

export default withRouter(Header);