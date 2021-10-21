import { React, useState, useEffect } from 'react';
import './AddScreening.css'
import axios from 'axios';

export default function AddScreening() {

    const [numberOfSeats, setNumberOfSeats] = useState(0);
    const [numberOfTickets, setNumberOfTickets] = useState(0);
    const [time, setTime] = useState("");
    const [movies, setMovies] = useState([]);
    const [place, setPlace] = useState("");
    const [movieID, setMovieID] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(movieID);

        return axios.post("https://localhost:5001/api/admin/add_screening", { time: time, place: place, number_of_tickets: numberOfTickets, number_of_seats: numberOfSeats, mediaId: movieID}).then((response) => {
            console.log(response.data);
            if (response.status === 200) {
                alert("You have successfully added screening");
            }
        }).catch(function (error) {
            console.log(error.toJSON());
        });

    }

    useEffect(() => {
        getAllMedia();
    }, []);
    const url = "https://localhost:5001/api/"


    const getAllMedia = () => {

        return axios.get(`${url}media/get_media`, { params: { GetAllMedia: true } }).then((response) => {
            console.log(response.data);
            setMovies(response.data);

        }).catch(function (error) {
            console.log(error.toJSON());
        });

    }
    const handleClick2 = e => {
        console.log(e.target.value);
        const index = e.target.value;
        setMovieID(index);
      
    };


    return (
        <form className="forms" onSubmit={handleSubmit} >
            <h1>Add new screening</h1>

            <label>
                Time:
                <input
                    name="time"
                    type="time"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    required />
            </label>

            <label>
                Place:
                <input
                    name="place"
                    type="place"
                    value={place}
                    onChange={e => setPlace(e.target.value)}
                    required />
            </label>
            <label>
                Number of seats :
                <input
                    name="numberOfSeats"
                    type="numberOfSeats"
                    value={numberOfSeats}
                    onChange={e => setNumberOfSeats(e.target.value)}
                    required />
            </label>

            <label>
                Number of tickets :
                <input
                    name="numberOfTickets"
                    type="numberOfTickets"
                    value={numberOfTickets}
                    onChange={e => setNumberOfTickets(e.target.value)}
                    required />
            </label>
            <select  onChange = {handleClick2}>
                {movies.map((movie) => (<option key={movie.id} value={movie.id}>{movie.title}</option>))}
                
            </select>
            <button className="button-add" >Add screening</button>
        </form>
    );
}