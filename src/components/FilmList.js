import React, { Component } from "react";
import Film from './Film';


class FilmList extends Component {
    render(){
        const FilmsArray = this.props.films.map(film => {
            return (
                <Film url={film.url}>{film.name}</Film>
            )
        })
        return (
            <>
            <h4>List of Upcoming Films</h4>
            {FilmsArray}
            </>
        )
    }
    
}

export default FilmList;