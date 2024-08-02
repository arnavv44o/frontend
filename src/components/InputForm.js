// src/components/InputForm.js
import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ onResponse }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Validate JSON format
      const parsedInput = JSON.parse(jsonInput);

      // Send POST request to backend API
      const response = await axios.post('http://localhost:3001/', parsedInput);
      onResponse(response.data);
    } catch (err) {
      console.error('Submission Error:', err.response || err);
      setError('Invalid JSON or API error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        rows="10"
        cols="50"
        placeholder='Enter JSON like {"data": ["M", "1", "334", "4", "B"]}'
      />
      <button type="submit">Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default InputForm;
