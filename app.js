let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

// Funcion para texto 
function asignarTextoConParametros(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

// Funcion para el numero aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    // Si ya se sortearon todos los numeros

    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoConParametros(`p`,`ya se sortearon todos los numeros posibles`)
    } else {
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

console.log(numeroSecreto);
// Funcion para verificar los intentos
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById(`valorDeUsuario`).value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoConParametros(`p`, `Has acertado el numero secreto! en ${intentos} ${(intentos === 1) ? `intento.` : `intentos.`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        //Sino acierta el usuario.
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoConParametros(`p`, `El numero secreto es mayor!`);
        } else {
            asignarTextoConParametros(`p`, `El numero secreto es menor!`);
        }
        intentos++;
        limpiarInputUsuario();
    }
    return;
}

// Funcion Limpiar Input
function limpiarInputUsuario() {
    document.getElementById(`valorDeUsuario`).value = ``;
}

// Funcion para boton reiniciar
function reiniciarJuego() {
    limpiarInputUsuario();
    condicionesIniciales();
    document.getElementById(`reiniciar`).setAttribute(`disabled`, `true`);
}

// Funcion de la condiciones iniciales del juego
function condicionesIniciales() {
    asignarTextoConParametros(`h1`, `Juego del numero secreto`);
    asignarTextoConParametros(`p`, `Escribe un Numero del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

condicionesIniciales();
