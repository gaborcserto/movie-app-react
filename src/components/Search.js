import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

const Search = (props) => {
	const [searchValue, setSearchValue] = useState("Batman");

	console.log(props);

	const handleSearchInputChanges = e => {
		setSearchValue(e.target.value);
	}

	const resetInputField = () => {
		setSearchValue("")
	}

	const callSearchFunction = e => {
		console.log(searchValue);
		e.preventDefault();
		props.search(searchValue);
		resetInputField();
	}

	return (
		<Paper className="Search__wrapper" elevation={3}>
			<form className="Search__form" noValidate autoComplete="off">
				<TextField
					className="Search__form__input"
					id="standard-basic"
					label="Search"
					value={searchValue}
				    onChange={handleSearchInputChanges}
				    type="text"/>
				<IconButton
					onClick={callSearchFunction}
					className="Search__form__button"
					color="primary"
					aria-label="search">
					<SearchIcon />
				</IconButton>
			</form>
		</Paper>
	);
}

export default Search;