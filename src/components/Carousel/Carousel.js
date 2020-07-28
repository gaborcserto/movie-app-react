import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox';
import {Link} from 'react-router-dom';
import {generateCustomPlaceholderURL} from 'react-placeholder-image';
import ReactPlayer from 'react-player/lazy';

const Carousel = props => {
	const handleOnDragStart = (e) => e.preventDefault();
	let responsive;

	const handleResponsive = (items) => {
		if (items.length < 3) {
			return {
				760: {
					items: 2
				}
			};
		} else if (items.length < 2) {
			return {
				0: {
					items: 1
				}
			};
		} else {
			return {
				760: {
					items: 2
				},
				1020: {
					items: 3
				}
			}
		}
	}

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

	let carouselItems = null;

	if (props.images && props.images.length > 0) {
		responsive = handleResponsive(props.images);
		carouselItems = props.images.map((image, index) => (
			<a href={`https://image.tmdb.org/t/p/original${image.file_path}`}
			   key={index}
			   data-attribute="SRL">
				<img
					onDragStart={handleOnDragStart}
					className="item carousel__item"
					src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
					alt={`${props.alt}-${index}`}/>
			</a>
		));

		return (
			<React.Fragment>
				<h2>{props.title}</h2>
				<SimpleReactLightbox>
					<SRLWrapper>
						<AliceCarousel
							touchTrackingEnabled={true}
							dotsDisabled={true}
							responsive={responsive}
							mouseTrackingEnabled={true}>
							{carouselItems}
						</AliceCarousel>
					</SRLWrapper>
				</SimpleReactLightbox>
			</React.Fragment>
		)
	} else if ((props.videos && props.videos.length > 0) || (props.credits && props.credits.length > 0)) {
		if (props.videos) {
			responsive = handleResponsive(props.videos);

			carouselItems = props.videos.map((video, index) => (
				<div className="item carousel__item video" key={index}>
					<ReactPlayer
						className='react-player'
						url={`${process.env.REACT_APP_PROXY_URL}https://www.youtube.com/watch?v=${video.key}`}
						width='100%'
						height='100%'
					/>
				</div>
			));
		} else {
			responsive = {
				760: {
					items: 3
				},
				1020: {
					items: 4
				}
			};

			carouselItems = props.credits.map((cast, index) => (
				<div className="item carousel__item cast" key={index}>
					<Link
						className="cast__link"
						to={handleLink(cast.media_type, cast.id)}>
						<div className="cast__link__data">
							<img
								onDragStart={handleOnDragStart}
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
		}

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
	} else {
		return null;
	}
}

export default Carousel;