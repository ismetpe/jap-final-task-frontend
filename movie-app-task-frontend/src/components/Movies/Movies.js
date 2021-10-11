import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Movie from '../Movie/Movie';
import './Movies.css';
import Card from '../Card/Card';
import axios from "axios";

const Movies = (props) => {
  const moviesList = props.movies.map((movie) => (
    <Movie
      key={movie.id}
      id={movie.id}
      title={movie.title}
      release_year={movie.releaseYear}
      actors={movie.Actors}
      imageURL={movie.imgUrl}
      rating={movie.ratings}
      description={movie.description}
    //{moviesList}
    />

  ));
  return (


    <div>
      <section className="movies">

        <ul>{moviesList}</ul>

      </section>
    </div>

  );
};


export default Movies;