import Loading from "../Loading";
import React from "react";

const noDetails = () => {
	return (
		<React.Fragment>
			<h2 className="mainContent__title">Details</h2>
			<Loading />
		</React.Fragment>
	)
}

export default noDetails;
