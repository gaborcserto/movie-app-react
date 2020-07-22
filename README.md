This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[![React](https://badgen.net/badge/React/v16.13.1/61dafb)](https://reactjs.org)
[![React Icons](https://badgen.net/badge/ReactIcons/v3.10.1/e91e63)](https://react-icons.github.io/react-icons)
[![React Bootstrap](https://badgen.net/badge/ReactBootstrap/v1.2.2/61dafb)](https://react-bootstrap.github.io)
[![Axios](https://badgen.net/badge/Axios/v0.19.2/1971c2)](https://github.com/axios/axios)

# Movie search app (React)
 This app displays weather information from The Movie Database API.

![Home page](https://github.com/gaborcserto/movie-app-react/blob/master/screen.png)

## Getting started

- Sign up over at [themoviedb.org](https://developers.themoviedb.org/3/getting-started/introduction) and [http://www.omdbapi.com](http://www.omdbapi.com/apikey.aspx) to get an API key.
- Fork the project and clone it locally.
- Create a file at the root of the project called `.env` with the following contents:

```sh
REACT_APP_OMDB_API_URL = 'http://www.omdbapi.com/'
REACT_APP_OMDB_API_KEY = The API key you obtained from omdbapi.com
REACT_APP_TMDB_API_URL = 'https://api.themoviedb.org/3/'
REACT_APP_TMDB_API_KEY = The API key you obtained from themoviedb.org
```