import { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import Intro from "./components/Intro";

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

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "completadas") return tarea.completada;
    if (filtro === "pendientes") return !tarea.completada;

    return true;
  });

  return (
    <>
      {pantallaInicio && (
        <Intro onEntrar={() => setPantallaInicio(false)} />
      )}

      {!pantallaInicio && (
        <main>
          <h1>Todo List</h1>

          <Button
            texto="Volver al inicio"
            onClick={() => setPantallaInicio(true)}
          />

          <Form agregarTarea={agregarTarea} />

          <div>
            <Button
              texto="Todas"
              onClick={() => setFiltro("todas")}
            />

            <Button
              texto="Pendientes"
              onClick={() => setFiltro("pendientes")}
            />

            <Button
              texto="Completadas"
              onClick={() => setFiltro("completadas")}
            />
          </div>

          <TodoList
            tareas={tareasFiltradas}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        </main>
      )}
    </>
  );
}

export default App;