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
				{/* <div id="modal">
					<div>
						<h3>What do I do?</h3>
						<div>
							<p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
							<ul>
								<li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
								<li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
								<li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
							</ul>
							<p>So, Are you ready?</p>
							<a href="#" onClick={}>Got It!</a>
						</div>
					</div>
				</div> */}
				<h1>HOT or COLD</h1>
				<div id="gameBox">
					<Feedback />
					<Form />
					<GuessCount />
					<GuessHistory />
				</div>
			</div>
		);
	}
}

export default connect()(Game);
