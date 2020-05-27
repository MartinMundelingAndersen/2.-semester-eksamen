"use strict";
const betalingsmuligheder = document.getElementsByName("betaling");
const knap = document.getElementById("knap");
const knap1 = document.getElementById("knap1");


knap.addEventListener("click", function () {
    for (let i = 0; i < betalingsmuligheder.length; i++) {
        if (betalingsmuligheder[i].checked === true) {
            sessionStorage.setItem("betaling", betalingsmuligheder[i].value)
        }
    }
    location.href = "kvittering.html";
})
knap1.addEventListener("click", function () {
    for (let i = 0; i < betalingsmuligheder.length; i++) {
        if (betalingsmuligheder[i].checked === true) {
            sessionStorage.setItem("betaling", betalingsmuligheder[i].value)
        }
    }

    location.href = "trin2.html"
})
