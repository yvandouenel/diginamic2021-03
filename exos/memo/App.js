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
      new Form(this.domElements.main,{
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
          }
        ]
      });
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

    return {
      header: header,
      main: main,
      footer: footer
    }
  }
}
// Création d'une instance de App via un instanciation
const app = new App();