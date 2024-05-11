import Todos from "./Todos";
import UserTodo from "./UserTodo";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";



function Home() {

  const [newToDo, setNewToDo] = useState([]);

  const handleAddTodo = (todo) => {
    setNewToDo((prevTodos) => {
      return [...prevTodos, {id: uuidv4() , ...todo}];
    })
  }

  const handleRemoveTodo = (id) => {



    setNewToDo((prevTodos) => {
      const filterTodos = prevTodos.filter((todo) => todo.id !==id );
      return filterTodos;
    })
  }

  return (
    <div >
      <h1 style={{textAlign:"center"}}>ToDo App</h1>
      <UserTodo onAddToDo={handleAddTodo}/>
      <Todos passNewToDo={newToDo} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}

export default Home;
