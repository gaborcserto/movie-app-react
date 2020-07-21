import React, {useState} from 'react';
import { Container, Button, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
	const [searchValue, setSearchValue] = useState('');
	const [searchType, setSearchType] = useState('movie');

	const handleSearchSelectChanges = e => {
		setSearchType(e.target.value);
	}

	const handleSearchInputChanges = e => {
		setSearchValue(e.target.value);
	}

	const resetInputField = () => {
		//setSearchValue("")
		//setSearchType('movie')
	}

	const callSearchFunction = e => {
		e.preventDefault();
		props.search(searchValue, searchType);
		//resetInputField();
	}

	return (
		<Container className="SearchBar">
			<FormControl
				onChange={handleSearchSelectChanges}
				className="SearchBar__select"
				as="select"
				value={searchType}>
				<option value="movie">Movie</option>
				<option value="tv">Tv</option>
				<option value="person">Person</option>
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