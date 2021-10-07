import React, { Component, useState,Button,useEffect } from "react";
import axios from 'axios';
import "./BoughtTickets.css";
import Drawer from 'react-drag-drawer'


export default function  BoughtTickets (props){
 
    const [tickets, setTickets] = useState([]);


    useEffect(() => {
        getTickets();
      }, []);



    const getTickets = () => {
        const url = "https://localhost:5001/api/"
        return axios.get(`${url}user/bought_tickets`, { params: { id : props.id} }).then((response) => {
            console.log(response.data);
          setTickets(response.data);
        })
            .catch(function (error) {
                console.log(error.toJSON());
            });
    }


   

        return (
            <div>
                <table className="table">
                    <tr>
                        <th>ID</th>
                        <th>Price</th>
                        <th>Screening</th>


           
                    </tr>
                    {tickets.map((ticket) => (
                        <tr>
                            <td>{ticket.id}</td>
                            <td>{ticket.price}</td>
                            <td>{ticket.screeningId}</td>

                        </tr>
                    ))}
                </table>
               
            </div>
        )
        
    
}
