// Arreglo de mensajes para mostrar
const mensajes = [
    "Mi ratoncita",
    "Mi pichoncita",
    "Mi todo",
    "Mi chaparrita"
];

// Función para mostrar mensajes
function mostrarMensaje(indice) {
    const elementoMensaje = document.getElementById('mensaje-amor');
    elementoMensaje.textContent = mensajes[indice];
    elementoMensaje.style.display = 'block'; // Muestra el mensaje
}
