import React from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { generateCustomPlaceholderURL } from 'react-placeholder-image';
import moment from 'moment';


const listItem = props => {

	let img = generateCustomPlaceholderURL(100, 100, {
		textColor: '#ffffff',
		text: 'Img!',
	});
	let title = props.movieTitle;
	let link = `/movie_details/${props.movieID}`;
	let date = props.releaseDate;

	if(props.seriesTitle) {
		title = props.seriesTitle;
		link = `/series_details/${props.movieID}`
		date = props.fisrtAirDate;
	}

	if(props.img !== null) img = `https://image.tmdb.org/t/p/w200${props.img}`;



	return (
		<ListGroup.Item className="mainContent__list__item">
			<Link to={link}>
				<div className="mainContent__list__item__image">
					<Image src={img} alt={title}/>
				</div>
				<div className="mainContent__list__item__title">
					{title}
					<span className="mainContent__list__item__title__date">{moment(date).format('YYYY')}</span>
				</div>
			</Link>
		</ListGroup.Item>
	)
}

export default listItem;