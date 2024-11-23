import { useState } from "react";

function AddTodo({addTask}) {

    let[inputText, setText] = useState('');
    const handleNameChange = (event) =>{
        setText(event.target.value);
    }

    let[inputDate, setDate] = useState('');
    const handleDateChange = (event) =>{
        console.log(event);
        setDate(event.target.value);
    }

    return <div className="container text-center">
        <div className="row kg-row">
            <div className="col-6">
                <input type="text" placeholder="Enter Task Here" onChange={(event) => handleNameChange(event)} />
            </div>
            <div className="col-4">
                <input type="date" onChange={(event) => handleDateChange(event)} placeholder="Enter Task Here" />
            </div>
            <div className="col-2">
                <button className="btn btn-success kg-button" onClick={() => addTask(inputText, inputDate)}>Add</button>
            </div>
        </div>
    </div>
}

export default AddTodo;