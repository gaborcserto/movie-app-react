import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const carousel = props => {
	const handleOnDragStart = (e) => e.preventDefault();
	let responsive;

	const handleResponsive = (items) => {
		if(items.length < 3) {
			return {
				760: {
					items: 2
				}
			};
		} else if(items.length < 2) {
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

	let carouselItems = null;

	if(props.images) {
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
	}

	if(props.videos) {
		responsive = handleResponsive(props.videos);
		console.log(responsive);
		carouselItems = props.videos.map((video, index) => (
			<div className="item carousel__item video" key={index}>
				<iframe
					src={`https://www.youtube.com/embed/${video.key}`}
				    frameBorder='0'
				    allow='autoplay; encrypted-media'
				    allowFullScreen
				    title={video.name}
				/>
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
}

export default carousel;