import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./index.css"

function App() {

  let categories = ['Casual', 'Formal', 'Decent'];
  return (

    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div class="list-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>

      
      <select>
        {categories.map(category => <option>{category}</option>)}
      </select>
      
    </center>
  )
}

export default App
