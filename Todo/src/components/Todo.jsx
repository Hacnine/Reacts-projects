import classes from '../Header.module.css'
export default function Todo({todoItem, todoList, setTodoList}){
    function deleteTodo (){
        setTodoList(todoList.filter((item) => item.id !== todoItem.id));

    }
    return (
        <div>
            <div className={classes.todoitem}>
                <h3 className={classes.todoname}>{todoItem.name}</h3>
                 <button key={todoItem.id} onClick={deleteTodo} className={classes.deletebtn}>Delete</button>
            </div>
        </div>
    )
}