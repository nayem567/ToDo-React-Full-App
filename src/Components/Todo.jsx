import { FaTrashAlt } from "react-icons/fa";
import style from "./todo.module.css";

function Todo(props) {
  const { title, desc, id } = props.newToDo;

  const handleClick = (id) =>{
    props.onRemoveTodo(id);
  }

  return (
    <article className={style.articleContainer}>
      <div className={style.textContainer}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className={style.buttonContainer}>
        <button onClick={() =>{
          handleClick(id);
        }}>
          <FaTrashAlt style={{ color: "red" }} />
        </button>
      </div>
    </article>
  );
}
export default Todo;
