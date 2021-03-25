"use strict";

"use strict";

// Récupération (get) d'éléments du DOM
console.log('window : ', window);
console.log('window document body : ', window.document.body);
const h1 = document.getElementById("h1");
console.log(h1);


/**
 * Crée un élément du DOM, ajoute du contenu, ajoute une classe et positionne 
 * dans un élément du DOM parent
 * 
 * @param {string} tag_name 
 * @param {string} content 
 * @param {string} class_name 
 * @param {DOM element} parent_element 
 * @returns {DOM element} elt
 */
function createCompleteDomElement(tag_name, content, class_name, parent_element) {
  // Création d'un élément du DOM mais qui n'est pas encore positionné
  // dans la hiérarchie du document
  const elt = document.createElement(tag_name);

  elt.textContent = content;
  elt.setAttribute("class", class_name);
  parent_element.appendChild(elt);
  
  return elt;
}
// Création (set) d'un élément du DOM
const h2 = createCompleteDomElement("h2","Titre de niveau 2", "warning",document.body );

// Récupération avancée d'éléments du dom
const main_nav = document.querySelector(".main-nav");
console.log('main_nav : ', main_nav);
main_nav.setAttribute("id", "main-nav");

// Récupération de plusieurs éléments du dom
const nav_list_items = document.querySelectorAll(".main-nav li");


// Parcours du tableau des items du menu
for(let i = 0; i < nav_list_items.length; i++) {
  console.log('li : ', nav_list_items[i]);
  if(i == nav_list_items.length - 1) {
    nav_list_items[i].remove();
  }
}

