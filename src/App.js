import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Phrase from './components/Phrase';

function App() {

	const [phrase, getPhrase] = useState({});

	const consultAPI = async () => {
		const result = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

		// add API result to the state; (like a this.setState)

		getPhrase(result.data[0]);
	}

	// query API Rest
	useEffect(
		() => {
			consultAPI()
		}, []

	)

	return (
		<div className="container">
			<Phrase
				phrase={phrase}
			/>
			<button
				onClick={consultAPI}
			>New Phrase</button>
		</div>
	)
}

export default App;