import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Movies from "../Movies/Movies"

import Search from "../SearchBar/Search"
import ReactDOM from "react-dom";
import axios from "axios";
import { Tabs, Tab, Content } from "../tab";
import './Home.css'
export default function Home() {
  const [active, setActive] = useState(0);



  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(10);

  const [media, setMedia] = React.useState([]);



  useEffect(() => {
    getTop10Movies();
  }, []);
  const url = "https://localhost:5001/api/"


  const getTop10Movies = () => {

    return axios.get(`${url}media/get_media`, { params: { Type: "Movie" } }).then((response) => {
      console.log(response.data);
      setMovies(response.data);
    })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  };
  useEffect(() => {
    getTop10Series();
  }, []);

  const getTop10Series = () => {
    return axios.get(`${url}media/get_media`, { params: { Type: "Series" } }).then((response) => {
      console.log(response.data);
      setSeries(response.data);
    }).catch(function (error) {
      console.log(error.toJSON());
    });
  };


  const LoadMoreMovies = () => {
    setPage(page + 10);
    return axios.get(`${url}media/get_media`, { params: { Pagination: page, Type: "Movie" } }).then((response) => {
      console.log(response.data);
      setMovies(response.data);
    }).catch(function (error) {
      console.log(error.toJSON());
    });
  };

  const LoadMoreSeries = () => {
    setPage(page + 10);
    return axios.get(`${url}media/get_media`, { params: { Pagination: page, Type: "Series" } }).then((response) => {
      console.log(response.data);
      setSeries(response.data);
    }).catch(function (error) {
      console.log(error.toJSON());
    });
  };
  const LoadAllMedia = () => {
    return axios.get(`${url}media/get_media`).then((response) => {
      console.log(response.data);
      setMedia(response.data);
    }).catch(function (error) {
      console.log(error.toJSON());
    });
  };


  const toggleListMovie = () => {
    var x = document.getElementById("movieDiv");
    var y = document.getElementById("seriesDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } 
  };
  const toggleListSeries = () => {
    var x = document.getElementById("movieDiv");
    var y = document.getElementById("seriesDiv");
    if (y.style.display === "none") {
      y.style.display = "block";
      x.style.display = "none";
    }
  };

  const search = () => {
    var x = document.getElementById("mainDiv");

      x.style.display = "none";
    
  };
  return (
    <div className="App">
      <Search placeholder="Search for Movie Title …" onClick={search}></Search>

      <div id="mainDiv">
        <button onClick={toggleListMovie}>Movies</button>
        <button onClick={toggleListSeries}>Series</button>
        <div id="movieDiv">
          <Movies movies={movies}></Movies>
          <button class="glow-on-hover" onClick={LoadMoreMovies}>Load more</button>
        </div>
        <div id="seriesDiv" style={{display : 'none' }}>
          <Movies movies={series}></Movies>
          <button class="glow-on-hover" onClick={LoadMoreSeries}>Load more</button>
        </div>

      </div>
    </div >
  );

}