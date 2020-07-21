import React from 'react';
import {Col, Row} from "react-bootstrap";
import MovieCard from "../components/MovieCard/MovieCard";
import Loading from "../components/Loading";

const ListPage = props => {

	let listItems;

	if(props.loading || !props.listData) {
		listItems = <Loading />;
	} else {
		listItems = props.listData.results.map((value, index) => (
			<Col className="searchResult__col" key={`${index}-${value.title}`} sm={12} md={6} lg={3}>
				<MovieCard key={index} card={value}/>
			</Col>
		));
	}

	return (
		<React.Fragment>
			<h2 className="mainContent__title">{props.title}</h2>
			<Row>
				{listItems}
			</Row>
		</React.Fragment>

	)
}

export default ListPage;