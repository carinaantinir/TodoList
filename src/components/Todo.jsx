import React from 'react'
import Button from "./Button"


const Todo = (props) => {
    return (
        <div>
            <p>{props.tarea.texto}</p>s
        
        <Button 
            texto="Completar"
            onClick={() => props.completarTarea(props.tarea.id)} />

        <Button                                                
                texto="Eliminar"                                   
                onClick={() => props.eliminarTarea(props.tarea.id)} />

        
                
        </div>
    )
}

export default Todo