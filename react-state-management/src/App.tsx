import React from "react";
import { MovieProvider } from "./Context";
import MovieList from "./MovieList";
import Nav from "./Navbar";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
