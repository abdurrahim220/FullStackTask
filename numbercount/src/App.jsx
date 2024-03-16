import { useState } from "react";

import "./App.css";

function App() {
  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold font-serif my-5">
        Showing 1 to 100 vertical in desktop view and horizontally in mobile
        view
      </h1>

      <div className="flex flex-col md:flex-row flex-wrap gap-5 justify-center">
        {numbers.map((num, idx) => (
          <div className="" key={idx}>
            <p className="text-black font-extrabold font-serif text-2xl rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 ">
              {num}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
