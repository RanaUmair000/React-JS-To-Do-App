import "./App.css";
import BtnContainer from "./Components/BtnContainer";

function App() {

  let values = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '9', '0', '.'];

  return (
    <>
      <div class="calculator_container">
        <div class="calculator">
          <input type="number" />
          <BtnContainer values={values} />
        </div>
      </div>
      
    </>
  )
}

export default App;