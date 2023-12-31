import React from 'react';
import { SummarizeButtonProps } from '../../models/models';
import './SummarizeButton.scss';

const SummarizeButton: React.FC<SummarizeButtonProps> = ({ onClick, disabled }) => {
  return (
    <div className="button-container">
      <button onClick={onClick} disabled={disabled}>
        Summarize
      </button>
    </div>
  );
};

export default SummarizeButton;
