import React from 'react';
import { SummaryDisplayProps } from '../../models/models';
import './SummaryDisplay.scss';

const SummaryDisplay: React.FC<SummaryDisplayProps> = ({ summary }) => {
  return (
    <div className="summary-container">
      <h2>Summary:</h2>
      <p>{summary}</p>
    </div>
  );
};

export default SummaryDisplay;
