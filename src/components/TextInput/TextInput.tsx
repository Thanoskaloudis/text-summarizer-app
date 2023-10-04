import React from 'react';
import { TextInputProps } from '../../models/models';
import './TextInput.scss';

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return (
    <div className="input-container">
      <label htmlFor="text-input">Enter Text:</label>
      <textarea
        id="text-input"
        rows={8}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your text here..."
      />
    </div>
  );
};

export default TextInput;
