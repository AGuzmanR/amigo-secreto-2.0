// Lista para guardar los nombres
let nombres = [];

// Función para agregar nombre a la lista
function agregarNombre() {
    let campoNombre = document.getElementById("nombre");
    let nombre = campoNombre.value;

    // Validar si está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
    } else {
        // Agregar a la lista
        nombres.push(nombre);
        campoNombre.value = ""; // limpiar el campo
        mostrarLista();
    }
}

// Función para mostrar la lista de nombres
function mostrarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";

    // Recorrer la lista de nombres y mostrarlos
    for (let i = 0; i < nombres.length; i++) {
        let item = document.createElement("li");
        item.textContent = nombres[i];
        lista.appendChild(item);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        let amigoSorteado = nombres[indiceAleatorio];
        document.getElementById("resultado").textContent = "Amigo secreto: " + amigoSorteado;
    }
}