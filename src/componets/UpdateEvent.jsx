import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { editEvent, getallEvents } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

function UpdateEvent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    price: "",
    nbTickets: "",
    img: "",
    nbParticipants: "0",
    like: true,
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getallEvents(id);
        if (response.status === 200) {
          setEventData(response.data);
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await editEvent(id, eventData); // Use the event ID from the URL
    if (response.status === 200) {
      navigate("/events"); // Redirect after successful update
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="card p-3">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={eventData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows={3}
              name="description"
              value={eventData.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={eventData.price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Number of Tickets</label>
            <input
              type="text"
              className="form-control"
              name="nbTickets"
              value={eventData.nbTickets}
              onChange={handleChange}
            />
          </div>
          {/* Other fields as needed */}
        </div>
        <div className="d-flex mt-3">
          <Button className="btn btn-primary me-3" type="submit">
            Update
          </Button>
          <Button className="btn btn-danger" type="button" onClick={() => navigate("/events")}>
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
}

export default UpdateEvent;