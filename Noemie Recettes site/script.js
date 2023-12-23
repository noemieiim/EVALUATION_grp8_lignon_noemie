

"use strict";

// Définition de la fonction tourneImage
function tourneImage() {
 
    // Récupération de l'attribut 'src' de l'élément avec l'ID 'carousel'
    let monImage = document.getElementById("carousel").getAttribute('src');

    // Utilisation d'une structure switch pour changer l'image en fonction de l'image actuelle
    switch(monImage) {
        case 'img/bol.webp':
            // Si l'image actuelle est 'imgCarousel/a.jpg', change la source vers 'imgCarousel/b.jpg'
            document.getElementById('carousel').src='img/bretagna.jpg';
            break;
        case 'img/bretagna.jpg':
            // Si l'image actuelle est 'imgCarousel/b.jpg', change la source vers 'imgCarousel/c.jpg'
            document.getElementById('carousel').src='img/tipiak.webp';
            break;
        case 'img/tipiak.webp':
            // Si l'image actuelle est 'imgCarousel/c.jpg', change la source vers 'imgCarousel/d.jpg'
            document.getElementById('carousel').src='img/bol.webp';
            break;
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Récupération de l'élément avec l'ID 'carousel' 
let bt = document.getElementById('carousel');

// Ajout d'un écouteur d'événements pour le clic sur l'élément avec l'ID 'carousel'
bt.addEventListener('click', tourneImage);