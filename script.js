let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let numerosIntentados = [];
let maxIntentos = 10;


function adivinar() {
    let numero = parseInt(document.getElementById("numeroUsuario").value);
    let mensaje = document.getElementById("mensaje");
    let intentosTexto = document.getElementById("intentos");
    let botonreinicio = document.getElementById("reiniciar");

    if (numero < 1 || numero > 100) {
        mensaje.innerText = " El número debe estar entre 1 y 100";
        return;
    }

    if(intentos < maxIntentos)
    {

        if (isNaN(numero)) {
            mensaje.innerText = "Escribe un número válido";
            return;
        }

        intentos++;
        numerosIntentados.push(numero);

        intentosTexto.innerText = "Números intentados: " + numerosIntentados.join(", ");

        if (numero === numeroSecreto) 
        {
            mensaje.innerText = "¡Correcto! Adivinaste en " + intentos + " intentos";
            botonreinicio.style.display = "block";
            document.getElementById("gif").style.display = "block";
        } 

        else if (numero > numeroSecreto)
        {
            mensaje.innerText = "¡Incorrecto! Intenta un número más bajo.";
        } 
        else 
        {
            mensaje.innerText = "¡Incorrecto! Intenta un número más alto.";

        }
    
    }

    else 
    {
        mensaje.innerText = "Se acabaron los intentos. El número era " + numeroSecreto;
        botonreinicio.style.display = "block";
    }

}

function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    numerosIntentados = [];
    intentos = 0;

    document.getElementById("mensaje").innerText = "";
    document.getElementById("intentos").innerText = "";
    document.getElementById("numeroUsuario").value = "";
    document.getElementById("reiniciar").style.display = "none";
}


