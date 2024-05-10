
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { Alert, Button, Card } from "react-bootstrap";
import { deleteEvent,editEvent } from "../service/api"; // Import the deleteEvent function

export const Event = ({ event, showBook }) => {
  const [ev, setEv] = useState(event);
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = () => {
    showBook();
    setEv((prev) => {
      return {
        ...prev,
        nbParticipants: prev.nbParticipants + 1,
        nbTickets: prev.nbTickets - 1,
      };
    });
  };

 

  const handleDelete = async () => {
    try {
      const response = await deleteEvent(ev.id);
      if (response.status === 200) {
        window.location.reload()
            }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };
  const handleUpdate = async () => {
    try {
      const response = await editEvent(ev.id);
      if (response.status === 200) {
        window.location.reload()
            }
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };
  
  return (
    <>
      <Card style={{ width: "18rem" }} className="me-5 mt-4">
        <Card.Img variant="top" src={`src/assets/images/${ev.img}`} />
        <Card.Body>
        <Card.Title>
        <Link to={`${ev.name}`}>{ev.name}</Link>
        </Card.Title>
          <Card.Text>{ev.description}</Card.Text>
          <Card.Text>Price: {ev.price}</Card.Text>
          <Card.Text>Tickets: {ev.nbTickets}</Card.Text>
          <Card.Text>Participants: {ev.nbParticipants}</Card.Text>
          <Button variant="outline-dark" onClick={handleClick}>
            Book an Event
          </Button>
    
          <Button variant="outline-danger" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};