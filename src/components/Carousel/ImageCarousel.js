import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox';

const imageCarousel = props => {

	const carouselItems = props.images.map((image, index) => (
		<a href={`https://image.tmdb.org/t/p/original${image.file_path}`}
		   key={index}
		   data-attribute="SRL">
			<img
				onDragStart={props.handle}
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
						responsive={props.responsive}
						mouseTrackingEnabled={true}>
						{carouselItems}
					</AliceCarousel>
				</SRLWrapper>
			</SimpleReactLightbox>
		</React.Fragment>
	)
}

export default imageCarousel;