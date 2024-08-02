// src/components/ResponseDisplay.js
import React from 'react';

const ResponseDisplay = ({ data, selectedOptions }) => {
  if (!data.is_success) return <p>Failed to fetch data</p>;

  const renderData = (key) => {
    return selectedOptions.includes(key) ? data[key].join(', ') : '';
  };

  return (
    <div>
      <p>Numbers: {renderData('numbers')}</p>
      <p>Alphabets: {renderData('alphabets')}</p>
      <p>Highest Alphabet: {renderData('highest_alphabet')}</p>
    </div>
  );
};

export default ResponseDisplay;
