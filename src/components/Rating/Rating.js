import React, {useEffect, useState} from 'react';
import fetchingData from '../../hooks/FetchingData';
import { Col, Row } from 'react-bootstrap';
import CircleRating from './CircleRating';

const Rating = props => {
	const [OMDBData, setOMDBData] = useState(null);
	let imdb, meta, tmdb = null;

	const OMDBDetails = fetchingData({
		imdbID: props.id,
		page: 1
	});

	useEffect(() => {
		if (OMDBDetails.response !== null) {
			setOMDBData(OMDBDetails.response);
		}
	}, [OMDBDetails.response]);

	if(props.imdb && OMDBData) {
		imdb = OMDBData.imdbRating > 0 ? (
			<Col xs={6} sm={4} className="imdb">
				<CircleRating
					innerText="IMDB"
					percentage={OMDBData.imdbRating}
					trailSpaced={false}
					speed={10}
					decimal={true}
				/>
			</Col>
		) : null;
	}

	if(props.meta && OMDBData) {
		meta = OMDBData.Metascore > 0 ? (
			<Col xs={6} sm={4} className="metascore">
				<CircleRating
					innerText="Metascore"
					percentage={OMDBData.Metascore}
					trailSpaced={false}
					speed={10}
				/>
			</Col>
		) : null;
	}

	if(props.tmdb) {
		tmdb = (
			<Col xs={6} sm={4} className="tmdb">
				<CircleRating
					innerText="The Movie Database"
					percentage={props.tmdb}
					trailSpaced={false}
					speed={10}
					decimal={true}
				/>
			</Col>
		);
	}

	return (
		<React.Fragment>
			<h2 className="title">{props.title}</h2>
			<Row className="rating">
				{imdb}
				{meta}
				{tmdb}
			</Row>
		</React.Fragment>
	);
}

export default Rating;