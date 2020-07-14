import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = (props) => {
	return (
		<AppBar>
			<Toolbar>
				<Typography variant="h2">{props.title}</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;