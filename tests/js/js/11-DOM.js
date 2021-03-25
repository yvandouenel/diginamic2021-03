"use strict";

"use strict";

// Récupération (get) d'éléments du DOM
console.log('window : ', window);
console.log('window document body : ', window.document.body);
const h1 = document.getElementById("h1");
console.log(h1);

// Création (set) d'un élément du DOM
const h2 = document.createElement("h2");
h2.textContent = "Titre de niveau 2";
document.body.appendChild(h2);
h2.setAttribute("class", "warning");