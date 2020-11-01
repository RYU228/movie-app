import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import "./Movie.css"

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <Link className="movieLink"
        to={{
            pathname: `/movie/${id}`,
            state: {
                year, title, summary, poster, genres
            }
        }}>
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genres">
                {genres.map((genre, index) => <li key={index} className="movie_genreLi">{genre}</li>)}
            </ul>
            <p className="movie_summary">{summary.slice(0, 100)}...</p>
            </div>
        </div>
        </Link>
    )
}

Movie.propTypes = {
id:PropTypes.number,
year: PropTypes.number,
title: PropTypes.string,
summary: PropTypes.string,
poster: PropTypes.string,
genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;