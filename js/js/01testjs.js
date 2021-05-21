console.log("Hello");
console.log(window.document.body);
window.document.body.innerHTML = "J'écris ce que je veux dans le <strong>body</strong>";

// Un script javascript est une série d'instructions
// Ces instructions peuvent être des déclarations.
// Exemple d'instruction qui est une déclaration 
let x;

// Exemple d'instruction qui est une affectation :
x = 32;

// les instructions sont séparées par des point virgules ;
let y, z;

// Assignation 

// Les "littéraux" js sont des valeurs constantes qui peuvent être assignées à des variables. Ces littéraux peuvent être de tout type (number, string, boolean, ...)
x = 5; // assignation d'un littéral
y = x; // assignation d'une variable
z = 7; // assignation d'un littéral 

/* une instruction qui déclare deux variables car les "identifiers" js sont sensibles
à la casse */
let lastname, lastName;

// utilisation du _ pour les noms de variables
let last_name;

// utilisation du Lower Camel Case pour les fonctions (méthodes) 
function getElement() {
    // code ici
}

// Utilisation du Upper Camel Case pour les "Classes"
class Card {
    // code de la classe ici
}
