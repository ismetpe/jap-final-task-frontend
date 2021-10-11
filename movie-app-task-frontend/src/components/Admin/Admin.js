import React, { Component, useState,Button } from "react";
import axios from 'axios';
import "./table.css";
import Drawer from 'react-drag-drawer'
import AddMovie from "./AddMovie/AddMovie"
import EditModalMovie from "./EditModalMovie.js"
import AddScreening from "./AddScreening/AddScreening"
class AdminMovie extends Component {
    state = {
        movies: [],
        isModalOpen: false,
        movie: {}
    }


    shoot() {
        alert("Edit movie...");
    }
    componentDidMount() {
        const url = "https://localhost:5001/api/"
        return axios.get(`${url}media/get_media`, { params: { Pagination : 50, Type: "Movie" } }).then((response) => {
            console.log(response.data);
            const movies = response.data;
            this.setState({ movies });
        })
            .catch(function (error) {
                console.log(error.toJSON());
            });
    }


    onEditClick = (mediaId) => {

        this.setState({ isModalOpen: true })
        const movie = this.state.movies.find(a => a.id == mediaId);
        this.setState({ movie: movie })
    }

    handleCloseModal = () => {
        this.setState({ isModalOpen: false, movie: {} })

    }

    render() {
        const { open } = this.state

        return (
            <div id="modal">
              
  
              <AddMovie></AddMovie>
                <AddScreening></AddScreening>
                <table className="table">
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Text</th>
                        <th>Release Date</th>
                        <th>Edit</th>
           
                    </tr>
                    {this.state.movies.map((movie) => (
                        <tr>
                            <td>{movie.id}</td>
                            <td><img src={movie.imgUrl}/></td>
                            <td>{movie.title}</td>
                            <td>{movie.description}</td>
                            <td>{movie.releaseYear}</td>
                            <td> <EditModalMovie movieId = {movie.id} movieImage={movie.imgUrl} movieTitle={movie.title} movieDescription={movie.description}  movieReleaseYear = {movie.releaseYear}></EditModalMovie></td>
                            
                           
                        </tr>
                    ))}
                </table>
                
              
            </div>
        )
        
    }
}
export default AdminMovie;
