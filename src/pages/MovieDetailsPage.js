import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { MdTimer } from 'react-icons/md'
import fetchingData from '../hooks/FetchingData';
import NoDetails from '../components/Details/NoDetails';
import PlotDetails from '../components/Details/PlotDetails';
import Img from '../components/ImgLoader'
import GenresDetails from "../components/Details/GenresDetails";
import PersonLinkDetails from "../components/Details/PersonLinkDetails";
import CastDetails from '../components/Details/CastDetails';
import Rating from '../components/Rating/Rating';
import Carousel from '../components/Carousel';
import moment from 'moment';
import currencyFormatter from 'currency-formatter';

const MovieDetailsPage = () => {
	let movieDetails;
	const params = useParams();

	const [movieData, setMovieData] = useState(null);

	const details = fetchingData({
		queryType: 'movie',
		detailsID: params.id
	});

	useEffect(() => {
		if (details.response !== null) {
			setMovieData(details.response);
		}
	}, [details.response]);

	const convertRuntime = num => {
		let hours = num / 60;
		let convertHours = Math.floor(hours);
		let minutes = (hours - convertHours) * 60;
		let convertMinutes = Math.round(minutes);
		return `${convertHours}hr ${convertMinutes}min`;
	};

	let background = null;

	if(movieData) {
		console.log(movieData);
		if(movieData.backdrop_path !== null) background = {backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`};

		movieDetails = (
			<React.Fragment>
				<div className="details__background"
				     style={background} />
				<div className="movie details__content">
					<Row>
						<Col xs={6} md={3} className="details__content__poster">
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
								<span className="details__content__head__time__icon"><MdTimer /></span> {convertRuntime(movieData.runtime)}
							</p>
							<p className="details__content__head__credit">Genres <span><GenresDetails data={movieData.genres} /></span></p>
							<p className="details__content__head__credit">Directors <span><PersonLinkDetails type="director" fullData={movieData.credits.crew}/></span></p>
							<p className="details__content__head__credit">Written <span><PersonLinkDetails type="writer" fullData={movieData.credits.crew} /></span></p>
						</Col>
					</Row>
					<div className="details__content__body">
						<Row>
							<Col sm={12} md={3} className="details__content__body__short">
								<h3>Release date</h3>
								<p>{moment(movieData.release_date).format('D MMMM YYYY')}</p>
								<h3>Status</h3>
								<p>{movieData.status}</p>
								<h3>Budget</h3>
								<p>{movieData.budget > 0 ? currencyFormatter.format(movieData.budget, { code: 'USD', decimalDigits: 0 }) : 'N/A' }</p>
								<h3>Revenue</h3>
								<p>{movieData.revenue > 0 ? currencyFormatter.format(movieData.revenue, { code: 'USD', decimalDigits: 0 }) : 'N/A' }</p>
								<h3>Official website</h3>
								<a
									href={movieData.homepage}
									title={movieData.title}
									rel="noopener noreferrer"
									target="_blank">Link</a>
							</Col>
							<Col sm={12} md={9} className="details__content__body__plot">
								<p className="tagline">{movieData.tagline}</p>
								<Rating
									title="Rating"
									id={movieData.imdb_id}
									imdb={true}
									meta={true}
									tmdb={movieData.vote_average}/>
								<PlotDetails
									title="Plot"
									overview={movieData.overview}/>
								<Carousel
									className="carousel"
									alt={movieData.title}
									title="Photos"
									images={movieData.images.backdrops}/>
								<Carousel
									className="carousel"
									alt={movieData.title}
									title="Videos"
									videos={movieData.videos.results}/>
								<CastDetails
									title="Cast"
									data={movieData.credits.cast}
									number={12}/>
							</Col>
						</Row>
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