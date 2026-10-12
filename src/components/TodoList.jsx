

import React from 'react'
import Todo from "./Todo";

const TodoList = (props) => {
    return (
    <div>
        {props.tareas.map((tarea) => (
        <Todo 
            key={tarea.id} 
            tarea={tarea} 
        completarTarea={props.completarTarea}
        eliminarTarea={props.eliminarTarea}
        />
        ))}
    </div>
    );
};

export default TodoList