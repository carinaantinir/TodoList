# Todo List

Aplicación web para la gestión de tareas, desarrollada con React como trabajo práctico final del curso de Desarrollo Frontend de ADA.

El proyecto permite organizar tareas personales mediante una interfaz interactiva, con funcionalidades de creación, eliminación, actualización de estado y filtrado.

## Funcionalidades

- Agregar nuevas tareas.
- Marcar tareas como completadas o pendientes.
- Eliminar tareas.
- Filtrar tareas por estado: todas, pendientes y completadas.
- Guardar las tareas en localStorage.
- Conservar la información al actualizar la página.
- Navegar entre la pantalla de inicio y la lista de tareas.
- Adaptar la interfaz a diferentes tamaños de pantalla.

## Tecnologías utilizadas

- React
- JavaScript
- Vite
- Tailwind CSS
- HTML5
- Git y GitHub
- Vercel

## Implementación

La aplicación está desarrollada mediante componentes funcionales de React, organizados según sus responsabilidades.

Se utilizaron los siguientes recursos:

- JSX para definir la estructura de los componentes.
- Props para transmitir información y funciones.
- useState para administrar el estado de la aplicación.
- useEffect para sincronizar las tareas con localStorage.
- useRef para controlar la reproducción del video de introducción.
- Renderizado condicional para mostrar diferentes vistas.
- map() para representar dinámicamente las tareas.
- Manejo de eventos para las interacciones del usuario.

La interfaz fue desarrollada con Tailwind CSS, utilizando componentes reutilizables para mantener la consistencia visual.

## Estructura de componentes

- App: componente principal.
- Intro: pantalla de inicio y animación.
- Form: formulario para ingresar tareas.
- TodoList: listado de tareas.
- Todo: representación individual de cada tarea.
- Button: componente reutilizable para los botones.
- FilterSelect: selección y aplicación de filtros.
- LluviaBinarios: efecto visual de la interfaz.

## Persistencia de datos

La aplicación utiliza localStorage para almacenar las tareas en el navegador.

Los datos se conservan al actualizar la página y se recuperan cuando el usuario vuelve a ingresar desde el mismo navegador.

No requiere una base de datos externa.


## Contexto académico

Trabajo práctico final desarrollado durante la formación en Desarrollo Frontend de ADA.

El proyecto integra conocimientos de React, JavaScript, manejo del estado, persistencia de datos, reutilización de componentes y diseño de interfaces.

## Enlaces

- GitHub: https://github.com/carinaantinir/TodoList
- Aplicación desplegada: https://todo-list-three-sigma-51.vercel.app/