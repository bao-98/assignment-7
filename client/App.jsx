import React, { useState } from "react";
import TypeChooser from "./TypeChooser.jsx";
import Joke from "./Joke.jsx";

const App = () => {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <div>
      <h1>Joke Generator</h1>
      <TypeChooser selectedType={selectedType} setSelectedType={setSelectedType} />
      <Joke selectedType={selectedType} />
    </div>
  );
};

export default App;
