import React, { Component, useState,Button,useEffect } from "react";
import axios from 'axios';
import "./BoughtTickets.css";
import Drawer from 'react-drag-drawer'


export default function  BoughtTickets (props){
 


   

        return (
            <div>
                <table className="table">
                    <tr>
                        <th>ID</th>
                        <th>Price</th>
                        <th>Screening</th>


           
                    </tr>
                    {props.tickets.map((ticket) => (
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
