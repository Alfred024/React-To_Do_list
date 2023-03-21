import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState("");

    const {
      addTodo,
      setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) =>{
      const textArea = event.target.value;
      setNewTodoValue(textArea);
    }

    const onCancel = () =>{
      setOpenModal(false);
    }

    const onAdd = (event) =>{
      event.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
    }

    return(
      <form onSubmit={onAdd}>
        <label>Título</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Inserte su nuevo Todo"
        />
        <div className="buttonContainer">
          <button
            className="button-cancel"
            onClick={onCancel}
            type="button"
          >Cancelar</button>
          <button
            className="button-add"
            type="submit"
          >Añadir</button>
        </div>
      </form>
    );
}

export {TodoForm};