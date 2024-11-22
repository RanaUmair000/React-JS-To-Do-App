import Error from "./Components/Error";
import MainList from "./Components/Main List";
import Container from "./Components/Container";

function inputFunction(event){
  console.log(event.target.value);
}

function App() {

  let foods = ['Milk', 'Mutton', 'Butter', 'Yogurt'];

  return (
    <Container>
      <h1>FoodItems List</h1>

      <input type="text" placeholder="Enter Something Here" onChange={(event) => inputFunction(event)} />

      <Error items={foods} />
      <MainList items={foods} />
    </Container>
  )
}

export default App
