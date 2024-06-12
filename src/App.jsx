import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    { name: "Red", hex: "red" },
    { name: "Orange", hex: "orange" },
    { name: "Yellow", hex: "yellow" },
    { name: "Green", hex: "green" },
    { name: "Blue", hex: "blue" },
    { name: "Indigo", hex: "indigo" },
    { name: "Violet", hex: "violet" },
    { name: "Pink", hex: "pink" },
    { name: "Brown", hex: "brown" },
    { name: "Gray", hex: "gray" },
  ];

  return (
    <>
      <div
        className="w-full h-full duration-200"
        style={{ backgroundColor: color, width: "100vw", height: "100vh" }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 overflow-x-auto bg-white py-2 px-3 rounded-3xl">
          {colors.map((colorObj) => (
            <button
              key={colorObj.name}
              onClick={() => setColor(colorObj.hex)}
              className="outline-none px-4 py-2 rounded-full mx-2 text-white"
              style={{ backgroundColor: colorObj.hex }}
            >
              {colorObj.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
