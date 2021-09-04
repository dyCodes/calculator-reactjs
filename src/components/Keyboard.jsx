import React from 'react';
import PropTypes from 'prop-types';

const keys = [
	{ id: 'clear', class: 'function', value: 'C' },
	{ id: 'clearBack', class: 'function', value: 'CE' },
	{ id: 'multiply', class: 'operator', value: '*' },
	{ id: '9', class: 'number', value: '9' },
	{ id: '8', class: 'number', value: '8' },
	{ id: '7', class: 'number', value: '7' },
	{ id: 'minus', class: 'operator', value: '-' },
	{ id: '6', class: 'number', value: '6' },
	{ id: '5', class: 'number', value: '5' },
	{ id: '4', class: 'number', value: '4' },
	{ id: 'add', class: 'operator', value: '+' },
	{ id: '3', class: 'number', value: '3' },
	{ id: '2', class: 'number', value: '2' },
	{ id: '1', class: 'number', value: '1' },
	{ id: 'divide', class: 'operator', value: '/' },
	{ id: 'dot', class: 'number', value: '.' },
	{ id: '0', class: 'number', value: '0' },
	{ id: '%', class: 'number', value: '%' },
	{ id: 'calc', class: 'function', value: '=' }
];

function Keyboard({ onClick }) {
	return (
		<div className="keyboard">
			{keys.map(key => (
				<div
					className="btn"
					id={key.id}
					key={key.id}
					onClick={() => onClick(key.id, key.class, key.value)}
				>
					{key.value}
				</div>
			))}
		</div>
	);
}

Keyboard.propTypes = {
	onClick: PropTypes.func
};

export default Keyboard;
