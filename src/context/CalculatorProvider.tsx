import React, { createContext, useContext, type ReactNode } from "react";
import type { CalculatorContextType } from "../types/calculator";
import { useCalculator } from "../hooks/useCalculator";

const CalculatorContext = createContext<CalculatorContextType | undefined>(
  undefined
);

export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const calculator = useCalculator();
  return (
    <CalculatorContext.Provider value={calculator}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  if (!context)
    throw new Error("useCalculatorContext must be used in CalculatorProvider");

  return context;
};
