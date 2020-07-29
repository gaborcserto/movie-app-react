import React from 'react';
import VideoCarousel from './VideoCarousel';
import CastsCarousel from './CastsCarousel';
import ImageCarousel from './ImageCarousel';

const Carousel = props => {
	const handleOnDragStart = (e) => e.preventDefault();

	const handleResponsive = (items) => {
		if (items.length < 3) {
			return {
				0: {
					items: 1
				},
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
				0: {
					items: 1
				},
				760: {
					items: 2
				},
				1020: {
					items: 3
				}
			}
		}
	}

	if (props.images && props.images.length > 0) {
		return <ImageCarousel
			title={props.title}
			images={props.images}
			alt={props.alt}
			responsive={handleResponsive(props.images)}
			handle={handleOnDragStart}/>;
	} else if ((props.videos && props.videos.length > 0) || (props.credits && props.credits.length > 0)) {
		if (props.videos && props.videos.length > 0) {
			return <VideoCarousel
				title={props.title}
				videos={props.videos}
				responsive={handleResponsive(props.videos)} />;
		} else {
			return <CastsCarousel
				title={props.title}
				credits={props.credits}
				handle={handleOnDragStart}/>;
		}
	} else {
		return null;
	}
}

export default Carousel;