import React, { useState } from 'react';
import './App.css';
import ResultView from './components/ResultView';
import Keyboard from './components/Keyboard';

let output = '';
let history = '';
let symbols = ['*', '-', '+', '/'];

function App() {
	const [state, setState] = useState({
		history: '',
		displayValue: ''
	});
	const updateState = () => {
		setState({ history: history.toString(), displayValue: output.toString() });
	};

	// ONCLICK BUTTON CLICK
	const onClick = (id, keyType, value) => {
		// CONVERT TO STRING
		output = output.toString();
		// GET LAST INPUT VALUE
		let lastInput = output.slice(-1);

		switch (keyType) {
			case 'function':
				functionKey(id, lastInput);
				break;
			case 'operator':
				operatorKey(value, lastInput);
				break;
			case 'number':
				numberKey(value, lastInput);
				break;
			default:
				return;
		}
	};
	const functionKey = (id, lastInput) => {
		const resetOutput = display => {
			// RESET VALUES
			history = '';
			output = '';
			// Update state if display == true
			display && updateState();
		};
		const calculate = lastInput => {
			// CHECK IF LAST INPUT IS NUMBER AND OUTPUT IS NOT EMPTY
			if (!symbols.includes(lastInput) && output) {
				try {
					history = output;
					output = eval(output.replace(/%/g, '*0.01'));
					output = Number.isInteger(output) ? output : output.toFixed(3);
					updateState();
					// UPDATE HISTORY TO RESULT AND RESET OUTPUT
					history = output;
					output = '';
				} catch (error) {
					output = 'Error';
					updateState();
					resetOutput();
				}
			}
		};

		switch (id) {
			case 'clear':
				resetOutput(true);
				break;
			case 'clearBack':
				output = output.slice(0, -1);
				updateState();
				break;
			case 'calc':
				calculate(lastInput);
				break;
			default:
				return;
		}
	};
	const operatorKey = (value, lastInput) => {
		// PREVENT STARTING WITH AN OPERATOR
		if (output === '' && value !== '-') {
			return;
		} else {
			// REPLACE OPERATOR SYMBOL IF LASTINPUT IS OPERATOR
			symbols.includes(lastInput)
				? (output = output.slice(0, -1) + value)
				: (output += value);
		}
		updateState();
	};
	const numberKey = (value, lastInput) => {
		// PREVENT ENTERING . OR % MULTIPY TIMES
		if (value === '.' || value === '%') {
			// PREVENT STARTING WITH '%'
			if (output === '' && value === '%') return;
			lastInput === '.' || lastInput === '%' || (output += value);
		} else {
			output += value;
		}
		updateState();
	};

	return (
		<div className="app">
			<div className="container">
				<ResultView history={state.history} output={state.displayValue} />
				<Keyboard onClick={onClick} />
			</div>
		</div>
	);
}

export default App;
