import { useContext } from "react";
import { ToDoItemsContext } from "../store/ToDoItemsContext";

function TodoItem({ deleteItem }) {
  const todolist = useContext(ToDoItemsContext);

  return (
    <div className="container">
      {todolist.map((task, index) => (
        <div key={index} className="row kg-row task-row align-items-center">
          <div className="col-6">
            <strong>{task.TaskName}</strong>
          </div>
          <div className="col-4 text-muted">
            {task.Date}
          </div>
          <div className="col-2">
            <button className="btn btn-danger kg-button" onClick={() => deleteItem(task.TaskName)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
