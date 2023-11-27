import React from "react";

const CustomButton = ({ color, onClick, className }) => {
  return (
    <button className={className} onClick={() => onClick(color)}>
      {color}
    </button>
  );
};

export default CustomButton;
