import React, { Component } from 'react';

class Term extends Component {
    render() {
        return (
            <button onClick={()=>{this.props.onClickTerm(this.props.tid)}} className="btn btn-secondary m-2 ">{this.props.name}</button>
        );
    }
}

export default Term;