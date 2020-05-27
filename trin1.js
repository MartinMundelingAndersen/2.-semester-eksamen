"use strict";

const brugernavn = document.getElementById("navn");
const brugeradr = document.getElementById("adresse");
const postnrogby = document.getElementById("pogb");
const knap = document.getElementById("knap");

knap.addEventListener("click", function () {
    sessionStorage.setItem("navn", brugernavn.value);
    sessionStorage.setItem("adresse", brugeradr.value);
    sessionStorage.setItem("postnrogby", postnrogby.value);
    location.href = "trin2.html";
})
