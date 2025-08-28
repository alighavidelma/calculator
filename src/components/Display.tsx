import { useCalculatorContext } from "../context/CalculatorProvider";

export default () => {
  const { input } = useCalculatorContext();

  return (
    <div className="bg-black text-white text-right p-4 rounded mb-4 text-2xl font-mono">
      {input || "0"}
    </div>
  );
};
