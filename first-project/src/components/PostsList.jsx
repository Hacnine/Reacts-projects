import Post from './Post.jsx'
import classes from './PostsList.module.css';
import NewPost from './NewPost.jsx'
import { useState } from 'react';
import Modal from './Modal.jsx';


// function randomness(){
//     const names = ['Maximilian', 'Milan'];
//     const selectName = Math.random() > 0.5 ? names[0] : names[1];
//     return selectName
//   }

  function PostsList(){
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    // const selectName1 = randomness();
    // const selectName2 = randomness();

    function changeBodyHandler(event){
      setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event){
    setEnteredAuthor(event.target.value);
}
    return (
      <>
        {/* <Modal> */}
          <NewPost 
          onBodyChange={changeBodyHandler} 
          onAuthorChange={changeAuthorHandler} 
          />
        {/* </Modal> */}

        <ul className={classes.post}>
        <Post author={enteredAuthor} body={enteredBody}/>
        <Post author={enteredAuthor} body={enteredBody}/>

        </ul>
        </>
      );
  }

  export default PostsList;