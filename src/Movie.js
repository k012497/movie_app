import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}){
    return(
        <div className="movie">
            <h3 className="movie_title">{title} (<span className="movie_year">{year}</span>)</h3>
            <img src={poster} alt={title} title={title}/>
            <div className="movie_description">
            <ul className="movie_genres">
                {genres.map((genre, idx) => <li key={idx} className="genre">{genre}</li>)}
            </ul>
            <p className="movie_summary">{summary.slice(0, 200)}...</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;