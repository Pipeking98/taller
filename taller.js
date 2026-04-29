let tareas = [];

const crearTarea = () => {
  let titulo = prompt("Escribe el título de la tarea:");
  let descripcion = prompt("Escribe la descripción:");

  if (!titulo || !descripcion) {
    console.log("Datos inválidos");
    return;
  }

  let tarea = {
    titulo: titulo,
    descripcion: descripcion,
    completada: false
  };

  tareas.push(tarea);
  console.log("Tarea creada correctamente");
};

const filtrarTareas = () => {
  let opcion = prompt(`
¿Cómo deseas filtrar?
1. Completadas
2. No completadas
3. Buscar por nombre
`);

  let filtradas = [];

  if (opcion === "1") {
    filtradas = tareas.filter(tarea => tarea.completada === true);

  } else if (opcion === "2") {
    filtradas = tareas.filter(tarea => tarea.completada === false);

  } else if (opcion === "3") {
    let nombre = prompt("Escribe el nombre o parte del nombre:");

    filtradas = tareas.filter(tarea =>
      tarea.titulo.toLowerCase().includes(nombre.toLowerCase())
    );

  } else {
    console.log("Opción inválida");
    return;
  }

  if (filtradas.length === 0) {
    console.log("No se encontraron tareas");
    return;
  }

  console.log("Resultados:");
  filtradas.forEach((tarea, index) => {
    console.log(
      `${index + 1}. ${tarea.titulo} - ${tarea.descripcion} | Estado: ${tarea.completada ? "Completada" : "Pendiente"}`
    );
  });
};

const menu = () => {
  let opcion;

  do {
    opcion = prompt(`
¿Qué deseas hacer?
1. Crear tarea
2. Filtrar tareas
3. Salir
`);

    switch (opcion) {
      case "1":
        crearTarea();
        break;

      case "2":
        filtrarTareas();
        break;

      case "3":
        console.log("Saliendo del programa");
        break;

      default:
        console.log("Opción inválida");
    }

  } while (opcion !== "3");
};

menu();