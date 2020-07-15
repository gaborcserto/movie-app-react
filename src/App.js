import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import './App.scss';
import Header from "./components/Header/Header";
import MovieCard from './components/MovieCard/MovieCard'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';



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
    /*const getMovies = (queryType, listType) => {
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
    }*/

    //listType: upcoming, now_playing, popular, top_rated, latest, ,
    //queryType: search, movie, tv
    /*const getUrl = (queryType, listType, language, page) => {
        return `${process.env.REACT_APP_TMDB_API_URL}${queryType}/${listType}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${language}&page=${page}`;
    }*/

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

    /*const useFetch = (url) => {
        const [response, setResponse] = useState(null);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false);
        const [reFetchIndex, setReFetchIndex] = useState(0)

        const reFetch = () => setReFetchIndex((prevReFetchIndex) => prevReFetchIndex + 1)

        useEffect(() => {
            const doFetch = async () => {
                setLoading(true);
                try {
                    const resp = await fetch(url)
                    const json = await resp.json();
                    setResponse(json)
                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false);
                }
            }
            doFetch();
        }, [reFetchIndex, url])

        return { response, error, loading, reFetch  };
    }*/

    return (
        <div className="App">
            <Header
                title="Movie Search"
                search={getSearch} />
            <Container className="search">
            {
                loading && !error && (!movieData || movieData.length === 0) ? (
                    <span>loading...</span>
                ) : error ? (
                    <div className="errorMessage">{`error: ${error}`}</div>
                ) : movieData && movieData.length > 0 ? (
                    <div className="searchResult">
                        <h2 className="searchResult__title">Total "{query}" search results: {totalResults}</h2>
                        <Row>
                        {movieData.map((movie, index) => (
                            <Col className="searchResult__col" key={`${index}-${movie.title}`} xs={6} lg={3}>
                                <MovieCard key={index} movie={movie} />
                            </Col>
                        ))}
                        </Row>
                        {totalPages > page ? <div className="LoadingMore"><Button className="LoadingMore__Button" variant="danger" onClick={handleShowMore} title="Load more"><FaPlus /></Button></div> : null }
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