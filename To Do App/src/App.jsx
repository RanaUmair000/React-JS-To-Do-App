import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";
import "./index.css"

function App() {

  let todolist = [{
    TaskName : "Buy Milk",
    Date : "4/10/2023"
  },
  {
    TaskName : "Go To School",
    Date : "4/10/2023"
  }];

  return (

    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div class="list-container">
        <TodoItem todolist = {todolist} />
      </div>
    </center>
  )
}

export default App
