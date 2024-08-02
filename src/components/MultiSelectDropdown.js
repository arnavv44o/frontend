// src/components/MultiSelectDropdown.js
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'numbers', label: 'Numbers' },
    { value: 'highestAlphabet', label: 'Highest Alphabet' }
];

const MultiSelectDropdown = ({ onChange }) => {
    const handleChange = (selectedOptions) => {
        const selectedValues = selectedOptions.map(option => option.value);
        onChange(selectedValues);
    };

    return (
        <Select
            isMulti
            name="filters"
            options={options}
            onChange={handleChange}
            className="basic-multi-select"
            classNamePrefix="select"
        />
    );
};

export default MultiSelectDropdown;
