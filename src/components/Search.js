import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

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
		<form className="Search__form" noValidate autoComplete="off">
			<TextField id="standard-basic" label="Search"
			           value={searchValue}
			           onChange={handleSearchInputChanges}
			           type="text"/>
			<IconButton aria-label="delete" onClick={callSearchFunction} >
				<SearchIcon fontSize="large" />
			</IconButton>
		</form>
	);
}

export default Search;