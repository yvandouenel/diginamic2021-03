"use strict";

// Suppression du comportement par défaut du formulaire
const form_converter = document.getElementById("form-converter");

form_converter.onsubmit = function(event) {
  event.preventDefault();
}