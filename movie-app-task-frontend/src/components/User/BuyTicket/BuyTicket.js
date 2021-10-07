
import React, { Component, useState, Button, useEffect } from "react";
import axios from 'axios';
import "./BuyTicket.css"
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import NumericInput from 'react-numeric-input';

export default function BuyTicket(props) {


    const [movies, setMovies] = useState([]);
    const [screnings, setScrenings] = useState([]);


    const [numberOfTickets, setNumberOfTickets] = useState(1);
    const [screeningId, setScreeningId] = useState();
    

    useEffect(() => {
        getAllMedia();
    }, []);
    const url = "https://localhost:5001/api/"


    const getAllMedia = () => {

        return axios.get(`${url}media/get_media`, { params: { GetAllMedia: true } }).then((response) => {
            console.log(response.data);
            setMovies(response.data);

        })   .catch(function (error) {
            console.log(error.toJSON());
          });

    }


    const getAllScreningsByMovie = (e) => {

        return axios.get("https://localhost:5001/api/screenings/screenings_by_movie?" + "id=" + e.target.value).then((response) => {
            console.log(response.data);
            setScrenings(response.data);

        })   .catch(function (error) {
            console.log(error.toJSON());
          });

    }
    const handleClick = e => {
        console.log(e.target.value);
        const index = e.target.value;
        setNumberOfTickets(index);
        this.handleSubmit();
    };

    const handleClick2 = e => {
        console.log(e.target.value);
        const index = e.target.value;
        setScreeningId(index);
      
    };


    const buyTicket = (e) => {
        
        return axios.post("https://localhost:5001/api/screenings/buy_ticket", { UserID: 1, ScreeningID: screeningId, NumberOfTickets : numberOfTickets }).then((response) => {
            console.log(response.data);
            if (response.status === 200) {
            alert("You have successfully bought_ticket/s");
            }
        })

    }
    return (

        <div>
            <h2>Select movie</h2>
            <select onChange={getAllScreningsByMovie}>
                {movies.map((movie) => (<option key={movie.id} value={movie.id}>{movie.title}</option>))}
            </select>
            <h2>Select screening</h2>
            <select onChange = {handleClick2}>
                {screnings.map((screenings) => (<option key={screenings.id} value={screenings.id}>
                    Time: {screenings.time}&nbsp;
                    Date: {screenings.date.slice(1, 10)}&nbsp;
                    Place: {screenings.place}
                </option>))}
            </select>
            <h2>Select number of tickets(up to 10)</h2>
            <NumericInput min={0} max={10} value={1} onValueChange={handleClick} />
            <h2>Buy ticket/s</h2>
            <button onClick={buyTicket}>BuyTicket</button>
        </div>
    );


}