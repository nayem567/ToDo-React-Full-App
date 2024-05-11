import Todo from "./Todo";
import style from './todos.module.css';

function Todos(props) {
  return (
    <section className={style.todosContainer}>
      {props.passNewToDo.map((todo) => (
        <Todo newToDo={todo} key={todo.id} onRemoveTodo={props.onRemoveTodo} />
      ))}
    
    </section>
  );
}

export default Todos;

