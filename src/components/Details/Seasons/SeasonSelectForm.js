import React from 'react';
import { Form } from 'react-bootstrap';

const seasonSelectForm = props => {
	const options = props.seasons.map((season, index) => (
		<option
			value={season.season_number}
			key={index}
		>{season.name}</option>
	));

	return (
		<Form.Group controlId="seasonSelectForm">
			<Form.Label>Seasons</Form.Label>
			<Form.Control
				onChange={props.changed}
				value={props.seasonNumber}
				as="select">
				{options}
			</Form.Control>
		</Form.Group>
	)
}

export default seasonSelectForm;
