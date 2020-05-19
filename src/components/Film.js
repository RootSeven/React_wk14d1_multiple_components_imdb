import React, { Component } from 'react';

class Film extends Component {
    render(){
        return (
            <>
            <a href={this.props.url}>{this.props.children}</a>
            <br></br>
            </>
        )
    }
}

export default Film;