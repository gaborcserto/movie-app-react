import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ListItem from './ListItem';
import Loading from "../Loading";

const List = ({data, styled, number = 0}) => {
	let listItems;
	if(!data) {
		listItems = <Loading />;
	} else if (number > 0) {
		listItems = data.slice(0, number).map((value, index) => (
			<ListItem
				key={index}
				img={value.poster_path}
				movieID={value.id}
				movieTitle={value.title}
				releaseDate={value.release_date}
				fisrtAirDate={value.first_air_date}
				seriesTitle={value.original_name}/>
		));
	} else {
		listItems = data.map((value, index) => (
			<ListItem
				key={index}
				img={value.poster_path}
				movieID={value.id}
				movieTitle={value.title}
				releaseDate={value.release_date}
				fisrtAirDate={value.first_air_date}
				seriesTitle={value.original_name}/>
		));
	}


	return (
		<ListGroup variant="flush" className={styled}>
			{listItems}
		</ListGroup>
	)
}

export default List;