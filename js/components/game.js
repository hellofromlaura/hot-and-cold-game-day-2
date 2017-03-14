import React from 'react';
import Form from './form';
import GuessCount from './guess-count';
import GuessHistory from './guess-history';
import Feedback from './feedback';

export class Game extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Feedback />
				<Form />
				<GuessCount />
				<GuessHistory />
			</div>
		);
	}
}
