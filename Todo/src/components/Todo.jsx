import classes from '../Header.module.css'
export default function Todo(){
    return (
        <div>
            <div className={classes.todoitem}>
                <h3 className={classes.todoname}>Todo Item</h3>
                 <button className={classes.delelebutton}>Delete</button>
            </div>
        </div>
    )
}