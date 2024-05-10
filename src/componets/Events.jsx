
import React, { useState, useEffect } from "react";
import { Alert, Row } from "react-bootstrap";
import  {Event } from "./Event";
import { getallEvents, deleteEvent } from "../service/api";

export default function Events() {
  const [showBook, setShowBook] = useState(false);
  const [welcomeAlert, setWelcomeAlert] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setWelcomeAlert(false);
    }, 3000);

    const fetchData = async () => {
      try {
        const result = await getallEvents();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchData();
  }, []);

  const showBookAlert = () => {
    setShowBook(true);
    setTimeout(() => {
      setShowBook(false);
    }, 2000);
  };



  return (
    <>
      {welcomeAlert && <Alert variant="success">Hey welcome to Esprit Events</Alert>}
      {showBook && <Alert variant="success">You have booked an event</Alert>}
      <Row xs={1} md={4} className="g-4">
        {data.map((element) => (
          <Event
            event={element}
            key={element.id}
            showBook={showBookAlert}
        
          />
        ))}
      </Row>
    </>
  );
}
