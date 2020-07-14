import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const MovieCard = ({ movie }) => {
	let poster;
	if(movie.poster_path === null) {
		poster = 'https://via.placeholder.com/200x300?text=No+Image';
	} else {
		poster = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
	}

	return (
		<Card className="movie">
			<CardActionArea>
				<CardMedia
					component="img"
					alt={`The movie titled: ${movie.title}`}
					image={poster}
					title={movie.title}
				/>
				<CardContent>
					<Typography gutterBottom variant="body1">
						{movie.title}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};


export default MovieCard;