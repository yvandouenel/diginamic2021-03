"use strict";

// Déclaration et affectation d'une variable sur la même ligne
let first_name = "Bob";

console.log(first_name);// Affiche Bob

// Affiche le type de la variable. Ici : string
// On comprend que le "typage" est "dynamique"
console.log(typeof(first_name));

first_name = 12;

console.log(typeof(first_name));// Affiche number

// L'opérateur "+" concatène les chaînes de caractères
// L'opérateur "+" additionne les nombres

console.log(first_name + first_name);

first_name = false;
console.log(typeof(first_name));// Affiche Boolean

first_name = null;
console.log(typeof(first_name));// Affiche Object

