import { useEffect, useState } from "react";
import type { HistoryItem } from "../types/calculator";

export function useCalculator() {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    const saved = localStorage.getItem("calc-history");
    return saved ? JSON.parse(saved) : [];
  });

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input).toString();
      const newHistory = [...history, { expression: input, result }];
      setHistory(newHistory);
      setInput(result);
    } catch (error) {
      setInput("Error");
    }
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("calc-history");
  };

  // keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/^[0-9+\-*/.]$/.test(e.key)) {
        handleClick(e.key);
      } else if (e.key === "Enter") {
        e.preventDefault();
        handleCalculate();
      } else if (e.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key === "Escape") {
        handleClear();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input, history]);

  //sync localstorage
  useEffect(() => {
    localStorage.setItem("calc-history", JSON.stringify(history));
  }, [history]);

  return {
    input,
    history,
    handleClick,
    handleClear,
    handleCalculate,
    clearHistory,
    setInput,
  };
}
