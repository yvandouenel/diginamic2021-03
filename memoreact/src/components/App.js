// imrc
import React, { Component } from 'react';
import Card from './Card';

// ccs
class App extends Component {
  state = { 
    title: "Mémo",
    display_form: false
   } // objet littéral vide par défaut

  renderForm() {
    if(this.state.display_form) {
      return(
        <form action="">
          <label htmlFor="question">question</label>
          <input type="text" />
          <input type="submit" value="Envoyer" />
          <p onClick={this.handletoggleForm}>Cacher le formulaire</p>
        </form>
      )
    }
  }
  
  handletoggleForm = () => {
    console.log(`Dans handletoggleForm`);
    console.log("this : ", this);
    
  let display_form = this.state.display_form ? false : true;
    // Set State compare l'objet qu'on lui donne en argument avec le state du component en cours
    // S'il y a une différence, alors, render est appelée et l'interface modifiée
    const obj = { 
      title: "Mémo",
      display_form: display_form
     }

     this.setState(obj);
  }
  render() {
    return (
      <section>
        <h1>{this.state.title}</h1>
        <Card question="Qui est l'inventeur du JS ?" answer="Brendan Eich" />{/* équivalent à new Card("Qui est ...", "Brendan Eich") */}
        <Card question="Qui est l'inventeur du web ?" answer="Tim Berners Lee" />{/* équivalent à new Card("Qui est ...", "Brendan Eich") */}
        {this.renderForm()}
        <p onClick={this.handletoggleForm}>Afficher le formulaire</p>
      </section>
    );
  }
}

export default App;
