import React from 'react';
import { Card } from 'react-bootstrap';
import './MovieCard.scss';

const MovieCard = ({ movie }) => {
	let poster;
	if(movie.poster_path === null) {
		poster = 'https://via.placeholder.com/200x300?text=No+Image';
	} else {
		poster = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
	}

	return (
		<Card
			className="movieCard"
		    bg="transparent"
			text="white">
			<Card.Img
				className="movieCard__img"
				variant="top"
				alt={`The movie titled: ${movie.title}`}
				title={movie.title}
				src={poster} />
			<Card.Body className="movieCard__body">
				<Card.Text className="movieCard__body__text">{movie.title}</Card.Text>
			</Card.Body>
		</Card>
	);
};


export default MovieCard;