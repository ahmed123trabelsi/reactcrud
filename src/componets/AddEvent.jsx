import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { addEvent, editEvent, getallEvents } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

function AddEvent() {
    var { event } = useParams();

  const navigate = useNavigate();
  const [newEvent, setNewEvent] = useState({
    name: "",
    description: "",
    price: "",
    nbTickets: "",
    img: "",
    nbParticipants: "0",
    like: true,
  });

  const onvalueChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };
  const onFileChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.files[0].name });
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    console.log("Submitting event:", newEvent);
    try {
      const addedEventResponse = await addEvent(newEvent);

        // Redirect or update your state as necessary here
        navigate("/events");
    
    } catch (error) {
      console.error('Error adding event:', error);
      // Optionally, update UI to show error message
    }
  };
  
  return (
    <>
      <form onSubmit={handleSumbit}>
        <div className="card p-3">
          <div className="mb-3  ">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              name="name"
              defaultValue={newEvent.name}
              onChange={(e) => {
                onvalueChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={newEvent.description}
              name="description"
              onChange={(e) => {
                onvalueChange(e);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter price"
              name="price"
              defaultValue={newEvent.price}

              onChange={(e) => {
                onvalueChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Number of tickets
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="abdessalem"
              name="nbTickets"
              defaultValue={newEvent.nbTickets}

              onChange={(e) => {
                onvalueChange(e);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              name="img"
              onChange={(e) => {
                onFileChange(e);
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-3">
          <Button className="btn btn-primary me-3" type="submit">
            {" "}
            add{" "}
          </Button>
          <Button className="btn btn-danger" type="button">
            {" "}
            Cancel{" "}
          </Button>
        </div>
      </form>
    </>
  );
}

export default AddEvent;