import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Content } from "../tab";
import './User.css'
import BoughtTickets from './UsersBougthTicketList/BoughtTickets';
import BuyTicket from './BuyTicket/BuyTicket';
export default function User() {
  const [active, setActive] = useState(0);
  var token = localStorage.getItem("user");
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
const ispisi =() =>{
  const tokenParts = token.split('.');
const encodedPayload = tokenParts[1];
const rawPayload = atob(encodedPayload);
const user = JSON.parse(rawPayload);
console.log(user.username); // outputs 'bob'
}
  return (
    <div className="App">
      {console.log(token)}
        <h2>
WELCOME USER 
    </h2>
    <button onClick={ispisi}>Click me!</button>

   
        <BuyTicket></BuyTicket>
        <BoughtTickets id={1}></BoughtTickets>
 

    </div>
  );

}