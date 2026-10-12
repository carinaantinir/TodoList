const LluviaBinarios = ({ variant = "medio" }) => {
    const configs = {
            fondo: {
            step: 3,
            offset: 1,
            fontSize: 7,
            opacity: 0.07,
            speed: 180,
        },
            exterior: {
            step: 3,
            offset: 1,
            fontSize: 12,
            opacity: 0.10,
            speed: 180,
        },
            medio: {
            step: 3,
            offset: 3,
            fontSize: 16,
            opacity: 0.25,
            speed: 150,
        },
            frente: {
            step: 3,
            offset: 5,
            fontSize: 16,
            opacity: 0.45,
            speed: 120,
        },
};

    const config = configs[variant];

    const binarios = Array(38).fill(
    "100111010100111010100111010100111010100111010100111010"
    .repeat(6)
    );

    return (
        <div className="binary-rain pointer-event-none" aria-hidden="true">
        {binarios.map((binario, index) => (
        <span
            key={index}
            className="binary-column"
            style={{
                left: `${(index * config.step + config.offset) % 100}%`,
                fontSize: `${config.fontSize}px`,
                opacity: config.opacity,
                animationDuration: `${config.speed + ((index * 3) % 7)}s`,
                animationDelay: `${-index * 0.7}s`,
            }}
        >
                <span className="binary-trail">
                    {binario}
                </span>
            </span>
            ))}
        </div>
    );
};

export default LluviaBinarios;