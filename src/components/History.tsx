import { useCalculatorContext } from "../context/CalculatorProvider";

export default () => {
  const { history, clearHistory } = useCalculatorContext();

  return (
    <div className="bg-gray-800 p-4 rounded-xl mt-4 max-h-48 overflow-y-auto">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white font-bold">History</h2>
        {history.length > 0 && (
          <button
            className="text-red-400 hover:text-red-600 text-sm"
            onClick={clearHistory}
          >
            Clear
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="text-gray-400">No history yet</p>
      ) : (
        <ul className="text-white space-y-1">
          {history.map((item, index) => (
            <li
              key={index}
              className="flex justify-between border-b border-b-gray-700"
            >
              <span>{item.expression}</span>
              <span>{item.result}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
