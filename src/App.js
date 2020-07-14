import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import './App.scss';
import Header from './components/Base/Header'
import Search from './components/Search/Search'
import MovieCard from './components/MovieCard/MovieCard'
import { Col, Container, Row, Button } from 'react-bootstrap';


function App() {
    const [query, setQuery] = useState("Batman");
    const [movieData, setMovieData] = useState({});
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState("en-US");
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);


    console.log(`page: ${page}`);
    useEffect(() => {
        setLanguage("en-US");
        console.log('effect');

        fetch(`${process.env.REACT_APP_TMDB_API_URL}search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${language}&query=${query}&page=${page}`, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }})
            .then(response => response.json())
            .then(jsonResponse => {
                setMovieData(jsonResponse.results);
                setTotalResults(jsonResponse.total_results);
                setTotalPages(jsonResponse.total_pages);
                setLoading(false);
            });
    }, [language, page, query]);

    const handleShowMore = () => {
        //setPage(page + 1);
        console.log('show more');
    };


    //listType: upcoming, now_playing, popular, top_rated, latest, ,
    //queryType: search, movie, tv
    const getMovies = (queryType,listType) => {
        fetch(`${process.env.REACT_APP_TMDB_API_URL}${queryType}/${listType}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${language}&page=${page}`, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }})
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setLoading(false);
                    return jsonResponse.results;
                } else {
                    setError(jsonResponse.Error);
                    setLoading(false);
                }
            });
    }



    const getSearch = searchValue => {
        console.log('search');
        setLoading(true);
        setError(null);
        setQuery(searchValue);

        fetch(`${process.env.REACT_APP_TMDB_API_URL}search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${language}&query=${searchValue}&page=${page}`, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }})
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setMovieData(jsonResponse.results);
                    setTotalResults(jsonResponse.total_results);
                    setTotalPages(jsonResponse.total_pages);
                    setLoading(false);
                } else {
                    setError(jsonResponse.Error);
                    setLoading(false);
                }
            });
    };

    return (
        <div className="App">
            <Header title="Movie Search" />
            <Container className="search">
            <Search search={getSearch} />
            {
                loading && !error && (!movieData || movieData.length === 0) ? (
                    <span>loading...</span>
                ) : error ? (
                    <div className="errorMessage">{`error: ${error}`}</div>
                ) : movieData && movieData.length > 0 ? (
                    <div className="search__result">
                        <h3>Total "{query}" search results: {totalResults}</h3>
                        <Row>
                        {movieData.map((movie, index) => (
                            <Col className="search__result__col" key={`${index}-${movie.title}`} xs={6} lg={3}>
                                <MovieCard key={index} movie={movie} />
                            </Col>
                        ))}
                        </Row>
                        {totalPages > page ? <div className="LoadingMore"><Button className="LoadingMore__Button" variant="secondary" onClick={handleShowMore}>Load more</Button></div> : null }
                    </div>
                ) : (
                    <span>loading...</span>
                )
            }
            </Container>
        </div>
  );
}

export default App;