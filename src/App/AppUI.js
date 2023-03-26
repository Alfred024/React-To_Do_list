import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { EmptyTodos } from "../EmptyTodos";
import { TodosLoading } from '../TodosLoading';

function AppUI() {

    //Otra forma de pasar un context 
    const {
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);


    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>

          {/* El provider está en el archivo de la Carpeta del TodoContext*/}
          <TodoList>
              {/* Usamos el operador && como una forma de expresar un "entonces..." (es una mamada) */}
              {/* {error && <p>Hay un error...</p>} */}
              
              {loading && <TodosLoading />}
              {(!loading && !searchedTodos.length) && <EmptyTodos />}
              {searchedTodos.map(todo => (
              <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
              />
              ))}
          </TodoList>

          {
            
            !!openModal && (
              <Modal>
                <TodoForm>
                </TodoForm>
              </Modal>
            )
          }
          <CreateTodoButton 
            openModal = {openModal}
            setOpenModal = {setOpenModal}
          />
        </React.Fragment>
    );
}

export  {AppUI};