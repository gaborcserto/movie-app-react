import React from 'react';
import { Col, Row } from 'react-bootstrap';
//import Img from "../../ImgLoader";
import moment from "moment";
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox';
import {generateCustomPlaceholderURL} from 'react-placeholder-image';

const episodesDetails = props => {

	const handlePoster = (imagePath) => {
		if (imagePath) {
			return `https://image.tmdb.org/t/p/w500${imagePath}`;
		} else {
			return generateCustomPlaceholderURL(200, 150, {
				textColor: '#ffffff',
				text: 'No Image',
			});
		}
	}

	const episodesItems = props.episodes.map((episode, index) => (
			<Row
				className="episodes__items"
				key={index}>
				<Col sm={12}
				     md={3}
				     className="episodes__items__image">
					<a href={`https://image.tmdb.org/t/p/original${episode.still_path}`}
					   data-attribute="SRL">
						<img
							className="episodes__items__image__img"
							src={handlePoster(episode.still_path)}
							title={episode.name}
							alt={episode.name}/>
					</a>
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
			{props.overview ? <h4>{props.overview}</h4> : null}
			<SimpleReactLightbox>
				<SRLWrapper>
				{episodesItems}
				</SRLWrapper>
			</SimpleReactLightbox>
		</div>
	)
}

export default episodesDetails;