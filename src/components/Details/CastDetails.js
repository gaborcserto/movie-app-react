import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Img from '../../components/ImgLoader'

const castDetails = props => {
	let cast = 'N/A';

	const template = (data, index) => (
		<Col xs={6} md={3} lg={2} key={index} className="cast__col">
			<Link
				className="cast__link"
				to={`/person_details/${data.id}`}>
				<div className="cast__link__data">
					<Img
						src={data.profile_path}
						width={350}
						height={520}
						type="w200"
						styled="cast__link__data__image"
						title={data.name}
						text="No Image"/>
					<p className="cast__link__data__name">{data.name}</p>
					<small className="cast__link__data__character">{data.character}</small>
				</div>
			</Link>
		</Col>
	);

	if(props.data) {
		if (props.number) {
			cast = props.data.slice(0,  props.number).map((value, index) => (
				template(value, index)
			));
		} else {
			cast = props.data.map((value, index) => (
				template(value, index)
			));
		}
	}

	return (
		<div className="cast">
			<h2 className="cast__title">{props.title}</h2>
			<Row>
				{cast}
			</Row>
		</div>
	)
}

export default castDetails;