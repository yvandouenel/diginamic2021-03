"use strict";
// Syntaxe d'une fonction
/**
 * Fonction de test pour comprendre le mécanisme des fonctions
 * @param {string} texte 
 * @returns void // ne renvoie rien
 */
function afficheDansLaConsole(texte) {
  console.log(texte);
}

// Appel de la fonction avec un argument
afficheDansLaConsole("Hello Bob"); 

// Appel de la fonction avec un autre argument
afficheDansLaConsole("Ca va JP ?");

/**
 * Fonction qui retourne la somme des deux paramètres
 * @param {number} a 
 * @param {number} b 
 * @returns sum a + b 
 */
function add(a,b) {
  return a + b;
}

let sum = add(5,9);
//console.log(sum);// Affiche 14 dans la console

sum = add(45,55);
console.log(add(45,55));// Affiche 100 dans la console