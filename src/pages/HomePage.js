import React from 'react';
import { Row, Col } from 'react-bootstrap';
import List from '../components/List/List';
import Loading from "../components/Loading";

const HomePage = props => {
	return (
		<React.Fragment>
			<Row>
				<Col sm={12} md={6}>
					<h2 className="mainContent__title">Upcoming Movies</h2>
					{ props.upcomingMoviesData ?
						<List styled="mainContent__list" number={props.number} data={props.upcomingMoviesData.results}/> :
						<Loading />
					}
				</Col>
				<Col sm={12} md={6}>
					<h2 className="mainContent__title">Now Playing Movies</h2>
					{ props.nowPlayingMoviesData ?
						<List styled="mainContent__list" number={props.number} data={props.nowPlayingMoviesData.results}/> :
						<Loading />
					}
				</Col>
			</Row>
			<Row>
				<Col sm={12} md={6}>
					<h2 className="mainContent__title">Popular Series</h2>
					{ props.popularSeriesData ?
						<List styled="mainContent__list" number={props.number} data={props.popularSeriesData.results}/> :
						<Loading />
					}
				</Col>
				<Col sm={12} md={6}>
					<h2 className="mainContent__title">Popular Movies</h2>
					{ props.popularMoviesData ?
						<List styled="mainContent__list" number={props.number} data={props.popularMoviesData.results}/> :
						<Loading />
					}
				</Col>
			</Row>
		</React.Fragment>
	)
}

export default HomePage;