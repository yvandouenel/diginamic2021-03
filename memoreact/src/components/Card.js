import React, { Component } from 'react';

class Card extends Component {
    
    render() {
        return (
            <article>
                <h3>{this.props.question}</h3>
                <p>{this.props.answer}</p>
            </article>
        );
    }
}

export default Card;