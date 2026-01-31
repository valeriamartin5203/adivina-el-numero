let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let numerosIntentados = [];


function adivinar() {
    let numero = parseInt(document.getElementById("numeroUsuario").value);
    let mensaje = document.getElementById("mensaje");
    let intentosTexto = document.getElementById("intentos");

    if (numero < 1 || numero > 100) {
        mensaje.innerText = "❌ El número debe estar entre 1 y 100";
        return;
    }



    if (isNaN(numero)) {
        mensaje.innerText = "❌ Escribe un número válido";
        return;
    }

    intentos++;
    numerosIntentados.push(numero);

    intentosTexto.innerText = "Números intentados: " + numerosIntentados.join(", ");

    if (numero === numeroSecreto) {
        mensaje.innerText = "🎉 ¡Correcto! Adivinaste en " + intentos + " intentos";
    } else if (numero > numeroSecreto) {
        mensaje.innerText = "📉 Muy alto";
    } else {
        mensaje.innerText = "📈 Muy bajo";
    }
}

