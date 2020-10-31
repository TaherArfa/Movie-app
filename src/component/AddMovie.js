import React, { useState } from "react";
import { Modal, Button, Form, FormControl } from "react-bootstrap";


function AddMovie({ handlAddMovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//   const [newMovie, setNewMovie] = useState({});
//   console.log("newMovieee",newMovie);

  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
    
  });
  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        AddNew Movies
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <FormControl
              name="title"
              type="text"
              placeholder="Title"
              className="mr-sm-2 TextFiled"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <FormControl
              name="description"
              type="text"
              placeholder="Description"
              className="mr-sm-2 TextFiled"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <FormControl
              name="posterURL"
              type="text"
              placeholder="PosterURL ( path for the picture ) "
              className="mr-sm-2 TextFiled"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <FormControl
              name="rating"
              type="text"
              placeholder="Rating"
              className="mr-sm-2 TextFiled"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="outline-info"
            onClick={() => {
              handlAddMovie(newMovie);
              setNewMovie({id: Math.random(),
                posterURL: "",
                rating: 1,
                title: "",
                description: "",});
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
