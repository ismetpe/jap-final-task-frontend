import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Content } from "../tab";
import './User.css'
import BoughtTickets from './UsersBougthTicketList/BoughtTickets';
import BuyTicket from './BuyTicket/BuyTicket';
export default function User() {
  const [active, setActive] = useState(0);

  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <div className="App">
        <h2>
WELCOME USER 
    </h2>
      <Tabs >
        <Tab onClick={handleClick} active={active === 0} id={0} >
          Buy Tickets
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1} >
         Bought Tickets
        </Tab>
      </Tabs>
      <>
        <Content active={active === 0}>
        <BuyTicket></BuyTicket>
        </Content>
        <Content active={active === 1}>
        <BoughtTickets id={1}></BoughtTickets>
        </Content>
      </>

    </div>
  );

}