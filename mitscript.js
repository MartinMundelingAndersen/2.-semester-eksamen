"use strict";

const antal = document.getElementById("antal");
document.getElementById("op").addEventListener("click", function () {
    antal.value = parseInt(antal.value) + 1;
})

document.getElementById("ned").addEventListener("click", function () {
    antal.value = parseInt(antal.value) - 1;
})
