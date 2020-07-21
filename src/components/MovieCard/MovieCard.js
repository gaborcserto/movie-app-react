import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Img from "../ImgLoader";

const MovieCard = ({ card, type }) => {
	console.log(card);

	let link = `/movie_details/${card.id}`;
	let title = card.title
	let poster = card.poster_path

	if(type === 'tv') {
		title = card.name;
		link = `/series_details/${card.id}`
	} else if (type === 'person') {
		title = card.name;
		link = `/person_details/${card.id}`
		poster = card.profile_path;
	}

	return (
		<Link
			className="Card"
			to={link}>
			<Card
				className="movieCard"
			    bg="transparent"
				text="dark">
				<Img
					styled="card-img-top movieCard__img"
					src={poster}
					width={200}
					height={300}
					type="w500"
					alt={`The movie titled: ${title}`}
					title={title}
					text="No Image"/>
				<Card.Body className="movieCard__body">
					<Card.Text className="movieCard__body__text">{title}</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	);
};


export default MovieCard;