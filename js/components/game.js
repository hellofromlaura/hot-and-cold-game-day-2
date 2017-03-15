import React from 'react';
import Form from './form';
import GuessCount from './guess-count';
import GuessHistory from './guess-history';
import Feedback from './feedback';
import Modal from './modal';
import * as actions from '../actions';
import { connect } from 'react-redux';

export class Game extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount(){
		this.props.dispatch(actions.newGame());
	}

	render() {
		return (
			<div>
				<nav>
					<ul>
						<li>
							<a href="#" onClick={() => this.props.dispatch(actions.toggleInfoModal())}>How to Play</a>
						</li>
						<li>
							<a href="#" onClick={() => this.props.dispatch(actions.newGame())}>New Game</a>
						</li>
					</ul>
				</nav>
				<div id="modal">
					<Modal />
				</div>
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
