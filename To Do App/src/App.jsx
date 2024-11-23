import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";
import Error from "./Components/Error";
import "./index.css"
import {useState} from 'react';

function App() {

  let [tasks, settasks] = useState([{
    TaskName : "Buy Milk",
    Date : "4/10/2023"
  },
  {
    TaskName : "Go To School",
    Date : "4/10/2023"
  }]);

  const addTask = (inputTask, inputDate) => {
    console.log(inputDate);
    settasks([...tasks, {TaskName: inputTask, Date: inputDate}]);
  }

  const deleteItem = (itemToDelete) => {
    let newItems = tasks.filter((item) => item.TaskName !== itemToDelete);
    settasks(newItems);
  }

  return (

    <center className="todo-container">
      <AppName />
      <AddTodo addTask={addTask} />
      {tasks.length === 0 && <Error />}
      <div className="list-container">
        <TodoItem todolist = {tasks} deleteItem={deleteItem} />
      </div>
    </center>
  )
}

export default App
