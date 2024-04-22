// Establece la fecha y hora de destino
var targetDate = new Date("2024-04-27T18:00:00").getTime();

function updateCounter(counterElement) {
    var now = new Date().getTime(); // Obtiene la fecha y hora actuales
    var distance = targetDate - now; // Calcula la diferencia entre la fecha y hora de destino y las actuales

    // Calcula las horas, minutos y segundos restantes
    var hours = Math.floor(distance / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Asegura que las horas, minutos y segundos siempre tengan dos dígitos
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Actualiza el texto del contador
    counterElement.textContent = 'Horas: ' + hours + ', Minutos: ' + minutes + ', Segundos: ' + seconds;

    // Si la cuenta regresiva ha terminado, muestra un mensaje
    if (distance < 0) {
        clearInterval(interval);
        counterElement.textContent = "EXPIRED";
    }
}

// Actualiza el contador cada segundo
var interval = setInterval(function() {
    var counterElement = document.querySelector('.contador'); // Selecciona el elemento del contador
    updateCounter(counterElement);
}, 1000);

// Hace que la función updateCounter esté disponible globalmente
window.updateCounter = updateCounter;