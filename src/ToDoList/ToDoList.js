import ToDoItem from "./ToDoItem"

export default function ToDoList({data}) {
  console.log(data.length)
  if(data.length===0){
    return <ToDoItem data={{"task":<i>"Nothing much to do but sleep!!"</i>}}/>
  }
    return (
      <ol>
        {data.map((task)=><li key={task.id}><ToDoItem data={task}/></li>)}
      </ol>
    );
  }