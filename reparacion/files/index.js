let index = 0;

function moverSlider(direccion) {
    const track = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    index += direccion;

    // Hacer que el slider sea infinito
    if (index < 0) {
        index = totalSlides - 1; // Va al último slide
    } else if (index >= totalSlides) {
        index = 0; // Regresa al primer slide
    }

    let desplazamiento = -index * 100; // Mueve el slider en porcentaje
    track.style.transform = `translateX(${desplazamiento}%)`;
}

// Función para volver atrás
function volverAtras() {
    window.history.back();
}
