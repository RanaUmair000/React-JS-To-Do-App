import Error from "./Components/Error";
import MainList from "./Components/Main List";

function App() {

  let foods = ['Milk', 'Mutton', 'Butter', 'Yogurt'];

  return (
    <>
      <h1>FoodItems List</h1>

      <Error items={foods} />
      <MainList items={foods} />
    </>
  )
}

export default App
