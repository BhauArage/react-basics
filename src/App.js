import "./styles.css";
import Header from "./Header/Header.js";
import ToDoList from "./ToDoList/ToDoList.js";
import { useState } from "react";
import ToAddForm from "./ToDoList/ToAddForm.js";

// let tasks=["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"];
// let tasks=[];

export default function App() {
  let ListData=[
    {
      "id":1,
      "task":"Read SpringBoot",
      "complete":false
    },
    {
      "id":2,
      "task":"Complete assignments",
      "complete":false
    },
    {
      "id":3,
      "task":"Prepare breakfast",
      "complete":false
    },
    {
      "id":4,
      "task":"Sleep for 2 hours",
      "complete":false
    },
    {
      "id":5,
      "task":"Take a shower",
      "complete":false
    }
  ]
  const [tasks, setTasks]=useState(ListData)

  function handleClick(){
    // console.log(tasks);
    let newTasks=tasks.filter((task)=>!task.complete)
    setTasks(newTasks);
  };

  function addTask(input){
    let copy=[...tasks];
    copy = [
      ...copy,
      { id: tasks.length + 1, task: input, complete: false }
    ];
    console.log(copy);
    setTasks(copy);
    console.log(tasks);
  }
  return (
    <div className="App">
      <Header />
      <hr />
      <ToDoList data={tasks}/>
      <hr/>
      <button onClick={handleClick}>Remove Completed</button>
      <hr/>
      <ToAddForm onAdd={addTask}/>
    </div>
  );
}

