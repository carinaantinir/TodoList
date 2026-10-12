import React from "react";

const Button = (props) => {
    return (
        <button
            type={props.type || "button"}
            onClick={props.onClick}
        >
            {props.texto}
        </button>
    );
};

export default Button;