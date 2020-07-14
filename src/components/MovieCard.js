import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const MovieCard = ({ movie }) => {
	let poster;
	if(movie.poster_path === null) {
		poster = 'https://via.placeholder.com/200x300?text=No+Image';
	} else {
		poster = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
	}

	return (
		/*<div className="movie">
			<h2>{movie.title}</h2>
			<div>
				<img
					width="200"
					alt={`The movie titled: ${movie.title}`}
					src={poster}
				/>
			</div>
			<p>({movie.release_date})</p>
		</div>*/

	<Card className="movie">
		<CardActionArea>
			<CardMedia
				component="img"
				alt={`The movie titled: ${movie.title}`}
				image={poster}
				title={movie.title}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h5">
					{movie.title}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{movie.release_date}
				</Typography>
			</CardContent>
		</CardActionArea>
		<CardActions>
			<Button size="small" color="primary">
				More
			</Button>
		</CardActions>
	</Card>
	);
};


export default MovieCard;