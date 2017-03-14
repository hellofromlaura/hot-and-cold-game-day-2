import React from 'react';
import { connect } from 'react-redux';

export function Feedback(props) {
	return (
		{feedback}
	);
};

const mapStateToProps = (state, props) => ({
	feedback: state
});

export default connect(mapStateToProps)(Feedback);
