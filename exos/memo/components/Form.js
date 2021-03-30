import DomUtils from "./../utils/DomUtils.js";

export default class Form extends DomUtils {
  constructor() {
    super();
    this.domForm = this.createCompleteDomElement("form",
    "",
    "",
    document.getElementById("app"));
  }
}