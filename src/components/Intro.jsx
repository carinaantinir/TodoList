
import { useState } from "react";
import Button from "./Button";
import conejo from "../assets/conejo.png";
import conejoBinario from "../assets/conejoBinario.mp4";

const Intro = (props) => {
    const [mostrarVideo, setMostrarVideo] = useState(false);
    
    return (
        <>
            {!mostrarVideo && (
                <div>
                    <img src={conejo} alt="Conejo rosado" />
            
                    <Button
                        texto="Seguir al conejo"
                        onClick={() => setMostrarVideo(true)}
                    />
                </div>
            )}
    
            {mostrarVideo && (
                <video
                    src={conejoBinario}
                    autoPlay
                    playsInline
                    onEnded={props.onEntrar}
            />
        )}
        </>
    );
};
    
    export  default Intro;