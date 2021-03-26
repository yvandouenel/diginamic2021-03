"use strict";

// Suppression du comportement par défaut du formulaire
const form_converter = document.getElementById("form-converter");

// Récupération des références des éléments du formulaire
const input_euro = document.querySelector("#euro");
const input_chf= document.querySelector("#chf");

form_converter.onsubmit = function(event) {
  event.preventDefault();
  if(input_euro.value) {
    document.querySelector("#euro").value = input_euro.value * 1.06;
  }
  if(input_chf.value) {
    input_euro.value = input_chf.value / 1.06;
  }
}

// Quand on commence à modifier un input, l'autre input directemen converti
input_chf.oninput = function() {
  input_euro.value = input_chf.value / 1.06;
}
input_euro.oninput = function() {
  input_chf.value = input_euro.value * 1.06;
}
