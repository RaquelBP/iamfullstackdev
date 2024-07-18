import { useState } from "react";


const InputCreate = ({onAddedTarea}) => {
    const [tituloTarea, setTituloTarea] = useState("");

    const inputName = (e) => {
        setTituloTarea(e.target.value);
    }

    const urlApi = 'http://localhost:3000/create';
    const payload = { title: tituloTarea };

    const addTask = async () => {
        try {
            const response = await fetch(urlApi, {
                method: 'POST', // Método HTTP
                headers: {
                  'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                },
                body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
              })
              if (response.ok) {
                const newTask = response.json();
                onAddedTarea(newTask);
                setTituloTarea("");
            }


        } catch (error) {
        console.log(error);
        }
    };

    return (
      <>
        <input type="text" placeholder="Añadir nueva tarea..." value={tituloTarea} onChange={inputName}/>
        <button onClick={addTask}>Agregar</button>
      </>
   
    );
  };
  
  export default InputCreate;
  