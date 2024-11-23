import Error from "./Components/Error";
import MainList from "./Components/Main List";
import Container from "./Components/Container";
import './App.css';
import { useState } from "react";

function App() {


  let[foods, setItems] = useState([]);

  function keyDownFunc(event){
    if(event.key == 'Enter'){
      let inputItem = event.target.value;
      event.target.value = '';
      let newItems = [...foods, inputItem];
      setItems(newItems);
    }
  }

  return (
    <Container>
      <h1>FoodItems List</h1>
      <div class="input-sec">
        <input type="text" placeholder="Enter Something Here" onKeyDown={(event) => keyDownFunc(event)} />
        <button class="btn btn-info">Add</button>
      </div>
      <Error items={foods} /> 
      <MainList items={foods} />
    </Container>
  )
}

export default App
