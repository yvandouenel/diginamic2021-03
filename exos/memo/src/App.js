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

    // Création et récupération des élements de base du dom
    this.domElements = this.render();

    // Instanciation du service FetchData et récupération du token
    this.fd = new FetchData();
    this.getTokenAndUser();


  }

  getTokenAndUser() {
    this.fd.getToken()
      .then((data) => {
        this.token = data;
        console.log('this.domElements.form_login : ', this.domElements.form_login);
        this.domElements.form_login.classList.remove("hidden");
        // J'ai le token et j'ai affiché le formulaire, donc je peux aller
        // Chercher les données de l'utilisateur
        this.domElements.form_login.onsubmit = function (event) {
          event.preventDefault();
          const login = document.getElementById("login").value;
          const pwd = document.getElementById("pwd").value;
          // Qui est this ?
          console.log('this : ', this);
          /* this.fd.getUser(this.token, login, pwd)
          .then((data) => {
            console.log('user dans getTokenAndUser : ', data);
          })
          .catch((error) => {
            console.error("Erreur attrapée dans getTokenAndUser : " + error.message)
          }) */
        }


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