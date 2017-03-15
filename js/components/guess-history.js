import React from 'react';
import { connect } from 'react-redux';

export function GuessHistory(props) {
  const listItems = props.guesses.map((guess,index) => {
    return <li key={index}>{guess}</li>
  })

  return (
		<ul id="guessList">
			{listItems}
		</ul>
	);
};

const mapStateToProps = state => ({
	guesses: state.guesses
});

export default connect(mapStateToProps)(GuessHistory);
