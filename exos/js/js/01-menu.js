// Récupération de la référence vers le bouton ouverture / fermeture
const button_menu = document.querySelector("header nav button");

// Récupération du menu
const ul_menu = document.querySelector("header nav ul");
ul_menu.setAttribute("class","hidden");

// On affecte un gestionnaire d'événement au click sur le bouton
button_menu.onclick = function() {
  ul_menu.classList.toggle("hidden");
}

// Création de la croix pour fermer
const close_cross = createCompleteDomElement("div","x","close",ul_menu);
close_cross.onclick = function() {
  ul_menu.setAttribute("class","hidden");
}




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
  parent_element.prepend(elt);// Ajoute comme premier enfant
  
  return elt;
}