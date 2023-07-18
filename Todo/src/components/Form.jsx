import classes from '../Header.module.css';
<<<<<<< HEAD
import shortid from 'shortid';
=======
>>>>>>> 1149adda5a5fec8918ffc5ec9b635c70402146eb

export default function Form({todo, setTodo, todoList, setTodoList}){
    function handleChange(event){
        setTodo(event.target.value);
        
    }

    function handleSubmit(event){
        event.preventDefault();
<<<<<<< HEAD
        setTodoList([...todoList, {name: todo, id:shortid.generate()}]);
=======
        setTodoList([...todoList, todo]);
>>>>>>> 1149adda5a5fec8918ffc5ec9b635c70402146eb
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
