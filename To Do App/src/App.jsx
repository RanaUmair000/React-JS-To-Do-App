import AppName from "./Components/AppName";

function App() {

  return (

    <center class="todo-container">
      <AppName />
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter Task Here" />
          </div>
          <div class="col-4">
            <input type="date" placeholder="Enter Task Here" />
          </div>
          <div class="col-2">
            <button class="btn btn-success">Add</button>
          </div>
        </div>
        
        <div class="row">
          <div class="col-6">
            Buy Milk
          </div>
          <div class="col-4">
            4/10/2023
          </div>
          <div class="col-2">
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            Go To College
          </div>
          <div class="col-4">
            4/10/2023
          </div>
          <div class="col-2">
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>

      </div>
    </center>
  )
}

export default App
