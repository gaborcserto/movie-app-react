import { useEffect, useState } from "react";
import axios from "axios";

const FetchingData = (urlParams) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	let URL;
	//listType: upcoming, now_playing, popular, top_rated, latest, ,
	//queryType: search, movie, tv
	if(urlParams.OMDB) {
		URL = `${process.env.REACT_APP_OMDB_API_URL}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${urlParams.imdbID}`;
	} else if (urlParams.detailsID) {
		URL = `${process.env.REACT_APP_TMDB_API_URL}${urlParams.queryType}/${urlParams.detailsID}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${urlParams.language}`;
	} else {
		URL = `${process.env.REACT_APP_TMDB_API_URL}${urlParams.queryType}/${urlParams.listType}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${urlParams.language}&page=${urlParams.page}`;
	}


	console.log(URL);
	useEffect(() => {
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
	}, [URL])

	return {response, error, loading};
}

export default FetchingData;