"use strict";

//video - starter/pauser intro-videoen når man scroller
const AVIdListe = ["intro"];
const AVIndholdsliste = [];

AVIndholdsliste[0] = document.getElementById("intro")

window.addEventListener("scroll", function () {
    aktiverMultimedier();
});



// Tilføher værdi når man
const antal = document.getElementById("antal");
document.getElementById("op").addEventListener("click", function () {
    antal.value = parseInt(antal.value) + 1;
})

document.getElementById("ned").addEventListener("click", function () {
    antal.value = parseInt(antal.value) - 1;
})
