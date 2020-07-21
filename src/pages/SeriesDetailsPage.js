import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { MdTimer } from 'react-icons/md'
import fetchingData from '../hooks/FetchingData';
import NoDetails from '../components/Details/NoDetails'
import Img from '../components/ImgLoader'
import PlotDetails from '../components/Details/PlotDetails';
import GenresDetails from '../components/Details/GenresDetails';
import PersonLinkDetails from '../components/Details/PersonLinkDetails'
import moment from "moment";
import CastDetails from "../components/Details/CastDetails";

const SeriesDetailsPage = props => {
	let seriesDetails;
	const params = useParams();

	const [seriesData, setSeriesData] = useState(null);
	const [seriesCredits, setSeriesCredits] = useState(null);

	const details = fetchingData({
		queryType: 'tv',
		detailsID: params.id
	});

	const credits = fetchingData({
		queryType: 'tv',
		creditsID: params.id
	});

	useEffect(() => {
		if (details.response !== null) {
			setSeriesData(details.response);
		}
		if (credits.response !== null) {
			setSeriesCredits(credits.response);
		}
	}, [details.response, credits.response]);

	if(seriesData && seriesCredits) {
		seriesDetails = (
			<React.Fragment>
				<div className="details__background" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${seriesData.backdrop_path})`}} />
				<div className="series details__content">
					<Row>
						<Col sm={12} md={3} className="details__content__poster">
							<Img
								src={seriesData.poster_path}
								width={200}
								height={300}
								type="w200"
								styled="details__content__poster__image"
								title={seriesData.title}
								text="No Image"/>
						</Col>
						<Col sm={12} md={9} className="details__content__head">
							<h1 className="details__content__head__title">{seriesData.name}</h1>
							<p className="details__content__head__time">
								<span className="details__content__head__time__icon"><MdTimer /></span> {seriesData.episode_run_time[0]} min
							</p>
							<p className="details__content__head__credit">Genres <span><GenresDetails data={seriesData.genres} /></span></p>
							<p className="details__content__head__credit">Date <span>{moment(seriesData.first_air_date).format('YYYY')} - {moment(seriesData.last_air_date).format('YYYY')}</span></p>
							<p className="details__content__head__credit">Creators <span><PersonLinkDetails data={seriesData.created_by} /></span></p>
						</Col>
					</Row>
					<div className="details__content__body">
						<Row>
							<Col sm={12} md={3} className="details__content__body__short">
								<h3>Release date</h3>
								<p>{seriesData.release_date}</p>
								<h3>Status</h3>
								<p>{seriesData.status}</p>
								<h3>Total episodes</h3>
								<p>{seriesData.number_of_episodes > 0 ? seriesData.number_of_episodes : 'N/A' }</p>
								<h3>Seasons</h3>
								<p>{seriesData.number_of_seasons > 0 ? seriesData.number_of_seasons : 'N/A' }</p>
								<h3>Official website</h3>
								<a
									href={seriesData.homepage}
									title={seriesData.title}
									rel="noopener noreferrer"
									target="_blank">Link</a>
							</Col>
							<Col sm={12} md={9} className="details__content__body__plot">
								<PlotDetails
									tagline={seriesData.tagline}
									title="Plot"
									overview={seriesData.overview}/>
							</Col>
						</Row>
						<CastDetails title="Cast" data={seriesCredits.cast} number={12}/>
					</div>
				</div>
			</React.Fragment>
		)
	} else {
		seriesDetails = (
			<NoDetails />
		)
	}


	return (
		<React.Fragment>
			{seriesDetails}
		</React.Fragment>
	)
}

export default SeriesDetailsPage;