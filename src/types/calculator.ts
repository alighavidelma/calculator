export interface HistoryItem {
  expression: string;
  result: string;
}

export interface CalculatorContextType {
  input: string;
  history: HistoryItem[];
  handleClick: (value: string) => void;
  handleClear: () => void;
  handleCalculate: () => void;
  clearHistory: () => void;
  setInput: (value: string) => void;
}
