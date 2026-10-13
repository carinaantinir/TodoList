import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";
import Button from "./Button";

const FilterSelect = ({ filtro, setFiltro }) => {
  const [abierto, setAbierto] = useState(false);
  const [posicion, setPosicion] = useState(null);

  const botonRef = useRef(null);

  const opciones = [
    { texto: "Todas", valor: "todas" },
    { texto: "Pendientes", valor: "pendientes" },
    { texto: "Completadas", valor: "completadas" },
  ];

  const seleccionarFiltro = (opcion) => {
    setFiltro(opcion.valor);
    setAbierto(false);
  };

  const seleccionada = opciones.find(
    (opcion) => opcion.valor === filtro
  );

  const alternarDesplegable = () => {
    if (!abierto) {
      const rectangulo = botonRef.current.getBoundingClientRect();

      setPosicion({
        arriba: rectangulo.bottom + 8,
        izquierda: rectangulo.left,
        ancho: rectangulo.width,
      });
    }

    setAbierto(!abierto);
  };

  return (
    <div className="relative w-36 shrink-0">
      <div ref={botonRef}>
        <Button
          type="button"
          onClick={alternarDesplegable}
          className="h-10 w-full text-sm"
        >
          <span className="inline-flex items-center justify-center gap-2">
            {seleccionada?.texto || "Todas"}
            <ChevronDown size={18} />
          </span>
        </Button>
      </div>

      {abierto &&
        posicion &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: posicion.arriba,
              left: posicion.izquierda,
              width: posicion.ancho,
              zIndex: 9999,
            }}
            className="overflow-hidden rounded-3xl border border-pink-200/40 bg-pink-100/10 shadow-lg shadow-pink-300/40"
          >
            {opciones.map((opcion) => (
              <button
                key={opcion.valor}
                type="button"
                onClick={() => seleccionarFiltro(opcion)}
                className={`block w-full cursor-pointer px-3 py-2 text-left font-mono text-sm text-pink-600 transition-colors duration-200 hover:!bg-pink-300 active:!bg-pink-400  ${
                  opcion.valor === filtro
                    ? "bg-pink-200/50"
                    : "bg-pink-50/30"
                }`}
              >
                {opcion.texto}
              </button>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
};

export default FilterSelect;