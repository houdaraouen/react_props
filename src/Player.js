import Players from './Players';
import React from 'react';
import Card from 'react-bootstrap/Card';


const Player = ({nom, image, age, team, nationality, jerseyNumber}) =>{
    return(
    
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{nom} </Card.Title>
          <Card.Text>
          <strong>age:</strong> {age} <br />
          <strong>nationality:</strong> {nationality} <br />
          <strong>team:</strong> {team} <br />
          <strong>jerseyNumber:</strong> {jerseyNumber} <br />
          </Card.Text>
        </Card.Body>
      </Card>
    
    )
}

export default Player