"use strict";

//video - starter/pauser intro-videoen når man scroller
const AVIdListe = ["intro"];
const AVIndholdsliste = [];

AVIndholdsliste[0] = document.getElementById("intro")

window.addEventListener("scroll", function () {
    aktiverMultimedier();
});

//Slideshow - taget fra W3Schools
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // skifter billed hver 4 sek.
}

// Tilføher +1 eller -1 værdi til det antal vine man ønsker at købe
const antal = document.getElementById("antal");
document.getElementById("op").addEventListener("click", function () {
    antal.value = parseInt(antal.value) + 1;
})

document.getElementById("ned").addEventListener("click", function () {
    antal.value = parseInt(antal.value) - 1;
})
