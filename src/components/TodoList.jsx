

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    return (
        <div>
            {props.tareas.length === 0 && ( 
                <p>
                    {props.filtro === "pendientes"
                        ? "No hay tareas pendientes"
                        : props.filtro === "completadas"
                        ? "No hay tareas completadas"
                        : "Todavía no hay tareas"}
                </p>
            )}

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

export default TodoList;