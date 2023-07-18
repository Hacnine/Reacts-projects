import classes from '../Header.module.css'
<<<<<<< HEAD
export default function Todo({todoItem, todoList, setTodoList}){
    function deleteTodo (){
        setTodoList(todoList.filter((item) => item.id !== todoItem.id));

    }
    return (
        <div>
            <div className={classes.todoitem}>
                <h3 className={classes.todoname}>{todoItem.name}</h3>
                 <button key={todoItem.id} onClick={deleteTodo} className={classes.deletebtn}>Delete</button>
=======
export default function Todo(){
    return (
        <div>
            <div className={classes.todoitem}>
                <h3 className={classes.todoname}>Todo Item</h3>
                 <button className={classes.delelebutton}>Delete</button>
>>>>>>> 1149adda5a5fec8918ffc5ec9b635c70402146eb
            </div>
        </div>
    )
}