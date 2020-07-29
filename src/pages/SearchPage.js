import React, {useEffect, useState} from 'react';
import Loading from "../components/Loading";
import {Col, Row} from "react-bootstrap";
import MovieCard from "../components/MovieCard/MovieCard";
import fetchingData from '../hooks/FetchingData';
import { useParams } from "react-router-dom";


const SearchPage = props => {
	const [ searched, setSearched ] = useState(null);
	const [ results, setResults ] = useState(0);
	//const [ totalPages, setTotalPages ] = useState(null)

	let listItems;
	const params = useParams();

	const searchData = fetchingData({
		queryType: params.type,
		query: params.query,
		page: props.page
	});

	useEffect(() => {
		if (searchData.response !== null) {
			setSearched(searchData.response);
			setResults(searchData.response.total_results);
			//setTotalPages(searchData.response.total_pages);
		}
	}, [searchData.response]);

	if(searchData.loading || !searchData.response) {
		listItems = <Loading />;
	} else {
		searched.results.sort((a, b) => {
			return new Date(b.popularity) - new Date(a.popularity);
		});

		listItems = searched.results.map((value, index) => (
			<Col className="searchResult__col" key={`${index}-${value.id}`} sm={12} md={6} lg={3}>
				<MovieCard key={index} card={value} type={params.type} />
			</Col>
		));
	}

	return (
		<React.Fragment>
			<h2 className="mainContent__title">{props.title}: {params.query} </h2>
			<h3>Total results: {results}</h3>
			<Row>
				{listItems}
			</Row>
		</React.Fragment>

	)
}

export default SearchPage;