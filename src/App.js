import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import Header from './components/Base/Header'
import Search from './components/Search'
import MovieCard from './components/MovieCard.js'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import './App.scss';

function App() {
    const [query, setQuery] = useState("Batman");
    const [movieData, setMovieData] = useState({});
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState("en-US");
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        setLanguage("en-US");
        setPage(1);

        fetch(`${process.env.REACT_APP_TMDB_API_URL}search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${language}&query=${query}&page=${page}`)
            .then(response => response.json())
            .then(jsonResponse => {
                console.log(jsonResponse);
                setMovieData(jsonResponse.results);
                setTotalResults(jsonResponse.total_results);
                setTotalPages(jsonResponse.total_pages);
                setLoading(false);
            });
    }, [language, page, query]);

    const search = searchValue => {
        setLoading(true);
        setError(null);
        setQuery(searchValue);

        fetch(`${process.env.REACT_APP_TMDB_API_URL}search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${language}&query=${searchValue}&page=${page}`)
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
            <Container maxWidth="lg" className="Search">
            <Search search={search} />
            {
                loading && !error && (!movieData || movieData.length === 0) ? (
                    <span>loading...</span>
                ) : error ? (
                    <div className="errorMessage">{`error: ${error}`}</div>
                ) : movieData && movieData.length > 0 ? (
                    <div className="Search__result">
                        <h3>Total "{query}" search results: {totalResults}</h3>
                        <Grid container spacing={4} wrap={'wrap'}>
                        {movieData.map((movie, index) => (
                            <Grid key={`${index}-${movie.title}`} item xs={6} lg={3}>
                                <MovieCard key={index} movie={movie} />
                            </Grid>
                        ))}
                        </Grid>
                        <Pagination className="Search__result__pagination" count={totalPages} defaultPage={page} siblingCount={0} />
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