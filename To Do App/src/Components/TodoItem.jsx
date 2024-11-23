let TodoItem = ({todolist, deleteItem}) => {

    let todoName = 'Buy Milk';
    let todoDate = '4/10/2023';

    return <div class="container">

        {todolist.map(task => 
            <div class="row kg-row">
                <div class="col-6">
                    {task.TaskName}
                </div>
                <div class="col-4">
                    {task.Date}
                </div>
                <div class="col-2">
                    <button class="btn btn-danger kg-button" onClick={() => deleteItem(task.TaskName)}>Delete</button>
                </div>
            </div>
        )}
    </div>
}
export default TodoItem;