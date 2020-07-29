import React, {useState} from 'react';
import { Button, FormControl } from 'react-bootstrap';
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

	/*const resetInputField = () => {
		//setSearchValue("")
		//setSearchType('movie')
	}*/

	const handleSearchFormSubmit = e => {
		e.preventDefault();
		props.search(searchValue, searchType);
	}

	return (
		<div className="SearchBar">
			<form className="container" onSubmit={handleSearchFormSubmit}>
				<FormControl
					onChange={handleSearchSelectChanges}
					className="SearchBar__select"
					as="select"
					name="searchType"
					value={searchType}>
					<option value="movie">Movie</option>
					<option value="tv">Series</option>
					<option value="person">Person</option>
				</FormControl>
				<FormControl
					placeholder="Search..."
					className="SearchBar__input"
					name="searchValue"
					value={searchValue}
					onChange={handleSearchInputChanges} />
				<Button
					type="submit"
					className="SearchBar__button"
					variant="danger">
					<FaSearch />
				</Button>
			</form>
		</div>
	);
}

export default SearchBar;