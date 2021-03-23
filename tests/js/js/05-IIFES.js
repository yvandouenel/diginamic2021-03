// Création d'une fonction anonyme immédiate ou IIFES
(function(){
  let i = 12;
  console.log('i :', i);
  
})();// les dernières parenthèses permettent l'appel immédiat

(function(){
  let i = 1;
  console.log('i :', i);
})();// les dernières parenthèses permettent l'appel immédiat


// Fonction fléchée (arrow function)
const arrowHello = text => { return "Hello fléché"};
const j = "SUPER";
// Fonction avec syntaxe classique
const hello = function () {
  return "Hello à l'ancienne";
}

arrowHello(); // exécute la fonction ou appelle la fonction
console.log(hello);// FAit appel à la référence de la fonction

// first class citizen !!!
function a() {
  function b() {
    return "b";
  }
  function c() {
    return b;
  }
  return c;
}

console.log(a()()());