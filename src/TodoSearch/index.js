import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

//we want to initialize our state with values we get as props
function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Buscador de TODO´s"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
