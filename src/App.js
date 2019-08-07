import React from "react";
import "./App.css";
import Image from "../src/components/Image";
import Description from "../src/components/Description"

function App() {
  return (
    <div className="App">
      <h1>NASA Photo Of The Day</h1>
      <Image />
      <Description />
    </div>
  );
}

export default App;
