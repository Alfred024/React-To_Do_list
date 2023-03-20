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
                            
                        </TodoList>
                    )}
                </TodoContext.Consumer>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export  {AppUI};