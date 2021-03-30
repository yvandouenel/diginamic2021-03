import DomUtils from "./utils/DomUtils.js";
import Form from "./components/Form.js";
import FetchData from "./services/FetchData.js";

class App extends DomUtils {
  constructor() {
    super();
    this.token = "";
    this.user = {};
    this.terms = [];
    this.columns = [];

    this.domElements = this.render();

    // instanciation du service FetchData
    this.fd = new FetchData();
    this.fd.getToken()
    .then((data) => {
      this.token = data;
      console.log('this.domElements.form_login : ', this.domElements.form_login);
      this.domElements.form_login.classList.remove("hidden");
    })
    .catch((error) => {
      console.error('Erreur catché dans getToken : ' + error.message);
    });
    //this.fd.getToken();
  }

  render() {
    // Création des éléments de base du dom
    const header = this.createCompleteDomElement("header","",[], document.getElementById("app"));
    const main = this.createCompleteDomElement("main","",[], document.getElementById("app"));
    const footer = this.createCompleteDomElement("footer","",[], document.getElementById("app"));
    const form_login = new Form(main,{
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