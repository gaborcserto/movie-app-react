import React from "react";
import AliceCarousel from "react-alice-carousel";

const videoCarousel = props => {
	const carouselItems = props.videos.map((video, index) => (
		<div className="item carousel__item video" key={index}>
			<iframe
				src={`//www.youtube.com/embed/${video.key}?enablejsapi=1&origin=${window.location.origin}`}
				width='100%'
				height='100%'
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
				responsive={props.responsive}
				mouseTrackingEnabled={true}>
				{carouselItems}
			</AliceCarousel>
		</React.Fragment>
	)
}

export default videoCarousel;