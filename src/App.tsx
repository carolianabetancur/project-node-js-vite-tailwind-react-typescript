import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="App p-12">
        <h1 className="tracking-wide text-gray-600 text-3xl font-bold">
          Custom Utility Colors Using Tailwind `extend`
        </h1>
        <div className="flex flex-wrap gap-4 mx-auto w-full flex justify-center p-12 rounded-md">
          <div className="flex items-center justify-center text-gray-800 bg-primary-100 w-40 h-40 rounded-md shadow-xl">
            Lemon Yellow
          </div>
          <div className="flex items-center justify-center text-gray-100 bg-secondary-100 w-40 h-40 rounded-md shadow-xl">
            Rose Pink
          </div>
          <div className="flex items-center justify-center text-gray-100 bg-accent-100 w-40 h-40 rounded-md shadow-xl">
            Blood Red
          </div>
          <div className="flex items-center justify-center text-gray-700 bg-neutralSoft-100 w-40 h-40 rounded-md shadow-xl">
            Parrot Feather
          </div>
          <div className="flex items-center justify-center text-gray-100 bg-backgroundSoft-100 w-40 h-40 rounded-md shadow-xl">
            Purple Extended
          </div>
        </div>
      </div>
      <div className="App p-12">
        <h1 className="tracking-wide text-gray-600 text-3xl font-bold">
          Custom Utility Colors Using Tailwind `extend`
        </h1>
        <div className="mt-12 flex justify-center gap-12">
          <div>
            <button type="button" className="btn-primary">
              Small Button
            </button>
          </div>
        </div>
      </div>
      <div className="card w-20 h-20">Card</div>
    </>
  );
}

export default App;
