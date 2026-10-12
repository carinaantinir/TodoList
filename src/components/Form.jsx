import { useState } from "react";
import { ListTodo } from "lucide-react";
import Button from "./Button";
import FilterSelect from "./FilterSelect";

const Form = (props) => {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!texto.trim()) return;

    props.agregarTarea(texto);
    setTexto("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-20 mb-6 flex flex-wrap items-center gap-2 sm:flex-nowrap"
    >
      <div className="relative min-w-0 flex-[1_1_100%] sm:flex-1">
        <ListTodo
          size={20}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-pink-500"
        />

        <input
          type="text"
          placeholder="     Escribe tu tarea..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          className="w-full rounded-full border border-pink-100 bg-white/80 py-4 sm:py-3 pl-12 pr-4 text-pink-600 shadow-lg shadow-pink-300/30 outline-none placeholder:text-pink-400 focus:ring-2 focus:ring-pink-300"
        />
      </div>

      <Button
        type="submit"
        texto="Agregar tarea"
        className="h-10 shrink-0 whitespace-nowrap px-2 text-xs sm:text-sm"
      />

      <FilterSelect
        filtro={props.filtro}
        setFiltro={props.setFiltro}
      />
    </form>
  );
};

export default Form;