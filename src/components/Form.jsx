import React, { useState } from "react";
import Button from "./Button";

const Form = (props) => {
    const [texto, setTexto] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    props.agregarTarea(texto);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Escribí una tarea..."
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <Button type="submit" texto="Agregar" />
            </form>
        );
};

export default Form;