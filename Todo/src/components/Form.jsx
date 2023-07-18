import classes from '../Header.module.css';
import shortid from 'shortid';

export default function Form({todo, setTodo, todoList, setTodoList}){
    function handleChange(event){
        setTodo(event.target.value);
        
    }

    function handleSubmit(event){
        event.preventDefault();
        setTodoList([...todoList, {name: todo, id:shortid.generate()}]);
        console.log(todoList);
    }

    return (
        <div>
             {/* value={todo} onChange={handleChange} */}
            <form action="" onSubmit={handleSubmit} className={classes.todoform}>
                <input value={todo} onChange={handleChange} className={classes.todoinput} type="text" placeholder="Add Todo Item" />
                <button className={classes.todobutton} type="submit">Add</button>
            </form>
        </div>
    )
}
