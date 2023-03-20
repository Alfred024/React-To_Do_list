import React from "react";
// const defaultTodos = [
//   { text: 'Leer', completed: false },
//   { text: 'Comer', completed: false },
//   { text: 'Estudiar', completed: false },
//   { text: 'Dormir', completed: false },
// ];

//El parámetro es el nombre de la colección donde guardará los items 


//Adentro de esta función se actualiza nuestro array de TODO´s
function useLocalStorage(itemName) {
    //UseState para simular estados de carga de una API
    const [loading, setLoading] = React.useState(true);
  
    //Para hacer un push al string que contiene la infi. de los todos
    const [item, setItem] = React.useState([]);
  
    React.useEffect(() => {
  
      setTimeout(() => {
        //El item name se refiere a esa "colección específica que queremos usar"
  
        //Busca la colección, para más tarde pasarla como texto a una variable que parserá el dato a un objeto de JS  para renderizarlo conforme la lógica de nuestro programa
  
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = []; 
        
        if (!localStorageItem) {
          //No existe ningún valor en esa "colección", por lo que setea el item como un String "[]"
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItem = [];
        } else {
          //Convierte a objetos JS todos los elementos de la colección
          parsedItem = JSON.parse(localStorageItem);
        }
  
        //Aquí se actualiza la info. del state con el nuevo/s TODO´s 
        setItem(parsedItem);
        setLoading(false);
      }, 1000);
  
    });
  
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    };
  
    return {
      item, //Retorna un TODO
      saveItem, //Retorna la función para guardar ese TODO
      loading  
    }; 
  }

export {useLocalStorage};