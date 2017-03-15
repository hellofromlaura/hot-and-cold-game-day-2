import React from 'react';
import { connect } from 'react-redux';

export function GuessCount(props) {
	return (
		<div>
			{`Guess #${props.guesses.length}!`}
		</div>
	);
};

const mapStateToProps = state => ({
	guesses: state.guesses
});

export default connect(mapStateToProps)(GuessCount);
