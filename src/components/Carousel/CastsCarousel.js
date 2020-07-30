import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import {generateCustomPlaceholderURL} from "react-placeholder-image";

const castsCarousel = props => {

	const handlePoster = (imagePath) => {
		if (imagePath) {
			return `https://image.tmdb.org/t/p/w500${imagePath}`;
		} else {
			return generateCustomPlaceholderURL(350, 520, {
				textColor: '#ffffff',
				text: 'No Image',
			});
		}
	}

	const handleLink = (type, id) => {
		if (type === 'tv') {
			return `/series_details/${id}`
		} else {
			return `/${type}_details/${id}`
		}
	}

	const responsive = {
		0: {
			items: 2
		},
		760: {
			items: 3
		},
		1020: {
			items: 4
		}
	};

	props.credits.sort((a, b) => {
		return new Date(b.popularity) - new Date(a.popularity);
	});

	const carouselItems = props.credits.map((cast, index) => (
		<div className="item carousel__item cast" key={index}>
			<Link
				className="cast__link"
				to={handleLink(cast.media_type, cast.id)}>
				<div className="cast__link__data">
					<img
						onDragStart={props.handle}
						className="cast__link__data__image"
						src={handlePoster(cast.poster_path)}
						title={cast.original_title ? cast.original_title : cast.original_name}
						alt={cast.original_title ? cast.original_title : cast.original_name}/>
					<div className="cast__link__data__texts">
						<p className="cast__link__data__name">
							{cast.original_title ? cast.original_title : cast.original_name}
						</p>
						{cast.character ?
							<small className="cast__link__data__character">{cast.character}</small> : null}
						{cast.job ? <small className="cast__link__data__job">{cast.job}</small> : null}
					</div>
				</div>
			</Link>
		</div>
	));

	return (
		<React.Fragment>
			<h2>{props.title}</h2>
			<AliceCarousel
				touchTrackingEnabled={true}
				dotsDisabled={true}
				responsive={responsive}
				mouseTrackingEnabled={true}>
				{carouselItems}
			</AliceCarousel>
		</React.Fragment>
	)
}

export default castsCarousel;