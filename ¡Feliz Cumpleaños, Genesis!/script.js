document.getElementById("giftButton").addEventListener("click", function() {
    this.style.display = "none"; // Oculta el botón
    showConfetti(); // Llama a la función para el confeti

    // Mensajes sorpresa
    const messages = [
        "¡Que todos tus deseos se hagan realidad! 🌟",
        "Eres increíble, ¡no cambies nunca!",
        "Gracias por ser una persona tan especial 🌸",
        "¡Que este nuevo año esté lleno de alegría y amor!"
    ];
    let index = 0;
    const interval = setInterval(() => {
        if (index < messages.length) {
            alert(messages[index]);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 2000);
});

function showConfetti() {
    const confettiContainer = document.querySelector(".confetti-container");
}
