import DomUtils from "./../utils/DomUtils.js";
import Card from "./Card.js";

export default class Column extends DomUtils {
  /**
   * la class Comumn permet de créer des colonnes que l'on affichera
   * dans le DOM en utilisant la référence de app (instance de l'application) pour avoir accès
   * à ses éléments du dom (header, main ...)
   * @param {number} id 
   * @param {string} name 
   * @param {objet} app 
   */
  constructor(id, name, cards, app, cols_section){
    super();
    // Propriétés
    this.id = id;
    this.name = name;
    this.cards = cards;

    // On récupère une référence à l'instance de l'application (app)
    this.app = app;

    // Création et récupération des élements de base du dom dans l'objet this.domElements
    // this.domElements est une propriété de type objet
    this.domElements = this.render(cols_section);

        // Gestion des cartes
    this.renderCards();

    // Gestion des événements
    this.manageEvents();
  }
  
  manageEvents() {

   
  }
  renderCards() {
      console.log(`Dans renderCards`);
      console.log(this.domElements);
    
    // Création de l'élément du DOM qui contient les cartes
    const cards_section = this.createCompleteDomElement("section", "", [{name: "class", value: "section-card"}], this.domElements.col_section);
    // parcours des cartes
    for(let card of this.cards) {
      let c = new Card(card.id, card.question, card.reponse, this, cards_section);
    }
  }
  render(cols_section) {
    const col_section = this.createCompleteDomElement(
      "section",
      this.name,
      [
        {
          name: "class",
          value: "col"
        }
      ],
      cols_section
    );

    return {
        cols_section: cols_section,
        col_section: col_section
      }
  }
}