import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function Form(props) {
	let guessInput;

	return (
		<form onSubmit={(e) => {
			e.preventDefault();
			props.dispatch(actions.makeGuess(guessInput.value));
			guessInput.value = '';
		}}>
			<input type="text" placeholder="Enter your Guess" ref={ref => guessInput = ref} />
			<button type="submit">Guess</button>
		</form>
	)
}

export default connect()(Form);
