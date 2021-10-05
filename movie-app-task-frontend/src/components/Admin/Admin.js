import React, { Component, useState,Button } from "react";
import axios from 'axios';
import "./table.css";
import Drawer from 'react-drag-drawer'
import EditMovieModal from "./EditMovieModal.js";

class Admin extends Component {
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
        console.log("usooo")
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
            <div>
                <table className="table">
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Text</th>
                        <th>Edit</th>
           
                    </tr>
                    {this.state.movies.map((movie) => (
                        <tr>
                            <td>{movie.id}</td>
                            <td><img src={movie.img_url}/></td>
                            <td>{movie.title}</td>
                            <td>{movie.description}</td>
                            <td> <button className="editButton" onClick={() => this.onEditClick(movie.id)} ></button></td>
                            
                           
                        </tr>
                    ))}
                </table>
                
                <EditMovieModal show={this.state.isModalOpen} handleClose={this.handleCloseModal} item={this.state.movie} />
            </div>
        )
        
    }
}
export default Admin;
