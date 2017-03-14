import React from 'react';
import Form from './form';
import GuessCount from './guess-count';
import GuessHistory from './guess-history';
import Feedback from './feedback';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>HOT or COLD</h1>
				<Feedback />
				<Form />
				{/* <GuessCount />
				<GuessHistory /> */}
			</div>
		);
	}
}
