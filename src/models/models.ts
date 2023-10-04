export interface TextInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

export interface SummaryDisplayProps {
  summary: string;
}

export interface SummarizeButtonProps {
  onClick: () => void;
  disabled: boolean;
}