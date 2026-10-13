import React from "react";
import { Check, Trash2 } from "lucide-react";

const Todo = (props) => {
    return (
        <div
            className={`mb-3 flex w-fit max-w-full items-center gap-2 rounded-full px-3 py2
        
            ${
            props.tarea.completada
                ? "translate-y-0 bg-pink-100/60 shadow-inner"
                : "-translate-y-1 bg-white/80 shadow-lg shadow-pink-300/40"
            }`}
        >
            <p
            className={`min-w-0 break-words font-mono text-pink-600 transition-all duration-300 ${
                props.tarea.completada
                ? "line-through opacity-50"
                : ""
            }`}
        >
            {props.tarea.texto}
            </p>

            <div className="flex shrink-0 items-center gap-2">
                <button
                    type="button"
                    onClick={() => props.completarTarea(props.tarea.id)}
                    aria-label={
                props.tarea.completada
                    ? "Marcar tarea como pendiente"
                    : "Completar tarea"
                }
                    aria-pressed={props.tarea.completada}
                    className={`cursor-pointer rounded-lg p-2 text-pink-500
                    transition-all duration-300
                    ${
                props.tarea.completada
                    ? "bg-pink-200 shadow-inner"
                    : "bg-white shadow-md shadow-pink-300/40 hover:bg-pink-100 hover:-translate-y-0.5"
                }`}
            >
                <Check
                    size={20}
                    strokeWidth={props.tarea.completada ? 3 : 2}
            />
                </button>

                <button
                type="button"
                onClick={() => props.eliminarTarea(props.tarea.id)}
                aria-label="Eliminar tarea"
                className="cursor-pointer rounded-lg p-2 text-pink-500 transition-all duration-200 hover:bg-pink-100 hover:scale-105"
            >
                <Trash2 size={20} />
                </button>
            </div>
        </div>
    );
};

export default Todo;