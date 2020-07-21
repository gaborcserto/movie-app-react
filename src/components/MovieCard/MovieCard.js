import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ card }) => {
	console.log(card);
	let poster = 'https://via.placeholder.com/200x300?text=No+Image';
	let link = `/movie_details/${card.id}`;
	let title = card.title

	if(card.poster_path !== null) poster = `https://image.tmdb.org/t/p/original${card.poster_path}`;

	if(card.seriesTitle) {
		title = card.seriesTitle;
		link = `/series_details/${card.movieID}`
	}

	return (
		<Link
			to={link}>
			<Card
				className="movieCard"
			    bg="transparent"
				text="dark">
				<Card.Img
					className="movieCard__img"
					variant="top"
					alt={`The movie titled: ${title}`}
					title={title}
					src={poster} />
				<Card.Body className="movieCard__body">
					<Card.Text className="movieCard__body__text">{title}</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	);
};


export default MovieCard;