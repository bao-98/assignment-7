import React from "react";

const types = ["general", "knock-knock", "programming", "dad"];

const TypeChooser = ({ selectedType, setSelectedType }) => {
  return (
    <div>
      <h2>Choose a joke type:</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {types.map((type) => (
          <li
            key={type}
            style={{
              display: "inline-block",
              margin: "0 10px",
              padding: "5px 10px",
              cursor: "pointer",
              backgroundColor: selectedType === type ? "lightblue" : "transparent",
              border: "1px solid black",
              borderRadius: "5px"
            }}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TypeChooser;
