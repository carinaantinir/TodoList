import { useState } from "react";
import Button from "./Button";
import conejoBinario from "../assets/conejoBinario.mp4";
import conejo from "../assets/conejo.png";

const Intro = (props) => {
    const [mostrarVideo, setMostrarVideo] = useState(false);

    return (
        <>
            {!mostrarVideo && (
                <section className="flex flex-col items-center gap-4 p-8 text-center sm:p-10">
                    <img 
                        src={conejo}
                        alt="Conejo rosado"
                        className="w-24 h-auto objet-contain"
                    />    

                    <h1 className="mb-3 text-2xl font-mono font-normal text-pink-500">
                        ¿Querés salir del bucle?
                    </h1>

                    <p className="text-pink-500 font-mono">
                        Empezá por vos.
                    </p>

                    <p className="text-pink-500 font-mono">
                        Seguí al conejo rosado.
                    </p>

                    <Button
                        texto="Seguir"
                        onClick={() => setMostrarVideo(true)}
                        className="mt-3 rounded-full border border-pink-300 bg-transparent px-8 py-3 font-mono font-normal text-pink-500 shadow-none hover:bg-pink-100"
                    />
                </section>
            )}

            {mostrarVideo && (
                <video
                    src={conejoBinario}
                    autoPlay
                    playsInline
                    onEnded={props.onEntrar}
                    className="w-full rounded-3xl object-contain"
                />
            )}
        </>
    );
};

export default Intro;