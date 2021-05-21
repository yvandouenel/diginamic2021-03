import DomUtils from "../utils/DomUtils.js";

export default class Card extends DomUtils {
  /**
   * la class Card permet de créer des cartes que l'on affichera
   * dans le DOM en utilisant la référence de app (instance de l'application) pour avoir accès
   * à ses éléments du dom (header, main ...)
   * @param {number} id 
   * @param {string} name 
   * @param {objet} app 
   */
  constructor(id, question, answer, app, cards_section){
    super();
    // Propriétés
    this.id = id;
    this.question = question;
    this.answer = answer;


    // On récupère une référence à l'instance de l'application (app)
    this.app = app;

    // Création et récupération des élements de base du dom dans l'objet this.domElements
    // this.domElements est une propriété de type objet
    this.domElement = this.render(cards_section);

    // Gestion des événements
    this.manageEvents();
  }
  
  manageEvents() {

   
  }

  render(cards_section) {
    const card_article = this.createCompleteDomElement(
      "article",
      this.question,
      [
        {
          name: "class",
          value: "card text-light bg-secondary rounded mb-2 mt-1 p-2"
        }
      ],
      cards_section
    );

    return {
      card_article: card_article 
      }
  }
}