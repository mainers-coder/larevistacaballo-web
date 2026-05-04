
// JS - AUTO TYPING ATR v4.1
const frases = [
    "Bienvenido a Revista Caballo de Fuego",
    "Para Emprendedores, Comerciantes y Profecionales",
    "Consulta Nuestras Promociones",
    "Publicaciones Especiales: Casamientos, Cumpleaños y/o Eventos",
    "Se Parte de Nuestros Anunciantes"
];

let fraseIndex = 0;
let letraIndex = 0;
let escribiendo = true;
const velocidad = 120; // Velocidad de tipeo
const pausa = 1000; // Pausa entre frases
const elemento = document.getElementById('Rvtexto-typer');

function typearATR() {
    const fraseActual = frases[fraseIndex];

    if (escribiendo) {
        // Escribiendo
        if (letraIndex < fraseActual.length) {
            elemento.textContent += fraseActual.charAt(letraIndex);
            letraIndex++;
            setTimeout(typearATR, velocidad);
        } else {
            // Terminó de escribir, pausa y borra
            escribiendo = false;
            setTimeout(typearATR, pausa);
        }
    } else {
        // Borrando
        if (letraIndex > 0) {
            elemento.textContent = fraseActual.substring(0, letraIndex - 1);
            letraIndex--;
            setTimeout(typearATR, velocidad / 2);
        } else {
            // Terminó de borrar, siguiente frase
            escribiendo = true;
            fraseIndex = (fraseIndex + 1) % frases.length;
            setTimeout(typearATR, velocidad);
        }
    }
}

// Arranca cuando carga la página
document.addEventListener('DOMContentLoaded', typearATR);



// carrusel
function moverSlide(Rvbtn, dir) {
    const c = Rvbtn.closest('.Rvcarrusel'), s = c.querySelectorAll('.Rvslide');
    let i = [...s].findIndex(x => x.classList.contains('Rvactive'));
    s[i].classList.remove('Rvactive');
    i = (i + dir + s.length) % s.length;
    s[i].classList.add('Rvactive');
}
document.querySelectorAll('[data-autoplay]').forEach(c => {
    setInterval(() => moverSlide(c.querySelector('.Rvnext'), 1), c.dataset.autoplay);
});
