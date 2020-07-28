import React from 'react';

const carouselVideoTemplate = props => {
	const items = [];

	props.videos.map((video, index) => items.push(
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
	console.log(items);

	return items;
}

export default carouselVideoTemplate;