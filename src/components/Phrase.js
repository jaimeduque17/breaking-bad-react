import React from 'react';

// (props) => props.phrase.quote or ({phrase}) => phrase.quote
function Phrase({ phrase }) {
    return (
        <div className="phrase">
            <h1>{phrase.quote}</h1>
            <p>- {phrase.author}</p>
        </div>
    )
}

export default Phrase;