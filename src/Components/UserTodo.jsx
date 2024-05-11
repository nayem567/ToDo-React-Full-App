import { useState } from "react";
import style from "./userTodo.module.css";

function UserTodo(props) {
  const [userToDo, setUserToDo] = useState({ title: "", desc: "" });

  const { title, desc } = userToDo;

  const handleChange = (event) => {
    const name = event.target.name;
    setUserToDo((oldTodo) => {
        return{...oldTodo, [name]: event.target.value }
    })
}

  const formHandler = (event) => {
    event.preventDefault();
    props.onAddToDo(userToDo);
    setUserToDo({title:"", desc:""});
  };


  return (
    <form className={style.formStyle} onSubmit={formHandler}>
      <div className={style["form-field"]}>
        <label htmlFor="title" className={style["form-field label"]}>
          Title :{" "}
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="title"
          name="title"
          className={style["form-field input"]}
          value={title}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc" className={style["form-field label"]}>
          Description :{" "}
        </label>
        <textarea
          onChange={handleChange}
          name="desc"
          id="desc"
          className={style["form-field textarea"]}
          value={desc}
        ></textarea>
      </div>
      <button  type="submit">
        Add todo
      </button>
    </form>
  );
}

export default UserTodo;
