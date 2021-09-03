import React from 'react';
import PropTypes from 'prop-types';

const keys = [
	{ id: 'clear', class: 'func', value: 'C' },
	{ id: 'clearBack', class: 'func', value: 'CE' },
	{ id: 'multiply', class: 'oper', value: '*' },
	{ id: '9', class: 'num', value: '9' },
	{ id: '8', class: 'num', value: '8' },
	{ id: '7', class: 'num', value: '7' },
	{ id: 'minus', class: 'oper', value: '-' },
	{ id: '6', class: 'num', value: '6' },
	{ id: '5', class: 'num', value: '5' },
	{ id: '4', class: 'num', value: '4' },
	{ id: 'add', class: 'oper', value: '+' },
	{ id: '3', class: 'num', value: '3' },
	{ id: '2', class: 'num', value: '2' },
	{ id: '1', class: 'num', value: '1' },
	{ id: 'divide', class: 'oper', value: '/' },
	{ id: '0', class: 'num', value: '0' },
	{ id: 'dot', class: 'num', value: '.' },
	{ id: '%', class: 'num', value: '%' },
	{ id: 'calc', class: 'func', value: '=' }
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
