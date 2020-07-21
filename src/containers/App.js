import React, { useEffect, useState,  Suspense} from 'react';
import { Route, Switch,  useHistory } from 'react-router-dom';
import Header from '../components/Header/Header';
import Loading from '../components/Loading';
import { Container } from 'react-bootstrap';

import HomePage from '../pages/HomePage';
import ListPage from '../pages/ListPage';
import SearchPage from '../pages/SearchPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import SeriesDetailsPage from '../pages/SeriesDetailsPage';
import ErrorPage from '../pages/ErrorPage';
import fetchingData from '../hooks/FetchingData';


function App() {
    const [page, setPage] = useState(1);

    const [ nowPlayingMovies, setNowPlayingMovies ] = useState(null);
    const [ popularMovies, setPopularMovies ] = useState(null);
    const [ upcomingMovies, setUpcomingMovies ] = useState(null);
    const [ popularSeries, setPopularSeries ] = useState(null);

    let history = useHistory();

    const handleShowMore = () => {
        setPage(page + 1);
        console.log('show more');
    };

    const getSearch = (searchValue, searchType) => {
        if(searchValue && searchType) {
            history.push(`/search/${searchType}/${searchValue}`);
        }
    }

    const popularData = fetchingData({
        queryType: 'movie',
        listType: 'popular',
        page: page
    });

    const nowPlayingData = fetchingData({
        queryType: 'movie',
        listType: 'now_playing',
        page: page
    });

    const upcomingData = fetchingData({
        queryType: 'movie',
        listType: 'upcoming',
        page: page
    });

    const popularSeriesData = fetchingData({
        queryType: 'tv',
        listType: 'popular',
        page: page
    });

    useEffect(() => {
        if (popularData.response !== null) {
            setUpcomingMovies(popularData.response);
        }
        if (upcomingData.response !== null) {
            setPopularMovies(upcomingData.response);
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
                        <Route exact path="/movie_details/:id" component={MovieDetailsPage} />
                        <Route exact path="/series_details/:id" component={SeriesDetailsPage} />
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
                                page={page}
                                title="Search"
                                type="search"/>
                        </Route>
                        <Route component={ErrorPage} />
                    </Switch>
                </Container>

        </div>
    );
}

export default App;