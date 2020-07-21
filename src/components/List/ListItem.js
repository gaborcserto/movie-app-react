import React from "react";
import { Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const listItem = props => {

	let img = 'https://via.placeholder.com/100x100?text=Img';
	let title = props.movieTitle;
	let link = `/movie_details/${props.movieID}`;
	let date = props.releaseDate;

	if(props.img !== null) img = `https://image.tmdb.org/t/p/w200${props.img}`;

	if(props.seriesTitle) {
		title = props.seriesTitle;
		link = `/series_details/${props.movieID}`
		date = props.fisrtAirDate;
	}



	return (
		<ListGroup.Item className="mainContent__list__item">
			<Link to={link}>
				<div className="mainContent__list__item__image">
					<Image src={img}/>
				</div>
				<div className="mainContent__list__item__title">
					{title}
					<span className="mainContent__list__item__title__date">{date}</span>
				</div>
			</Link>
		</ListGroup.Item>
	)
}

export default listItem;