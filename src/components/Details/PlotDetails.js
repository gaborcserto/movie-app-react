import React from 'react';

const plotDetails = props => {
	return (
		<React.Fragment>
			{props.tagline ? <p className="tagline">{props.tagline}</p> : null}
			<h2 className="title">{props.title}</h2>
			<div className="text">{props.overview}</div>
		</React.Fragment>
	)
}

export default plotDetails;