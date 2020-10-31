import React, { useState } from "react";

import "./App.css";
import NavBar from "./component/NavBar";
import AddMovie from "./component/AddMovie";
import MovieList from "./component/MovieList";
import Data from "./constant/Data";

function App() {
  const [movies, setMovie] = useState(Data);
  const [text, setText] = useState("");
  const [rate, setRate] = useState(0);

  const handleSave = (newMovie) => {
    setMovie([...movies, newMovie]);
  };
  const searchText = (text) => {
    setText(text);
  };
  return (
    <div className="App">
      <div className="NavB">
        <NavBar
          setRate={setRate}
          handlAddMovie={handleSave}
          handleGetText={searchText}
        />
        <AddMovie handlAddMovie={handleSave} />
      </div>

      <MovieList rate={rate} movies={movies} text={text} />
    </div>
  );
}

export default App;
