import { useCalculatorContext } from "../context/CalculatorProvider";

export default () => {
  const { handleClick, handleClear, handleCalculate } = useCalculatorContext();

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "+",
    "=",
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.map((btn) => (
        <button
          key={btn}
          className={`p-4 rounded-xl text-xl font-bold ${
            btn === "0"
              ? "bg-gray-700 hover:bg-gray-600 text-white col-span-2"
              : "bg-gray-700 hover:bg-gray-600 text-white"
          } ${
            btn === "="
              ? " bg-blue-700 hover:bg-blue-600 col-span-2 "
              : "bg-gray-700 hover:bg-gray-600 text-white"
          }`}
          onClick={() => (btn === "=" ? handleCalculate() : handleClick(btn))}
        >
          {btn}
        </button>
      ))}
      <button
        className="p-4 rounded-xl text-xl font-bold bg-red-600 hover:bg-red-700 text-white col-span-2"
        onClick={handleClear}
      >
        C
      </button>
    </div>
  );
};
