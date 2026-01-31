let numeroSecreto = Math.floor(Math.random() * 100) + 1;

function adivinar() {
    let numero = parseInt(document.getElementById("numeroUsuario").value);
    let mensaje = document.getElementById("mensaje");

    if (numero === numeroSecreto) {
        mensaje.innerText = "🎉 ¡Correcto! Adivinaste el número";
    } else if (numero > numeroSecreto) {
        mensaje.innerText = "📉 Muy alto";
    } else {
        mensaje.innerText = "📈 Muy bajo";
    }
}
document.querySelector("button").addEventListener("click", adivinar);