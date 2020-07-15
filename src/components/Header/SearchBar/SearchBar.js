import React, {useState} from 'react';
import { Container, Button, FormControl } from 'react-bootstrap';
import './SearchBar.scss';
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
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
		<Container className="SearchBar">
			<FormControl
				className="SearchBar__input"
				value={searchValue}
				onChange={handleSearchInputChanges}
				aria-describedby="basic-addon1" />
			<Button
				onClick={callSearchFunction}
				className="SearchBar__button"
				variant="danger">
				<FaSearch />
			</Button>
		</Container>
	);
}

export default SearchBar;