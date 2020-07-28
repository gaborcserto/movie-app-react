import React from 'react';
import Img from "../ImgLoader";
import {Link} from "react-router-dom";
import {generateCustomPlaceholderURL} from "react-placeholder-image";

const CarouselCastsTemplate = props => {
	let items = null;
	let imgSrc = generateCustomPlaceholderURL(350, 520, {
		textColor: '#ffffff',
		text: 'No Image',
	});

	console.log(props.data);
	if(props.data) {
		props.data.map((cast, index) => (
			<div className="item carousel__item cast" key={index}>
				<Link
					className="cast__link"
					to={`/${cast.media_type}_details/${cast.id}`}>
					<div className="cast__link__data">
						<Img
							src={cast.poster_path}
							width={350}
							height={520}
							type="w200"
							styled="cast__link__data__image"
							title={cast.original_title ? cast.original_title : cast.original_name}
							text="No Image"/>
						<p className="cast__link__data__name">
							{cast.original_title ? cast.original_title : cast.original_name}
						</p>
						{cast.character ?
							<small className="cast__link__data__character">{cast.character}</small> : null}
						{cast.job ? <small className="cast__link__data__job">{cast.job}</small> : null}
					</div>
				</Link>
			</div>
		));
	}

	return items;
}

export default CarouselCastsTemplate;