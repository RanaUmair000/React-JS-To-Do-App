import Error from "./Components/Error";
import MainList from "./Components/Main List";
import Container from "./Components/Container";

function App() {

  let foods = ['Milk', 'Mutton', 'Butter', 'Yogurt'];

  return (
    <Container>
      <h1>FoodItems List</h1>

      <Error items={foods} />
      <MainList items={foods} />
    </Container>
  )
}

export default App
