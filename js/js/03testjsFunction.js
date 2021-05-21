// Déclaration d'une fonction classique
function test(firstname) {// attend un paramètre firstname
    return `Hello ${firstname}`;
}

// on affecte à msg une référence à la fonction test
let msg = test;

let result = msg("Jacques");

console.log(result);