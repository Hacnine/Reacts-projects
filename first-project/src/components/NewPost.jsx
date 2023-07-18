import classes from './NewPost.module.css';
function NewPost(props){


    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea name="" id="body" onChange={props.onBodyChange} required row={3}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id='name' onChange={props.onAuthorChange} required/>
            </p>
        </form>
    )
}
export default NewPost;