import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Post from './components/Post.jsx'
import viteLogo from '/vite.svg'
import './App.css'
import PostsList from './components/PostsList'

// function randomness(){
//   const names = ['Maximilian', 'Milan'];
//   const selectName = Math.random() > 0.5 ? names[0] : names[1];
//   return selectName
// }

function App() {

  return (
    <main>
    <PostsList/>
    </main>
  );
}
export default App;

// const names = ['Maximilian', 'Milan'];
// function Post() {
    
//     const selectName = Math.random() > 0.5 ? names[0] : names[1];
// return (
// <div>
//     <p>{selectName}</p>
//     <p>React is boring.</p>
// </div>
// );
// }

// export default Post;

//
