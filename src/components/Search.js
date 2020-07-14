import React, { useState } from "react";


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
		<form className="Search__form">
			<input
				value={searchValue}
				onChange={handleSearchInputChanges}
				type="text"
				placeholder="Search..."
			/>
			<input onClick={callSearchFunction} type="submit" value="SEARCH" />
		</form>
	);
}

export default Search;