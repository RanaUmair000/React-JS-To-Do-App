import { useState } from "react";
import "./App.css";
import BtnContainer from "./Components/BtnContainer";

function App() {
  const values = [
    "C", "/", "*", "-",
    "7", "8", "9", "+",
    "4", "5", "6", "",
    "1", "2", "3", "",
    "0", ".", "=", ""
  ];
  const [inputValue, setValue] = useState("");

  const calInput = (item) => {
    if (item === "C") {
      setValue("");
    } else if (item === "=") {
      try {
        let result = eval(inputValue);
        setValue(result.toString());
      } catch {
        setValue("Error");
      }
    } else {
      setValue((prevValue) => prevValue + item);
    }
  };

  return (
    <div className="main-container">
      <h1 className="heading">React Calculator</h1>
      <div className="calculator">
        <input className="display" type="text" value={inputValue} readOnly />
        <BtnContainer values={values} calInput={calInput} />
      </div>
    </div>
  );
}

export default App;
