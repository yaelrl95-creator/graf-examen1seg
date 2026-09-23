// Selección de la imagen
const img = document.getElementById('image');

// Selección de los botones por su ID
const xSmallBtn = document.getElementById('xSmallBtn');
const smallBtn = document.getElementById('smallBtn');
const mediumBtn = document.getElementById('mediumBtn');
const largeBtn = document.getElementById('largeBtn');
const xLargeBtn = document.getElementById('xLargeBtn');

// Eventos de clic para cambiar el ancho de la imagen
xSmallBtn.addEventListener('click', () => {
    img.style.width = '100px';
});

smallBtn.addEventListener('click', () => {
    img.style.width = '200px';
});

mediumBtn.addEventListener('click', () => {
    img.style.width = '300px';
});

largeBtn.addEventListener('click', () => {
    img.style.width = '450px';
});

xLargeBtn.addEventListener('click', () => {
    img.style.width = '600px';
});