import React from 'react';
import Loading from '../Loading';

const noDetails = () => {
	return (
		<React.Fragment>
			<h2 className="mainContent__title">Details</h2>
			<Loading />
		</React.Fragment>
	)
}

export default noDetails;
