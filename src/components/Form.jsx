import React, { useState } from "react";
import Button from "./Button";

const Form = (props) => {
    const [texto, setTexto] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!texto.trim()) return;

    props.agregarTarea(texto);
    setTexto("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Escribí una tarea..."
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <Button type="submit" texto="Agregar tarea" />
            </form>
        );
};

export default Form;