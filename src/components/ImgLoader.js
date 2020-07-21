import React from 'react';
import { generateCustomPlaceholderURL } from 'react-placeholder-image';
import { Img } from 'react-progressive-loader'

const ImgLoader = (props) => {
	let img;
	let alt = props.title;
	let imgSrc = generateCustomPlaceholderURL(props.width, props.height, {
		textColor: '#ffffff',
		text: props.text,
	});
	if (props.alt) alt = props.alt;

	if (props.src !== null) {
		img = <Img
			className={props.styled}
			src={`https://image.tmdb.org/t/p/${props.type}${props.src}`}
			placeholderSrc={`https://image.tmdb.org/t/p/w200${props.src}`}
			alt={alt} title={props.title}/>
	} else {
		img = <img
			className={props.styled}
			src={imgSrc}
			alt={alt}
			title={props.title} />
	}

	return img
}

export default ImgLoader;