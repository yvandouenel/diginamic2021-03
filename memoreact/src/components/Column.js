import React, { Component } from 'react';

class Column extends Component {
    render() {
        return (
            <section>
                <h3>{this.props.name}</h3>
            </section>
        );
    }
}

export default Column;