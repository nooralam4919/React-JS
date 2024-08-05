
import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 m-13">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

