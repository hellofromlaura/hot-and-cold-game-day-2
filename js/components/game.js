import React from 'react';
import Form from './form';
import GuessCount from './guess-count';
import GuessHistory from './guess-history';
import Feedback from './feedback';
import * as actions from '../actions';
import { connect } from 'react-redux';

export class Game extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<nav>
					<ul>
						<li>
							<a href="#">How to Play</a>
						</li>
						<li>
							<a href="#" onClick={() => this.props.dispatch(actions.newGame())}>New Game</a>
						</li>
					</ul>
				</nav>
				<h1>HOT or COLD</h1>
				<Feedback />
				<Form />
				<GuessCount />
				<GuessHistory />
			</div>
		);
	}
}

export default connect()(Game);
