import { useState } from "react";
import ListItems from "./ListItems";

export default function Todo(){
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (event) =>{
        setTodo(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        let tempArray = todoList;
        tempArray.push(todo);
        setTodoList(tempArray);
        setTodo("");
        console.log(todoList);
    }
    return <div onSubmit={handleSubmit}>
        <form action="">
            <input type="text" value={todo} onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
        {todoList.map((item) => (
            <ListItems key={item} name={item}></ListItems>
        ))}
    </div>;
}