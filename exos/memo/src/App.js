import DomUtils from "./utils/DomUtils.js";
import Form from "./components/Form.js";
import FetchData from "./services/FetchData.js";

class App extends DomUtils {
  constructor() {
    super();
    // Propriétés de base
    this.token = "";
    this.user = {};
    this.terms = [];
    this.columns = [];

    // Création et récupération des élements de base du dom dans l'objet this.domElements
    // this.domElements est une propriété de type objet
    this.domElements = this.render();

    // Instanciation du service FetchData et récupération du token
    this.fd = new FetchData();
    this.getToken();

    // Gestion des événements
    this.manageEvents();
  }

  manageEvents() {
    console.log('Dans manageEvents');
    // Gestion de la sousmission du formulaire d'authentification

    // Dans une fonction fléchée, le this ne dépend plus de qui appelle la fonction
    // mais bien de où la fonction a été déclarée.
    this.domElements.form_login.onsubmit = (event) => {
      event.preventDefault();
      const login = document.getElementById("login").value;
      const pwd = document.getElementById("pwd").value;

      this.fd.getUser(this.token, login, pwd)
        .then((data) => {
          console.log('user dans manageEvents : ', data);
          // On hydrate la propriété user
          this.user = {
            uid: data.current_user.uid,
            login: login,
            pwd: pwd
          }
        })
        .catch((error) => {
          console.error("Erreur attrapée dans manageEvents : " + error.message)
        })
    }
  }

  getToken() {
    this.fd.getToken()
      .then((data) => {
        this.token = data;
        this.domElements.form_login.classList.remove("hidden");
      })
      .catch((error) => {
        console.error('Erreur catché dans getToken : ' + error.message);
      });
  }

  render() {
    // Création des éléments de base du dom
    const header = this.createCompleteDomElement("header", "", [], document.getElementById("app"));
    const main = this.createCompleteDomElement("main", "", [], document.getElementById("app"));
    const footer = this.createCompleteDomElement("footer", "", [], document.getElementById("app"));
    const form_login = new Form(main, {
      inputs: [
        {
          label: {
            name: "Login",
            for: "login"
          },
          input: {
            type: "text",
            id: "login"
          }
        },
        {
          label: {
            name: "Mot de passe",
            for: "pwd"
          },
          input: {
            type: "password",
            id: "pwd"
          }
        },
        {
          label: {
            name: "",
            for: ""
          },
          input: {
            type: "submit",
            id: ""
          }
        }
      ]
    });
    return {
      header: header,
      main: main,
      footer: footer,
      form_login: form_login
    }
  }
}
// Création d'une instance de App via un instanciation
const app = new App();