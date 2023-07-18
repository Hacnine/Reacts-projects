import { useState } from 'react'
import Header from './components/Header';
import Form from './components/Form';
<<<<<<< HEAD
// import TodoList from './components/TodoList';
import TodoList from './components/TodoList';
=======
import Todo from './components/Todo'
>>>>>>> 1149adda5a5fec8918ffc5ec9b635c70402146eb

function App() {
 const [todo, setTodo] = useState("");
 const [todoList, setTodoList] = useState([]);

  return (
    <>
      <div className='Apps'>
       <Header/>
       <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></Form>
<<<<<<< HEAD
       <TodoList  todoList={todoList} setTodoList={setTodoList} />
=======
       <Todo/>
>>>>>>> 1149adda5a5fec8918ffc5ec9b635c70402146eb

      </div>
    </>
  )
}

export default App
