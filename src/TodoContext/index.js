import React from "react";
import { useLocalStorage } from "./useLocalStorage";

/*Herramienta de Reatc para crear los providers*/
const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item: todos, 
        saveItem: saveTodos,
        loading
      } = useLocalStorage('Collection1');
    
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

    return(
        /*Envuelve toda la app*/
        /*Debe tener la info. de cualquier componente de la App*/
        <TodoContext.Provider 
          value={{
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
          }}
        >
          {/* Logramos juntat a todos los componentes y comportamientos que mandemos a través del Provider */}
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};