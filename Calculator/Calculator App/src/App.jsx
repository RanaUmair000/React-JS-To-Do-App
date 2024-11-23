import { useState } from "react";
import "./App.css";
import BtnContainer from "./Components/BtnContainer";

function App() {

  let values = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "9", "0", ".", "="];

  let [inputValue,setValue] = useState("");

  let calInput = (item) => {
    if(item === 'C'){
      setValue('');
    }else if(item === '='){
      let result = eval(inputValue);
      setValue(result);
    }else{
      setValue((prevValue) => prevValue + item)
    }    
  }
  
  return (
    <>
      <div class="calculator_container">
        <div class="calculator">
          <input type="text" value={inputValue} readOnly />
          <BtnContainer values={values} calInput={calInput} />
        </div>
      </div>
      
    </>
  )
}

export default App;