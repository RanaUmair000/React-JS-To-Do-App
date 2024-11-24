import { useRef } from "react";

function AddTodo({addTask}) {

    const textInputElement = useRef();
    const dateInputElement = useRef();

    

    return <form className="container text-center">
        <div className="row kg-row">
            <div className="col-6">
                <input type="text" placeholder="Enter Task Here" ref={textInputElement} />
            </div>
            <div className="col-4">
                <input type="date" placeholder="Enter Task Here" ref={dateInputElement} />
            </div>
            <div className="col-2">
                <button className="btn btn-success kg-button" onClick={(event) => addTask(event, textInputElement, dateInputElement)}>Add</button>
            </div>
        </div>
    </form>
}

export default AddTodo;