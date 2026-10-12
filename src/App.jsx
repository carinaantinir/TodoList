import { useEffect, useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import Intro from "./components/Intro";
import LluviaBinarios from "./components/LluviaBinarios";

function App() {
  const [pantallaInicio, setPantallaInicio] = useState(true);

  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const [filtro, setFiltro] = useState("todas");

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
      completada: false,
    };

    setTareas([...tareas, nuevaTarea]);
  };

  const completarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const tareasFiltradas = tareas.filter((tarea) =>
    filtro === "completadas"
      ? tarea.completada
      : filtro === "pendientes"
      ? !tarea.completada
      : true
  );

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-pink-50 to-pink-200 p-4">

      <LluviaBinarios variant="exterior" />

      <div className="relative z-10 w-full max-w-xl overflow-visible rounded-3xl bg-white/70 shadow-2xl backdrop-blur-md">

        {pantallaInicio && (
          <Intro onEntrar={() => setPantallaInicio(false)} />
        )}

        {!pantallaInicio && (
          <main className="dashboard-content relative p-5 sm:p-8">

            <LluviaBinarios variant="fondo" />
            <LluviaBinarios variant="medio" />
            <LluviaBinarios variant="frente" />

            <h1 className="mb-6 text-center text-4xl font-light tracking-wide text-pink-600">
              Todo List
            </h1>

            <Form
              agregarTarea={agregarTarea}
              filtro={filtro}
              setFiltro={setFiltro}
            />

            <TodoList
              tareas={tareasFiltradas}
              filtro={filtro}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />

            <div className="mt-6 flex justify-center">
              <Button
                texto="Regresar al comienzo"
                onClick={() => setPantallaInicio(true)}
                className="rounded-full border border-pink-300 bg-transparent px-5 font-normal text-pink-500 shadow-none hover:bg-pink-100"
              />
            </div>

          </main>
        )}

      </div>
    </div>
  );
}

export default App;