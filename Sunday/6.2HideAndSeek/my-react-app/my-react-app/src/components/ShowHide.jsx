import { useState } from "react";

export default function ShowHide() {
  const [displayed, setDisplayed] = useState("show");
  function handleClick() {
    displayed === "show" ? setDisplayed("hide") : setDisplayed("show");
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>show/hide</button>
        <div className={"box " + displayed}></div>
      </div>
    </>
  );
}
