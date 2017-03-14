import React from 'react';
import { connect } from 'react-redux';

export function Feedback(props) {
	return (
		<div>
			{props.feedback}
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	feedback: state.feedback
});

export default connect(mapStateToProps)(Feedback);
