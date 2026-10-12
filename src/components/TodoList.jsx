import React from "react";
import Todo from "./Todo";
import conejo from "../assets/conejo.png";

const TodoList = (props) => {
    return (
        <section>
            <div className="relative mt-8 mb-6 flex items-center justify-center">
                <img
                    src={conejo}
                    alt="Conejo rosado"
                    className="absolute left-0 w-14 sm:w-16 opacity-80"
            />

            <h2 className="text-center text-xl font-medium text-pink-500">
                Lista de tareas
            </h2>
        </div>

        {props.tareas.length === 0 && (
            <p className="py-6 text-center text-pink-500">
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
        </section>
    );
};

export default TodoList;