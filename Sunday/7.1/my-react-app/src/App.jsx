import React, { useState } from "react";
import CustomButton from "./components/MyButton";
import "./App.css";
const colors = ["blue", "red", "yellow"];

function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div>
        {" "}
        <h1> Selected Color: {selectedColor}</h1>
      </div>
      {colors.map((color) => (
        <CustomButton
          key={color}
          color={color}
          onClick={handleButtonClick}
          className={color}
        />
      ))}
    </>
  );
}

export default App;
