import React from 'react';
import { Link } from 'react-router-dom';

const personLinkDetails = props => {
	let links = 'N/A';
	let data = props.data;

	const setUnique = data => {
		return Array.from(new Set(data.map(a => a.id)))
			.map(id => {
				return data.find(a => a.id === id)
			})
	};

	if(props.type === 'director') {
		data = props.fullData.filter( occupation => (
			occupation.department === 'Directing' &&
			occupation.job === 'Director'
		))

		data = setUnique(data);
	}

	if(props.type === 'writer') {
		data = props.fullData.filter( occupation => (
			occupation.department === 'Writing'	&&
			(occupation.job === 'Screenplay' || occupation.job === 'Writer')
		))

		data = setUnique(data);
	}

	if(data) {
		links = data.map((value, index) => (
			<Link
				className="person-link"
				key={index}
				to={`/person_details/${value.id}`}>
				{value.name}
			</Link>
		));
	}

	return (
		<React.Fragment>
			{links}
		</React.Fragment>
	)
}

export default personLinkDetails;