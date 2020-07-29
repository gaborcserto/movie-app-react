import React, { useEffect, useState,  Suspense} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../components/Header/Header';
import Loading from '../components/Loading';
import ScrollToTop from '../components/ScrollToTop';
import { Container } from 'react-bootstrap';
import { FaReact, FaBootstrap } from 'react-icons/fa'
import HomePage from '../pages/HomePage';
import ListPage from '../pages/ListPage';
import SearchPage from '../pages/SearchPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import SeriesDetailsPage from '../pages/SeriesDetailsPage';
import PersonDetailsPage from '../pages/PersonDetailsPage';
import SeasonDetailsPage from '../pages/SeasonDetailsPage';
import ErrorPage from '../pages/ErrorPage';
import fetchingData from '../hooks/FetchingData';


function App() {
    //const [page, setPage] = useState(1);

    const [ nowPlayingMovies, setNowPlayingMovies ] = useState(null);
    const [ popularMovies, setPopularMovies ] = useState(null);
    const [ upcomingMovies, setUpcomingMovies ] = useState(null);
    const [ popularSeries, setPopularSeries ] = useState(null);

    let history = useHistory();

    /* const handleShowMore = () => {
        setPage(page + 1);
        console.log('show more');
    };*/

    const getSearch = (searchValue, searchType) => {
        if(searchValue && searchType) {
            history.push(`/search/${searchType}/${searchValue}`);
        }
    }

    const popularData = fetchingData({
        queryType: 'movie',
        listType: 'popular',
        page: 1
    });

    const nowPlayingData = fetchingData({
        queryType: 'movie',
        listType: 'now_playing',
        page: 1
    });

    const upcomingData = fetchingData({
        queryType: 'movie',
        listType: 'upcoming',
        page: 1
    });

    const popularSeriesData = fetchingData({
        queryType: 'tv',
        listType: 'popular',
        page: 1
    });

    useEffect(() => {
        if (popularData.response !== null) {
            setPopularMovies(popularData.response);
        }
        if (upcomingData.response !== null) {
            setUpcomingMovies(upcomingData.response);
        }
        if (nowPlayingData.response !== null) {
            setNowPlayingMovies(nowPlayingData.response);
        }
        if (popularSeriesData.response !== null) {
            setPopularSeries(popularSeriesData.response);
        }
    }, [popularData.response, upcomingData.response, nowPlayingData.response, popularSeriesData.response]);

    return (
        <div className="App">
            <Header
                title="Movie Search"
                search={getSearch}
            />
            <Container className="mainContent">
                <Suspense fallback={<Loading />}/>
                <ScrollToTop />
                <Switch>
                    <Route path="/upcoming">
                        <ListPage
                            listData={upcomingMovies}
                            title="Upcoming Movies"
                            loading={upcomingData.loading}
                            type="upcoming"/>
                    </Route>
                    <Route path="/popular">
                        <ListPage
                            listData={popularMovies}
                            loading={popularData.loading}
                            title="Popular Movies"
                            type="popular"/>
                    </Route>
                    <Route path="/now_playing">
                        <ListPage
                            listData={nowPlayingMovies}
                            loading={nowPlayingData.loading}
                            title="Now Playing Movies"
                            type="now_playing"/>
                    </Route>
                    <Route path="/movie_details/:id" component={MovieDetailsPage} />
                    <Route path="/series_details/:id" component={SeriesDetailsPage} />
                    <Route path="/person_details/:id" component={PersonDetailsPage} />
                    <Route path="/season_details/:id/:seasons" component={SeasonDetailsPage} />
                    <Route exact path="/">
                        <HomePage
                            upcomingMoviesData={upcomingMovies}
                            popularMoviesData={popularMovies}
                            nowPlayingMoviesData={nowPlayingMovies}
                            popularSeriesData={popularSeries}
                            number={10}/>
                    </Route>
                    <Route path="/search/:type/:query">
                        <SearchPage
                            page={1}
                            title="Search"
                            type="search"/>
                    </Route>
                    <Route component={ErrorPage} />
                </Switch>
            </Container>
            <footer>
                <p><FaReact /> <FaBootstrap /></p>
            </footer>
        </div>
    );
}

export default App;