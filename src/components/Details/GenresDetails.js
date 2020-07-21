import React from 'react';

const genresDetails = props => {
	let genres = 'N/A';

	if (props.data) {
		genres = props.data.map((value, index) => (
			<span
				className="genres"
				key={index}>
			{value.name}
		</span>
		));
	}

	return (
		<React.Fragment>
			{genres}
		</React.Fragment>
	)
}

export default genresDetails;