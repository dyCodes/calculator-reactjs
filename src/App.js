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
	const onClick = (id, type, value) => {
		// CONVERT TO STRING
		output = output.toString();
		let lastInput = output.slice(-1);

		if (type === 'func') {
			if (id === 'clear') {
				resetOutput(true);
			} else if (id === 'clearBack') {
				output = output.slice(0, -1);
				updateState();
			} else if (id === 'calc') {
				calculate(lastInput);
			}
		} else {
			displayInput(type, value, lastInput);
		}
	};

	// RESET VALUES
	const resetOutput = display => {
		history = '';
		output = '';
		if (display) {
			updateState();
		}
	};

	const displayInput = (type, value, lastInput) => {
		if (type === 'oper') {
			// REPLACE OPERATOR SYMBOL IF LASTINPUT IS OPERATOR
			symbols.includes(lastInput)
				? (output = output.slice(0, -1) + value)
				: (output += value);
		} else {
			output += value;
		}
		updateState();
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
