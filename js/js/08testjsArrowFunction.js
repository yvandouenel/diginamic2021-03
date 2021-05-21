"use strict";
// La variable test stocke la référence de la fonction anonyme
const test = function() {
    return "Hello";
};

// La variable test2 stocke le retour (return) de l'exécution de la fonction anonyme
const test2 = (function() {
    return "Hello du test 2";
})();

let result = test();
console.log(result);
console.log(test2);

const hi = (firstname, lastname) => {
    console.log("this : ", this);
    return "Hi " + firstname + " " + lastname;
}

const r = hi("Bob", "Dylan");
console.log(r);

const h1 = document.getElementById("h1"); // récupére l'élément du DOM qui a pour id h1


function Robot() {
    this.manageClick = () => {
        console.log(this);
    }
}
const robot = new Robot();
h1.onclick = () => {
    console.log(this);
    robot.manageClick();
}



