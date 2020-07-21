import React, {useState} from 'react';
import { Container, Button, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
	const [searchValue, setSearchValue] = useState('');
	const [searchType, setSearchType] = useState('Movie');

	const handleSearchSelectChanges = e => {
		setSearchType(e.target.value);
	}

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
				onChange={handleSearchSelectChanges}
				className="SearchBar__select"
				as="select"
				defaultValue="Movie">
				<option>Movie</option>
				<option>Tv</option>
				<option>Person</option>
			</FormControl>
			<FormControl
				placeholder="Search..."
				className="SearchBar__input"
				value={searchValue}
				onChange={handleSearchInputChanges} />
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