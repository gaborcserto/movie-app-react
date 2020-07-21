import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Img from '../../components/ImgLoader'
import moment from 'moment';


const listItem = props => {

	let title = props.movieTitle;
	let link = `/movie_details/${props.movieID}`;
	let date = props.releaseDate;

	if(props.seriesTitle) {
		title = props.seriesTitle;
		link = `/series_details/${props.movieID}`
		date = props.fisrtAirDate;
	}

	return (
		<ListGroup.Item className="mainContent__list__item">
			<Link to={link}>
				<div className="mainContent__list__item__image">
					<Img
						src={props.img}
						width={100}
						height={100}
						type="w200"
						title={title}
						text="Img"/>
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