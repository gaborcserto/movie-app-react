import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { MdTimer } from 'react-icons/md'
import testCredits from '../mock/movieCredits';
import fetchingData from '../hooks/FetchingData';
import NoDetails from '../components/Details/NoDetails';
import PlotDetails from '../components/Details/PlotDetails';
import Img from '../components/ImgLoader'

const MovieDetailsPage = () => {
	let movieDetails;
	const params = useParams();

	const [movieData, setMovieData] = useState(null);
	const [movieCredits, setMovieCredits] = useState(null);

	const details = fetchingData({
		queryType: 'movie',
		detailsID: params.id
	});

	useEffect(() => {
		if (details.response !== null) {
			setMovieData(details.response);
			setMovieCredits(testCredits);
		}
	}, [details.response]);


	let background = null;

	if(movieData && movieCredits) {
		if(movieData.backdrop_path !== null) background = {backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`};

		movieDetails = (
			<React.Fragment>
				<div className="details__background"
				     style={background} />
				<div className="movie details__content">
					<Row>
						<Col sm={12} md={3} className="details__content__poster">
							<Img
								src={movieData.poster_path}
								width={200}
								height={300}
								type="w200"
								styled="details__content__poster__image"
								title={movieData.title}
								text="No Image"/>
						</Col>
						<Col sm={12} md={9} className="details__content__head">
							<h1 className="details__content__head__title">{movieData.title}</h1>
							<p className="details__content__head__time">
								<span className="details__content__head__time__icon"><MdTimer /></span> {movieData.runtime} min
							</p>
							<p className="details__content__head__credit">Directors <span>placeholder</span></p>
							<p className="details__content__head__credit">Written <span>placeholder</span></p>
						</Col>
					</Row>
					<div className="details__content__body">
						<Row>
							<Col sm={12} md={3} className="details__content__body__short">
								<h3>Release date</h3>
								<p>{movieData.release_date}</p>
								<h3>Status</h3>
								<p>{movieData.status}</p>
								<h3>Revenue</h3>
								<p>{movieData.revenue > 0 ? movieData.revenue : 'N/A' }</p>
								<h3>Official website</h3>
								<a
									href={movieData.homepage}
									title={movieData.title}
									rel="noopener noreferrer"
									target="_blank">Link</a>
							</Col>
							<Col sm={12} md={9} className="details__content__body__plot">
								<PlotDetails
									tagline={movieData.tagline}
									title="Plot"
									overview={movieData.overview}/>
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
		movieDetails = (
			<NoDetails />
		)
	}


	return (
		<React.Fragment>
			{movieDetails}
		</React.Fragment>
	)
}

export default MovieDetailsPage;