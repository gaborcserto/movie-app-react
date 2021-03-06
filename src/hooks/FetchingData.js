import { useEffect, useState } from "react";
import axios from "axios";

const FetchingData = (urlParams) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	let URL = null;
	//listType: upcoming, now_playing, popular, top_rated, latest, ,
	//queryType: movie, tv
	if(urlParams.imdbID) {
		URL = `${process.env.REACT_APP_OMDB_API_URL}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${urlParams.imdbID}`;
	} else if (urlParams.detailsID) {
		URL = `${process.env.REACT_APP_TMDB_API_URL}${urlParams.queryType}/${urlParams.detailsID}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos,images,credits,seasons`;
	} else if (urlParams.creditsID) {
		URL = `${process.env.REACT_APP_TMDB_API_URL}${urlParams.queryType}/${urlParams.creditsID}/combined_credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
	} else if (urlParams.seasonsID) {
		URL = `${process.env.REACT_APP_TMDB_API_URL}${urlParams.queryType}/${urlParams.seasonsID}/season/${urlParams.season}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=episode,images`;
	} else if (urlParams.query) {
		URL = `${process.env.REACT_APP_TMDB_API_URL}search/${urlParams.queryType}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${urlParams.query}&page=${urlParams.page}`;
	} else if (urlParams.queryType && urlParams.listType) {
		URL = `${process.env.REACT_APP_TMDB_API_URL}${urlParams.queryType}/${urlParams.listType}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${urlParams.page}`;
	}


	//console.log(URL);
	useEffect(() => {
		if(URL !== null) {
			const doFetch = async () => {
				setLoading(true);
				try {
					const response = await axios.get(URL);
					setResponse(response.data);
				} catch (error) {
					setError(error)
					console.error("%cData Fetching Error:", "font-size: 18px", error);
				} finally {
					setLoading(false);
				}
			}

			doFetch();
		}
	}, [URL])

	return {response, error, loading};
}

export default FetchingData;