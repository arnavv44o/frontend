import React, { useState } from 'react';
import axios from 'axios';
import MultiSelectDropdown from './components/MultiSelectDropdown';

const App = () => {
    const [filters, setFilters] = useState([]);
    const [inputData, setInputData] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setInputData(event.target.value);
    };

    const handleSubmit = async () => {
        // Convert the input data to an array
        const parsedData = inputData
            .split(',')
            .map(item => item.trim())
            .filter(item => item !== '');

        if (parsedData.length === 0) {
            setError('Input data is empty');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/bfhl', {
                data: parsedData
            });
            setData(response.data);
            setError('');
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data');
        }
    };

    return (
        <div>
            <h1>Multi-Select Dropdown Example</h1>
            
            <div>
                <input
                    type="text"
                    value={inputData}
                    onChange={handleInputChange}
                    placeholder='Enter data (e.g., "M,1,334,4,B")'
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            
            <MultiSelectDropdown onChange={(selectedValues) => setFilters(selectedValues)} />
            
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <pre>{data && JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default App;
