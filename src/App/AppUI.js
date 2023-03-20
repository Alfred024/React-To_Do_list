import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>

                {/* El provider está en el archivo de la Carpeta del TodoContext*/}
                <TodoContext.Consumer>
                    {({
                        loading,
                        searchedTodos, 
                        completeTodo,
                        deleteTodo
                    }) => (
                        <TodoList>
                            {/* Usamos el operador && como una forma de expresar un "entonces..." (es una mamada) */}
                            {/* {error && <p>Hay un error...</p>} */}
                            {loading && <p>Cargando...</p>}
                            {(!loading && !searchedTodos.length) && <p>No hay todos, crea uno</p>}
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
                    )}
                </TodoContext.Consumer>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export  {AppUI};