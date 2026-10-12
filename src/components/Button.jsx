
import React from "react";

const Button = (props) => {
    return (
        <button
            type={props.type || "button"}
            onClick={props.onClick}
            className={`rounded-xl bg-pink-300 px-3 py-2 font-semibold
            text-pink-600 shadow-md shadow-pink-300/40
            transition hover:scale-105 hover:bg-pink-400
            active:scale-95 cursor-pointer ${props.className || ""}`}
        >
            {props.texto}
            {props.children}
        </button>
    );
};

export default Button;