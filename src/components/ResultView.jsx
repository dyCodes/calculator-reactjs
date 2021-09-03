import React from 'react';
import PropTypes from 'prop-types';

function ResultView({ history, output }) {
	// CHANGE COLOR TO RED IF ERROR OCCURRED
	let colorStyle = {
		color: output === 'Error' ? '#f11' : '#fff'
	};

	return (
		<div style={colorStyle} className="result">
			<div className="history">{history}</div>
			<div className="output">{output}</div>
		</div>
	);
}

ResultView.propTypes = {
	history: PropTypes.string,
	output: PropTypes.string
};

export default ResultView;
