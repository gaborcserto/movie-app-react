import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import fetchingData from '../hooks/FetchingData';
import NoDetails from '../components/Details/NoDetails';
import PlotDetails from '../components/Details/PlotDetails';
import Img from '../components/ImgLoader'
import Carousel from '../components/Carousel/Carousel';
import moment from 'moment';

const PersonDetailsPage = () => {
	let personDetails;
	const params = useParams();

	const [personData, setPersonData] = useState(null);
	const [personCredits, setPersonCredits] = useState(null);

	const details = fetchingData({
		queryType: 'person',
		detailsID: params.id
	});

	const credits = fetchingData({
		queryType: 'person',
		creditsID: params.id
	});

	useEffect(() => {
		if (details.response !== null) {
			setPersonData(details.response);
		}
		if (credits.response !== null) {
			setPersonCredits(credits.response);
		}
	}, [details.response, credits.response]);

	if(personData && personCredits) {
		personDetails = (
			<React.Fragment>
				<div className="person details__background" />
				<div className="person details__content">
					<Row>
						<Col xs={6} md={3} className="details__content__poster">
							<Img
								src={personData.profile_path}
								width={210}
								height={315}
								type="w200"
								styled="details__content__poster__image"
								title={personData.name}
								text="No Image"/>
						</Col>
						<Col sm={12} md={9} className="details__content__head">
							<h1 className="details__content__head__title">{personData.name}</h1>
							<p className="details__content__head__credit">Born	<span>
								{personData.birthday ? moment(personData.birthday).format('MMM D, YYYY') : 'N/A'} in {personData.place_of_birth ? personData.place_of_birth : 'N/A'}
							</span>
							</p>
							{personData.deathday ? <p className="details__content__head__credit">Death <span>{moment(personData.deathday).format('MMM D, YYYY')}</span></p> : null}
							<p className="details__content__head__credit">Know for <span>{personData.known_for_department}</span></p>
						</Col>
					</Row>
					<div className="details__content__body">
						<Row>
							<Col sm={12} md={3} className="details__content__body__short">
								<h3>Official website</h3>
								<p>
									{ personData.homepage ?	<a href={personData.homepage} rel="noopener noreferrer" target="_blank">Link</a> : 'N/A' }
								</p>
								<h3>Imdb Link</h3>
								<p>
									{ personData.imdb_id ? <a href={`https://www.imdb.com/name/${personData.imdb_id}`} rel="noopener noreferrer" target="_blank">Link</a> : 'N/A' }
								</p>
							</Col>
							<Col sm={12} md={9} className="details__content__body__plot">
								<PlotDetails
									title="Biography"
									overview={ personData.biography ? personData.biography : 'N/A' }/>
								<Carousel
									className="carousel"
									title="Filmography (Actor)"
									credits={personCredits.cast}/>
								<Carousel
									className="carousel"
									title="Filmography (crew)"
									credits={personCredits.crew}/>
							</Col>
						</Row>
					</div>
				</div>
			</React.Fragment>
		)
	} else {
		personDetails = (
			<NoDetails />
		)
	}


	return (
		<React.Fragment>
			{personDetails}
		</React.Fragment>
	)
}

export default PersonDetailsPage;