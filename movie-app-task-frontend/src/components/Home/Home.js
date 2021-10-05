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


  const [isShow, setIsShow] = React.useState(true);



  useEffect(() => {
    getTop10Movies();
  }, []);
  const url = "https://localhost:5001/api/"


  const getTop10Movies = () => {
    return axios.get(`${url}media/media/get_media`,{ params: {} }).then((response) => {
      console.log(response.data);
      setMovies(response.data);
    })
    .catch(function (error) {
      console.log(error.toJSON());
    });
  };


  return (
    <div className="App">
      <Search placeholder="Search for Movie Title …" ></Search>
      <Tabs >
        <Tab onClick={handleClick} active={active === 0} id={0} >
          Movies
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1} >
          TV Series
        </Tab>
      </Tabs>
      <>
        <Content active={active === 0}>
          <Movies movies={movies}></Movies>
          <button class="glow-on-hover" onClick={LoadMoreMovies}>Load more</button>
        </Content>
        <Content active={active === 1}>
          <Movies movies={series}></Movies>
          <button class="glow-on-hover" onClick={LoadMoreSeries}>Load more</button>
        </Content>
      </>

    </div>
  );

}