import { useState } from "react";

export default function ToAddForm({onAdd}){
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(userInput);
        setUserInput("");
      };
    
      const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
      };

    return(
        <>
        <h4>Add a new task</h4>
        <form onSubmit={handleSubmit} > 
            <input type="text" placeholder="add a new task" value={userInput} onChange={handleChange}/>
            <button type="submit">Add task</button>
        </form>
        {/* <form onSubmit={onAdd}>
            <input value={userInput} placeholder="new task"/><button>Add task</button>
        </form> */}
        </>
    )
}