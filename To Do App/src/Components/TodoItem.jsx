let TodoItem = ({todolist, deleteItem}) => {

    return <div className="container">

        {todolist.map((task, index) => 
            <div key={index} className="row kg-row">
                <div className="col-6">
                    {task.TaskName}
                </div>
                <div className="col-4">
                    {task.Date}
                </div>
                <div className="col-2">
                    <button className="btn btn-danger kg-button" onClick={() => deleteItem(task.TaskName)}>Delete</button>
                </div>
            </div>
        )}
    </div>
}
export default TodoItem;