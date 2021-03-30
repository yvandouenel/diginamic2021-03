export default class DomUtils {
  constructor() {

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
  createCompleteDomElement(tag_name, content, class_name, parent_element) {
    console.log('Dans createCompleteDomElement');
    // Création d'un élément du DOM mais qui n'est pas encore positionné
    // dans la hiérarchie du document
    const elt = document.createElement(tag_name);

    elt.textContent = content;
    elt.setAttribute("class", class_name);
    parent_element.append(elt);

    return elt;
  }

}