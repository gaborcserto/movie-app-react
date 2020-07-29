import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Img from "../ImgLoader";
import moment from "moment";

const episodesDetails = props => {
	console.log(props)

	const episodesItems = props.episodes.map((episode, index) => (
			<Row
				className="episodes__items"
				key={index}>
				<Col sm={12}
				     md={3}
				     className="episodes__items__image">
					<Img
						src={episode.still_path}
						width={200}
						height={150}
						type="w200"
						styled="episodes__items__image__img"
						title={episode.name}
						text="No Image"/>
				</Col>
				<Col sm={12}
				     md={9}
				     className="episodes__items__detail">
					<h3 className="episodes__items__detail__title">{episode.name}</h3>
					<p className="episodes__items__detail__number badge badge-pill badge-dark">
						{`S${episode.season_number}, Ep${episode.episode_number}`}
					</p>
					<p className="episodes__items__detail__date">
						{episode.air_date ? moment(episode.air_date).format('MMM D, YYYY') : 'N/A'}
					</p>
					<div className="episodes__items__detail__overview">{episode.overview}</div>
				</Col>
			</Row>
	));

	return (
		<div className="episodes">
			<h2>{props.title}</h2>
			{episodesItems}
		</div>
	)
}

export default episodesDetails;