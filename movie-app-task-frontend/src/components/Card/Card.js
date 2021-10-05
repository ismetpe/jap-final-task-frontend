import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';

const Card = props => {
    return <div className="card">{props.children}</div>
  };
  
  export default Card;