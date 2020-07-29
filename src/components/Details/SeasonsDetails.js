import React from 'react';
import {Link} from "react-router-dom";

const SeasonsDetails = props => {
	console.log(props)

	const seasonsItems = props.seasons.map((season, index) => (
			<Link
				key={index}
				className="seasons__link btn btn-danger btn-sm ripple"
				to={`/season_details/${props.seriesID}/${index}`}>
				{season.name}
			</Link>
	));

	return (
		<div className="seasons">
			<h2 className="title">{props.title}</h2>
			{seasonsItems}
		</div>
	)
}

export default SeasonsDetails;