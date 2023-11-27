import React, { useState } from "react";

const CheckboxForm = () => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: true,
    checkbox3: false,
    checkbox4: true,
  });

  const texts = ["I read", "I accept", "Weekly", "Offers"];

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any actions with the checkbox state here
    console.log("Checkbox state:", checkboxes);
  };

  return (
    <form onSubmit={handleSubmit}>
      {texts.map((text, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={checkboxes[`checkbox${index + 1}`]}
            onChange={() => handleCheckboxChange(`checkbox${index + 1}`)}
          />
          {text}
        </label>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckboxForm;
