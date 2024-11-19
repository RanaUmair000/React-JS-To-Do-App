import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./index.css"

function App() {

  return (

    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div class="list-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>

      
    </center>
  )
}

export default App
