export default function ToDoList({data}) {
  const handleClick = event => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
      data.complete="";
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
      data.complete="complete";
    }
  }
    return (
      <p className="ToDoItem" onClick={handleClick}>{data.task}</p>
    );
  }