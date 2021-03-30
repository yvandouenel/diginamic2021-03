import Form from "./components/Form.js";
import FetchData from "./services/FetchData.js";

class App {
  constructor() {
    this.token = "";
    this.user = {};
    this.terms = [];
    this.columns = [];

    // instanciation du service FetchData
    this.fd = new FetchData();
    this.fd.getToken()
    .then((data) => {
      this.token = data;
      new Form();
    })
    .catch((error) => {
      console.error('Erreur catché dans getToken : ' + error.message);
    });
    //this.fd.getToken();
  }
}
// Création d'une instance de App via un instanciation
const app = new App();