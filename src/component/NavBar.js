import React, { useState } from "react";
import { Form, Navbar, Nav, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "@material-ui/lab/Rating";
import AddMovie from "./AddMovie";
import Data from "../constant/Data";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function NavBar({ handleGetText, setRate }) {
  const [movies, setMovie] = useState(Data);

  const handleSave = (newMovie) => {
    setMovie([...movies, newMovie]);
  };

  return (
    <div className="NavBarDiv">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MovieApp.com </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#film">Film</Nav.Link>
          <Nav.Link href="#eerie">Série</Nav.Link>
        </Nav>
        <Box
          className="ratingSearch"
          component="fieldset"
          mb={3}
          borderColor="transparent"
        >
          <Typography component="legend"> </Typography>
          <Rating
            name="simple-controlled"
            onChange={(event, ratingValSearch) => {
              setRate(ratingValSearch);
            }}
          />
        </Box>

        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => handleGetText(e.target.value)}
          />
          <AddMovie handlAddMovie={handleSave} />
        </Form>
      </Navbar>
    </div>
  );
}

export default NavBar;
