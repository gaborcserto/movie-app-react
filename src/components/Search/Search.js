import React, { useState } from "react";
import { InputGroup, Button, FormControl } from 'react-bootstrap';

const Search = (props) => {
	const [searchValue, setSearchValue] = useState("Batman");

	const handleSearchInputChanges = e => {
		setSearchValue(e.target.value);
	}

	const resetInputField = () => {
		setSearchValue("")
	}

	const callSearchFunction = e => {
		e.preventDefault();
		props.search(searchValue);
		resetInputField();
	}

	return (
		<InputGroup className="mb-3">
			<InputGroup.Prepend>
				<Button
					onClick={callSearchFunction}
					className="Search__form__button"
					variant="outline-secondary">Search</Button>
			</InputGroup.Prepend>
			<FormControl
				className="Search__form__input"
				value={searchValue}
				onChange={handleSearchInputChanges}
				aria-describedby="basic-addon1" />
		</InputGroup>
	);
}

export default Search;