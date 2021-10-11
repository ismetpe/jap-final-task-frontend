import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
import { Card, Icon, Image } from 'semantic-ui-react'

import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


import axios from 'axios';
const Movie = (props) => {

  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const useStyles = makeStyles({
    root: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
  });


  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);

  const url = "https://localhost:5001/"

  const addRating = (value, id) => {
    return axios.post(`https://localhost:5001/rating/Add`, { rating_value: value, mediaId: id }).then((response) => {
      console.log(value + " " + id);
      setValue(value);
    });
  };

  return (
    <Card  >
      <Image src={props.imageURL} wrapped ui={false} className="img" />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.release_year}</span>
        </Card.Meta>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {props.actors}
          </a>
        </Card.Content>
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>

      <Rating
        name={props.id}
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {

          addRating(newValue, props.id)
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </Card>

  );
}

export default Movie;
