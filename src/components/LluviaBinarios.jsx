import {useMemo} from "react";

const LluviaBinarios = ({ variant = "medio" }) => {
    const configs = {
            fondo: {
            step: 3,
            offset: 1,
            fontSize: 18,
            opacity: 0.07,
            speed: 180,
        },
            exterior: {
            step: 3,
            offset: 1,
            fontSize: 18,
            opacity: 0.10,
            speed: 180,
        },
            medio: {
            step: 3,
            offset: 3,
            fontSize: 18,
            opacity: 0.25,
            speed: 150,
        },
            frente: {
            step: 3,
            offset: 5,
            fontSize: 18,
            opacity: 0.45,
            speed: 120,
        },
};

    const config = configs[variant];

    const binarios = Array(6).fill(
    "100111010100111010100111010100111010100111010100111010"
    .repeat(6)
    );
    const finalesAleatorios = useMemo(
    () => binarios.map(() => (Math.random() < 0.5 ? "0" : "1")),
    []
);

    return (
        <div className="binary-rain pointer-event-none" aria-hidden="true">
        {binarios.map((binario, index) => (
        <span
            key={index}
            className="binary-column font-mono "
            style={{
                left: `${((index + 0.5) / binarios.length) * 100}%`,
                fontSize: `${config.fontSize}px`,
                animationDuration: `${config.speed + ((index * 2) % 100)}s`,
                animationDelay: `${-index * 0.7}s`,
            }}
        >
                <span className="binary-trail" 
                    style={{ opacity: config.opacity }}
                > 
                    {binario.slice(0, -1)} 
                </span> 

                <span className="binary-pearl">
                    {finalesAleatorios[index]}
                </span>
                </span>
            ))}
        </div>
    );
};

export default LluviaBinarios;