import axios from "axios";

export const getAllMovies = () => {
  return axios.get(`${process.env.REACT_APP_BACKEND}/media/all_movies`);
};

export const getAllSeries = () => {
  return axios.get(
    `${process.env.REACT_APP_BACKEND}/media/all_series`
  );
};

export const getTop10Series = () => {
  return axios.get(`${process.env.REACT_APP_BACKEND}/media/all_shows/ten_series`);
};

export const getTop10Movies = () => {
  return axios.get(`https://localhost:5001/media​/all_movies​/ten_movies`);
};


/*
export const AddRating = (rating,mediaId) => {
 
    const rating = {rating_value: rating,mediaId: mediaId};
  return axios.post(`${process.env.REACT_APP_BACKEND}​/rating/Add`, rating)
        
  };
  */
