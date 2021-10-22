import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Content } from "../tab";
import './User.css'
import BoughtTickets from './UsersBougthTicketList/BoughtTickets';
import BuyTicket from './BuyTicket/BuyTicket';
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function User() {

  var token = localStorage.getItem("user");
  const history = useHistory();

  const [UserID, setUserID] = useState();

  const [name, setName] = useState();

  const [tickets, setTickets] = useState([]);     
 

  const logout = (e) => {
    window.localStorage.removeItem('user'); 
    history.push("/login");
  }


  useEffect(() => {
      getTickets();
    }, []);

  const getTickets = () => {
    
    var jwt = require("jsonwebtoken");  
  
    var decode1 = jwt.decode(token);  
   
    
    setName(decode1.unique_name);
    setUserID(decode1.nameid);
   
    if(UserID != undefined)
      return axios.get("https://localhost:5001/api/user/bought_tickets" +"?id="  + 8).then((response) => {
          console.log(response.data);
        setTickets(response.data);
      })
          .catch(function (error) {
              console.log(error.toJSON());
          });
  }

  return (
    <div className="App" >
    
      <h2>
        WELCOME {name}
      </h2>
      <button onClick={logout}>Logout</button>



      <BuyTicket id={UserID}></BuyTicket>
      <BoughtTickets tickets={tickets}></BoughtTickets>


    </div>
  );

}