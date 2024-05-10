// Dans le fichier Components/EventDetails.jsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import data from "../data/events.json"
function EventDetails() {
    const { eventName } = useParams();
    const event = data.find(event => event.name === eventName);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/src/assets/images/${event.img}`} alt={event.name} />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>{event.description}</Card.Text>
        <Card.Text>
          Price: {event.price} 
        </Card.Text>
        {/* Ajoutez d'autres détails que vous souhaitez afficher */}
      </Card.Body>
    </Card>
  );
}

export default EventDetails;
