import React, { useState, useEffect, useCallback } from 'react';

const CircleRating = props => {
	const [progressBar, setProgressBar] = useState(0);
	const INITIAL_OFFSET = 25;
	const circleConfig = {
		viewBox: '0 0 38 38',
		x: '19',
		y: '19',
		radio: '15.91549430918954'
	};

	let chartNumber = progressBar;
	let percentage = props.percentage

	if (props.decimal) {
		chartNumber = progressBar/10;
		percentage = props.percentage * 10;
	}

	const pace = percentage / props.speed;

	const updatePercentage = useCallback(() => {
		let isSubscribed = true;
		if ((percentage > 0 || progressBar < percentage) && isSubscribed ) {
			setTimeout(() => {
				setProgressBar(progressBar + 1);
			}, pace);
		}

		return () => isSubscribed = false;
	}, [progressBar, percentage, pace]);

	useEffect(() => {
		if (chartNumber < props.percentage) updatePercentage();
	}, [chartNumber, props.percentage, updatePercentage]);


	return (
		<React.Fragment>
		<figure className="circleRating">
			<svg viewBox={circleConfig.viewBox}>
				<circle
					className="circleRating__donut-ring"
					cx={circleConfig.x}
					cy={circleConfig.y}
					r={circleConfig.radio}
					fill="transparent"
					stroke="ghostwhite"
					strokeWidth={1}
					strokeDasharray={props.trailSpaced ? 1 : 0}
				/>

				<circle
					className="circleRating__donut-segment"
					cx={circleConfig.x}
					cy={circleConfig.y}
					r={circleConfig.radio}
					fill="transparent"
					stroke="black"
					strokeWidth={1}
					strokeDasharray={`${progressBar} ${100 - progressBar}`}
					strokeDashoffset={INITIAL_OFFSET}
				/>
			</svg>

			<figcaption className="circleRating__chart">
				<p className="circleRating__chart__number">
					{chartNumber}
				</p>
			</figcaption>
		</figure>
		<p className="circleRating__label">
			{props.innerText}
		</p>
		</React.Fragment>
	);
};

export default CircleRating;