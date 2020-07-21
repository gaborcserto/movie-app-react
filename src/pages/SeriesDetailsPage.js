import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { MdTimer } from 'react-icons/md'
import fetchingData from "../hooks/FetchingData";
import NoDetails from "../components/Details/NoDetails"
import Img from '../components/ImgLoader'
import PlotDetails from "../components/Details/PlotDetails";

const SeriesDetailsPage = props => {
	let seriesDetails;
	const params = useParams();

	const [seriesData, setSeriesData] = useState(null);
	const [seriesCredits, setSeriesCredits] = useState(null);

	const details = fetchingData({
		queryType: 'tv',
		detailsID: params.id
	});


	useEffect(() => {
		if (details.response !== null) {
			setSeriesData(details.response);
		}
	}, [details.response]);

	console.log(details.response);

	if(seriesData) {
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
								title={seriesData.title}
								text="No Image"/>
						</Col>
						<Col sm={12} md={9} className="details__content__head">
							<h1 className="details__content__head__title">{seriesData.title}</h1>
							<p className="details__content__head__time">
								<span className="details__content__head__time__icon"><MdTimer /></span> {seriesData.runtime} min
							</p>
							<p className="details__content__head__credit">Directors <span>placeholder</span></p>
							<p className="details__content__head__credit">Written <span>placeholder</span></p>
						</Col>
					</Row>
					<div className="details__content__body">
						<Row>
							<Col sm={12} md={3} className="details__content__body__short">
								<h3>Release date</h3>
								<p>{seriesData.release_date}</p>
								<h3>Status</h3>
								<p>{seriesData.status}</p>
								<h3>Revenue</h3>
								<p>{seriesData.revenue > 0 ? seriesData.revenue : 'N/A' }</p>
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
					</div>
					<div className="details__content__credits">
						<h2 className="details__content__credits__title">Credits</h2>
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