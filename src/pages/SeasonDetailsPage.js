import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import fetchingData from '../hooks/FetchingData';
import NoDetails from '../components/Details/NoDetails'
import Img from '../components/ImgLoader';
import EpisodesDetails from '../components/Details/Seasons/EpisodesDetails';
import SeasonSelectForm from '../components/Details/Seasons/SeasonSelectForm';
import moment from 'moment';

const SeriesDetailsPage = () => {
	let seasonDetails;
	const params = useParams();

	const [seasonsData, setSeasonsData] = useState(null);
	const [baseData, setBaseData] = useState(null);
	const [seasonNumber, setSeasonNumber] = useState(params.seasons);

	const handleSeasonSelectChange = e => {
		setSeasonNumber(e.target.value);
	}

	const details = fetchingData({
		queryType: 'tv',
		seasonsID: params.id,
		season: seasonNumber
	});

	const baseDetails = fetchingData({
		queryType: 'tv',
		detailsID: params.id
	});

	useEffect(() => {
		if (details.response !== null) {
			setSeasonsData(details.response);
		}
		if (baseDetails.response !== null) {
			setBaseData(baseDetails.response);
		}
	}, [details.response, baseDetails.response]);

	let background = null;

	if(seasonsData && baseData) {
		if(baseData.backdrop_path !== null) background = {backgroundImage: `url(https://image.tmdb.org/t/p/original${baseData.backdrop_path})`};
		seasonDetails = (
			<React.Fragment>
				<div className="details__background" style={background} />
				<div className="series details__content">
					<Row>
						<Col xs={6} md={3} className="details__content__poster">
							<Img
								src={seasonsData.poster_path}
								width={200}
								height={300}
								type="w200"
								styled="details__content__poster__image"
								title={`${baseData.title} - Episode List`}
								text="No Image"/>
						</Col>
						<Col sm={12} md={9} className="details__content__head">
							<h1 className="details__content__head__title">{`${baseData.name} - ${seasonsData.name}`}</h1>
							<p className="details__content__head__credit">Date <span>{moment(seasonsData.air_date).format('YYYY')}</span></p>
						</Col>
					</Row>
					<div className="details__content__body">
						<Row>
							<Col sm={12} md={3} className="details__content__body__short">
								<SeasonSelectForm
									seasonNumber={seasonNumber}
									seasons={baseData.seasons}
									changed={handleSeasonSelectChange}
								/>
							</Col>
							<Col sm={12} md={9} className="details__content__body__plot">
								<EpisodesDetails
									episodes={seasonsData.episodes}
									title={seasonsData.name}
									overview={seasonsData.overview}
								/>
							</Col>
						</Row>
					</div>
				</div>
			</React.Fragment>
		)
	} else {
		seasonDetails = (
			<NoDetails />
		)
	}

	return (
		<React.Fragment>
			{seasonDetails}
		</React.Fragment>
	)
}

export default SeriesDetailsPage;