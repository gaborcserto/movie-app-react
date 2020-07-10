import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	appBar: {
		background: '#363636'
	},
	rightToolbar: {
		marginLeft: 'auto',
		marginRight: -12
	},
	menuButton: {
		marginRight: 16,
		marginLeft: -12
	},
	link: {
		marginLeft: '16px',
	}
})

const NavBar = () => {
	const preventDefault = (event) => event.preventDefault();
	const classes = useStyles();

	return (
		<AppBar position="sticky"
		        className={classes.appBar}>
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					className={classes.menuButton}>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" >
					Movie search
				</Typography>
				<section className={classes.rightToolbar}>
					<Link href="#"
					      onClick={preventDefault}
					      color="inherit"
					      className={classes.link}>
						Upcoming Movies
					</Link>
					<Link href="#"
					      onClick={preventDefault}
					      color="inherit"
					      className={classes.link}>
						Popular Movies
					</Link>
					<Link href="#"
					      onClick={preventDefault}
					      color="inherit"
					      className={classes.link}>
						Popular Series
					</Link>
				</section>
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;