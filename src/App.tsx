import Display from "./components/Display";
import History from "./components/History";
import Keyboard from "./components/Keyboard";

export default () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-96">
        <Display />
        <Keyboard />
        <History />
      </div>
    </div>
  );
};
